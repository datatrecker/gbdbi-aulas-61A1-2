GBDBI.content["atividade-08"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">PROJETO FINAL · 40% DA NOTA · ENTREGA 08.11.2026</div>
      <h1 class="hero-title">Due Diligence<br><em>R$ 50 Milhões</em></h1>
      <p class="hero-subtitle">
        Sua consultoria foi contratada para realizar a auditoria de dados da SoundByte antes de uma aquisição de R$ 50M. Modelagem, arquitetura, governança e narrativa — tudo integrado em um único relatório executivo.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Grupos 3-4 pessoas</span>
        <span class="tag tag-surface">40% da nota final</span>
        <span class="tag tag-surface">Apresentação 09.11.2026</span>
      </div>
    </section>

    <!-- BRIEFING -->
    <section class="section" id="briefing">
      <div class="section-eyebrow">00 · O Mandato</div>
      <h2 class="section-title">Briefing do Cliente</h2>

      <div class="info-box" style="font-size:var(--fs-5); line-height:1.8;">
        <em>"Estamos avaliando adquirir a SoundByte por R$ 50 milhões. Antes de assinar, precisamos de uma due diligence completa do ativo de dados deles. Queremos saber: o modelo de dados aguenta crescimento? A arquitetura analítica é profissional ou amadora? Eles estão em conformidade com a LGPD? Os dados são confiáveis o suficiente para tomar decisões? E o mais importante: a empresa vale os R$ 50M que estamos pagando?"</em>
        <div style="margin-top:var(--space-3); color:var(--text-secondary);">— CFO, Fundo de Private Equity (fictício)</div>
      </div>

      <div class="kp-grid" style="margin-top:var(--space-5);">
        <div class="kp-card">
          <div class="kp-label">Base de Dados</div>
          <div class="kp-text">Arquivo <code>soundbyte_projeto_final.sql</code> (PostgreSQL, 9 tabelas): 200 usuários, 30 artistas, 47 músicas, 146 assinaturas e 5.338 reproduções cobrindo 18 meses de operação (jan/2023 a jun/2024). Inclui 3 views analíticas e 7 perguntas de negócio sugeridas.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Entregável</div>
          <div class="kp-text">Relatório executivo em PDF + script SQL das análises + dashboard interativo + apresentação de 15 minutos para a banca.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Prazo de Entrega</div>
          <div class="kp-text">PDF + SQL + link do dashboard no Canvas até <strong>08.11.2026 às 23h59</strong>. Apresentação: <strong>09.11.2026</strong> (última aula).</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Download</div>
          <div class="kp-text">Baixe o dataset abaixo e importe em um PostgreSQL antes de começar: <code>psql -d seu_banco -f soundbyte_projeto_final.sql</code></div>
        </div>
      </div>

      <div style="margin-top:var(--space-5);">
        <a class="btn btn-primary" href="recursos/soundbyte_projeto_final.sql" download>&darr; soundbyte_projeto_final.sql</a>
      </div>
    </section>

    <!-- COMPONENTE A -->
    <section class="section" id="componente-a">
      <div class="section-eyebrow">Componente A · 30% do Projeto</div>
      <h2 class="section-title">A — Auditoria de Modelagem</h2>
      <p class="section-desc">O banco está bem modelado? Responda com evidências extraídas do schema — não com opinião.</p>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">A1</div>
          <div class="step-content">
            <div class="step-title">Diagrama MER do Estado Atual</div>
            <div class="step-desc">Desenhe o MER das 9 tabelas do script (plano, genero, cidade, artista, album, musica, usuario, assinatura, reproducao) com todas as entidades, atributos e relacionamentos. Use dbdiagram.io, draw.io ou Lucidchart e inclua o print no relatório.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">A2</div>
          <div class="step-content">
            <div class="step-title">Avaliação de Normalização</div>
            <div class="step-desc">O schema está na 3FN? Identifique qualquer violação de 1FN, 2FN ou 3FN. Se encontrar, proponha a correção com o DDL correspondente.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">A3</div>
          <div class="step-content">
            <div class="step-title">Análise de Chaves e Integridade</div>
            <div class="step-desc">Liste todas as PKs e FKs. Identifique se há chaves candidatas sem constraint UNIQUE. Teste a integridade referencial — existem registros órfãos?</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">A4</div>
          <div class="step-content">
            <div class="step-title">Proposta de Melhoria</div>
            <div class="step-desc">Baseado nos itens anteriores, proponha ao menos uma melhoria estrutural justificada. Inclua o ALTER TABLE ou CREATE TABLE da melhoria proposta.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre><span class="cm">-- A3: registros órfãos — música apontando para álbum inexistente</span>
<span class="k">SELECT</span> <span class="n">m.id</span>, <span class="n">m.titulo</span>, <span class="n">m.album_id</span>
<span class="k">FROM</span>   <span class="n">musica</span> m
  <span class="k">LEFT JOIN</span> <span class="n">album</span> a <span class="k">ON</span> <span class="n">a.id</span> = <span class="n">m.album_id</span>
<span class="k">WHERE</span>  <span class="n">m.album_id</span> <span class="k">IS NOT NULL</span> <span class="k">AND</span> <span class="n">a.id</span> <span class="k">IS NULL</span>;

<span class="cm">-- E-mails duplicados (a coluna já tem UNIQUE — confirme que ele basta)</span>
<span class="k">SELECT</span> <span class="n">email</span>, <span class="f">COUNT</span>(*) <span class="k">AS</span> <span class="n">ocorrencias</span>
<span class="k">FROM</span>   <span class="n">usuario</span>
<span class="k">GROUP</span>  <span class="k">BY</span> <span class="n">email</span>
<span class="k">HAVING</span> <span class="f">COUNT</span>(*) &gt; <span class="n">1</span>;

<span class="cm">-- Chave candidata sem constraint: o par (artista, título) se repete?</span>
<span class="k">SELECT</span> <span class="n">artista_id</span>, <span class="n">titulo</span>, <span class="f">COUNT</span>(*)
<span class="k">FROM</span>   <span class="n">musica</span>
<span class="k">GROUP</span>  <span class="k">BY</span> <span class="n">artista_id</span>, <span class="n">titulo</span>
<span class="k">HAVING</span> <span class="f">COUNT</span>(*) &gt; <span class="n">1</span>;</pre>
      </div>
    </section>

    <!-- COMPONENTE B -->
    <section class="section" id="componente-b">
      <div class="section-eyebrow">Componente B · 25% do Projeto</div>
      <h2 class="section-title">B — Proposta de Arquitetura Analítica</h2>
      <p class="section-desc">A SoundByte não tem um DW. Sua consultoria vai propor um — com Star Schema, pipeline ETL e escolha de ferramentas fundamentada.</p>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">B1</div>
          <div class="step-content">
            <div class="step-title">Diagrama do Star Schema Proposto</div>
            <div class="step-desc">Desenhe o Star Schema com a tabela FATO_VENDA e as dimensões (mínimo 4). Nomeie todas as colunas, distinga métricas de chaves. Documente as decisões de granularidade.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">B2</div>
          <div class="step-content">
            <div class="step-title">DDL do Star Schema</div>
            <div class="step-desc">Escreva o CREATE TABLE de pelo menos 2 dimensões e da tabela fato. Inclua FKs e comentários explicando cada coluna relevante.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">B3</div>
          <div class="step-content">
            <div class="step-title">Pipeline ETL Descrito</div>
            <div class="step-desc">Descreva as 3 etapas (Extract, Transform, Load) com especificidade: de onde vêm os dados, quais transformações são necessárias e com que frequência roda (batch diário? streaming?).</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">B4</div>
          <div class="step-content">
            <div class="step-title">Escolha de Ferramentas Justificada</div>
            <div class="step-desc">Recomende ferramentas para: ingestão/ETL, DW/storage, BI/visualização. Justifique cada escolha considerando custo, escala esperada e maturidade técnica da equipe da SoundByte.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">B5</div>
          <div class="step-content">
            <div class="step-title">Justificativa SQL vs. NoSQL por Camada</div>
            <div class="step-desc">Indique quais partes do projeto são melhor atendidas por um banco relacional e quais por NoSQL — e por quê. Ancore cada decisão nas entidades do modelo: por exemplo, perfis de escuta com campos variáveis em banco de documentos, transações financeiras em relacional. Justificativas genéricas (&ldquo;NoSQL é mais rápido&rdquo;) não contam.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre><span class="cm">-- B2: DIM_USUARIO com SCD Tipo 2 (PostgreSQL)</span>
<span class="k">CREATE TABLE</span> <span class="n">DIM_USUARIO</span> (
  <span class="n">sk_usuario</span>     <span class="f">SERIAL</span>       <span class="k">PRIMARY KEY</span>,      <span class="cm">-- Surrogate Key</span>
  <span class="n">usuario_id</span>     <span class="f">INT</span>          <span class="k">NOT NULL</span>,         <span class="cm">-- Natural Key do OLTP</span>
  <span class="n">nome</span>           <span class="f">VARCHAR</span>(150) <span class="k">NOT NULL</span>,
  <span class="n">plano</span>          <span class="f">VARCHAR</span>(50),                <span class="cm">-- desnormalizado de plano.nome</span>
  <span class="n">cidade</span>         <span class="f">VARCHAR</span>(100),               <span class="cm">-- desnormalizado de cidade.nome</span>
  <span class="n">estado</span>         <span class="f">CHAR</span>(2),
  <span class="n">regiao</span>         <span class="f">VARCHAR</span>(20),
  <span class="n">faixa_etaria</span>   <span class="f">VARCHAR</span>(20),                <span class="cm">-- '13-17', '18-24', '25-34'…</span>
  <span class="n">data_inicio</span>    <span class="f">DATE</span>         <span class="k">NOT NULL</span>,         <span class="cm">-- vigência da versão</span>
  <span class="n">data_fim</span>       <span class="f">DATE</span>,                       <span class="cm">-- NULL = versão corrente</span>
  <span class="n">is_atual</span>       <span class="f">BOOLEAN</span>      <span class="k">DEFAULT</span> <span class="k">TRUE</span>
);

<span class="cm">-- Mudança de cidade vira uma linha nova, preservando o histórico de escutas.</span></pre>
      </div>
    </section>

    <!-- COMPONENTE C -->
    <section class="section" id="componente-c">
      <div class="section-eyebrow">Componente C · 25% do Projeto</div>
      <h2 class="section-title">C — Diagnóstico de Governança</h2>
      <p class="section-desc">O fundo de investimento precisa saber: os dados da SoundByte são confiáveis? A empresa está em risco legal? Responda com dados, não com suposições.</p>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">C1</div>
          <div class="step-content">
            <div class="step-title">Score de Qualidade de Dados</div>
            <div class="step-desc">Execute queries para medir as 6 dimensões de qualidade. Consolide em uma tabela-resumo com a pontuação de cada dimensão (0-10) e calcule um score geral de saúde dos dados.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">C2</div>
          <div class="step-content">
            <div class="step-title">Mapa de Dados Pessoais e LGPD</div>
            <div class="step-desc">Identifique todos os dados pessoais no schema. Para cada um: qual a base legal? Por quanto tempo pode ser retido? Existe log de consentimento? Há risco de multa ANPD?</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">C3</div>
          <div class="step-content">
            <div class="step-title">Plano de Remediação</div>
            <div class="step-desc">Liste os 3 problemas de governança mais críticos encontrados e proponha uma ação corretiva para cada um, com prazo e responsável sugerido.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">C4</div>
          <div class="step-content">
            <div class="step-title">Política de Acesso a Dados (RBAC)</div>
            <div class="step-desc">Redija a política de acesso do cenário: para cada papel (marketing, analista de dados, engenharia, terceiros) defina quem pode <strong>ler</strong>, <strong>editar</strong> ou <strong>excluir</strong> cada tabela sensível identificada em C2. Nomeie tabela e coluna — a política precisa ser específica do schema da SoundByte, não genérica.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre><span class="cm">-- C1: meça cada dimensão e preencha o quadro com o resultado real</span>

<span class="cm">-- Completude: campos essenciais do cadastro</span>
<span class="k">SELECT</span> <span class="f">COUNT</span>(*) <span class="k">AS</span> <span class="n">total</span>,
       <span class="f">COUNT</span>(*) <span class="k">FILTER</span> (<span class="k">WHERE</span> <span class="n">email</span> <span class="k">IS NULL</span>) <span class="k">AS</span> <span class="n">sem_email</span>,
       <span class="f">COUNT</span>(*) <span class="k">FILTER</span> (<span class="k">WHERE</span> <span class="n">cidade_id</span> <span class="k">IS NULL</span>) <span class="k">AS</span> <span class="n">sem_cidade</span>,
       <span class="f">COUNT</span>(*) <span class="k">FILTER</span> (<span class="k">WHERE</span> <span class="n">idade</span> <span class="k">IS NULL</span>) <span class="k">AS</span> <span class="n">sem_idade</span>
<span class="k">FROM</span>   <span class="n">usuario</span>;

<span class="cm">-- Validade: reprodução mais longa que a própria música</span>
<span class="k">SELECT</span> <span class="f">COUNT</span>(*) <span class="k">AS</span> <span class="n">duracoes_invalidas</span>
<span class="k">FROM</span>   <span class="n">reproducao</span> r <span class="k">JOIN</span> <span class="n">musica</span> m <span class="k">ON</span> <span class="n">m.id</span> = <span class="n">r.musica_id</span>
<span class="k">WHERE</span>  <span class="n">r.duracao_seg</span> &gt; <span class="n">m.duracao_seg</span>;

<span class="cm">-- Consistência: valor pago diverge do preço do plano contratado</span>
<span class="k">SELECT</span> <span class="f">COUNT</span>(*) <span class="k">AS</span> <span class="n">valores_divergentes</span>
<span class="k">FROM</span>   <span class="n">assinatura</span> a <span class="k">JOIN</span> <span class="n">plano</span> p <span class="k">ON</span> <span class="n">p.id</span> = <span class="n">a.plano_id</span>
<span class="k">WHERE</span>  <span class="n">a.valor_pago</span> &lt;&gt; <span class="n">p.preco_mensal</span>;

<span class="cm">-- Atualidade: qual a última escuta registrada?</span>
<span class="k">SELECT</span> <span class="f">MAX</span>(<span class="n">data_hora</span>) <span class="k">AS</span> <span class="n">ultima_reproducao</span> <span class="k">FROM</span> <span class="n">reproducao</span>;

<span class="cm">/*  DIMENSÃO       SCORE (0-10)  EVIDÊNCIA</span>
<span class="cm">    ─────────────────────────────────────────────────────</span>
<span class="cm">    Completude     ?/10          _ usuários sem e-mail / cidade</span>
<span class="cm">    Unicidade      ?/10          _ duplicatas em usuario.email</span>
<span class="cm">    Validade       ?/10          _ durações fora do intervalo</span>
<span class="cm">    Consistência   ?/10          _ assinaturas com valor divergente</span>
<span class="cm">    Precisão       ?/10          sem fonte externa para confrontar</span>
<span class="cm">    Atualidade     ?/10          última carga: ____</span>
<span class="cm">    ─────────────────────────────────────────────────────</span>
<span class="cm">    SCORE GERAL    ?/10                                        */</span>

<span class="cm">-- Atenção: um score alto também é um achado. Se a base estiver limpa,</span>
<span class="cm">-- diga isso ao investidor — e aponte o que NÃO dá para verificar aqui.</span></pre>
      </div>
    </section>

    <!-- COMPONENTE D -->
    <section class="section" id="componente-d">
      <div class="section-eyebrow">Componente D · 20% do Projeto</div>
      <h2 class="section-title">D — Narrativa Executiva com Dados</h2>
      <p class="section-desc">Os números sem narrativa não convencem. Este componente exige que os insights extraídos do SQL se transformem em argumentos que um CFO entende e age.</p>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">D1</div>
          <div class="step-content">
            <div class="step-title">3 Insights de Negócio com SQL</div>
            <div class="step-desc">Extraia do banco ao menos 3 insights relevantes para o valuation. Ex: tendência de receita, concentração de artistas, churn implícito, sazonalidade. Para cada: query + resultado + interpretação.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">D2</div>
          <div class="step-content">
            <div class="step-title">Dashboard de Due Diligence</div>
            <div class="step-desc">Construa um dashboard no Looker Studio, Tableau Public ou Power BI com os KPIs mais relevantes para o investidor. Mínimo: receita por período, distribuição de planos, top artistas por receita, tendência de crescimento.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">D3</div>
          <div class="step-content">
            <div class="step-title">Veredicto Final — Vale R$ 50M?</div>
            <div class="step-desc">A última slide da apresentação deve ser o veredicto: RECOMENDAR, RECOMENDAR COM CONDIÇÕES ou NÃO RECOMENDAR a aquisição. Justifique com os dados dos componentes A, B e C. O fundo vai decidir com base no que você apresentar.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre><span class="cm">-- D1: receita mensal de assinaturas e crescimento mês a mês (PostgreSQL)</span>
<span class="k">WITH</span> <span class="n">mensal</span> <span class="k">AS</span> (
  <span class="k">SELECT</span> <span class="f">DATE_TRUNC</span>(<span class="s">'month'</span>, <span class="n">data_inicio</span>) <span class="k">AS</span> <span class="n">mes</span>,
         <span class="f">SUM</span>(<span class="n">valor_pago</span>) <span class="k">AS</span> <span class="n">receita</span>,
         <span class="f">COUNT</span>(*) <span class="k">AS</span> <span class="n">novas_assinaturas</span>
  <span class="k">FROM</span>   <span class="n">assinatura</span>
  <span class="k">WHERE</span>  <span class="n">status</span> <span class="k">IN</span> (<span class="s">'ativa'</span>, <span class="s">'cancelada'</span>)
  <span class="k">GROUP</span>  <span class="k">BY</span> <span class="n">1</span>
)
<span class="k">SELECT</span> <span class="f">TO_CHAR</span>(<span class="n">mes</span>, <span class="s">'YYYY-MM'</span>) <span class="k">AS</span> <span class="n">periodo</span>,
       <span class="f">ROUND</span>(<span class="n">receita</span>, <span class="n">2</span>) <span class="k">AS</span> <span class="n">receita</span>,
       <span class="n">novas_assinaturas</span>,
       <span class="f">ROUND</span>(<span class="n">100.0</span> * (<span class="n">receita</span> - <span class="f">LAG</span>(<span class="n">receita</span>) <span class="k">OVER</span> (<span class="k">ORDER</span> <span class="k">BY</span> <span class="n">mes</span>))
             / <span class="f">NULLIF</span>(<span class="f">LAG</span>(<span class="n">receita</span>) <span class="k">OVER</span> (<span class="k">ORDER</span> <span class="k">BY</span> <span class="n">mes</span>), <span class="n">0</span>), <span class="n">2</span>) <span class="k">AS</span> <span class="n">crescimento_pct</span>
<span class="k">FROM</span>   <span class="n">mensal</span>
<span class="k">ORDER</span>  <span class="k">BY</span> <span class="n">mes</span>;

<span class="cm">-- O script já traz vw_mrr_mensal, vw_top_artistas e vw_usuarios_plano_cidade,</span>
<span class="cm">-- além das perguntas Q1–Q7 comentadas no fim do arquivo. Use-as como ponto de partida.</span></pre>
      </div>
    </section>

    <!-- ENTREGA -->
    <section class="section" id="entrega">
      <div class="section-eyebrow">05 · Avaliação</div>
      <h2 class="section-title">Entrega e Critérios</h2>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">1</div>
          <div class="step-content">
            <div class="step-title">Relatório PDF — Canvas até 08.11.2026 às 23h59</div>
            <div class="step-desc">PDF com máximo de 20 páginas cobrindo os 4 componentes + capa e índice. Nome do arquivo: <code>PROJETO_FINAL_NomesGrupo.pdf</code>. Também anexe o arquivo <code>.sql</code> com todas as queries.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">2</div>
          <div class="step-content">
            <div class="step-title">Dashboard — Link no Canvas junto com o PDF</div>
            <div class="step-desc">Garanta que o link do Looker Studio / Tableau Public esteja com acesso público antes de enviar. Dashboards privados não serão avaliados.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">3</div>
          <div class="step-content">
            <div class="step-title">Apresentação — 09.11.2026 · Última Aula</div>
            <div class="step-desc">15 minutos de apresentação + 5 minutos de perguntas da banca. Todos os membros devem estar prontos para responder. Ordem sorteada no início da aula.</div>
          </div>
        </div>
      </div>

      <div class="avaliacao-grid" style="margin-top:var(--space-5);">
        <div class="peso-card">
          <div class="peso-value">A</div>
          <div class="peso-label">Modelagem</div>
          <div class="peso-desc">MER correto, normalização analisada, melhoria proposta com DDL</div>
        </div>
        <div class="peso-card">
          <div class="peso-value">B</div>
          <div class="peso-label">Arquitetura</div>
          <div class="peso-desc">Star Schema desenhado, DDL entregue, ETL, ferramentas e escolha SQL/NoSQL justificados</div>
        </div>
        <div class="peso-card">
          <div class="peso-value">C</div>
          <div class="peso-label">Governança</div>
          <div class="peso-desc">6 dimensões medidas, LGPD mapeada, remediação e política de acesso RBAC propostas</div>
        </div>
        <div class="peso-card">
          <div class="peso-value">D</div>
          <div class="peso-label">Narrativa</div>
          <div class="peso-desc">3 insights com SQL, dashboard publicado, veredicto defendido com dados</div>
        </div>
      </div>

      <div class="info-box" style="margin-top:var(--space-5);">
        <strong>Lembrete final:</strong> o projeto vale 40% da nota. Um relatório bem escrito mas com queries que não funcionam tira pontos. Um relatório com queries corretas mas sem narrativa também tira pontos. O equilíbrio entre rigor técnico e clareza executiva é o que a banca vai avaliar.
      </div>
    </section>

    <nav class="lesson-nav">
      <a class="lesson-nav-btn" href="#/aula-08">
        <span>←</span>
        <div>
          <div class="lesson-nav-label">Voltar à</div>
          <div class="lesson-nav-title">Aula 8 — O Projeto Final Integrador</div>
        </div>
      </a>
      <a class="lesson-nav-btn" href="#/">
        <div style="text-align:right;">
          <div class="lesson-nav-label">Voltar ao</div>
          <div class="lesson-nav-title">Início da Disciplina</div>
        </div>
        <span>⌂</span>
      </a>
    </nav>`;
