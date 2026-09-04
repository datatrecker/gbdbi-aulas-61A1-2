GBDBI.content["atividade-06"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">AULA 6 · ATIVIDADE AVALIATIVA · 19.10.2026</div>
      <h1 class="hero-title">MongoDB Atlas<br><em>SQL → NoSQL</em></h1>
      <p class="hero-subtitle">
        Converter o schema relacional da UrbanCart para documentos MongoDB, inserir dados reais e executar queries de consulta, filtro e agregação no Atlas.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Duplas</span>
        <span class="tag tag-surface">10 pontos</span>
        <span class="tag tag-surface">Canvas · 25.10.2026</span>
      </div>
    </section>

    <!-- CONTEXTO -->
    <section class="section" id="contexto">
      <div class="section-eyebrow">00 · Cenário</div>
      <h2 class="section-title">Contexto da Atividade</h2>
      <p class="section-desc">A UrbanCart, e-commerce de moda urbana, decidiu migrar parte de seu catálogo de produtos para o MongoDB, mantendo pedidos e clientes no MySQL. Sua dupla foi contratada para modelar e implementar a collection de produtos no Atlas.</p>

      <div class="kp-grid">
        <div class="kp-card">
          <div class="kp-label">Por que MongoDB aqui?</div>
          <div class="kp-text">O catálogo de produtos tem atributos muito variáveis por categoria: um tênis tem número e tamanho, uma camiseta tem cor e grade. O schema fixo do SQL gera dezenas de colunas nulas.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">O que você vai praticar</div>
          <div class="kp-text">Modelagem de documentos JSON aninhados, uso do MongoDB Atlas (cluster gratuito M0), operadores de consulta e aggregation pipeline.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Ferramentas</div>
          <div class="kp-text">MongoDB Atlas (cloud gratuito) + MongoDB Compass (GUI local, opcional) ou Shell direto no Atlas.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Entrega</div>
          <div class="kp-text">Arquivo <code>.js</code> ou <code>.txt</code> com todos os comandos executados + print de cada resultado no Atlas. PDF consolidado no Canvas.</div>
        </div>
      </div>

      <div class="info-box">
        <strong>Antes de começar:</strong> crie sua conta em <a href="https://www.mongodb.com/cloud/atlas" target="_blank" style="color:var(--accent)">mongodb.com/cloud/atlas</a> e provisione um cluster M0 (gratuito). O Atlas oferece um shell embutido no browser — não é necessário instalar nada.
      </div>
    </section>

    <!-- SCHEMA SQL -->
    <section class="section" id="schema-sql">
      <div class="section-eyebrow">01 · Ponto de Partida</div>
      <h2 class="section-title">Schema SQL da UrbanCart</h2>
      <p class="section-desc">O schema relacional atual que será convertido para MongoDB. Use-o como referência para entender as entidades e relacionamentos.</p>

      <div class="sql-block">
<pre>-- Schema SQL UrbanCart (MySQL)
CREATE TABLE categorias (
  categoria_id  INT         PRIMARY KEY AUTO_INCREMENT,
  nome          VARCHAR(60) NOT NULL,
  descricao     TEXT
);

CREATE TABLE produtos (
  produto_id    INT           PRIMARY KEY AUTO_INCREMENT,
  nome          VARCHAR(120)  NOT NULL,
  categoria_id  INT           NOT NULL REFERENCES categorias(categoria_id),
  preco         DECIMAL(10,2) NOT NULL,
  estoque       INT           DEFAULT 0,
  ativo         BOOLEAN       DEFAULT TRUE,
  criado_em     DATETIME      DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE atributos_produto (
  atributo_id   INT         PRIMARY KEY AUTO_INCREMENT,
  produto_id    INT         NOT NULL REFERENCES produtos(produto_id),
  chave         VARCHAR(60) NOT NULL,  -- 'cor', 'tamanho', 'material'
  valor         VARCHAR(60) NOT NULL   -- 'azul', 'M', 'algodão'
);

CREATE TABLE imagens_produto (
  imagem_id     INT          PRIMARY KEY AUTO_INCREMENT,
  produto_id    INT          NOT NULL REFERENCES produtos(produto_id),
  url           VARCHAR(255) NOT NULL,
  principal     BOOLEAN      DEFAULT FALSE
);</pre>
      </div>

      <div class="info-box">
        <strong>Observe o problema:</strong> para armazenar um produto com 4 atributos são necessárias 4 linhas em <code>atributos_produto</code> e N linhas em <code>imagens_produto</code>. No MongoDB, tudo fica em um único documento — mais natural para dados de catálogo.
      </div>
    </section>

    <!-- TAREFA 1 -->
    <section class="section" id="tarefa-1">
      <div class="section-eyebrow">02 · Tarefa 1</div>
      <h2 class="section-title">Tarefa 1 — Modelagem do Documento</h2>
      <p class="section-desc">Projete o documento MongoDB que representará um produto da UrbanCart com seus atributos e imagens aninhados.</p>

      <div class="activity-card">
        <div class="activity-icon"><strong>1a</strong></div>
        <div class="activity-body">
          <div class="activity-title">Criar o Banco de Dados e a Collection</div>
          <div class="activity-desc">No MongoDB Atlas Shell, crie o banco <code>urbancart</code> e a collection <code>produtos</code>.</div>
        </div>
      </div>

      <div class="sql-block">
<pre>// No Atlas Shell:
use urbancart
db.createCollection("produtos")</pre>
      </div>

      <div class="activity-card" style="margin-top:var(--space-4);">
        <div class="activity-icon"><strong>1b</strong></div>
        <div class="activity-body">
          <div class="activity-title">Modelar o Documento JSON</div>
          <div class="activity-desc">Com base no schema SQL, projete o documento que agrupa produto + categoria + atributos + imagens. O documento abaixo é um <strong>modelo de referência</strong> — sua dupla deve criar o documento para um produto diferente, aplicando a mesma estrutura.</div>
        </div>
      </div>

      <div class="sql-block">
<pre>// Estrutura de referência — Produto UrbanCart
{
  "nome": "Tênis Air Urban",
  "categoria": {
    "id": 1,
    "nome": "Calçados",
    "slug": "calcados"
  },
  "preco": 349.90,
  "estoque": 42,
  "ativo": true,
  "atributos": {
    "cor":      "branco",
    "material": "couro sintético",
    "solado":   "borracha"
  },
  "tamanhos_disponiveis": [37, 38, 39, 40, 41, 42, 43],
  "imagens": [
    { "url": "https://cdn.urbancart.com/tenis-air-urban-1.jpg", "principal": true  },
    { "url": "https://cdn.urbancart.com/tenis-air-urban-2.jpg", "principal": false }
  ],
  "tags": ["sneaker", "casual", "lifestyle"],
  "criado_em": ISODate("2026-01-15T00:00:00Z"),
  "avaliacoes": {
    "media": 4.7,
    "total": 128
  }
}</pre>
      </div>
    </section>

    <!-- TAREFA 2 -->
    <section class="section" id="tarefa-2">
      <div class="section-eyebrow">03 · Tarefa 2</div>
      <h2 class="section-title">Tarefa 2 — Inserção de Documentos</h2>
      <p class="section-desc">Insira no mínimo 5 produtos reais (ou fictícios mas plausíveis) da UrbanCart, de categorias diferentes, usando <code>insertMany</code>.</p>

      <div class="sql-block">
<pre>// Inserir múltiplos documentos de uma vez
db.produtos.insertMany([
  {
    "nome": "Camiseta Streetwear Logo",
    "categoria": { "id": 2, "nome": "Roupas", "slug": "roupas" },
    "preco": 89.90,
    "estoque": 150,
    "ativo": true,
    "atributos": {
      "cor": "preta",
      "material": "100% algodão",
      "corte": "regular fit"
    },
    "tamanhos_disponiveis": ["PP", "P", "M", "G", "GG"],
    "imagens": [
      { "url": "https://cdn.urbancart.com/camisa-logo-1.jpg", "principal": true }
    ],
    "tags": ["streetwear", "basico", "algodao"],
    "criado_em": ISODate("2026-02-10T00:00:00Z"),
    "avaliacoes": { "media": 4.5, "total": 87 }
  }
  // ... adicione os 4 produtos restantes
])</pre>
      </div>

      <div class="info-box">
        <strong>Requisito:</strong> os 5 produtos devem ser de pelo menos 3 categorias diferentes (ex: calçados, roupas, acessórios). Isso demonstrará a flexibilidade do schema de documentos vs. o schema rígido do SQL.
      </div>
    </section>

    <!-- TAREFA 3 -->
    <section class="section" id="tarefa-3">
      <div class="section-eyebrow">04 · Tarefa 3</div>
      <h2 class="section-title">Tarefa 3 — Queries de Consulta e Agregação</h2>
      <p class="section-desc">Execute as queries a seguir no Atlas Shell e registre os resultados. Para cada query, inclua um print do output no PDF de entrega.</p>

      <div class="activity-card">
        <div class="activity-icon"><strong>3a</strong></div>
        <div class="activity-body">
          <div class="activity-title">Busca simples e projeção</div>
          <div class="activity-desc">Encontre todos os produtos da categoria "roupas" ativos, retornando apenas nome, preço e estoque.</div>
        </div>
      </div>

      <div class="sql-block">
<pre>// Query 3a — filtro + projeção
db.produtos.find(
  { "categoria.nome": "Roupas", "ativo": true },
  { "nome": 1, "preco": 1, "estoque": 1, "_id": 0 }
)</pre>
      </div>

      <div class="activity-card" style="margin-top:var(--space-4);">
        <div class="activity-icon"><strong>3b</strong></div>
        <div class="activity-body">
          <div class="activity-title">Filtro por faixa de preço e ordenação</div>
          <div class="activity-desc">Liste todos os produtos com preço entre R$50 e R$200, ordenados do mais barato para o mais caro.</div>
        </div>
      </div>

      <div class="sql-block">
<pre>// Query 3b — $gte, $lte e sort
db.produtos.find(
  { "preco": { $gte: 50, $lte: 200 } }
).sort({ "preco": 1 })</pre>
      </div>

      <div class="activity-card" style="margin-top:var(--space-4);">
        <div class="activity-icon"><strong>3c</strong></div>
        <div class="activity-body">
          <div class="activity-title">Aggregation — preço médio por categoria</div>
          <div class="activity-desc">Usando o aggregation pipeline, calcule o preço médio e o total de produtos por categoria.</div>
        </div>
      </div>

      <div class="sql-block">
<pre>// Query 3c — Aggregation Pipeline
db.produtos.aggregate([
  { $group: {
      _id:           "$categoria.nome",
      preco_medio:   { $avg: "$preco" },
      total_produtos: { $sum: 1 },
      estoque_total:  { $sum: "$estoque" }
  }},
  { $sort: { preco_medio: -1 } }
])</pre>
      </div>

      <div class="activity-card" style="margin-top:var(--space-4);">
        <div class="activity-icon"><strong>3d</strong></div>
        <div class="activity-body">
          <div class="activity-title">Query livre — crie a sua</div>
          <div class="activity-desc">Crie uma query de sua escolha usando pelo menos 2 operadores novos (sugestão: <code>$in</code>, <code>$exists</code>, <code>$elemMatch</code>, <code>$text</code>). Justifique o que a query responde.</div>
        </div>
      </div>
    </section>

    <!-- ENTREGA -->
    <section class="section" id="entrega">
      <div class="section-eyebrow">05 · Entrega</div>
      <h2 class="section-title">Como Entregar</h2>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">1</div>
          <div class="step-content">
            <div class="step-title">Arquivo de comandos</div>
            <div class="step-desc">Salve todos os comandos executados em um arquivo <code>.js</code> ou <code>.txt</code>, na ordem em que foram executados.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">2</div>
          <div class="step-content">
            <div class="step-title">Prints dos resultados</div>
            <div class="step-desc">Capture a tela do Atlas Shell mostrando o resultado de cada tarefa (inserção confirmada + output das 4 queries).</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">3</div>
          <div class="step-content">
            <div class="step-title">Reflexão (½ página)</div>
            <div class="step-desc">Escreva um parágrafo comparando a experiência de modelar em SQL vs. MongoDB para este caso específico. O que foi mais fácil? O que foi mais difícil? Quando escolheria cada um?</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">4</div>
          <div class="step-content">
            <div class="step-title">Enviar no Canvas</div>
            <div class="step-desc">Consolide tudo em um único PDF e envie no Canvas com o título: <code>AT6_NOSQL_NomeAluno1_NomeAluno2.pdf</code> · Prazo: <strong>25.10.2026 às 23h59</strong>.</div>
          </div>
        </div>
      </div>

      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-5);">
        <a class="btn btn-ghost btn-sm" href="https://www.mongodb.com/cloud/atlas" target="_blank">→ MongoDB Atlas</a>
        <a class="btn btn-ghost btn-sm" href="https://www.mongodb.com/docs/manual/reference/operator/query/" target="_blank">→ Docs: Query Operators</a>
        <a class="btn btn-ghost btn-sm" href="https://www.mongodb.com/docs/manual/aggregation/" target="_blank">→ Docs: Aggregation Pipeline</a>
      </div>
    </section>

    <nav class="lesson-nav">
      <a class="lesson-nav-btn" href="#/aula-06">
        <span>←</span>
        <div>
          <div class="lesson-nav-label">Voltar à</div>
          <div class="lesson-nav-title">Aula 6 — A Escala do Big Data</div>
        </div>
      </a>
      <a class="lesson-nav-btn" href="#/atividade-07">
        <div style="text-align:right;">
          <div class="lesson-nav-label">Próxima Atividade</div>
          <div class="lesson-nav-title">Atividade 7 — Governança</div>
        </div>
        <span>→</span>
      </a>
    </nav>`;
