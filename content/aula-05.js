GBDBI.content["aula-05"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gestão BD &amp; BI</div>
        <div class="m-title">Aula 5 — A Visualização<br>do <em>Sucesso</em></div>
        <div class="m-sub">BI · Dashboard · KPIs · Métricas · Tableau · Storytelling com Dados</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">Mapa de competências — o que você vai saber fazer ao final desta aula.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Visão Geral da Aula</div><p class="mc-p">A diretora de marketing da SoundByte tem 48 horas. O conselho não lê tabelas — decide em 3 minutos.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">O que faz um Dashboard Eficaz</div><p class="mc-p">Dois dashboards, os mesmos dados. 3 minutos para encontrar as diferenças — e os princípios por trás delas.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">Métricas de Vaidade vs Acionáveis</div><p class="mc-p">Downloads, seguidores e visualizações parecem importantes. O conselho pergunta: e o ROI?</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">Categorias de Análise</div><p class="mc-p">Descritiva · Diagnóstica · Preditiva · Prescritiva — onde cada pergunta de negócio se encaixa.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">O Ecossistema de Dados</div><p class="mc-p">BI, Data Science, ML, AI — o que cada área faz e onde o BI se encaixa nesse mapa.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">06</div><div class="mc-h">Tableau e Ferramentas BI</div><p class="mc-p">Atividade prática: conectar dados reais e construir um dashboard com KPIs de conversão.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">07</div><div class="mc-h">IA e Visualização</div><p class="mc-p">Peça à IA o melhor gráfico para o seu dado — e entenda por que a escolha final ainda é humana.</p><span class="mc-arrow">&#8599;</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que você vai<br><em>saber fazer.</em></div>
        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Identificar os conceitos de BI, KPI, dashboard, métricas de vaidade e análise descritiva/diagnóstica/preditiva/prescritiva.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar a diferença entre uma métrica de vaidade e uma métrica acionável, e por que essa distinção importa para decisões executivas.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Escolher o tipo de gráfico adequado para cada pergunta de negócio e construir um dashboard básico em uma ferramenta BI.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Diagnosticar os problemas de um dashboard mal construído e propor melhorias baseadas nos princípios de visualização eficaz.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Projetar e construir um dashboard interativo com filtros e KPIs que responda uma pergunta de negócio específica para um público executivo.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">&#8592; Início</button>
          <button class="pn-btn pn-fwd" data-show="p1">Visão Geral &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — VISÃO GERAL ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">48 horas.<br><em>Sem margem para erro.</em></div>

        <div class="disc open" id="disc-conceitos">
          <button class="disc-trigger" data-toggle="disc-conceitos">
            <span class="disc-title">Conceitos Trabalhados</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>Business Intelligence</h4>
                  <p>Uso de tecnologias e processos para analisar dados históricos e presentes e apoiar decisões. BI responde "o que aconteceu" e "por quê".</p>
                </div>
                <div class="ov-concept">
                  <h4>O Ciclo de BI</h4>
                  <p><strong>Coletar</strong> (extrair das fontes operacionais) &rarr; <strong>integrar</strong> (consolidar e padronizar em um modelo único) &rarr; <strong>analisar</strong> (consultar, cruzar, encontrar padrões) &rarr; <strong>comunicar</strong> (dashboard e narrativa). Pular a integração é o erro mais comum: sem ela, cada área analisa um número diferente.</p>
                </div>
                <div class="ov-concept">
                  <h4>KPI</h4>
                  <p>Key Performance Indicator — uma métrica vinculada a um objetivo estratégico. Não é qualquer número: é um número que muda o comportamento de quem decide.</p>
                </div>
                <div class="ov-concept">
                  <h4>Dashboard Eficaz</h4>
                  <p>Uma pergunta por tela. O gráfico mais importante no canto superior esquerdo. Cores para comunicar, não para decorar. Números sempre com contexto.</p>
                </div>
                <div class="ov-concept">
                  <h4>Métricas de Vaidade</h4>
                  <p>Números que parecem impressionantes mas não guiam decisões: total de downloads, número de seguidores, visualizações brutas.</p>
                </div>
                <div class="ov-concept">
                  <h4>Categorias de Análise</h4>
                  <p>Descritiva (o que?), Diagnóstica (por quê?), Preditiva (o que vai acontecer?) e Prescritiva (o que devo fazer?). BI cobre as duas primeiras.</p>
                </div>
                <div class="ov-concept">
                  <h4>Storytelling com Dados</h4>
                  <p>O dado não fala por si. A narrativa — sequência lógica, contexto, destaque do insight principal — é o que converte análise em decisão.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="disc" id="disc-problema">
          <button class="disc-trigger" data-toggle="disc-problema">
            <span class="disc-title">O Problema — 48 Horas para o Conselho</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>A situação</h4>
                  <p>A diretora de marketing da SoundByte tem uma reunião com o conselho em 48 horas. Ela precisa mostrar o ROI das campanhas atuais comparado com o ano anterior.</p>
                </div>
                <div class="ov-concept">
                  <h4>O desafio</h4>
                  <p>O conselho não lê tabelas. Não analisa planilhas. Toma decisões em 3 minutos — e o orçamento de marketing depende dessa apresentação.</p>
                </div>
                <div class="ov-concept">
                  <h4>A solução</h4>
                  <p>Um painel visual com uma pergunta central, contexto histórico claro e sem margem para interpretações erradas. Esse é o objetivo desta aula.</p>
                </div>
              </div>
              <div style="margin-top:12px; padding:16px 18px; background:var(--surface); border-left:3px solid var(--accent); border-radius:2px 8px 8px 2px; font-size:13.5px; line-height:1.65; color:var(--text-primary); width:100%; max-width:720px;">
                <strong>A lição:</strong> um dashboard não é um relatório. Um relatório registra. Um dashboard <em>responde a uma pergunta específica para uma audiência específica</em>. Confundir os dois é o erro mais comum em projetos de BI.
              </div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">&#8592; Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">Dashboard Eficaz &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — DASHBOARD EFICAZ ═══ -->
    <div id="p2" class="page">
      <div class="t-body">

        <p style="font-size:15px;line-height:1.7;max-width:720px;width:100%;margin-bottom:32px;color:var(--text-primary);">
          Os dois painéis abaixo usam exatamente os mesmos dados da SoundByte. Você tem <strong style="color:var(--accent)">3 minutos</strong> para analisá-los e dizer o que acha de cada um.
        </p>

        <!-- Painel limpo (sem rótulos, sem anotações) -->
        <div class="diagram" style="margin-bottom:36px;">
          <svg viewBox="0 26 720 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">

            <!-- LEFT PANEL -->
            <rect x="5" y="26" width="335" height="400" rx="6" fill="#fefefe" stroke="#ddd" stroke-width="1.5"/>
            <rect x="5" y="26" width="335" height="30" rx="6" fill="#e74c3c"/>
            <rect x="5" y="44" width="335" height="12" fill="#e74c3c"/>
            <text x="172" y="46" text-anchor="middle" fill="white" font-size="9.5" font-weight="700" font-family="system-ui">Dashboard Marketing SoundByte — 2026</text>
            <rect x="13" y="60" width="98" height="42" rx="4" fill="#27ae60"/>
            <text x="62" y="75" text-anchor="middle" fill="white" font-size="7.5" font-family="system-ui">Total Downloads</text>
            <text x="62" y="92" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">47,293</text>
            <rect x="122" y="60" width="98" height="42" rx="4" fill="#3498db"/>
            <text x="171" y="75" text-anchor="middle" fill="white" font-size="7.5" font-family="system-ui">Seguidores</text>
            <text x="171" y="92" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">12,847</text>
            <rect x="231" y="60" width="98" height="42" rx="4" fill="#9b59b6"/>
            <text x="280" y="75" text-anchor="middle" fill="white" font-size="7.5" font-family="system-ui">Visualizações</text>
            <text x="280" y="92" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">89,021</text>
            <text x="13" y="127" fill="#888" font-size="7.5" font-family="system-ui">Downloads por Região (Q2 2026)</text>
            <path d="M 150 185 L 203 185 A 53 53 0 0 1 184 226 Z" fill="#e74c3c"/>
            <path d="M 150 185 L 184 226 A 53 53 0 0 1 145 238 Z" fill="#27ae60"/>
            <path d="M 150 185 L 145 238 A 53 53 0 0 1 99 199 Z" fill="#3498db"/>
            <path d="M 150 185 L 99 199 A 53 53 0 0 1 102 162 Z" fill="#9b59b6"/>
            <path d="M 150 185 L 102 162 A 53 53 0 0 1 141 132 Z" fill="#f39c12"/>
            <path d="M 150 185 L 141 132 A 53 53 0 0 1 168 134 Z" fill="#1abc9c"/>
            <path d="M 150 185 L 168 134 A 53 53 0 0 1 200 167 Z" fill="#e91e8c"/>
            <path d="M 150 185 L 200 167 A 53 53 0 0 1 203 185 Z" fill="#8bc34a"/>
            <line x1="150" y1="185" x2="203" y2="185" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="184" y2="226" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="145" y2="238" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="99"  y2="199" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="102" y2="162" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="141" y2="132" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="168" y2="134" stroke="white" stroke-width="1"/>
            <line x1="150" y1="185" x2="200" y2="167" stroke="white" stroke-width="1"/>
            <rect x="218" y="132" width="10" height="8" fill="#e74c3c"/>
            <text x="232" y="140" fill="#555" font-size="7" font-family="system-ui">Brasil</text>
            <rect x="218" y="144" width="10" height="8" fill="#27ae60"/>
            <text x="232" y="152" fill="#555" font-size="7" font-family="system-ui">EUA</text>
            <rect x="218" y="156" width="10" height="8" fill="#3498db"/>
            <text x="232" y="164" fill="#555" font-size="7" font-family="system-ui">México</text>
            <rect x="218" y="168" width="10" height="8" fill="#9b59b6"/>
            <text x="232" y="176" fill="#555" font-size="7" font-family="system-ui">Argentina</text>
            <rect x="218" y="180" width="10" height="8" fill="#f39c12"/>
            <text x="232" y="188" fill="#555" font-size="7" font-family="system-ui">Colômbia</text>
            <rect x="218" y="192" width="10" height="8" fill="#1abc9c"/>
            <text x="232" y="200" fill="#555" font-size="7" font-family="system-ui">Chile</text>
            <rect x="218" y="204" width="10" height="8" fill="#e91e8c"/>
            <text x="232" y="212" fill="#555" font-size="7" font-family="system-ui">Portugal</text>
            <rect x="218" y="216" width="10" height="8" fill="#8bc34a"/>
            <text x="232" y="224" fill="#555" font-size="7" font-family="system-ui">Outros</text>
            <text x="13" y="266" fill="#888" font-size="7.5" font-family="system-ui">Receita Mensal — Todos os Produtos</text>
            <line x1="13" y1="318" x2="325" y2="318" stroke="#ddd" stroke-width="1"/>
            <rect x="18"  y="278" width="35" height="40" fill="#e74c3c"/>
            <rect x="68"  y="263" width="35" height="55" fill="#27ae60"/>
            <rect x="118" y="273" width="35" height="45" fill="#3498db"/>
            <rect x="168" y="258" width="35" height="60" fill="#9b59b6"/>
            <rect x="218" y="268" width="35" height="50" fill="#f39c12"/>
            <rect x="268" y="248" width="35" height="70" fill="#1abc9c"/>
            <text x="35"  y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Jan</text>
            <text x="85"  y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Fev</text>
            <text x="135" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Mar</text>
            <text x="185" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Abr</text>
            <text x="235" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Mai</text>
            <text x="285" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Jun</text>
            <text x="13" y="360" fill="#888" font-size="7.5" font-family="system-ui">Engajamento · Cliques · Shares · Comentários · Retenção</text>
            <text x="13" y="374" fill="#555" font-size="7" font-family="system-ui">* dados de jan–jun 2026 · ** excluindo rejeições &lt;3s · *** meta do trimestre não atingida</text>
            <text x="13" y="388" fill="#555" font-size="7" font-family="system-ui">fonte: Google Analytics + Meta Ads + Spotify API (última atualização: 14/06)</text>
            <text x="13" y="400" fill="#555" font-size="7" font-family="system-ui">NOTA: os dados de Portugal e Chile ainda estão sendo validados pelo time de dados</text>

            <!-- RIGHT PANEL -->
            <rect x="380" y="26" width="335" height="400" rx="6" fill="#fdf8f6" stroke="#dfc9c0" stroke-width="1.5"/>
            <rect x="380" y="26" width="335" height="30" rx="6" fill="#7a1a1a"/>
            <rect x="380" y="44" width="335" height="12" fill="#7a1a1a"/>
            <text x="547" y="46" text-anchor="middle" fill="white" font-size="9.5" font-weight="700" font-family="system-ui">ROI das Campanhas — Q2 2026 vs Q2 2025</text>
            <rect x="388" y="60" width="98" height="42" rx="4" fill="white" stroke="#dfc9c0" stroke-width="1"/>
            <text x="437" y="73" text-anchor="middle" fill="#8a6060" font-size="7" font-family="system-ui">Receita / Download</text>
            <text x="437" y="86" text-anchor="middle" fill="#7a1a1a" font-size="15" font-weight="800" font-family="system-ui">$2,47</text>
            <text x="437" y="97" text-anchor="middle" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#9650; +18% vs Q2'25</text>
            <rect x="497" y="60" width="98" height="42" rx="4" fill="white" stroke="#dfc9c0" stroke-width="1"/>
            <text x="546" y="73" text-anchor="middle" fill="#8a6060" font-size="7" font-family="system-ui">Taxa de Conversão</text>
            <text x="546" y="86" text-anchor="middle" fill="#7a1a1a" font-size="15" font-weight="800" font-family="system-ui">3,2%</text>
            <text x="546" y="97" text-anchor="middle" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#9650; +0,4pp vs Q2'25</text>
            <rect x="606" y="60" width="98" height="42" rx="4" fill="white" stroke="#dfc9c0" stroke-width="1"/>
            <text x="655" y="73" text-anchor="middle" fill="#8a6060" font-size="7" font-family="system-ui">Custo por Aquisição</text>
            <text x="655" y="86" text-anchor="middle" fill="#7a1a1a" font-size="15" font-weight="800" font-family="system-ui">$4,80</text>
            <text x="655" y="97" text-anchor="middle" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#9660; &#8722;12% vs Q2'25</text>
            <text x="388" y="126" fill="#555" font-size="7.5" font-family="system-ui" font-weight="600">Receita Mensal (R$ mil) — 2026 vs 2025</text>
            <line x1="408" y1="270" x2="710" y2="270" stroke="#dfc9c0" stroke-width="1"/>
            <line x1="408" y1="130" x2="408" y2="270" stroke="#dfc9c0" stroke-width="1"/>
            <text x="404" y="134" text-anchor="end" fill="#aaa" font-size="7" font-family="system-ui">65</text>
            <text x="404" y="186" text-anchor="end" fill="#aaa" font-size="7" font-family="system-ui">53</text>
            <text x="404" y="238" text-anchor="end" fill="#aaa" font-size="7" font-family="system-ui">42</text>
            <line x1="408" y1="185" x2="710" y2="185" stroke="#eddad5" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="408" y1="237" x2="710" y2="237" stroke="#eddad5" stroke-width="1" stroke-dasharray="3,3"/>
            <polyline points="415,270 487,249 559,256 631,222 703,232" fill="none" stroke="#c8aaa0" stroke-width="1.5" stroke-dasharray="4,3"/>
            <circle cx="415" cy="270" r="3" fill="#c8aaa0"/>
            <circle cx="487" cy="249" r="3" fill="#c8aaa0"/>
            <circle cx="559" cy="256" r="3" fill="#c8aaa0"/>
            <circle cx="631" cy="222" r="3" fill="#c8aaa0"/>
            <circle cx="703" cy="232" r="3" fill="#c8aaa0"/>
            <polygon points="415,232 487,162 559,189 631,130 703,148 703,270 415,270" fill="rgba(122,26,26,.06)"/>
            <polyline points="415,232 487,162 559,189 631,130 703,148" fill="none" stroke="#7a1a1a" stroke-width="2.5"/>
            <circle cx="415" cy="232" r="3.5" fill="#7a1a1a"/>
            <circle cx="487" cy="162" r="3.5" fill="#7a1a1a"/>
            <circle cx="559" cy="189" r="3.5" fill="#7a1a1a"/>
            <circle cx="631" cy="130" r="3.5" fill="#7a1a1a"/>
            <circle cx="703" cy="148" r="3.5" fill="#7a1a1a"/>
            <text x="415" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Jan</text>
            <text x="487" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Fev</text>
            <text x="559" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Mar</text>
            <text x="631" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Abr</text>
            <text x="703" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Mai</text>
            <line x1="490" y1="296" x2="510" y2="296" stroke="#7a1a1a" stroke-width="2.5"/>
            <circle cx="500" cy="296" r="3" fill="#7a1a1a"/>
            <text x="515" y="300" fill="#555" font-size="8" font-family="system-ui">2026</text>
            <line x1="550" y1="296" x2="570" y2="296" stroke="#c8aaa0" stroke-width="1.5" stroke-dasharray="4,3"/>
            <circle cx="560" cy="296" r="3" fill="#c8aaa0"/>
            <text x="575" y="300" fill="#555" font-size="8" font-family="system-ui">2025</text>
            <rect x="388" y="320" width="318" height="56" rx="6" fill="rgba(122,26,26,.06)" stroke="#dfc9c0" stroke-width="1"/>
            <text x="397" y="335" fill="#7a1a1a" font-size="8.5" font-weight="700" font-family="system-ui">Insight principal</text>
            <text x="397" y="349" fill="#1a0d0d" font-size="8" font-family="system-ui">A receita de maio de 2026 superou a meta trimestral</text>
            <text x="397" y="361" fill="#1a0d0d" font-size="8" font-family="system-ui">em 8% — crescimento consistente pelo 3° mês seguido.</text>
            <text x="397" y="371" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#8599; Campanha "Gênero Favorito" = principal driver</text>

          </svg>
        </div>

        <!-- Botão revelar análise (para o professor) -->
        <div id="p2-reveal-btn" style="width:100%;max-width:720px;margin-bottom:44px;display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--text-secondary);font-weight:700;">— Para o Professor —</div>
          <button class="reveal-btn" data-action="reveal-p2-analysis">
            Revelar análise dos dashboards &#8594;
          </button>
        </div>

        <!-- Seção oculta — revelada pelo professor após discussão -->
        <div id="p2-analysis" style="display:none;width:100%;flex-direction:column;align-items:center;">

          <div class="ov-section-tag" style="max-width:720px;width:100%;margin-bottom:18px;">Análise dos Painéis</div>

          <!-- Dashboard comparison SVG — versão anotada completa -->
          <div class="diagram" style="margin-bottom:28px;">
            <svg viewBox="0 0 720 430" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">

              <!-- Top Labels -->
              <rect x="5" y="2" width="335" height="22" rx="4" fill="rgba(184,48,48,.10)"/>
              <text x="172" y="16" text-anchor="middle" fill="#b83030" font-size="9" font-weight="800" letter-spacing="2" font-family="system-ui">&#10005;  DASHBOARD PROBLEMÁTICO</text>
              <rect x="380" y="2" width="335" height="22" rx="4" fill="rgba(58,122,58,.10)"/>
              <text x="547" y="16" text-anchor="middle" fill="#3a6a40" font-size="9" font-weight="800" letter-spacing="2" font-family="system-ui">&#10003;  DASHBOARD EFICAZ</text>

              <!-- LEFT PANEL (BAD) -->
              <rect x="5" y="26" width="335" height="400" rx="6" fill="#fefefe" stroke="#ddd" stroke-width="1.5"/>
              <rect x="5" y="26" width="335" height="30" rx="6" fill="#e74c3c"/>
              <rect x="5" y="44" width="335" height="12" fill="#e74c3c"/>
              <text x="172" y="46" text-anchor="middle" fill="white" font-size="9.5" font-weight="700" font-family="system-ui">Dashboard Marketing SoundByte — 2026</text>
              <rect x="13" y="60" width="98" height="42" rx="4" fill="#27ae60"/>
              <text x="62" y="75" text-anchor="middle" fill="white" font-size="7.5" font-family="system-ui">Total Downloads</text>
              <text x="62" y="92" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">47,293</text>
              <rect x="122" y="60" width="98" height="42" rx="4" fill="#3498db"/>
              <text x="171" y="75" text-anchor="middle" fill="white" font-size="7.5" font-family="system-ui">Seguidores</text>
              <text x="171" y="92" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">12,847</text>
              <rect x="231" y="60" width="98" height="42" rx="4" fill="#9b59b6"/>
              <text x="280" y="75" text-anchor="middle" fill="white" font-size="7.5" font-family="system-ui">Visualizações</text>
              <text x="280" y="92" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">89,021</text>
              <text x="13" y="113" fill="#b83030" font-size="8" font-family="system-ui" font-weight="700">&#9888; Métricas de vaidade — sem contexto histórico</text>
              <text x="13" y="127" fill="#888" font-size="7.5" font-family="system-ui">Downloads por Região (Q2 2026)</text>
              <path d="M 150 185 L 203 185 A 53 53 0 0 1 184 226 Z" fill="#e74c3c"/>
              <path d="M 150 185 L 184 226 A 53 53 0 0 1 145 238 Z" fill="#27ae60"/>
              <path d="M 150 185 L 145 238 A 53 53 0 0 1 99 199 Z" fill="#3498db"/>
              <path d="M 150 185 L 99 199 A 53 53 0 0 1 102 162 Z" fill="#9b59b6"/>
              <path d="M 150 185 L 102 162 A 53 53 0 0 1 141 132 Z" fill="#f39c12"/>
              <path d="M 150 185 L 141 132 A 53 53 0 0 1 168 134 Z" fill="#1abc9c"/>
              <path d="M 150 185 L 168 134 A 53 53 0 0 1 200 167 Z" fill="#e91e8c"/>
              <path d="M 150 185 L 200 167 A 53 53 0 0 1 203 185 Z" fill="#8bc34a"/>
              <line x1="150" y1="185" x2="203" y2="185" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="184" y2="226" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="145" y2="238" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="99"  y2="199" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="102" y2="162" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="141" y2="132" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="168" y2="134" stroke="white" stroke-width="1"/>
              <line x1="150" y1="185" x2="200" y2="167" stroke="white" stroke-width="1"/>
              <rect x="218" y="132" width="10" height="8" fill="#e74c3c"/>
              <text x="232" y="140" fill="#555" font-size="7" font-family="system-ui">Brasil</text>
              <rect x="218" y="144" width="10" height="8" fill="#27ae60"/>
              <text x="232" y="152" fill="#555" font-size="7" font-family="system-ui">EUA</text>
              <rect x="218" y="156" width="10" height="8" fill="#3498db"/>
              <text x="232" y="164" fill="#555" font-size="7" font-family="system-ui">México</text>
              <rect x="218" y="168" width="10" height="8" fill="#9b59b6"/>
              <text x="232" y="176" fill="#555" font-size="7" font-family="system-ui">Argentina</text>
              <rect x="218" y="180" width="10" height="8" fill="#f39c12"/>
              <text x="232" y="188" fill="#555" font-size="7" font-family="system-ui">Colômbia</text>
              <rect x="218" y="192" width="10" height="8" fill="#1abc9c"/>
              <text x="232" y="200" fill="#555" font-size="7" font-family="system-ui">Chile</text>
              <rect x="218" y="204" width="10" height="8" fill="#e91e8c"/>
              <text x="232" y="212" fill="#555" font-size="7" font-family="system-ui">Portugal</text>
              <rect x="218" y="216" width="10" height="8" fill="#8bc34a"/>
              <text x="232" y="224" fill="#555" font-size="7" font-family="system-ui">Outros</text>
              <text x="13" y="252" fill="#b83030" font-size="8" font-family="system-ui" font-weight="700">&#9888; 8 cores — ilegível, difícil comparar fatias</text>
              <text x="13" y="266" fill="#888" font-size="7.5" font-family="system-ui">Receita Mensal — Todos os Produtos</text>
              <line x1="13" y1="318" x2="325" y2="318" stroke="#ddd" stroke-width="1"/>
              <rect x="18"  y="278" width="35" height="40" fill="#e74c3c"/>
              <rect x="68"  y="263" width="35" height="55" fill="#27ae60"/>
              <rect x="118" y="273" width="35" height="45" fill="#3498db"/>
              <rect x="168" y="258" width="35" height="60" fill="#9b59b6"/>
              <rect x="218" y="268" width="35" height="50" fill="#f39c12"/>
              <rect x="268" y="248" width="35" height="70" fill="#1abc9c"/>
              <text x="35"  y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Jan</text>
              <text x="85"  y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Fev</text>
              <text x="135" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Mar</text>
              <text x="185" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Abr</text>
              <text x="235" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Mai</text>
              <text x="285" y="328" text-anchor="middle" fill="#aaa" font-size="7" font-family="system-ui">Jun</text>
              <text x="13" y="342" fill="#b83030" font-size="8" font-family="system-ui" font-weight="700">&#9888; Cor muda por período — sem explicação</text>
              <text x="13" y="360" fill="#888" font-size="7.5" font-family="system-ui">Engajamento · Cliques · Shares · Comentários · Retenção</text>
              <text x="13" y="374" fill="#555" font-size="7" font-family="system-ui">* dados de jan–jun 2026 · ** excluindo rejeições &lt;3s · *** meta do trimestre não atingida</text>
              <text x="13" y="388" fill="#555" font-size="7" font-family="system-ui">fonte: Google Analytics + Meta Ads + Spotify API (última atualização: 14/06)</text>
              <text x="13" y="400" fill="#555" font-size="7" font-family="system-ui">NOTA: os dados de Portugal e Chile ainda estão sendo validados pelo time de dados</text>
              <text x="13" y="412" fill="#b83030" font-size="8" font-family="system-ui" font-weight="700">&#9888; Rodapé longo — a informação mais importante se perde</text>

              <!-- RIGHT PANEL (GOOD) -->
              <rect x="380" y="26" width="335" height="400" rx="6" fill="#fdf8f6" stroke="#dfc9c0" stroke-width="1.5"/>
              <rect x="380" y="26" width="335" height="30" rx="6" fill="#7a1a1a"/>
              <rect x="380" y="44" width="335" height="12" fill="#7a1a1a"/>
              <text x="547" y="46" text-anchor="middle" fill="white" font-size="9.5" font-weight="700" font-family="system-ui">ROI das Campanhas — Q2 2026 vs Q2 2025</text>
              <rect x="388" y="60" width="98" height="42" rx="4" fill="white" stroke="#dfc9c0" stroke-width="1"/>
              <text x="437" y="73" text-anchor="middle" fill="#8a6060" font-size="7" font-family="system-ui">Receita / Download</text>
              <text x="437" y="86" text-anchor="middle" fill="#7a1a1a" font-size="15" font-weight="800" font-family="system-ui">$2,47</text>
              <text x="437" y="97" text-anchor="middle" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#9650; +18% vs Q2'25</text>
              <rect x="497" y="60" width="98" height="42" rx="4" fill="white" stroke="#dfc9c0" stroke-width="1"/>
              <text x="546" y="73" text-anchor="middle" fill="#8a6060" font-size="7" font-family="system-ui">Taxa de Conversão</text>
              <text x="546" y="86" text-anchor="middle" fill="#7a1a1a" font-size="15" font-weight="800" font-family="system-ui">3,2%</text>
              <text x="546" y="97" text-anchor="middle" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#9650; +0,4pp vs Q2'25</text>
              <rect x="606" y="60" width="98" height="42" rx="4" fill="white" stroke="#dfc9c0" stroke-width="1"/>
              <text x="655" y="73" text-anchor="middle" fill="#8a6060" font-size="7" font-family="system-ui">Custo por Aquisição</text>
              <text x="655" y="86" text-anchor="middle" fill="#7a1a1a" font-size="15" font-weight="800" font-family="system-ui">$4,80</text>
              <text x="655" y="97" text-anchor="middle" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#9660; &#8722;12% vs Q2'25</text>
              <text x="388" y="113" fill="#3a6a40" font-size="8" font-family="system-ui" font-weight="700">&#10003; Contexto: comparação com período anterior incluída</text>
              <text x="388" y="126" fill="#555" font-size="7.5" font-family="system-ui" font-weight="600">Receita Mensal (R$ mil) — 2026 vs 2025</text>
              <line x1="408" y1="270" x2="710" y2="270" stroke="#dfc9c0" stroke-width="1"/>
              <line x1="408" y1="130" x2="408" y2="270" stroke="#dfc9c0" stroke-width="1"/>
              <text x="404" y="134" text-anchor="end" fill="#aaa" font-size="7" font-family="system-ui">65</text>
              <text x="404" y="186" text-anchor="end" fill="#aaa" font-size="7" font-family="system-ui">53</text>
              <text x="404" y="238" text-anchor="end" fill="#aaa" font-size="7" font-family="system-ui">42</text>
              <line x1="408" y1="185" x2="710" y2="185" stroke="#eddad5" stroke-width="1" stroke-dasharray="3,3"/>
              <line x1="408" y1="237" x2="710" y2="237" stroke="#eddad5" stroke-width="1" stroke-dasharray="3,3"/>
              <polyline points="415,270 487,249 559,256 631,222 703,232" fill="none" stroke="#c8aaa0" stroke-width="1.5" stroke-dasharray="4,3"/>
              <circle cx="415" cy="270" r="3" fill="#c8aaa0"/>
              <circle cx="487" cy="249" r="3" fill="#c8aaa0"/>
              <circle cx="559" cy="256" r="3" fill="#c8aaa0"/>
              <circle cx="631" cy="222" r="3" fill="#c8aaa0"/>
              <circle cx="703" cy="232" r="3" fill="#c8aaa0"/>
              <polygon points="415,232 487,162 559,189 631,130 703,148 703,270 415,270" fill="rgba(122,26,26,.06)"/>
              <polyline points="415,232 487,162 559,189 631,130 703,148" fill="none" stroke="#7a1a1a" stroke-width="2.5"/>
              <circle cx="415" cy="232" r="3.5" fill="#7a1a1a"/>
              <circle cx="487" cy="162" r="3.5" fill="#7a1a1a"/>
              <circle cx="559" cy="189" r="3.5" fill="#7a1a1a"/>
              <circle cx="631" cy="130" r="3.5" fill="#7a1a1a"/>
              <circle cx="703" cy="148" r="3.5" fill="#7a1a1a"/>
              <text x="415" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Jan</text>
              <text x="487" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Fev</text>
              <text x="559" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Mar</text>
              <text x="631" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Abr</text>
              <text x="703" y="282" text-anchor="middle" fill="#8a6060" font-size="7.5" font-family="system-ui">Mai</text>
              <line x1="490" y1="296" x2="510" y2="296" stroke="#7a1a1a" stroke-width="2.5"/>
              <circle cx="500" cy="296" r="3" fill="#7a1a1a"/>
              <text x="515" y="300" fill="#555" font-size="8" font-family="system-ui">2026</text>
              <line x1="550" y1="296" x2="570" y2="296" stroke="#c8aaa0" stroke-width="1.5" stroke-dasharray="4,3"/>
              <circle cx="560" cy="296" r="3" fill="#c8aaa0"/>
              <text x="575" y="300" fill="#555" font-size="8" font-family="system-ui">2025</text>
              <text x="388" y="313" fill="#3a6a40" font-size="8" font-family="system-ui" font-weight="700">&#10003; Uma pergunta, duas séries — tendência imediatamente visível</text>
              <rect x="388" y="320" width="318" height="56" rx="6" fill="rgba(122,26,26,.06)" stroke="#dfc9c0" stroke-width="1"/>
              <text x="397" y="335" fill="#7a1a1a" font-size="8.5" font-weight="700" font-family="system-ui">Insight principal</text>
              <text x="397" y="349" fill="#1a0d0d" font-size="8" font-family="system-ui">A receita de maio de 2026 superou a meta trimestral</text>
              <text x="397" y="361" fill="#1a0d0d" font-size="8" font-family="system-ui">em 8% — crescimento consistente pelo 3° mês seguido.</text>
              <text x="397" y="371" fill="#3a6a40" font-size="7.5" font-weight="700" font-family="system-ui">&#8599; Campanha "Gênero Favorito" = principal driver</text>
              <text x="388" y="392" fill="#3a6a40" font-size="8" font-family="system-ui" font-weight="700">&#10003; Insight explícito — o conselho não precisa inferir</text>

            </svg>
          </div>

          <!-- Princípios -->
          <div class="ov-section-tag" style="margin-bottom:14px;">Os Princípios por Trás da Diferença</div>
          <div class="kps">
            <div class="kp">
              <div class="kp-tag">Uma pergunta por tela</div>
              <div class="kp-text">Cada dashboard responde uma única pergunta de negócio. Quem tenta responder tudo responde nada. O título do painel é a pergunta — não o nome do departamento.</div>
            </div>
            <div class="kp">
              <div class="kp-tag">Hierarquia visual</div>
              <div class="kp-text">O gráfico mais importante fica no canto superior esquerdo. Nossos olhos leem em Z — o designer de dados controla onde a atenção vai primeiro.</div>
            </div>
            <div class="kp">
              <div class="kp-tag" style="color:var(--accent-hover)">Cor para comunicar</div>
              <div class="kp-text">Uma cor de destaque para o que importa, cinza para o resto. Mais de três cores num gráfico é barulho, não informação. Vermelho = problema, verde = meta atingida.</div>
            </div>
            <div class="kp">
              <div class="kp-tag">Número sempre com contexto</div>
              <div class="kp-text">$2,47 não diz nada. $2,47 &#9650; +18% vs Q2'25 é uma decisão. Todo KPI precisa de uma referência: meta, período anterior ou média do setor.</div>
            </div>
          </div>

        </div><!-- /p2-analysis -->

        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">&#8592; Visão Geral</button>
          <button class="pn-btn pn-fwd" data-show="p3">Métricas &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — MÉTRICAS DE VAIDADE vs ACIONÁVEIS ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">O que você mede<br><em>muda o que você faz.</em></div>

        <p style="font-size:13.5px;color:var(--text-secondary);line-height:1.65;max-width:720px;width:100%;margin-bottom:24px;">
          Uma métrica de vaidade impressiona. Uma métrica acionável informa. A diferença não é o número — é a <strong style="color:var(--text-primary)">decisão que o número habilita</strong>. Se um executivo olha para o número e não sabe o que fazer a seguir, é vaidade.
        </p>

        <div class="ov-section-tag" style="margin-bottom:14px;">Exemplos — SoundByte</div>
        <div class="vanity-grid">
          <div class="vanity-row">
            <div class="vanity-bad">
              <div class="vanity-tag">Métrica de Vaidade</div>
              <div class="vanity-h">Total de Downloads</div>
              <div class="vanity-p">Parece grande. Mas não diz se alguém pagou, qual faixa gerou receita ou qual gênero converte mais.</div>
            </div>
            <div class="vanity-sep">&#8594;</div>
            <div class="vanity-good">
              <div class="vanity-tag">Métrica Acionável</div>
              <div class="vanity-h">Receita por Download por Gênero</div>
              <div class="vanity-p">Informa onde investir em curadoria. Se MPB tem $3,20/download e Pop tem $0,80, a decisão é clara.</div>
            </div>
          </div>
          <div class="vanity-row">
            <div class="vanity-bad">
              <div class="vanity-tag">Métrica de Vaidade</div>
              <div class="vanity-h">Número de Seguidores</div>
              <div class="vanity-p">Não diz se alguém comprou uma assinatura. Seguidores que nunca convertem são custo de aquisição perdido.</div>
            </div>
            <div class="vanity-sep">&#8594;</div>
            <div class="vanity-good">
              <div class="vanity-tag">Métrica Acionável</div>
              <div class="vanity-h">Taxa de Conversão Seguidor &#8594; Assinante</div>
              <div class="vanity-p">Revela qual canal de aquisição é mais eficiente. Uma campanha com 50% menos seguidores pode ter 3x mais conversões.</div>
            </div>
          </div>
          <div class="vanity-row">
            <div class="vanity-bad">
              <div class="vanity-tag">Métrica de Vaidade</div>
              <div class="vanity-h">Visualizações de Campanha</div>
              <div class="vanity-p">Não diz se a campanha foi relevante para o público certo. Uma campanha vista 1 milhão de vezes pelo público errado não vende.</div>
            </div>
            <div class="vanity-sep">&#8594;</div>
            <div class="vanity-good">
              <div class="vanity-tag">Métrica Acionável</div>
              <div class="vanity-h">Custo por Aquisição por Campanha</div>
              <div class="vanity-p">Permite comparar campanhas diretamente. Se CPA da campanha A é $4,80 e da B é $12,00, o orçamento migra para A.</div>
            </div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:14px;">O Mesmo Princípio no YouTube</div>
        <div class="compare">
          <div class="cmp-card">
            <div class="cmp-head bad">Métricas Superficiais</div>
            <div class="cmp-body">
              <ul>
                <li>Visualizações e inscritos isolados — não refletem se o algoritmo está promovendo o conteúdo</li>
                <li>Performance do último vídeo vs o anterior — cria falsa percepção de fracasso</li>
                <li>Total de comentários — não distingue engajamento positivo de negativo</li>
              </ul>
            </div>
          </div>
          <div class="cmp-card">
            <div class="cmp-head good">Sinais de Crescimento Real</div>
            <div class="cmp-body">
              <ul>
                <li>Velocidade das primeiras 48h — indica que o algoritmo aprendeu quem é seu público</li>
                <li>Maratona de visualizações — novos espectadores assistindo 2-3 vídeos seguidos</li>
                <li>Vídeos antigos gerando visualizações — catálogo ativo é sinal de comunidade saudável</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="padding:16px 18px; background:var(--surface); border-left:3px solid var(--accent); border-radius:2px 8px 8px 2px; font-size:13.5px; line-height:1.65; color:var(--text-primary); width:100%; max-width:720px; margin-bottom:28px;">
          <strong>Ruído vs. Tendência:</strong> flutuações diárias são ruído. O crescimento real é uma média que sobe lentamente. Um dashboard eficaz mostra a tendência, não o barulho do dia.
        </div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">O teste da decisão</div>
            <div class="kp-text">Olhe para a métrica e pergunte: "Se esse número mudar, o que eu faço diferente?" Se a resposta for "não sei", é vaidade.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">O perigo das médias</div>
            <div class="kp-text">Receita média por usuário pode esconder que 20% dos clientes geram 80% da receita. Métricas agregadas muitas vezes disfarçam a realidade mais importante.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">North Star Metric</div>
            <div class="kp-text">Empresas de alto desempenho têm uma única métrica que representa melhor o valor que entregam. Para o Spotify: minutos ouvidos/usuário ativo/dia. Tudo se alinha em torno dela.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">&#8592; Dashboard Eficaz</button>
          <button class="pn-btn pn-fwd" data-show="p4">Categorias de Análise &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — CATEGORIAS DE ANÁLISE ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">Cada pergunta tem<br><em>um tipo de resposta.</em></div>

        <!-- 2x2 Quadrant SVG -->
        <div class="diagram">
          <svg viewBox="0 0 720 370" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">

            <!-- Quadrant backgrounds -->
            <rect x="60" y="38" width="290" height="130" rx="0" fill="rgba(122,26,26,.05)"/>
            <rect x="370" y="38" width="290" height="130" rx="0" fill="rgba(58,122,58,.07)"/>
            <rect x="60" y="188" width="290" height="130" rx="0" fill="rgba(30,80,160,.05)"/>
            <rect x="370" y="188" width="290" height="130" rx="0" fill="rgba(160,100,30,.05)"/>

            <!-- Axes -->
            <line x1="50" y1="183" x2="665" y2="183" stroke="#c8a8a0" stroke-width="1.5"/>
            <polygon points="50,179 38,183 50,187" fill="#c8a8a0"/>
            <polygon points="665,179 677,183 665,187" fill="#c8a8a0"/>
            <line x1="360" y1="22" x2="360" y2="330" stroke="#c8a8a0" stroke-width="1.5"/>
            <polygon points="356,22 360,12 364,22" fill="#c8a8a0"/>
            <polygon points="356,330 360,340 364,330" fill="#c8a8a0"/>

            <!-- Axis Labels -->
            <text x="44" y="199" text-anchor="end" fill="#8a6060" font-size="9" font-weight="700" font-family="system-ui">PASSADO</text>
            <text x="676" y="199" fill="#8a6060" font-size="9" font-weight="700" font-family="system-ui">FUTURO</text>
            <text x="360" y="9" text-anchor="middle" fill="#8a6060" font-size="9" font-weight="700" font-family="system-ui">AÇÃO</text>
            <text x="360" y="359" text-anchor="middle" fill="#8a6060" font-size="9" font-weight="700" font-family="system-ui">COMPREENSÃO</text>

            <!-- Q3: Descritiva (bottom-left) -->
            <text x="80" y="213" fill="#1a4080" font-size="12.5" font-weight="800" font-family="system-ui">Análise Descritiva</text>
            <text x="80" y="229" fill="#4060a0" font-size="10" font-weight="700" font-family="system-ui">O que aconteceu?</text>
            <text x="80" y="246" fill="#666" font-size="9.5" font-family="system-ui">Relatórios, dashboards, KPIs</text>
            <text x="80" y="260" fill="#666" font-size="9.5" font-family="system-ui">Histórico de vendas, resumos</text>
            <rect x="80" y="270" width="22" height="13" rx="3" fill="#1a4080"/>
            <text x="91" y="280" text-anchor="middle" fill="white" font-size="7.5" font-weight="700" font-family="system-ui">BI</text>
            <text x="107" y="280" fill="#1a4080" font-size="8" font-weight="700" font-family="system-ui">Núcleo do BI</text>

            <!-- Q1: Diagnóstica (top-left) -->
            <text x="80" y="68" fill="#7a1a1a" font-size="12.5" font-weight="800" font-family="system-ui">Análise Diagnóstica</text>
            <text x="80" y="84" fill="#b03030" font-size="10" font-weight="700" font-family="system-ui">Por que aconteceu?</text>
            <text x="80" y="101" fill="#666" font-size="9.5" font-family="system-ui">Drill-down, análise de causas</text>
            <text x="80" y="115" fill="#666" font-size="9.5" font-family="system-ui">Correlações, anomalias</text>
            <rect x="80" y="125" width="22" height="13" rx="3" fill="#7a1a1a"/>
            <text x="91" y="135" text-anchor="middle" fill="white" font-size="7.5" font-weight="700" font-family="system-ui">BI</text>
            <text x="107" y="135" fill="#7a1a1a" font-size="8" font-weight="700" font-family="system-ui">BI Avançado</text>

            <!-- Q4: Preditiva (bottom-right) -->
            <text x="390" y="213" fill="#7a5010" font-size="12.5" font-weight="800" font-family="system-ui">Análise Preditiva</text>
            <text x="390" y="229" fill="#a07020" font-size="10" font-weight="700" font-family="system-ui">O que vai acontecer?</text>
            <text x="390" y="246" fill="#666" font-size="9.5" font-family="system-ui">Modelos ML, séries temporais</text>
            <text x="390" y="260" fill="#666" font-size="9.5" font-family="system-ui">Forecast de vendas, churn</text>
            <rect x="390" y="270" width="25" height="13" rx="3" fill="#7a5010"/>
            <text x="402" y="280" text-anchor="middle" fill="white" font-size="7.5" font-weight="700" font-family="system-ui">ML</text>
            <text x="420" y="280" fill="#7a5010" font-size="8" font-weight="700" font-family="system-ui">Machine Learning</text>

            <!-- Q2: Prescritiva (top-right) -->
            <text x="390" y="68" fill="#2a6a30" font-size="12.5" font-weight="800" font-family="system-ui">Análise Prescritiva</text>
            <text x="390" y="84" fill="#3a8a40" font-size="10" font-weight="700" font-family="system-ui">O que devo fazer?</text>
            <text x="390" y="101" fill="#666" font-size="9.5" font-family="system-ui">Otimização, recomendação</text>
            <text x="390" y="115" fill="#666" font-size="9.5" font-family="system-ui">Automação de decisão</text>
            <rect x="390" y="125" width="22" height="13" rx="3" fill="#2a6a30"/>
            <text x="401" y="135" text-anchor="middle" fill="white" font-size="7.5" font-weight="700" font-family="system-ui">AI</text>
            <text x="417" y="135" fill="#2a6a30" font-size="8" font-weight="700" font-family="system-ui">IA / Otimização</text>

            <!-- BI Coverage bracket -->
            <line x1="60" y1="321" x2="350" y2="321" stroke="#7a1a1a" stroke-width="1.5"/>
            <line x1="60" y1="317" x2="60" y2="325" stroke="#7a1a1a" stroke-width="1.5"/>
            <line x1="350" y1="317" x2="350" y2="325" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="205" y="338" text-anchor="middle" fill="#7a1a1a" font-size="9" font-weight="700" font-family="system-ui">BI cobre estas análises &#8593;</text>

          </svg>
        </div>

        <div class="kps" style="margin-top:0;">
          <div class="kp">
            <div class="kp-tag">BI está no passado</div>
            <div class="kp-text">BI trabalha com o que já aconteceu: descreve e diagnostica. Para saber o que <em>vai</em> acontecer ou o que <em>fazer</em> a seguir, entram ML e IA.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">A maioria das empresas</div>
            <div class="kp-text">Ainda está no quadrante Descritivo: "qual foi nossa receita este mês?" Chegar ao Diagnóstico ("por que caiu?") já é diferencial competitivo real.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Perguntas de negócio</div>
            <div class="kp-text">Classificar a pergunta antes de escolher a ferramenta evita construir um modelo ML para responder algo que uma tabela dinâmica já resolve em 5 minutos.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">&#8592; Métricas</button>
          <button class="pn-btn pn-fwd" data-show="p5">Ecossistema &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — ECOSSISTEMA DE DADOS ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">BI não é AI.<br><em>Mas os dois falam de dados.</em></div>

        <p style="font-size:13.5px;color:var(--text-secondary);line-height:1.65;max-width:720px;width:100%;margin-bottom:24px;">
          Os termos se sobrepõem nos títulos de vagas e nas apresentações de vendas. Entender onde cada disciplina começa e termina evita contratar o profissional errado — e evita prometer ao conselho o que você não vai entregar.
        </p>

        <div class="arch-grid">
          <div class="arch-card" style="border-top:3px solid var(--accent);">
            <div class="arch-tag" style="color:var(--accent)">Business Intelligence</div>
            <div class="arch-h">O que aconteceu?</div>
            <div class="arch-p">Dashboards, relatórios e KPIs sobre dados históricos e presentes. Responde perguntas de negócio com dados estruturados. Menor complexidade técnica.</div>
          </div>
          <div class="arch-card" style="border-top:3px solid var(--warn);">
            <div class="arch-tag" style="color:var(--warn)">Data Mining</div>
            <div class="arch-h">O que está escondido?</div>
            <div class="arch-p">Extrai padrões e relações ocultas em grandes conjuntos de dados. Identifica comportamentos de compra, segmentações e anomalias. Foco em dados estruturados.</div>
          </div>
          <div class="arch-card" style="border-top:3px solid var(--accent);">
            <div class="arch-tag" style="color:var(--accent)">Data Science</div>
            <div class="arch-h">O que podemos aprender?</div>
            <div class="arch-p">Área multidisciplinar: estatística, programação, visualização e ML. Cobre todo o ciclo do dado — da coleta ao insight. Alta complexidade técnica.</div>
          </div>
          <div class="arch-card" style="border-top:3px solid var(--warn);">
            <div class="arch-tag" style="color:var(--warn)">Machine Learning</div>
            <div class="arch-h">O que vai acontecer?</div>
            <div class="arch-p">Modelos que aprendem com dados sem programação explícita. Forecast, classificação, recomendação. Subconjunto da IA — exige programação especializada.</div>
          </div>
          <div class="arch-card" style="border-top:3px solid var(--ok);">
            <div class="arch-tag" style="color:var(--ok)">Big Data</div>
            <div class="arch-h">Como processar em escala?</div>
            <div class="arch-p">Volumes, variedade e velocidade que excedem a capacidade dos bancos tradicionais. Tecnologias: Spark, Hadoop, Kafka. Foco em infraestrutura e processamento distribuído.</div>
          </div>
          <div class="arch-card" style="border-top:3px solid var(--accent-hover);">
            <div class="arch-tag" style="color:var(--accent-hover)">Deep Learning</div>
            <div class="arch-h">Como aprender representações?</div>
            <div class="arch-p">Subcampo de ML baseado em redes neurais profundas. Domina tarefas de imagem, voz e texto. Exige grande volume de dados e capacidade computacional.</div>
          </div>
          <div class="arch-card" style="border-top:3px solid var(--accent-hover);">
            <div class="arch-tag">Inteligência Artificial</div>
            <div class="arch-h">Como simular decisão?</div>
            <div class="arch-p">Campo mais amplo: cria sistemas que simulam inteligência humana. ML e Deep Learning são subconjuntos. Automatiza processos e habilita tomada de decisão autônoma.</div>
          </div>
        </div>

        <!-- Summary table -->
        <div class="result-wrap">
          <div class="result-label">Resumo rápido — orientação prática</div>
          <table class="result-tbl">
            <thead>
              <tr>
                <th>Área</th>
                <th class="bi-col">Pergunta central</th>
                <th>Dados</th>
                <th>Programação</th>
                <th>Complexidade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>BI</strong></td><td>O que aconteceu?</td><td>Estruturado</td><td>Baixa</td><td>Menor</td></tr>
              <tr><td><strong>Data Mining</strong></td><td>O que está oculto?</td><td>Estruturado</td><td>Média</td><td>Moderada</td></tr>
              <tr><td><strong>Data Science</strong></td><td>O que aprendemos?</td><td>Todos os tipos</td><td>Alta</td><td>Alta</td></tr>
              <tr><td><strong>ML</strong></td><td>O que vai acontecer?</td><td>Estrut. / não-estrut.</td><td>Muito alta</td><td>Alta</td></tr>
              <tr><td><strong>Big Data</strong></td><td>Como processar em escala?</td><td>Todos os tipos</td><td>Variável</td><td>Alta</td></tr>
              <tr><td><strong>Deep Learning</strong></td><td>Como aprender padrões?</td><td>Imagem, texto, voz</td><td>Muito alta</td><td>Muito alta</td></tr>
              <tr><td><strong>AI</strong></td><td>Como automatizar decisões?</td><td>Todos os tipos</td><td>Muito alta</td><td>Muito alta</td></tr>
            </tbody>
          </table>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">&#8592; Categorias de Análise</button>
          <button class="pn-btn pn-fwd" data-show="p6">Tableau &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — TABLEAU E FERRAMENTAS BI ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title">Do dado ao<br><em>painel em minutos.</em></div>

        <p style="font-size:13.5px;color:var(--text-secondary);line-height:1.65;max-width:720px;width:100%;margin-bottom:24px;">
          Ferramentas BI modernas eliminam a necessidade de código para construir visualizações. O desafio não é técnico — é saber <strong style="color:var(--text-primary)">qual pergunta responder</strong> e <strong style="color:var(--text-primary)">para quem</strong>.
        </p>

        <!-- Ferramentas -->
        <div class="ov-section-tag" style="margin-bottom:14px;">Principais Ferramentas</div>
        <div class="arch-grid" style="margin-bottom:28px;">
          <div class="arch-card" style="border-left:3px solid #e98700;">
            <div class="arch-tag" style="color:var(--warn)">Tableau</div>
            <div class="arch-h">Drag-and-drop + profundidade</div>
            <div class="arch-p">Referência de mercado em visualização analítica. Tableau Public (gratuito) conecta planilhas e gera dashboards interativos sem código. Tableau Desktop para ambientes corporativos.</div>
          </div>
          <div class="arch-card" style="border-left:3px solid #f2a800;">
            <div class="arch-tag" style="color:var(--warn)">Power BI</div>
            <div class="arch-h">Ecossistema Microsoft</div>
            <div class="arch-p">Nativo no ecossistema Microsoft (Excel, Azure, Teams). Mais acessível para empresas que já usam Office 365. DAX como linguagem de cálculo.</div>
          </div>
          <div class="arch-card" style="border-left:3px solid #4285f4;">
            <div class="arch-tag" style="color:var(--accent)">Looker / Looker Studio</div>
            <div class="arch-h">Ecossistema Google</div>
            <div class="arch-p">Looker Studio (ex-Data Studio) é gratuito e conecta Google Analytics, Sheets e BigQuery nativamente. Ideal para projetos com foco em dados Google.</div>
          </div>
        </div>

        <!-- Exemplo -->
        <div class="ov-section-tag" style="margin-bottom:16px;">Exemplo — Dashboard de Marketing no Tableau</div>

        <div class="step-list">
          <div class="step">
            <div class="step-num">1</div>
            <div>
              <div class="step-title">Obtenha os Dados</div>
              <div class="step-text" style="display:flex;flex-direction:column;gap:6px;margin-top:6px;">
                <a class="ext-link" href="https://dbdiagram.io/d/Chinook-DB-66db2459eef7e08f0eeedaec" target="_blank" rel="noopener">&#8599; Chinook DB</a>
                <a class="ext-link" href="https://dbdiagram.io/d/Chinook-DW-67d8936b75d75cc8446e2964" target="_blank" rel="noopener">&#8599; Chinook DW</a>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div>
              <div class="step-title">Conecte ao Tableau Public</div>
              <div class="step-text" style="margin-top:6px;">
                <a class="ext-link" href="https://public.tableau.com" target="_blank" rel="noopener">&#8599; Tableau Public</a>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div>
              <div class="step-title">Crie os KPIs Principais</div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <div>
              <div class="step-title">Monte o Dashboard</div>
              <div class="step-text" style="margin-top:6px;">
                <a class="ext-link" href="recursos/Chinook_Analytics_Dashboard.html" target="_blank" rel="noopener">&#8599; Chinook Analytics Dashboard</a>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">5</div>
            <div>
              <div class="step-title">Teste com as Perguntas de Negócio</div>
            </div>
          </div>
        </div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Tableau vs Power BI</div>
            <div class="kp-text">Tableau tem a melhor experiência de visualização e exploração. Power BI ganha em integração com Excel e custo (incluído no Microsoft 365). Para projetos acadêmicos, Tableau Public é gratuito e publicável.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">O erro mais comum</div>
            <div class="kp-text">Colocar todas as variáveis do dataset no dashboard. O usuário se perde e toma pior decisão do que sem dashboard. Menos é mais — especialmente para público executivo.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">&#8592; Ecossistema</button>
          <button class="pn-btn pn-fwd" data-show="p7">IA e Visualização &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — IA E VISUALIZAÇÃO ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">A IA sugere o gráfico.<br><em>Você conhece o conselho.</em></div>

        <div class="ai-compare">
          <div class="ai-card can">
            <div class="ai-card-tag">O que a IA faz bem</div>
            <ul class="ai-list">
              <li>Sugerir o tipo de gráfico mais eficaz para um dado e audiência específicos</li>
              <li>Apontar quando uma visualização escolhida distorce a percepção dos dados</li>
              <li>Gerar código de visualização (Python/matplotlib, Vega-Lite, Tableau Calculated Fields)</li>
              <li>Propor paletas de cores acessíveis para daltônicos</li>
              <li>Explicar por que um gráfico de pizza raramente é a melhor escolha</li>
            </ul>
          </div>
          <div class="ai-card must">
            <div class="ai-card-tag">O que o humano decide</div>
            <ul class="ai-list">
              <li>Qual é a pergunta central — a IA não conhece os objetivos da reunião</li>
              <li>O nível de detalhe adequado para a audiência (conselho vs. analista)</li>
              <li>Se o insight principal deve ser destacado ou descoberto pelo usuário</li>
              <li>Se os dados realmente suportam a narrativa que o dashboard conta</li>
              <li>O contexto político e organizacional de como o dado será recebido</li>
            </ul>
          </div>
        </div>

        <!-- Prompt para melhor gráfico -->
        <div class="sql-wrap" style="margin-bottom:8px;">
          <div class="sql-header">
            <div class="sql-label">Exemplo de prompt — qual gráfico usar?</div>
            <button class="copy-btn" data-copy="c-p7a">Copiar</button>
          </div>
          <div class="sql-block"><code id="c-p7a"><span class="cm">Contexto: estou construindo um dashboard para a diretora de marketing
da SoundByte apresentar ao conselho da empresa. O público são
executivos sem background técnico que tomam decisões em 3 minutos.

Pergunta: para mostrar a evolução da taxa de conversão mensal
comparada com a meta trimestral, qual tipo de visualização é
mais eficaz para esse público e por quê?

Por favor: recomende 1-2 tipos de gráfico, explique os prós e
contras de cada um neste contexto específico e indique qual
configuração (cores, anotações, eixos) maximiza a clareza.</span></code></div>
        </div>

        <div style="font-size:13px;color:var(--text-secondary);line-height:1.6;width:100%;max-width:720px;margin-bottom:28px;">
          <strong style="color:var(--text-primary);">Por que esse prompt funciona:</strong> especifica a audiência (executivos), o contexto (3 minutos, sem background técnico), a métrica exata (taxa de conversão mensal vs. meta trimestral) e pede configuração detalhada. A IA responde com precisão proporcional ao contexto que recebe.
        </div>

        <!-- Resposta esperada da IA -->
        <div class="sql-wrap" style="margin-bottom:24px;">
          <div class="sql-header">
            <div class="sql-label">Resposta esperada — recomendação da IA</div>
            <button class="copy-btn" data-copy="c-p7b">Copiar</button>
          </div>
          <div class="sql-block"><code id="c-p7b"><span class="cm">Recomendação principal: Gráfico de linhas com linha de referência

Motivo: para um público executivo vendo tendência mensal vs. meta,
o gráfico de linhas é superior porque:
  • A mente humana lê tendências em linhas mais rápido que em barras
  • A meta trimestral aparece como linha horizontal pontilhada
  • A área entre a linha real e a meta comunica "acima/abaixo" visualmente

Configuração recomendada:
  - Linha de conversão real: cor primária da marca (ex: crimson)
  - Linha de meta: cinza pontilhado, com rótulo "Meta Q2: 3,0%"
  - Sombra vermelha quando abaixo da meta, verde quando acima
  - Apenas 3 rótulos de dados: início, máximo e ponto atual
  - Título como pergunta: "Estamos atingindo a meta de conversão?"

Alternativa: Bullet Chart (gráfico de bala de Tufte)
Ideal para comparar um valor único contra meta e histórico.
Mais compacto — cabe em um KPI card sem perder contexto.</span></code></div>
        </div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Gráfico de pizza — use com cuidado</div>
            <div class="kp-text">Humanos são ruins em comparar ângulos. Se você tem mais de 3 categorias, troque a pizza por um gráfico de barras horizontais ordenado por valor. A comparação fica imediatamente mais clara.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--accent-hover)">O título é a conclusão</div>
            <div class="kp-text">"Conversão por mês" é um título descritivo. "Taxa de conversão cresceu 18% desde janeiro" é um título analítico — já entrega o insight. Para público executivo, sempre prefira o segundo.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Acessibilidade</div>
            <div class="kp-text">8% da população masculina tem algum grau de daltonismo. Nunca use verde e vermelho como única diferença entre dois elementos críticos. Use textura, forma ou rótulo como redundância.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p6">&#8592; Tableau</button>
          <button class="pn-btn pn-fwd" data-show="menu">Início &#8594;</button>
        </div>
      </div>
    </div>`;
