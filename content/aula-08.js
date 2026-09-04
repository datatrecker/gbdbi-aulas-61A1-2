GBDBI.content["aula-08"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gestão BD &amp; BI</div>
        <div class="m-title">Aula 8 — O Projeto<br>Final <em>Integrador</em></div>
        <div class="m-sub">Modelo de Dados · Arquitetura · Governança · Narrativa Estratégica</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos e Competências</div><p class="mc-p">O que este projeto avalia e por que ele encerra a disciplina do jeito que encerra.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">O Desafio — Due Diligence</div><p class="mc-p">A SoundByte recebeu uma proposta de R$ 50 milhões de investimento. O investidor quer ver os dados.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">Os 4 Componentes</div><p class="mc-p">Modelo · Arquitetura · Governança · Narrativa. Pesos e o que entregar em cada.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">Os Dados Fornecidos</div><p class="mc-p">Script PostgreSQL com dados sintéticos reais da SoundByte para análise e modelagem.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">Dicas por Componente</div><p class="mc-p">Orientações práticas para cada parte do projeto: o que mais conta, o que evitar.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">Atividade Avaliativa</div><p class="mc-p">Brief completo, templates, rubrica detalhada e prompts de IA por componente.</p><span class="mc-arrow">↗</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">Consistência conceitual<br><em>e lógica nos dados.</em></div>

        <div class="callout callout-dark" style="margin-bottom:32px;font-size:14px;line-height:1.75;">
          <div class="callout-tag">Por que este projeto existe</div>
          Este projeto não pede que você construa visualizações ou escreva queries. Pede algo mais fundamental: que você avalie se a SoundByte tem coerência na forma como pensa, organiza e governa seus dados. Um fundo de investimento sério quer saber se a empresa entende seus próprios dados — antes de confiar neles para tomar decisões de R$ 50 milhões.
        </div>

        <div class="obj-card">
          <div class="obj-eyebrow">Competências Avaliadas</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Interpretar um modelo de dados existente e explicar as decisões de normalização e modelagem dimensional — identificando o que está bem estruturado e o que não está.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Avaliar trade-offs entre SQL e NoSQL para diferentes componentes de uma arquitetura de dados real, justificando cada escolha com base nas características do problema da SoundByte.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Identificar riscos de conformidade com a LGPD presentes nos dados reais da SoundByte e propor uma política de acesso baseada em RBAC coerente com o modelo de dados.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Construir uma narrativa estratégica orientada a dados que conecte modelo, arquitetura e governança a uma avaliação de maturidade analítica — no formato de uma apresentação de due diligence.</div>
          </div>
        </div>

        <div class="callout callout-blue" style="margin-top:24px;margin-bottom:28px;">
          <div class="callout-tag">O Foco Central do Projeto</div>
          Os alunos devem se concentrar em avaliar se há <strong>consistência conceitual e lógica</strong> na maneira como a SoundByte trabalha com os seus dados: o modelo reflete o negócio real? A arquitetura suporta as decisões de modelagem? A governança cobre os dados que o modelo identifica como sensíveis? Essas três perguntas devem ter respostas coerentes entre si.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">As aulas que este projeto integra</div>
        <div class="a8-card-grid">
          <div class="a8-card">
            <div class="a8-card-tag">AULAS 1–5</div>
            <div class="a8-card-title">Modelagem de Dados</div>
            <div class="a8-card-desc">Modelo relacional, normalização, Star Schema, granularidade</div>
          </div>
          <div class="a8-card">
            <div class="a8-card-tag">AULA 6</div>
            <div class="a8-card-title">Arquitetura NoSQL</div>
            <div class="a8-card-desc">MongoDB, JSON, trade-offs SQL vs. NoSQL por camada</div>
          </div>
          <div class="a8-card">
            <div class="a8-card-tag">AULA 7</div>
            <div class="a8-card-title">Governança</div>
            <div class="a8-card-desc">LGPD, RBAC, qualidade de dados, auditoria</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">← Início</button>
          <button class="pn-btn pn-fwd" data-show="p1">O Desafio →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — O DESAFIO ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">R$ 50 milhões na mesa.<br><em>O investidor quer ver os dados.</em></div>

        <div class="callout callout-dark" style="margin-bottom:32px;font-size:14px;line-height:1.8;">
          <div class="callout-tag">O Cenário</div>
          A SoundByte fechou negociações com o Fundo Vega Capital para uma rodada Series B de <strong style="color:var(--warn);">R$ 50 milhões</strong>. Antes de assinar o term sheet, o fundo exige uma <strong style="color:var(--warn);">due diligence de dados</strong>: eles querem ver o modelo de dados, a arquitetura técnica e a política de governança — tudo documentado, analisado e avaliado quanto à sua consistência interna. Você é a equipe de dados da SoundByte.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">O que o Vega Capital quer avaliar</div>
        <div class="a8-item-list">
          <div class="a8-item">
            <div class="a8-item-num" style="background:#1a3a7a;">1</div>
            <div><div class="a8-item-title">Integridade do Modelo</div><div class="a8-item-desc">"O banco de dados está bem estruturado? As entidades refletem o negócio real? Há redundâncias, inconsistências ou decisões de modelagem que escondem problemas?"</div></div>
          </div>
          <div class="a8-item">
            <div class="a8-item-num" style="background:#7a5a10;">2</div>
            <div><div class="a8-item-title">Maturidade da Arquitetura</div><div class="a8-item-desc">"A arquitetura aguenta crescimento? As escolhas entre SQL e NoSQL fazem sentido para cada camada? As decisões de modelagem e de arquitetura são coerentes entre si?"</div></div>
          </div>
          <div class="a8-item">
            <div class="a8-item-num" style="background:#7a1a1a;">3</div>
            <div><div class="a8-item-title">Risco Regulatório</div><div class="a8-item-desc">"A empresa está em conformidade com a LGPD? A política de acesso cobre os dados sensíveis que aparecem no modelo? Governança e modelagem contam a mesma história?"</div></div>
          </div>
        </div>

        <div class="callout callout-blue">
          <div class="callout-tag">Por Que Isso Importa — Além da Nota</div>
          Due diligence de dados é uma etapa padrão em fusões, aquisições e rodadas de investimento. O que diferencia um time de dados maduro não é a capacidade de gerar gráficos — é a capacidade de demonstrar que seus sistemas de dados são coerentes, sustentáveis e confiáveis. Essa competência é escassa e muito valorizada no mercado.
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">← Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">Os 4 Componentes →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — OS 4 COMPONENTES ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">Quatro peças.<br><em>Um pacote coerente.</em></div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Distribuição de Pontos</div>
        <div class="comp4-grid">
          <div class="comp4-card c-model">
            <div class="comp4-icon">🗂️</div>
            <div class="comp4-weight">30%</div>
            <div class="comp4-name">Modelo de Dados</div>
            <div class="comp4-desc">ERD OLTP + Star Schema analítico, com justificativas de modelagem e avaliação de consistência lógica</div>
            <span class="comp4-aula">Aulas 1–5</span>
          </div>
          <div class="comp4-card c-arch">
            <div class="comp4-icon">🏗️</div>
            <div class="comp4-weight">25%</div>
            <div class="comp4-name">Arquitetura</div>
            <div class="comp4-desc">Justificativa escrita: SQL vs. NoSQL para cada camada — decisões ancoradas no modelo de dados proposto</div>
            <span class="comp4-aula">Aulas 1, 6</span>
          </div>
          <div class="comp4-card c-gov">
            <div class="comp4-icon">🛡️</div>
            <div class="comp4-weight">25%</div>
            <div class="comp4-name">Governança</div>
            <div class="comp4-desc">Política de acesso RBAC + mapa de riscos LGPD conectados aos dados identificados no ERD</div>
            <span class="comp4-aula">Aula 7</span>
          </div>
          <div class="comp4-card c-narr">
            <div class="comp4-icon">🎤</div>
            <div class="comp4-weight">20%</div>
            <div class="comp4-name">Narrativa e Dashboard</div>
            <div class="comp4-desc">Comunicação dos insights em um dashboard no Tableau com ao menos um KPI central, mais clareza da apresentação, argumentação estratégica e coerência entre os três componentes anteriores</div>
            <span class="comp4-aula">Todas</span>
          </div>
        </div>

        <div class="callout" style="margin-bottom:24px;">
          <div class="callout-tag">O Que Torna a Nota Alta</div>
          O Vega Capital não quer componentes isolados. Quer ver <strong>coerência entre modelo, arquitetura e governança</strong>: as escolhas do Star Schema justificam as decisões de arquitetura; a arquitetura explica por que certos dados são armazenados de determinada forma; a governança cobre exatamente os campos sensíveis identificados no ERD. <strong>Projetos que demonstram essa consistência ficam bem acima da média.</strong>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Formato de Entrega</div>
        <div class="entrega-list">
          <div class="entrega-item">
            <div class="entrega-num" style="background:#1a3a7a;">1</div>
            <div>
              <div class="entrega-title">Documento Principal (PDF)</div>
              <div class="entrega-desc">Organizado em 4 seções numeradas (uma por componente). Inclui diagramas do modelo de dados, justificativas de arquitetura, política de governança e narrativa estratégica conectando os três.</div>
              <span class="entrega-format">PDF · máx. 15 páginas</span>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">← O Desafio</button>
          <button class="pn-btn pn-fwd" data-show="p3">Os Dados Fornecidos →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — OS DADOS FORNECIDOS ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">O modelo já está<br><em>na sua mão.</em></div>

        <div class="callout" style="margin-bottom:28px;">
          <div class="callout-tag">Antes de Começar</div>
          Um script SQL está disponível para download junto a esta aula. Ele cria e popula um banco PostgreSQL com dados sintéticos da SoundByte. O seu trabalho não é analisar os números — é analisar o <strong>modelo</strong>: as entidades, os relacionamentos, as chaves, a normalização e a granularidade das tabelas. Use o script para entender como a SoundByte organiza seus dados e avaliar se essa organização é consistente com o negócio que ela diz ter.
        </div>

        <div class="datafile-grid">
          <div class="datafile-card">
            <div class="df-header">
              <div class="df-icon">🗄️</div>
              <div>
                <div class="df-filename">soundbyte_projeto_final.sql</div>
                <span class="df-type sql">PostgreSQL</span>
              </div>
            </div>
            <div class="df-detail">
              Script completo para criar e popular o banco da SoundByte. Contém schema DDL + dados sintéticos realistas para os últimos 18 meses de operação. O foco do projeto é o <strong>schema</strong> — as tabelas, colunas, tipos, chaves primárias, chaves estrangeiras e índices. O script termina com três <strong>views analíticas</strong> prontas (<code>vw_mrr_mensal</code>, <code>vw_top_artistas</code>, <code>vw_usuarios_plano_cidade</code>) e sete <strong>perguntas de negócio sugeridas</strong> (Q1 a Q7), comentadas no fim do arquivo.
            </div>
            <div class="df-tag-list">
              <span class="df-tag">200 usuários</span>
              <span class="df-tag">30 artistas</span>
              <span class="df-tag">47 músicas</span>
              <span class="df-tag">5.338 reproduções</span>
              <span class="df-tag">146 assinaturas</span>
              <span class="df-tag">9 tabelas</span>
            </div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">O que analisar no modelo — pontos de partida</div>
        <div class="a8-analysis-grid">
          <div class="a8-analysis-card">
            <div class="a8-analysis-tag" style="color:var(--accent);">ENTIDADES E RELACIONAMENTOS</div>
            <p class="a8-analysis-text">As tabelas representam bem as entidades do negócio de streaming? Os relacionamentos fazem sentido conceitual? Existem entidades ausentes que deveriam existir?</p>
          </div>
          <div class="a8-analysis-card">
            <div class="a8-analysis-tag" style="color:var(--warn);">NORMALIZAÇÃO E REDUNDÂNCIA</div>
            <p class="a8-analysis-text">O modelo está normalizado de forma adequada? Há dados duplicados que podem gerar inconsistências? Há desnormalização intencional que não foi justificada?</p>
          </div>
          <div class="a8-analysis-card">
            <div class="a8-analysis-tag" style="color:var(--accent-hover);">GRANULARIDADE DA FATO</div>
            <p class="a8-analysis-text">A tabela fato do Star Schema captura o evento correto? A granularidade escolhida permite responder as perguntas de negócio mais importantes para um investidor?</p>
          </div>
          <div class="a8-analysis-card">
            <div class="a8-analysis-tag" style="color:var(--danger);">DADOS SENSÍVEIS NO SCHEMA</div>
            <p class="a8-analysis-text">Quais colunas do modelo contêm dados pessoais ou sensíveis (PII)? Elas estão estruturadas de forma que facilite ou dificulte a conformidade com a LGPD?</p>
          </div>
        </div>

        <div class="callout callout-green">
          <div class="callout-tag">Importante — Dados Sintéticos</div>
          Os dados foram gerados artificialmente para fins pedagógicos, mas o <strong>schema é real</strong>: as tabelas, colunas e relacionamentos seguem padrões reais de serviços de streaming. Analise o modelo como se fosse de uma empresa real — porque as decisões de modelagem nele refletem escolhas reais que teriam impacto real em um investimento.
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">← Os 4 Componentes</button>
          <button class="pn-btn pn-fwd" data-show="p4">Dicas Práticas →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — DICAS POR COMPONENTE ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">O que separa<br><em>bom de excelente.</em></div>

        <table class="tip-table">
          <thead>
            <tr>
              <th></th>
              <th>Componente</th>
              <th>O que eleva a nota</th>
              <th>Erro comum a evitar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tip-icon">🗂️</td>
              <td class="tip-comp">Modelo de Dados</td>
              <td>Identificar tensões e inconsistências no modelo — e explicar o que elas revelam sobre como a empresa pensa seus dados. Não basta descrever: é preciso avaliar.</td>
              <td>Entregar o ERD como um diagrama neutro sem juízo crítico. Um modelo sem avaliação não serve para due diligence</td>
            </tr>
            <tr>
              <td class="tip-icon">🏗️</td>
              <td class="tip-comp">Arquitetura</td>
              <td>Decisões específicas para SoundByte: "usamos MongoDB para perfis de escuta PORQUE os dados de comportamento são semi-estruturados e variam por usuário" — conectadas às entidades do modelo</td>
              <td>Justificativas genéricas ("NoSQL é mais rápido") desconectadas do modelo de dados apresentado anteriormente</td>
            </tr>
            <tr>
              <td class="tip-icon">🛡️</td>
              <td class="tip-comp">Governança</td>
              <td>Conectar o mapa de riscos LGPD com os campos reais identificados no ERD. Cada risco deve nomear a tabela e coluna específica, com mitigação proposta</td>
              <td>Fazer uma política genérica que poderia ser de qualquer empresa. A política precisa mencionar GPS, pagamentos e dados de streaming de áudio — dados reais do schema da SoundByte</td>
            </tr>
            <tr>
              <td class="tip-icon">🎤</td>
              <td class="tip-comp">Narrativa</td>
              <td>Demonstrar que modelo, arquitetura e governança contam a mesma história: as três seções se reforçam e cada decisão em uma aparece referenciada nas outras</td>
              <td>Apresentação técnica com três seções independentes que não se conversam. O Vega Capital quer ver um time que pensa de forma integrada</td>
            </tr>
          </tbody>
        </table>

        <div class="disc" id="disc-ai">
          <button class="disc-trigger" data-toggle="disc-ai">
            <span class="disc-title">Como usar IA neste projeto</span>
            <span class="disc-icon">▶</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <p style="font-size:13.5px;line-height:1.75;color:var(--text-primary);margin-bottom:16px;">IA pode ajudar em várias etapas do projeto — e o uso inteligente dela é esperado. O que não é esperado é delegar o julgamento. Um investidor de R$ 50 milhões consegue perceber quando o time não sabe explicar por que o modelo foi desenhado daquela forma.</p>
              <div class="a8-ia-grid">
                <div class="a8-ia-card good">
                  <div class="a8-ia-tag">✅ USE IA PARA</div>
                  <p class="a8-ia-text">Revisar a consistência do ERD, verificar se a política LGPD cobre todos os campos sensíveis, gerar hipóteses sobre decisões de arquitetura, melhorar a clareza da narrativa</p>
                </div>
                <div class="a8-ia-card bad">
                  <div class="a8-ia-tag">❌ NÃO DELEGUE</div>
                  <p class="a8-ia-text">A avaliação crítica do modelo, as decisões de arquitetura, a escolha de quais riscos são mais relevantes e a narrativa estratégica. Essas são as competências que estão sendo avaliadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="callout" style="margin-top:8px;">
          <div class="callout-tag">O Critério Final</div>
          Ao revisar o projeto, o professor fará uma pergunta simples: <em>"Se eu fosse o Vega Capital, este material me convenceria de que a SoundByte tem maturidade de dados para receber R$ 50 milhões?"</em> Um projeto que responde "sim" com consistência entre modelo, arquitetura e governança — e uma narrativa que conecta os três — atinge a nota máxima.
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">← Os Dados</button>
          <button class="pn-btn pn-fwd" data-show="p5">Atividade Avaliativa →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — ATIVIDADE AVALIATIVA ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">O brief completo<br><em>está aqui.</em></div>

        <div class="callout" style="margin-bottom:32px;font-size:14px;line-height:1.75;">
          <div class="callout-tag">O que você encontra na atividade</div>
          Instruções detalhadas para cada componente, templates de entrega, rubrica critério-a-critério e prompts de IA específicos para cada parte do projeto. O brief foi escrito para que você possa trabalhar de forma independente — sem dúvidas sobre o que é esperado em cada entregável.
        </div>

        <a class="activity-link" href="#/atividade-08">
          <div class="al-icon">🏆</div>
          <div>
            <div class="al-title">Projeto Final Integrador — SoundByte Series B</div>
            <div class="al-desc">Brief completo · 4 componentes · Templates · Rubrica detalhada · Prompts de IA · Critérios de entrega</div>
          </div>
          <div class="al-arrow">↗</div>
        </a>

        <div class="ov-section-tag" style="margin-bottom:16px;">Download</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;width:100%;max-width:720px;margin-bottom:28px;">
          <a class="a8-download" href="recursos/soundbyte_projeto_final.sql" download>
            <span style="font-size:20px;">🗄️</span>
            <span>soundbyte_projeto_final.sql</span>
            <span class="a8-download-tag">PostgreSQL · 331 KB</span>
          </a>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">← Dicas Práticas</button>
          <button class="pn-btn pn-fwd" data-show="menu">← Menu Principal</button>
        </div>
      </div>
    </div>`;
