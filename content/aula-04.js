GBDBI.content["aula-04"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gestão BD &amp; BI</div>
        <div class="m-title">Aula 4 — O Refino<br><em>Analítico</em></div>
        <div class="m-sub">OLTP · OLAP · ETL · Data Warehouse · Star Schema · SCD</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">O que você vai saber fazer ao final desta aula — cinco objetivos de aprendizagem.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Visão Geral da Aula</div><p class="mc-p">A query que derrubou o sistema da SoundByte — e por que o banco transacional não foi feito para isso.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">OLTP vs OLAP</div><p class="mc-p">Dois mundos com propósitos opostos. A diferença não é de tecnologia — é de intenção arquitetural.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">Arquitetura Analítica</div><p class="mc-p">DW · Data Lake · Data Lakehouse · Data Mesh. Kimball vs Inmon — como as abordagens diferem.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">Data Warehouse</div><p class="mc-p">ETL, Staging, Data Marts: os componentes que transformam dados operacionais em ativos analíticos.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">Star Schema</div><p class="mc-p">Fato, Dimensões e Slowly Changing Dimensions: o modelo que torna as perguntas analíticas possíveis.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">06</div><div class="mc-h">Modelagem Dimensional</div><p class="mc-p">Os 4 passos de Kimball aplicados à SoundByte — e o teste da pergunta do CFO.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">07</div><div class="mc-h">IA e Analytics</div><p class="mc-p">Como usar IA para sugerir dimensões, identificar SCDs e validar modelos — e onde o humano ainda decide.</p><span class="mc-arrow">↗</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS DA AULA ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que você vai<br><em>saber fazer.</em></div>

        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Identificar os conceitos de OLTP, OLAP, Data Warehouse, ETL, Star Schema, Fato, Dimensão e SCD.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar por que o banco de dados transacional não atende consultas analíticas complexas e o que o DW resolve.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Aplicar os 4 passos de Kimball (processo, granularidade, dimensões, fatos) para esboçar um Star Schema simples.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Comparar as abordagens Kimball e Inmon e avaliar qual é mais adequada conforme o contexto e maturidade analítica da empresa.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Projetar o Star Schema da SoundByte identificando a tabela fato, as dimensões necessárias e o tipo de SCD para cada dimensão.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">← Menu</button>
          <button class="pn-btn pn-fwd" data-show="p1">Visão Geral →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — VISÃO GERAL ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">A query que derrubou<br><em>o sistema.</em></div>

        <!-- Disc 1: Conceitos Trabalhados -->
        <div class="disc open" id="disc-conceitos">
          <button class="disc-trigger" data-toggle="disc-conceitos">
            <span class="disc-title">Conceitos Trabalhados</span>
            <span class="disc-icon">▶</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>OLTP vs OLAP</h4>
                  <p>Dois sistemas com propósitos opostos. OLTP registra. OLAP analisa. Misturá-los é a receita do desempenho ruim.</p>
                </div>
                <div class="ov-concept">
                  <h4>Data Warehouse</h4>
                  <p>Repositório central para dados históricos e sumarizados. Otimizado para leitura analítica — não para gravação transacional.</p>
                </div>
                <div class="ov-concept">
                  <h4>ETL</h4>
                  <p>Extract, Transform, Load. O processo que copia, limpa e consolida dados dos sistemas operacionais para o DW.</p>
                </div>
                <div class="ov-concept">
                  <h4>Star Schema</h4>
                  <p>Modelo dimensional com uma tabela fato central (métricas) e tabelas dimensão ao redor (contexto). Simples, rápido, legível.</p>
                </div>
                <div class="ov-concept">
                  <h4>Granularidade</h4>
                  <p>O nível de detalhe de cada linha na tabela fato. Declarar o grão é o segundo passo de Kimball — e o mais crítico.</p>
                </div>
                <div class="ov-concept">
                  <h4>SCD</h4>
                  <p>Slowly Changing Dimensions. O que acontece com a dimensão Cliente quando o endereço muda? Três estratégias com consequências diferentes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Disc 2: O Problema -->
        <div class="disc" id="disc-problema">
          <button class="disc-trigger" data-toggle="disc-problema">
            <span class="disc-title">O Problema — A Query que Derrubou o Sistema</span>
            <span class="disc-icon">▶</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>A pergunta do CFO</h4>
                  <p>Compare a receita do segundo trimestre deste ano com o mesmo período do ano passado — por gênero, por país e por tipo de dispositivo.</p>
                </div>
                <div class="ov-concept">
                  <h4>O que aconteceu</h4>
                  <p>O analista rodou a query no banco de produção da SoundByte. Em 40 segundos, o sistema de streaming travou para 80 mil usuários simultâneos.</p>
                </div>
                <div class="ov-concept">
                  <h4>A analogia</h4>
                  <p>Uma loja é organizada para facilitar a venda. Um armazém, para facilitar o inventário. O mesmo dado com estruturas diferentes para propósitos diferentes.</p>
                </div>
              </div>
              <div style="margin-top:12px; padding:16px 18px; background:var(--surface); border-left:3px solid var(--accent); border-radius:2px 8px 8px 2px; font-size:13.5px; line-height:1.65; color:var(--text-primary); width:100%; max-width:720px;">
                <strong>A lição:</strong> o banco de dados transacional foi construído para velocidade de <em>gravação</em>. Ele não foi construído para velocidade de <em>leitura analítica</em>. A solução não é uma query melhor — é uma arquitetura diferente.
              </div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">← Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">OLTP vs OLAP →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — DO OLTP AO OLAP ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">Dois sistemas.<br><em>Dois propósitos.</em></div>

        <!-- Comparação OLTP vs OLAP -->
        <div class="result-wrap">
          <div class="result-label">Comparativo — OLTP vs OLAP</div>
          <table class="result-tbl">
            <thead>
              <tr>
                <th>Característica</th>
                <th class="h-oltp">OLTP — Transacional</th>
                <th class="h-olap">OLAP — Analítico</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Usuário</strong></td><td class="v-oltp">Operacional</td><td class="v-olap">Analista de Negócio</td></tr>
              <tr><td><strong>Foco</strong></td><td class="v-oltp">Operações diárias</td><td class="v-olap">Tomada de decisão</td></tr>
              <tr><td><strong>Orientado por</strong></td><td class="v-oltp">Aplicação</td><td class="v-olap">Assunto / Negócio</td></tr>
              <tr><td><strong>Dados</strong></td><td class="v-oltp">Atualizados e detalhados</td><td class="v-olap">Histórico e sumarizado</td></tr>
              <tr><td><strong>Atende</strong></td><td class="v-oltp">Milhares de usuários</td><td class="v-olap">Centenas de usuários</td></tr>
              <tr><td><strong>Histórico</strong></td><td class="v-oltp">Até 24 meses</td><td class="v-olap">5 a 10 anos</td></tr>
              <tr><td><strong>Exemplo SoundByte</strong></td><td class="v-oltp">BD de produção (Aula 2)</td><td class="v-olap">Data Warehouse + Star Schema</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Pipeline ETL -->
        <div class="ov-section-tag" style="margin-bottom:14px;">Pipeline — Do Transacional ao Analítico</div>
        <div class="pipeline">
          <div class="pipe-box">
            <div class="pipe-box-label">Origem</div>
            <div class="pipe-box-title">Fontes<br>OLTP</div>
          </div>
          <div class="pipe-arrow">›</div>
          <div class="pipe-box">
            <div class="pipe-box-label">Processo</div>
            <div class="pipe-box-title">ETL</div>
          </div>
          <div class="pipe-arrow">›</div>
          <div class="pipe-box">
            <div class="pipe-box-label">Área temp.</div>
            <div class="pipe-box-title">Staging</div>
          </div>
          <div class="pipe-arrow">›</div>
          <div class="pipe-box dw">
            <div class="pipe-box-label">Armazenagem</div>
            <div class="pipe-box-title">Data<br>Warehouse</div>
          </div>
          <div class="pipe-arrow">›</div>
          <div class="pipe-box">
            <div class="pipe-box-label">Data Marts</div>
            <div class="pipe-box-title">Visões por<br>Área</div>
          </div>
          <div class="pipe-arrow">›</div>
          <div class="pipe-box">
            <div class="pipe-box-label">Consumo</div>
            <div class="pipe-box-title">BI /<br>Analytics</div>
          </div>
        </div>

        <div class="kps" style="margin-top:4px;">
          <div class="kp">
            <div class="kp-tag">A metáfora da refinaria</div>
            <div class="kp-text">O dado bruto do OLTP é o petróleo. O ETL é a refinaria. O DW é o combustível processado, pronto para gerar energia analítica.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Começando simples</div>
            <div class="kp-text">Nem toda empresa precisa de DW. Uma réplica do banco de produção pode ser o primeiro passo — separa a carga analítica sem complexidade adicional.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">O risco de misturar</div>
            <div class="kp-text">Queries analíticas em banco transacional = bloqueio de tabelas, lentidão no app, usuários insatisfeitos. O que aconteceu na SoundByte.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">← Visão Geral</button>
          <button class="pn-btn pn-fwd" data-show="p3">Arquitetura Analítica →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — ARQUITETURA ANALÍTICA ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">Nem tudo é<br><em>Data Warehouse.</em></div>

        <div class="ov-section-tag" style="margin-bottom:14px;">Tipos de Arquitetura para Dados Analíticos</div>
        <div class="arch-grid">
          <div class="arch-card" style="border-left:3px solid var(--accent);">
            <div class="arch-tag">Data Warehouse</div>
            <div class="arch-h">Estruturado e SQL</div>
            <div class="arch-p">Ideal para dados relacionais, métricas de negócio e relatórios históricos. Baseado em tabelas normalizadas ou dimensionais. Alta performance em queries agregadas.</div>
          </div>
          <div class="arch-card" style="border-left:3px solid var(--ok);">
            <div class="arch-tag" style="color:var(--ok)">Data Lake</div>
            <div class="arch-h">Flexível e Raw</div>
            <div class="arch-p">Armazena dados em formato bruto — estruturado, semiestruturado e não-estruturado. Adequado para Machine Learning e exploração. Risco de virar um "data swamp".</div>
          </div>
          <div class="arch-card" style="border-left:3px solid #5a6a90;">
            <div class="arch-tag" style="color:var(--accent)">Data Lakehouse</div>
            <div class="arch-h">O Híbrido</div>
            <div class="arch-p">Combina a flexibilidade do Data Lake com a governança e performance do DW. Arquiteturas como Delta Lake e Iceberg popularizaram essa abordagem.</div>
          </div>
          <div class="arch-card" style="border-left:3px solid #8a6a20;">
            <div class="arch-tag" style="color:var(--warn)">Data Mesh</div>
            <div class="arch-h">Descentralizado</div>
            <div class="arch-p">Cada domínio de negócio (Marketing, Vendas, Produto) é dono do seu produto de dados. Elimina o gargalo da equipe centralizada de dados.</div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:14px;">Como Construir um DW — Kimball vs Inmon</div>
        <div class="compare">
          <div class="cmp-card">
            <div class="cmp-head a">Abordagem Kimball</div>
            <div class="cmp-body">
              <ul>
                <li>Bottom-Up: Data Marts → DW</li>
                <li>Modelagem dimensional (Star Schema)</li>
                <li>Implementação mais rápida</li>
                <li>Menor custo inicial</li>
                <li>Consistência de dados é um desafio</li>
                <li>Ideal para empresas médias e projetos ágeis</li>
              </ul>
            </div>
          </div>
          <div class="cmp-card">
            <div class="cmp-head b">Abordagem Inmon</div>
            <div class="cmp-body">
              <ul>
                <li>Top-Down: EDW (3NF) → Data Marts</li>
                <li>Modelagem relacional normalizada</li>
                <li>Implementação mais lenta</li>
                <li>Maior custo inicial</li>
                <li>Consistência e governança mais robustas</li>
                <li>Ideal para grandes corporações com muitas fontes</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Medallion Architecture</div>
            <div class="kp-text"><strong>Bronze → Silver → Gold.</strong> Abordagem moderna popularizada pela Databricks — dados brutos, limpos e agregados em camadas progressivas. Compatível com dbt e Spark.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Data Vault</div>
            <div class="kp-text"><strong>Hubs, Links e Satélites.</strong> Modelo intermediário focado em auditabilidade e flexibilidade histórica. Menos adotado, mais robusto para ambientes muito voláteis.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">Na prática — SoundByte</div>
            <div class="kp-text">Para o contexto desta aula, usaremos Kimball. É o modelo mais didático, mais utilizado em empresas de médio porte e o que melhor ilustra o conceito de Star Schema.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">← OLTP vs OLAP</button>
          <button class="pn-btn pn-fwd" data-show="p4">Data Warehouse →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — DATA WAREHOUSE ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">Onde os dados<br><em>ganham contexto.</em></div>

        <p style="font-size:14px;line-height:1.7;color:var(--text-secondary);max-width:720px;width:100%;margin-bottom:28px;">
          Um Data Warehouse consolida dados de várias fontes em uma visão integrada e histórica, preparada para consultas analíticas complexas. Ao contrário do banco transacional, o DW é otimizado para <strong style="color:var(--text-primary)">leitura</strong>, não para escrita.
        </p>

        <!-- Pipeline com descrições -->
        <div class="ov-section-tag" style="margin-bottom:16px;">Componentes do Data Warehouse</div>
        <div class="step-list-custom">
          <div class="step-custom">
            <div class="step-num-custom">1</div>
            <div>
              <div class="step-title-custom">Fontes — Sistemas OLTP</div>
              <div class="step-text-custom">Os bancos de dados dos sistemas transacionais: ERP, CRM, plataforma de e-commerce, sistemas de ponto de venda. No caso da SoundByte: o banco relacional que registra pedidos, clientes e faixas.</div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">2</div>
            <div>
              <div class="step-title-custom">ETL — Extract, Transform, Load</div>
              <div class="step-text-custom">Ferramenta ou pipeline que extrai dados das fontes, aplica transformações (limpeza, deduplicação, padronização de formatos) e carrega no destino. Ferramentas populares: dbt, Apache Airflow, Fivetran, Talend.</div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">3</div>
            <div>
              <div class="step-title-custom">Staging Area — Área de Transição</div>
              <div class="step-text-custom">Área intermediária onde os dados brutos chegam antes de serem processados. Serve de buffer entre a extração e a carga final no DW. Os dados aqui ainda não estão limpos nem modelados.</div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">4</div>
            <div>
              <div class="step-title-custom">Data Warehouse — Repositório Central</div>
              <div class="step-text-custom">O coração analítico. Dados históricos, integrados, limpos e modelados em Star Schema. Otimizado para queries agregadas de alta complexidade. Pode ser on-premise (PostgreSQL, SQL Server) ou cloud (BigQuery, Redshift, Snowflake).</div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">5</div>
            <div>
              <div class="step-title-custom">Data Marts — Visões por Área</div>
              <div class="step-text-custom">Subconjuntos do DW orientados por função de negócio. O Data Mart de Marketing vê dados de clientes e campanhas. O de Financeiro vê receita e margens. Cada área enxerga o que precisa.</div>
            </div>
          </div>
        </div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">DW na nuvem</div>
            <div class="kp-text">BigQuery (Google), Redshift (AWS) e Snowflake eliminaram a necessidade de infraestrutura própria. Hoje, qualquer empresa pode ter um DW escalável pagando por query executada.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">ELT vs ETL</div>
            <div class="kp-text">A tendência moderna é <strong>ELT</strong>: carregar os dados brutos no DW cloud primeiro e transformar depois (usando dbt). A capacidade de processamento do DW substitui o servidor de transformação.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">← Arquitetura Analítica</button>
          <button class="pn-btn pn-fwd" data-show="p5">Star Schema →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — STAR SCHEMA ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">O modelo que torna<br><em>as perguntas possíveis.</em></div>

        <!-- Star Schema SVG — SoundByte -->
        <div class="diagram">
          <svg viewBox="0 0 720 362" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">

            <!-- ── Connection lines ── -->
            <line x1="360" y1="77" x2="360" y2="90" stroke="#dfc9c0" stroke-width="1.5" stroke-dasharray="5,3"/>
            <line x1="515" y1="185" x2="525" y2="185" stroke="#dfc9c0" stroke-width="1.5" stroke-dasharray="5,3"/>
            <line x1="190" y1="185" x2="205" y2="185" stroke="#dfc9c0" stroke-width="1.5" stroke-dasharray="5,3"/>
            <line x1="360" y1="280" x2="360" y2="285" stroke="#dfc9c0" stroke-width="1.5" stroke-dasharray="5,3"/>

            <!-- ── FATO_VENDA (center) ── -->
            <rect x="205" y="90" width="310" height="190" rx="6" fill="#7a1a1a"/>
            <rect x="206" y="112" width="308" height="167" fill="white"/>
            <text x="360" y="105" text-anchor="middle" fill="white" font-size="10.5" font-weight="800" letter-spacing="1.5" font-family="system-ui">FATO_VENDA</text>
            <line x1="222" y1="118" x2="498" y2="118" stroke="#f0e4e0" stroke-width="1"/>

            <circle cx="218" cy="125" r="3.5" fill="#7a5500"/>
            <text x="228" y="129" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">venda_sk</text>
            <circle cx="218" cy="144" r="3.5" fill="#b83030"/>
            <text x="228" y="148" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">data_sk</text>
            <circle cx="218" cy="163" r="3.5" fill="#b83030"/>
            <text x="228" y="167" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">cliente_sk</text>
            <circle cx="218" cy="182" r="3.5" fill="#b83030"/>
            <text x="228" y="186" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">faixa_sk</text>
            <circle cx="218" cy="201" r="3.5" fill="#b83030"/>
            <text x="228" y="205" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">canal_sk</text>
            <circle cx="218" cy="220" r="3.5" fill="#3a7a50"/>
            <text x="228" y="224" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">receita</text>
            <circle cx="218" cy="239" r="3.5" fill="#3a7a50"/>
            <text x="228" y="243" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">qtd_streams</text>
            <circle cx="218" cy="258" r="3.5" fill="#3a7a50"/>
            <text x="228" y="262" fill="#1a0d0d" font-size="10.5" font-family="'SF Mono','Consolas',monospace">duracao_seg</text>

            <!-- ── DIM_TEMPO (top) ── -->
            <rect x="260" y="5" width="200" height="72" rx="6" fill="white" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="260" y1="25" x2="460" y2="25" stroke="#dfc9c0" stroke-width="1"/>
            <text x="360" y="19" text-anchor="middle" fill="#7a1a1a" font-size="9" font-weight="800" letter-spacing="2" font-family="system-ui">DIM_TEMPO</text>
            <circle cx="272" cy="33" r="3" fill="#7a5500"/>
            <text x="280" y="37" fill="#1a0d0d" font-size="10" font-family="'SF Mono','Consolas',monospace">data_sk</text>
            <circle cx="272" cy="46" r="3" fill="#8a6060"/>
            <text x="280" y="50" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">ano · trimestre</text>
            <circle cx="272" cy="59" r="3" fill="#8a6060"/>
            <text x="280" y="63" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">mes_nome</text>
            <circle cx="272" cy="71" r="3" fill="#8a6060"/>
            <text x="280" y="75" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">dia_semana</text>

            <!-- ── DIM_CLIENTE (right) ── -->
            <rect x="525" y="122" width="185" height="125" rx="6" fill="white" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="525" y1="143" x2="710" y2="143" stroke="#dfc9c0" stroke-width="1"/>
            <text x="617" y="136" text-anchor="middle" fill="#7a1a1a" font-size="9" font-weight="800" letter-spacing="2" font-family="system-ui">DIM_CLIENTE</text>
            <circle cx="537" cy="152" r="3" fill="#7a5500"/>
            <text x="545" y="156" fill="#1a0d0d" font-size="10" font-family="'SF Mono','Consolas',monospace">cliente_sk</text>
            <circle cx="537" cy="166" r="3" fill="#8a6060"/>
            <text x="545" y="170" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">nome</text>
            <circle cx="537" cy="180" r="3" fill="#8a6060"/>
            <text x="545" y="184" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">pais</text>
            <circle cx="537" cy="194" r="3" fill="#8a6060"/>
            <text x="545" y="198" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">genero</text>
            <circle cx="537" cy="208" r="3" fill="#8a6060"/>
            <text x="545" y="212" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">faixa_etaria</text>
            <circle cx="537" cy="222" r="3" fill="#b83030" opacity=".5"/>
            <text x="545" y="226" fill="#8a4040" font-size="9.5" font-family="'SF Mono','Consolas',monospace">scd_versao ②</text>

            <!-- ── DIM_CANAL (left) ── -->
            <rect x="10" y="122" width="180" height="112" rx="6" fill="white" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="10" y1="143" x2="190" y2="143" stroke="#dfc9c0" stroke-width="1"/>
            <text x="100" y="136" text-anchor="middle" fill="#7a1a1a" font-size="9" font-weight="800" letter-spacing="2" font-family="system-ui">DIM_CANAL</text>
            <circle cx="22" cy="152" r="3" fill="#7a5500"/>
            <text x="30" y="156" fill="#1a0d0d" font-size="10" font-family="'SF Mono','Consolas',monospace">canal_sk</text>
            <circle cx="22" cy="166" r="3" fill="#8a6060"/>
            <text x="30" y="170" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">tipo_disp</text>
            <circle cx="22" cy="180" r="3" fill="#8a6060"/>
            <text x="30" y="184" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">plataforma</text>
            <circle cx="22" cy="194" r="3" fill="#8a6060"/>
            <text x="30" y="198" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">pais_acesso</text>
            <circle cx="22" cy="208" r="3" fill="#8a6060"/>
            <text x="30" y="212" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">segmento</text>

            <!-- ── DIM_FAIXA (bottom) ── -->
            <rect x="245" y="285" width="230" height="70" rx="6" fill="white" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="245" y1="306" x2="475" y2="306" stroke="#dfc9c0" stroke-width="1"/>
            <text x="360" y="299" text-anchor="middle" fill="#7a1a1a" font-size="9" font-weight="800" letter-spacing="2" font-family="system-ui">DIM_FAIXA</text>
            <circle cx="258" cy="315" r="3" fill="#7a5500"/>
            <text x="266" y="319" fill="#1a0d0d" font-size="10" font-family="'SF Mono','Consolas',monospace">faixa_sk</text>
            <circle cx="258" cy="329" r="3" fill="#8a6060"/>
            <text x="266" y="333" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">titulo · artista</text>
            <circle cx="258" cy="343" r="3" fill="#8a6060"/>
            <text x="266" y="347" fill="#6a5050" font-size="10" font-family="'SF Mono','Consolas',monospace">genero_musical</text>

          </svg>
          <!-- Legenda abaixo do diagrama -->
          <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:10px;padding:10px 4px 0;">
            <span style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-secondary);">
              <svg width="10" height="10"><circle cx="5" cy="5" r="4.5" fill="#7a5500"/></svg>Surrogate Key (SK/PK)
            </span>
            <span style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-secondary);">
              <svg width="10" height="10"><circle cx="5" cy="5" r="4.5" fill="#b83030"/></svg>Chave Estrangeira (FK)
            </span>
            <span style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-secondary);">
              <svg width="10" height="10"><circle cx="5" cy="5" r="4.5" fill="#3a7a50"/></svg>Métrica
            </span>
            <span style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-secondary);">
              <svg width="10" height="10"><circle cx="5" cy="5" r="4.5" fill="#8a6060"/></svg>Atributo descritivo
            </span>
          </div>
        </div>

        <!-- Explicação Fato e Dimensões -->
        <div class="compare" style="margin-top:0;">
          <div class="cmp-card">
            <div class="cmp-head good">Tabela Fato</div>
            <div class="cmp-body">
              <ul>
                <li>Contém as métricas numéricas do negócio</li>
                <li>Uma linha = um evento de negócio (um stream, uma venda)</li>
                <li>Chaves estrangeiras (FK) para cada dimensão</li>
                <li>Responde "quanto", "quantas vezes", "qual valor"</li>
              </ul>
            </div>
          </div>
          <div class="cmp-card">
            <div class="cmp-head b">Tabelas Dimensão</div>
            <div class="cmp-body">
              <ul>
                <li>Contêm os atributos descritivos do contexto</li>
                <li>Não são normalizadas (denormalizadas de propósito)</li>
                <li>Respondem "quem", "o quê", "quando", "onde", "como"</li>
                <li>São a base dos filtros e agrupamentos analíticos</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- SCD Section -->
        <div class="ov-section-tag" style="margin-top:4px;margin-bottom:14px;">Slowly Changing Dimensions (SCD)</div>
        <p style="font-size:13.5px;color:var(--text-secondary);line-height:1.65;max-width:720px;width:100%;margin-bottom:16px;">
          O que acontece com a dimensão <strong style="color:var(--text-primary)">DIM_CLIENTE</strong> quando um cliente muda de país? O endereço antigo some ou a empresa mantém os dois? Esse dilema é real em toda empresa com base de clientes — e tem três respostas possíveis.
        </p>
        <div class="scd-grid">
          <div class="scd-card scd-t1">
            <div class="scd-head">Tipo 1 — Sobrescrever</div>
            <div class="scd-body"><strong>O dado antigo é substituído.</strong> O histórico se perde. Relatórios de vendas passadas passam a usar o endereço atual do cliente, mesmo que a compra tenha sido feita quando ele morava em outro país. Simples, mas arriscado para análise histórica.</div>
          </div>
          <div class="scd-card scd-t2">
            <div class="scd-head">Tipo 2 — Nova versão ✦ Recomendado</div>
            <div class="scd-body"><strong>Uma nova linha é criada com o registro atualizado.</strong> A linha antiga continua no banco com datas de validade. O SK (<code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">scd_versao</code>) diferencia as versões. Histórico preservado. Implementação mais complexa, mas correto.</div>
          </div>
          <div class="scd-card scd-t3">
            <div class="scd-head">Tipo 3 — Coluna adicional</div>
            <div class="scd-body"><strong>Uma nova coluna armazena o valor anterior.</strong> Ex.: <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">pais_anterior</code> ao lado de <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">pais_atual</code>. Histórico limitado (apenas uma mudança). Útil quando só importa o "antes" e "depois".</div>
          </div>
        </div>

        <div class="kps" style="margin-top:4px;">
          <div class="kp">
            <div class="kp-tag">Métricas aditivas, semi-aditivas e não-aditivas</div>
            <div class="kp-text">Nem toda métrica da fato pode ser somada em todas as dimensões. <strong>Aditiva</strong>: receita e quantidade somam em qualquer corte — por dia, país ou artista. <strong>Semi-aditiva</strong>: saldo de assinantes ativos soma por país, mas não ao longo do tempo (somar o saldo de 12 meses não dá nada). <strong>Não-aditiva</strong>: ticket médio e taxa de conversão nunca somam — precisam ser recalculados a partir dos componentes. Guardar o numerador e o denominador na fato, e não a razão, evita o erro clássico de "média de médias".</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Surrogate Key (SK)</div>
            <div class="kp-text">As dimensões usam chaves substitutas (SK) em vez das chaves naturais do OLTP. Isso garante rastreabilidade histórica e independência do sistema de origem.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Dimensões não normalizadas</div>
            <div class="kp-text">DIM_FAIXA contém <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">artista</code> diretamente — no OLTP isso seria uma tabela separada. No DW, a desnormalização acelera queries e simplifica joins.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Star vs Snowflake</div>
            <div class="kp-text">No Snowflake Schema, as dimensões são normalizadas em sub-dimensões. Mais espaço eficiente, mas queries mais lentas e complexas. O Star Schema é preferido na maioria dos casos.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">← Data Warehouse</button>
          <button class="pn-btn pn-fwd" data-show="p6">Modelagem Dimensional →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — MODELAGEM DIMENSIONAL ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title">Quatro perguntas.<br><em>Um modelo.</em></div>

        <!-- Os 4 Passos de Kimball -->
        <div class="ov-section-tag" style="margin-bottom:14px;">Os 4 Passos de Kimball — Aplicados à SoundByte</div>
        <div class="steps4">
          <div class="step4-card">
            <div class="step4-num">1</div>
            <div class="step4-q">Processo ≠ Departamento</div>
            <div class="step4-h">Selecionar o Processo de Negócio</div>
            <div class="step4-p">O que queremos entender? Na SoundByte: as transações de venda de faixas e assinaturas registradas no sistema de pedidos.</div>
          </div>
          <div class="step4-card">
            <div class="step4-num">2</div>
            <div class="step4-q">O que representa uma linha?</div>
            <div class="step4-h">Declarar a Granularidade</div>
            <div class="step4-p">Cada linha da tabela fato representa <strong>um item de um pedido</strong> (uma faixa comprada em uma transação). Esse é o grão mais fino disponível.</div>
          </div>
          <div class="step4-card">
            <div class="step4-num">3</div>
            <div class="step4-q">Quem, o quê, quando, onde?</div>
            <div class="step4-h">Identificar as Dimensões</div>
            <div class="step4-p">Quem comprou? <strong>DIM_CLIENTE</strong>. O quê? <strong>DIM_FAIXA</strong>. Quando? <strong>DIM_TEMPO</strong>. Como/onde? <strong>DIM_CANAL</strong>.</div>
          </div>
          <div class="step4-card">
            <div class="step4-num">4</div>
            <div class="step4-q">O que medimos?</div>
            <div class="step4-h">Identificar o Fato</div>
            <div class="step4-p">As métricas numéricas: <strong>receita</strong> (valor em USD), <strong>qtd_streams</strong> (quantidade de reproduções) e <strong>duracao_seg</strong> (tempo de escuta).</div>
          </div>
        </div>

        <!-- O Modelo Resultante -->
        <div class="ov-section-tag" style="margin-bottom:14px;">O Modelo Resultante — Star Schema SoundByte</div>
        <div class="schema-grid">
          <div class="schema-tbl" style="border-color:var(--accent);border-width:2px;">
            <div class="schema-tbl-name">FATO_VENDA</div>
            <div class="schema-col"><span class="badge-sk">SK</span> venda_sk</div>
            <div class="schema-col"><span class="badge-fk">FK</span> data_sk</div>
            <div class="schema-col"><span class="badge-fk">FK</span> cliente_sk</div>
            <div class="schema-col"><span class="badge-fk">FK</span> faixa_sk</div>
            <div class="schema-col"><span class="badge-fk">FK</span> canal_sk</div>
            <div class="schema-col"><span class="badge-m">M</span> receita</div>
            <div class="schema-col"><span class="badge-m">M</span> qtd_streams</div>
            <div class="schema-col"><span class="badge-m">M</span> duracao_seg</div>
          </div>
          <div class="schema-tbl">
            <div class="schema-tbl-name">DIM_TEMPO</div>
            <div class="schema-col"><span class="badge-sk">SK</span> data_sk</div>
            <div class="schema-col">ano</div>
            <div class="schema-col">trimestre</div>
            <div class="schema-col">mes_nome</div>
            <div class="schema-col">dia_semana</div>
          </div>
          <div class="schema-tbl">
            <div class="schema-tbl-name">DIM_CLIENTE</div>
            <div class="schema-col"><span class="badge-sk">SK</span> cliente_sk</div>
            <div class="schema-col">nome</div>
            <div class="schema-col">pais</div>
            <div class="schema-col">genero</div>
            <div class="schema-col">faixa_etaria</div>
            <div class="schema-col" style="color:var(--accent-hover);font-size:10.5px;">scd_versao (tipo 2)</div>
          </div>
          <div class="schema-tbl">
            <div class="schema-tbl-name">DIM_FAIXA</div>
            <div class="schema-col"><span class="badge-sk">SK</span> faixa_sk</div>
            <div class="schema-col">titulo</div>
            <div class="schema-col">artista</div>
            <div class="schema-col">genero_musical</div>
          </div>
          <div class="schema-tbl">
            <div class="schema-tbl-name">DIM_CANAL</div>
            <div class="schema-col"><span class="badge-sk">SK</span> canal_sk</div>
            <div class="schema-col">tipo_disp</div>
            <div class="schema-col">plataforma</div>
            <div class="schema-col">pais_acesso</div>
            <div class="schema-col">segmento</div>
          </div>
        </div>

        <!-- Teste do CFO -->
        <div class="challenge">
          <div class="challenge-tag">Teste — A Pergunta do CFO</div>
          <div class="challenge-q">"Compare a receita do segundo trimestre deste ano com o mesmo período do ano passado, por gênero, por país e por tipo de dispositivo."</div>
          <div class="challenge-check">
            <strong style="color:var(--text-primary)">Com este modelo, a query é possível?</strong><br><br>
            <span class="check-yes">✓</span> Q2 / ano → <span class="check-dim">DIM_TEMPO</span> com <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">trimestre = 2</code> e comparação entre anos<br>
            <span class="check-yes">✓</span> Por gênero → <span class="check-dim">DIM_CLIENTE</span> com campo <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">genero</code><br>
            <span class="check-yes">✓</span> Por país → <span class="check-dim">DIM_CLIENTE</span> com campo <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">pais</code><br>
            <span class="check-yes">✓</span> Por tipo de dispositivo → <span class="check-dim">DIM_CANAL</span> com campo <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">tipo_disp</code><br>
            <span class="check-yes">✓</span> Receita → <span class="check-dim">FATO_VENDA</span> com métrica <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">receita</code><br><br>
            <strong style="color:var(--ok)">Sim — o modelo suporta exatamente essa pergunta.</strong> Se <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">pais</code> ou <code style="font-size:11px;background:var(--surface);padding:1px 5px;border-radius:3px;">genero</code> não existissem nas dimensões, a pergunta seria impossível de responder com precisão.
          </div>
        </div>

        <!-- Atividade Prática -->
        <div class="ov-section-tag" style="margin-bottom:16px;">Atividade Prática — Reestruture o Modelo da Aula 2</div>
        <div class="step-list-custom">
          <div class="step-custom">
            <div class="step-num-custom">1</div>
            <div>
              <div class="step-title-custom">Identifique a Tabela Fato</div>
              <div class="step-text-custom">Com base no modelo relacional da SoundByte (Aula 2), qual tabela representa eventos de negócio com métricas numéricas? Resposta: <strong>ITENS_PEDIDO</strong> — cada linha é um produto comprado, com preço e quantidade.</div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">2</div>
            <div>
              <div class="step-title-custom">Identifique as Dimensões</div>
              <div class="step-text-custom">Para cada FK ou campo descritivo na fato, pergunte: quem? o quê? quando? onde? CLIENTES → DIM_CLIENTE. FAIXAS + ARTISTAS → DIM_FAIXA (denormalizada). data_pedido → DIM_TEMPO. Canal de acesso → DIM_CANAL.</div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">3</div>
            <div>
              <div class="step-title-custom">Construa o Modelo em Planilha</div>
              <div class="step-text-custom">
                Use uma planilha online para representar o Star Schema. Crie uma aba por tabela (FATO, DIM_TEMPO, DIM_CLIENTE, DIM_FAIXA, DIM_CANAL). Liste as colunas, marque PK/FK/Métrica e identifique qual tipo de SCD cada dimensão exige.
              </div>
            </div>
          </div>
          <div class="step-custom">
            <div class="step-num-custom">4</div>
            <div>
              <div class="step-title-custom">Valide com a Pergunta do CFO</div>
              <div class="step-text-custom">Teste o modelo: ele responde a pergunta original? "Receita do Q2 por gênero, país e tipo de dispositivo." Se alguma dimensão estiver faltando, inclua-a. Apresente o resultado para o grupo.</div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">← Star Schema</button>
          <button class="pn-btn pn-fwd" data-show="p7">IA e Analytics →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — IA E ANALYTICS ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">A IA sugere.<br><em>Você decide.</em></div>

        <div class="ai-compare">
          <div class="ai-card can">
            <div class="ai-card-tag">O que a IA faz bem</div>
            <ul class="ai-list">
              <li>Sugerir dimensões para um processo de negócio descrito em texto</li>
              <li>Identificar atributos relevantes para cada dimensão</li>
              <li>Recomendar o tipo de SCD mais adequado para cada caso</li>
              <li>Gerar DDL do Star Schema a partir de uma descrição do negócio</li>
              <li>Explicar a diferença entre Star Schema e Snowflake Schema com exemplos</li>
            </ul>
          </div>
          <div class="ai-card must">
            <div class="ai-card-tag">O que o humano deve decidir</div>
            <ul class="ai-list">
              <li>A granularidade — a IA não conhece o volume de dados nem o custo de storage</li>
              <li>Quais perguntas de negócio o modelo precisa responder (requisitos reais)</li>
              <li>Se o SCD Tipo 2 vale o custo operacional para aquela dimensão específica</li>
              <li>Se uma dimensão deve ser desnormalizada ou mantida como Snowflake</li>
              <li>A validação de que o modelo responde as perguntas do CFO de verdade</li>
            </ul>
          </div>
        </div>

        <!-- Prompt SCD -->
        <div class="sql-wrap" style="margin-bottom:8px;">
          <div class="sql-header">
            <div class="sql-label">Exemplo de prompt — SCD com IA</div>
            <button class="copy-btn" data-copy="c-p7a">Copiar</button>
          </div>
          <div class="sql-block-custom"><code id="c-p7a"><span class="cm">Contexto: Estou modelando o Data Warehouse da SoundByte, uma
plataforma de streaming de música. Tenho uma DIM_CLIENTE com
os campos: cliente_sk, nome, pais, genero, faixa_etaria.

Pergunta: Como eu deveria modelar a Dimensão Cliente para manter
o histórico de mudanças de endereço (país) ao longo dos anos,
sem perder a precisão dos relatórios de vendas passados?

Por favor: explique o conceito de SCD Tipo 2, mostre a estrutura
da tabela com os campos adicionais necessários e dê um exemplo
de como ficaria o registro de um cliente que mudou do Brasil
para Portugal em 2024.</span></code></div>
        </div>

        <div style="font-size:13px;color:var(--text-secondary);line-height:1.6;width:100%;max-width:720px;margin-bottom:28px;">
          <strong style="color:var(--text-primary);">Por que esse prompt funciona:</strong> ele dá contexto real (tabela existente, campos), formula uma pergunta de negócio específica (preservar histórico de países) e pede um exemplo concreto. Quanto mais contexto, mais precisa e utilizável é a resposta.
        </div>

        <!-- SCD Tipo 2 esperado — resposta da IA -->
        <div class="sql-wrap" style="margin-bottom:24px;">
          <div class="sql-header">
            <div class="sql-label">Estrutura DIM_CLIENTE com SCD Tipo 2 — resposta esperada</div>
            <button class="copy-btn" data-copy="c-p7b">Copiar</button>
          </div>
          <div class="sql-block-custom"><code id="c-p7b"><span class="cm">-- SCD Tipo 2: nova linha para cada mudança de atributo</span>
<span class="k">CREATE TABLE</span> <span class="n">DIM_CLIENTE</span> (
    <span class="n">cliente_sk</span>      <span class="f">SERIAL</span>  <span class="k">PRIMARY KEY</span>,   <span class="cm">-- Surrogate Key</span>
    <span class="n">cliente_id</span>      <span class="f">INTEGER</span>,              <span class="cm">-- NK — ID original do OLTP</span>
    <span class="n">nome</span>            <span class="f">VARCHAR</span>(<span class="n">100</span>),
    <span class="n">pais</span>            <span class="f">CHAR</span>(<span class="n">2</span>),
    <span class="n">genero</span>          <span class="f">CHAR</span>(<span class="n">1</span>),
    <span class="n">faixa_etaria</span>    <span class="f">VARCHAR</span>(<span class="n">20</span>),
    <span class="cm">-- Campos de controle SCD Tipo 2 ↓</span>
    <span class="n">dt_inicio</span>       <span class="f">DATE</span> <span class="k">NOT NULL</span>,        <span class="cm">-- Quando este registro entrou em vigor</span>
    <span class="n">dt_fim</span>          <span class="f">DATE</span>,                  <span class="cm">-- NULL = registro atual</span>
    <span class="n">is_atual</span>        <span class="f">BOOLEAN</span> <span class="k">DEFAULT</span> <span class="k">TRUE</span>   <span class="cm">-- Flag de facilidade para filtrar</span>
);

<span class="cm">-- Cliente que mudou de Brasil para Portugal em 2024:</span>
<span class="cm">-- Linha 1 (histórica): dt_inicio='2019-01-10', dt_fim='2024-06-01', is_atual=FALSE, pais='BR'</span>
<span class="cm">-- Linha 2 (atual):     dt_inicio='2024-06-01', dt_fim=NULL,         is_atual=TRUE,  pais='PT'</span>

<span class="cm">-- Relatório de vendas até 2023 usa SK da linha 1 → pais='BR'  ✓</span>
<span class="cm">-- Relatório de vendas de 2025 usa SK da linha 2 → pais='PT'  ✓</span></code></div>
        </div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Natural Key (NK) vs Surrogate Key (SK)</div>
            <div class="kp-text">O SK é gerado pelo DW. O NK é o ID original do sistema de origem. Com SCD Tipo 2, o mesmo cliente pode ter vários SKs diferentes — um por versão histórica.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">A armadilha do Tipo 1</div>
            <div class="kp-text">Usar SCD Tipo 1 (sobrescrever) é a escolha mais comum e a mais perigosa: relatórios históricos passam a mostrar o endereço atual do cliente, distorcendo qualquer análise geográfica por período.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">IA para modelagem</div>
            <div class="kp-text">A IA pode gerar o DDL completo de um Star Schema em segundos. Mas ela não conhece o volume de dados, os SLAs de carga, nem quais perguntas o negócio vai fazer nos próximos 5 anos. Isso é trabalho do arquiteto.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p6">← Modelagem Dimensional</button>
          <button class="pn-btn pn-fwd" data-show="menu">Início →</button>
        </div>
      </div>
    </div>`;
