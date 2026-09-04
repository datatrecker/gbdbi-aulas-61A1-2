GBDBI.content["atividade-05"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">AULA 5 · ATIVIDADE AVALIATIVA · 05.10.2026</div>
      <h1 class="hero-title">Dashboard Analítico<br>no <em>Tableau Public</em></h1>
      <p class="hero-subtitle">
        Construir um dashboard executivo interativo a partir do Data Warehouse da SoundByte —
        seis visualizações obrigatórias, dois KPIs e quatro filtros, em uma única tela coesa.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Artefato semanal</span>
        <span class="tag tag-surface">Tableau Public</span>
        <span class="tag tag-surface">Canvas · 18.10.2026</span>
      </div>
    </section>

    <!-- CONTEXTO -->
    <section class="section" id="contexto">
      <div class="section-eyebrow">00 · Cenário</div>
      <h2 class="section-title">Contexto e Motivação</h2>
      <p class="section-desc">A SoundByte é uma empresa de tecnologia de áudio que comercializa produtos e serviços em sete países. Seu portfólio abrange cinco categorias — Hardware, Streaming, Acessórios, Serviços e Conteúdo Digital — e os dados de vendas de 2023 e 2024 estão armazenados em um Data Warehouse modelado como <strong>esquema estrela</strong>.</p>

      <div class="kp-grid">
        <div class="kp-card">
          <div class="kp-label">Seu papel</div>
          <div class="kp-text">Analista de dados da SoundByte. Você constrói o painel que a diretoria vai usar para decidir — não um relatório técnico.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">O que você vai praticar</div>
          <div class="kp-text">Relacionamentos entre fato e dimensões no Tableau, campos calculados, escolha de visualização por tipo de dado e composição de um dashboard executivo.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Ferramenta</div>
          <div class="kp-text">Tableau Public (gratuito, no navegador). O Tableau Desktop também serve, desde que o workbook seja publicado no Public ao final.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Entrega</div>
          <div class="kp-text">Link público do dashboard no Canvas + breve descrição das escolhas de visualização.</div>
        </div>
      </div>

      <div class="info-box">
        <strong>Dados simulados.</strong> A SoundByte é uma empresa fictícia e os dados servem exclusivamente para fins didáticos.
      </div>
    </section>

    <!-- MATERIAIS -->
    <section class="section" id="materiais">
      <div class="section-eyebrow">01 · Ponto de Partida</div>
      <h2 class="section-title">Materiais Fornecidos</h2>
      <p class="section-desc">O Data Warehouse já está modelado. Seu trabalho começa na conexão dos dados, não na modelagem.</p>

      <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin:var(--space-5) 0;">
        <a class="btn btn-primary" href="recursos/SoundByte_DW.xlsx" download>&darr; SoundByte_DW.xlsx</a>
        <a class="btn btn-outline" href="recursos/SoundByte_Store_ERD.png" target="_blank" rel="noopener">Ver o ERD em tamanho real &#8599;</a>
      </div>

      <div class="kp-grid">
        <div class="kp-card">
          <div class="kp-label">fact_sales</div>
          <div class="kp-text">809 transações de 2023 e 2024. Métricas: <code>sales_amount</code>, <code>total_cost</code>, <code>gross_margin</code>, <code>quantity_sold</code>, <code>discount_pct</code> e <code>channel</code>.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">dim_time</div>
          <div class="kp-text">731 dias (01/01/2023 a 31/12/2024) com <code>date</code>, <code>week_day</code>, <code>month</code>, <code>quarter</code>, <code>year</code>, <code>semester</code> e <code>week_number</code>.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">dim_product</div>
          <div class="kp-text">18 produtos em 5 categorias, com <code>unit_price</code>, <code>unit_cost</code>, <code>unit_margin</code> e <code>margin_pct</code> já calculados.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">dim_customer</div>
          <div class="kp-text">200 clientes em 7 países, com <code>segment</code> (Basic, Standard, Premium), <code>customer_since_year</code> e <code>acquisition_channel</code>.</div>
        </div>
      </div>

      <div class="ov-section-tag" style="margin-top:var(--space-6);margin-bottom:var(--space-3);">Diagrama do esquema estrela</div>
      <p class="section-desc" style="margin-bottom:var(--space-4);">Use este diagrama como referência ao criar os relacionamentos no Tableau.</p>
      <div class="diagram">
        <img src="recursos/SoundByte_Store_ERD.png" alt="Diagrama do esquema estrela da SoundByte: a tabela fato fact_sales ao centro, ligada a dim_time por time_id, a dim_product por product_id e a dim_customer por customer_id." loading="lazy" style="width:100%;height:auto;">
      </div>

      <div class="callout">
        <div class="callout-tag">Leia o modelo antes de arrastar campos</div>
        Uma estrela: <strong>fact_sales</strong> no centro guarda os números; as três dimensões guardam os atributos pelos quais você corta esses números.
        Toda pergunta do enunciado é uma métrica da fato agrupada por um atributo de dimensão — identificar esse par antes de abrir o Tableau economiza metade do trabalho.
      </div>
    </section>

    <!-- PERGUNTAS -->
    <section class="section" id="perguntas">
      <div class="section-eyebrow">02 · O Problema</div>
      <h2 class="section-title">Perguntas Estratégicas a Responder</h2>
      <p class="section-desc">Cada visualização deve, ao menos implicitamente, responder a uma ou mais das perguntas abaixo.</p>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Evolução mensal da receita</div>
        <div class="step-desc">Como evoluiu a receita mês a mês ao longo de 2023 e 2024? Há sazonalidade identificável?</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Comparativo trimestral</div>
        <div class="step-desc">Qual é o comparativo de receita por trimestre entre os dois anos?</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">3</div>
        <div class="step-content"><div class="step-title">Receita e margem por categoria</div>
        <div class="step-desc">Quais categorias de produto geram mais receita? E qual entrega maior margem bruta percentual?</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">4</div>
        <div class="step-content"><div class="step-title">Top 10 produtos</div>
        <div class="step-desc">Quais são os 10 produtos mais vendidos em receita? A margem deles é alta ou baixa?</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">5</div>
        <div class="step-content"><div class="step-title">Distribuição geográfica</div>
        <div class="step-desc">Qual é a distribuição geográfica das vendas? Há países com participação crescente ou decrescente?</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">6</div>
        <div class="step-content"><div class="step-title">Segmentos de cliente</div>
        <div class="step-desc">Como os segmentos Basic, Standard e Premium se comparam em receita e ticket médio?</div></div>
      </div>
    </section>

    <!-- VISUALIZAÇÕES -->
    <section class="section" id="visualizacoes">
      <div class="section-eyebrow">03 · Requisitos</div>
      <h2 class="section-title">As Seis Visualizações Obrigatórias</h2>
      <p class="section-desc">O dashboard deve conter no mínimo 5 visualizações em uma única tela coesa, com ao menos um filtro interativo. As seis abaixo são obrigatórias.</p>

      <div class="data-table-wrap">
        <table class="tbl">
          <thead>
            <tr><th>#</th><th>Visualização</th><th>Campos sugeridos</th><th>Pergunta respondida</th></tr>
          </thead>
          <tbody>
            <tr><td>V1</td><td>Linhas — receita mensal</td><td>date (month), year, SUM(sales_amount)</td><td>Tendência e sazonalidade</td></tr>
            <tr><td>V2</td><td>Barras agrupadas — receita por quarter</td><td>quarter, year, SUM(sales_amount)</td><td>Comparativo 2023 vs 2024</td></tr>
            <tr><td>V3</td><td>Barras horizontais — top 10 produtos</td><td>product_name, SUM(sales_amount), margem %</td><td>Pareto com visão de margem</td></tr>
            <tr><td>V4</td><td>Barras duplas — receita e margem por categoria</td><td>category, SUM(sales_amount), gross_margin %</td><td>Mix de portfólio e rentabilidade</td></tr>
            <tr><td>V5</td><td>Mapa ou barras — receita por país</td><td>country, SUM(sales_amount)</td><td>Distribuição geográfica</td></tr>
            <tr><td>V6</td><td>Barras + linha — receita e ticket médio por segmento</td><td>customer_segment, SUM(sales_amount), Ticket Médio</td><td>Valor gerado por segmento</td></tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-green">
        <div class="callout-tag">Dica de ouro</div>
        Um dashboard com 5 visualizações bem executadas e coesas pontua mais do que um com 10 gráficos desconexos ou mal formatados.
        Visualizações extras contam para completude e profundidade analítica — desde que somem à narrativa.
      </div>

      <div class="ov-section-tag" style="margin-top:var(--space-6);margin-bottom:var(--space-3);">Filtros interativos</div>
      <p class="section-desc" style="margin-bottom:var(--space-4);">Ao menos um filtro funcional é obrigatório. Os quatro abaixo são os recomendados — filtros adicionais são pontuados como diferencial.</p>
      <div class="kp-grid">
        <div class="kp-card"><div class="kp-label">Filtro 1 · Ano</div><div class="kp-text">2023 / 2024 / Ambos. Exiba como lista de valores únicos.</div></div>
        <div class="kp-card"><div class="kp-label">Filtro 2 · Categoria</div><div class="kp-text">Categoria de produto, como lista suspensa para economizar espaço.</div></div>
        <div class="kp-card"><div class="kp-label">Filtro 3 · País</div><div class="kp-text">Lista de valores múltiplos, para comparar países específicos.</div></div>
        <div class="kp-card"><div class="kp-label">Filtro 4 · Segmento</div><div class="kp-text">Botões de seleção única, posicionado perto da V6.</div></div>
      </div>
    </section>

    <!-- PASSO A PASSO -->
    <section class="section" id="passo-a-passo">
      <div class="section-eyebrow">04 · Execução</div>
      <h2 class="section-title">Passo a Passo no Tableau Public</h2>
      <p class="section-desc">Se você já tem experiência com o Tableau, use como referência rápida. Cada bloco abre com o detalhamento.</p>

      <div class="accordion">
        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 1 — Criar conta e abrir o editor</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text">Acesse <a class="ext-link" href="https://www.tableau.com/pt-br/products/public" target="_blank" rel="noopener">tableau.com/pt-br/products/public</a> e clique em <strong>Criar seu perfil gratuito</strong>. Depois do cadastro, clique em <strong>Criar uma viz</strong> para abrir o editor online.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>Atenção:</strong> o Tableau Public salva automaticamente na nuvem. Confirme que o dashboard está <strong>público</strong> antes de gerar o link de entrega.</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 2 — Conectar ao arquivo Excel</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text">Na tela inicial do editor: <strong>Conectar aos dados &rsaquo; Arquivo &rsaquo; Microsoft Excel</strong>. Faça o upload de <code>SoundByte_DW.xlsx</code> e arraste a aba <code>fact_sales</code> para a área central de modelagem.</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 3 — Criar os relacionamentos (etapa crítica)</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text">O Tableau usa <strong>relacionamento</strong>, não JOIN físico. Com <code>fact_sales</code> na área de modelagem, arraste <code>dim_time</code> ao lado: o Tableau detecta <code>time_id</code> e sugere o relacionamento — confirme. Repita para <code>dim_product</code> (via <code>product_id</code>) e <code>dim_customer</code> (via <code>customer_id</code>). Ao final você terá a estrela visual.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);">Se não detectar automaticamente, clique no ícone de relacionamento entre as tabelas e selecione os campos manualmente (ex.: <code>fact_sales.time_id = dim_time.time_id</code>).</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 4 — Criar os campos calculados</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text">Botão direito em qualquer campo &rsaquo; <strong>Criar campo calculado</strong>. Estes dois são usados em várias visualizações:</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 5 — Construir V1 a V6</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text"><strong>V1 · Receita mensal:</strong> <code>date</code> em Colunas (botão direito &rsaquo; Mês, discreto), <code>year</code> em Cor, <code>SUM(Sales Amount)</code> em Linhas. Adicione filtro de <code>year</code>.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>V2 · Receita por quarter:</strong> <code>quarter</code> em Colunas, <code>year</code> em Cor, <code>SUM(Sales Amount)</code> em Linhas. Mude para Barra em Mostrar-me.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>V3 · Top 10 produtos:</strong> <code>product_name</code> em Linhas, <code>SUM(Sales Amount)</code> em Colunas, ordenado decrescente. Filtro &rsaquo; Principais &rsaquo; Top 10 por <code>SUM(Sales Amount)</code>. Arraste <code>Gross Margin %</code> para Cor.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>V4 · Categoria:</strong> <code>category</code> em Linhas; <code>SUM(Sales Amount)</code> e <code>Gross Margin %</code> em Colunas (dois eixos). Botão direito no segundo eixo &rsaquo; Eixo duplo.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>V5 · País:</strong> <em>Opção A (mapa)</em> — arraste <code>country</code> para a área de visualização e <code>SUM(Sales Amount)</code> para Cor. <em>Opção B (barras)</em> — <code>country</code> em Linhas, <code>SUM(Sales Amount)</code> em Colunas, ordem decrescente. A opção B é mais confiável com nomes de países em português.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>V6 · Segmento:</strong> <code>customer_segment</code> em Linhas; <code>SUM(Sales Amount)</code> e depois <code>Ticket Médio</code> em Colunas. Botão direito no segundo eixo &rsaquo; Eixo duplo. No cartão de Marcas do segundo eixo mude o tipo para <strong>Linha</strong> — vira um combo de barras + linha. Arraste <code>year</code> para Cor no eixo da receita.</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 6 — Os dois KPIs do topo</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text"><strong>KPI_Receita:</strong> nova planilha, <code>SUM(Sales Amount)</code> em Texto, formatado como moeda. Crie o campo <code>Variação YoY Receita</code> e arraste <code>year</code> para Colunas. Fonte do valor principal em 28 pt ou mais.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>KPI_Margem:</strong> nova planilha, <code>Gross Margin %</code> em Texto (porcentagem com uma casa), <code>year</code> em Colunas. Use coloração condicional: verde quando 2024 &gt; 2023, vermelho quando inferior.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);">Posicione os dois lado a lado na faixa superior do painel — KPIs em destaque dão contexto imediato à diretoria.</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 7 — Aplicar os filtros a todas as planilhas</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text">Para cada filtro: botão direito no filtro &rsaquo; <strong>Aplicar a planilhas &rsaquo; Todas as planilhas que usam esta fonte de dados</strong>. No dashboard, clique na visualização &rsaquo; ícone de funil &rsaquo; <strong>Adicionar ao dashboard como filtro</strong>.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);">Sem o "aplicar a todas as planilhas", o filtro mexe em um gráfico só e o painel passa a mostrar recortes diferentes lado a lado — o erro mais comum desta atividade.</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 8 — Montar o dashboard</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text">Ícone <strong>Novo Dashboard</strong>. Tamanho Automático ou Fixo (1200 × 800 px recomendado). Arraste as planilhas para a área. Para filtro global por clique: selecione uma visualização &rsaquo; <strong>Usar como filtro</strong> (ícone de funil). Adicione título, anotações e uma paleta coesa.</div>
          </div></div>
        </div>

        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Passo 9 — Publicar e gerar o link</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col">
            <div class="acc-col-text"><strong>Publicar</strong> (ícone de nuvem, canto superior direito) ou <strong>Arquivo &rsaquo; Publicar</strong>. Visibilidade: <strong>Público</strong>. Copie o link no formato <code>public.tableau.com/app/profile/SEU_PERFIL/viz/NOME</code>.</div>
            <div class="acc-col-text" style="margin-top:var(--space-3);"><strong>Se o dashboard estiver privado, o professor não consegue abrir o link.</strong> Verifique a visibilidade antes de enviar.</div>
          </div></div>
        </div>
      </div>

      <div class="sql-block">
        <div class="sql-header">
          <span class="sql-label">Campos calculados — Passo 4</span>
          <button class="copy-btn" data-copy="at5-calc">Copiar</button>
        </div>
<pre id="at5-calc"><span class="cm">// Gross Margin % — formate como porcentagem (0,0%)</span>
<span class="f">SUM</span>([<span class="n">Gross Margin</span>]) / <span class="f">SUM</span>([<span class="n">Sales Amount</span>])

<span class="cm">// Ticket Médio</span>
<span class="f">SUM</span>([<span class="n">Sales Amount</span>]) / <span class="f">COUNT</span>([<span class="n">Sales Id</span>])

<span class="cm">// Variação YoY Receita — usado no KPI_Receita</span>
(<span class="f">SUM</span>([<span class="n">Sales Amount</span>]) - <span class="f">LOOKUP</span>(<span class="f">SUM</span>([<span class="n">Sales Amount</span>]), -<span class="n">1</span>))
  / <span class="f">ABS</span>(<span class="f">LOOKUP</span>(<span class="f">SUM</span>([<span class="n">Sales Amount</span>]), -<span class="n">1</span>))</pre>
      </div>
    </section>

    <!-- ENTREGA -->
    <section class="section" id="entrega">
      <div class="section-eyebrow">05 · Entrega</div>
      <h2 class="section-title">O Que Enviar</h2>
      <p class="section-desc">Pelo Canvas, até <strong>18.10.2026 às 23h59</strong>.</p>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Link público do Tableau Public</div>
        <div class="step-desc">Obrigatório. Confirme que a visibilidade está como <strong>Público</strong> antes de enviar.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Captura de tela do dashboard completo</div>
        <div class="step-desc">PNG ou PDF. Opcional, mas recomendado como backup.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">3</div>
        <div class="step-content"><div class="step-title">Descrição das escolhas de visualização</div>
        <div class="step-desc">No campo de texto da submissão: nome completo, turma e no máximo 5 linhas justificando as decisões visuais.</div></div>
      </div>

      <div class="info-box">
        <strong>Entregue antes do prazo.</strong> Dashboards editados depois não são considerados na avaliação — o Tableau registra o histórico de edições.
      </div>

      <div class="info-box">
        <strong>Critérios de avaliação:</strong> conforme a rubrica publicada no Canvas. Esta atividade compõe os artefatos semanais (Aulas 1 a 7), que valem 40% da nota.
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" id="duvidas">
      <div class="section-eyebrow">06 · Dúvidas frequentes</div>
      <h2 class="section-title">Se Travar Aqui</h2>

      <div class="accordion">
        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Posso usar o Tableau Desktop?</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col"><div class="acc-col-text">Sim, mas o link de entrega deve ser do Tableau Public. Publique o workbook antes de enviar.</div></div></div>
        </div>
        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">O mapa não reconheceu os países.</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col"><div class="acc-col-text">Use a Opção B (barras horizontais) para a V5. Se quiser o mapa, edite a coluna <code>country</code> no Excel para inglês (Brazil, Chile…) antes de importar.</div></div></div>
        </div>
        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">O Tableau está agregando os dados de forma estranha.</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col"><div class="acc-col-text">Verifique se os campos numéricos estão como <strong>Medida</strong> (verde) e os de texto como <strong>Dimensão</strong> (azul) no painel de dados.</div></div></div>
        </div>
        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">Posso usar as colunas calculadas do Excel?</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col"><div class="acc-col-text">Sim — <code>unit_margin</code> e <code>margin_pct</code> já estão no arquivo. Criar campos calculados no Tableau é opcional, mas recomendado por serem dinâmicos: eles respeitam os filtros, a coluna estática do Excel não.</div></div></div>
        </div>
        <div class="acc-item">
          <div class="acc-trigger"><span class="acc-criterion">O arquivo Excel não carrega.</span><span class="acc-icon">&#9654;</span></div>
          <div class="acc-body"><div class="acc-col"><div class="acc-col-text">Salve como <code>.xlsx</code> puro (sem macros). Se persistir, exporte cada aba como CSV separado e conecte individualmente no Tableau.</div></div></div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-tag">O objetivo</div>
        Ganhar fluência em transformar dados relacionais em narrativas visuais acionáveis. O painel não precisa ser bonito — precisa fazer a diretoria decidir mais rápido do que decidiria com uma planilha.
      </div>
    </section>`;
