GBDBI.content["aula-01"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gestão BD &amp; BI</div>
        <div class="m-title">Aula 1 — O Dado que<br>Você Não <em>Enxerga</em></div>
        <div class="m-sub">Dado como Ativo · Informação · Decisão · Estrutura de Dados</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">O que você vai aprender hoje — cinco objetivos de aprendizagem.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Fontes Geradoras de Dados</div><p class="mc-p">As três origens de todos os dados: pessoas, máquinas e corporações.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">Dado × Informação × Decisão</div><p class="mc-p">Como o contexto transforma números brutos em decisões de negócio.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">Dado Operacional vs. Analítico</div><p class="mc-p">OLTP e OLAP: a mesma base, propósitos completamente diferentes.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p3b"><div class="mc-num">03b</div><div class="mc-h">OLAP vs. OLTP em 7 Critérios</div><p class="mc-p">Finalidade, fonte, estrutura, modelo, volume, tempo de resposta e uso.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">Jornada dos Dados</div><p class="mc-p">Do dado bruto à decisão: o pipeline de gestão de dados.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">O que é um Banco de Dados?</div><p class="mc-p">Definição, características e o papel do SGBD.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">06</div><div class="mc-h">Tipos de Bancos de Dados</div><p class="mc-p">Do IMS ao NoSQL: panorama dos principais sistemas.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">07</div><div class="mc-h">A Estrutura Determina as Perguntas</div><p class="mc-p">Como a arquitetura do BD limita as perguntas possíveis de negócio.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p8"><div class="mc-num">08</div><div class="mc-h">Vaidade vs. Acionável</div><p class="mc-p">O teste que separa a métrica que impressiona da que muda uma decisão.</p><span class="mc-arrow">↗</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que você vai<br><em>aprender hoje.</em></div>
        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Reconhecer as três fontes geradoras de dados (pessoas, máquinas, corporações) e os principais tipos de bancos de dados, associando cada um às suas características.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar a cadeia dado → informação → decisão e distinguir o uso operacional (OLTP) do analítico (OLAP) em situações concretas de negócio.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Classificar exemplos de fontes, dados e sistemas de acordo com as categorias apresentadas e mapear a jornada de um dado em um processo real.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Examinar como a estrutura de um banco de dados determina quais perguntas de negócio podem ou não ser respondidas, identificando lacunas arquiteturais.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Julgar se uma arquitetura de dados é adequada para suportar um determinado processo de decisão ou análise, argumentando com base nos conceitos da aula.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">← Início</button>
          <button class="pn-btn pn-fwd" data-show="p1">Fontes de Dados →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — FONTES GERADORAS ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">Três origens.<br><em>Todos os dados.</em></div>
        <div class="diagram">
          <div class="fonte-rows">
            <div class="fonte-row">
              <img src="recursos/fig-1-1-pessoas.jpg" alt="Pessoas gerando dados: redes sociais, transações, localização, comportamento digital." loading="lazy">
              <div class="fonte-desc">
                <div class="kp-tag">Pessoas</div>
                <div class="kp-text">Redes sociais, transações, localização, comportamento digital.</div>
              </div>
            </div>
            <div class="fonte-row">
              <img src="recursos/fig-1-2-maquinas.jpg" alt="Máquinas gerando dados: sensores IoT, drones, câmeras, equipamentos industriais." loading="lazy">
              <div class="fonte-desc">
                <div class="kp-tag" style="color:var(--accent-hover)">Máquinas</div>
                <div class="kp-text">Sensores IoT, drones, câmeras, equipamentos industriais.</div>
              </div>
            </div>
            <div class="fonte-row">
              <img src="recursos/fig-1-3-corporate.jpg" alt="Corporações gerando dados: ERP, CRM, sistemas transacionais, registros financeiros." loading="lazy">
              <div class="fonte-desc">
                <div class="kp-tag">Corporações</div>
                <div class="kp-text">ERP, CRM, sistemas transacionais, registros financeiros.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">← Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">Dado × Informação →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — DADO × INFORMAÇÃO × DECISÃO ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">Do número bruto<br>à <em>decisão de negócio</em>.</div>
        <div class="diagram">
          <svg viewBox="0 0 784 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hierarquia dado, informação, conhecimento e decisão">
            <rect x="2" y="55" width="150" height="90" rx="12" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="77" y="82" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.2" font-weight="700">DADO</text>
            <text x="77" y="122" text-anchor="middle" fill="#7a1a1a" font-size="32" font-family="system-ui" font-weight="800">847</text>
            <line x1="154" y1="100" x2="198" y2="100" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="198,93 212,100 198,107" fill="#c8aeaa"/>
            <text x="182" y="86" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui">contexto</text>
            <rect x="212" y="55" width="150" height="90" rx="12" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="287" y="82" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.2" font-weight="700">INFORMAÇÃO</text>
            <text x="287" y="108" text-anchor="middle" fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">vendas caíram 12%</text>
            <text x="287" y="126" text-anchor="middle" fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">em março</text>
            <line x1="364" y1="100" x2="408" y2="100" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="408,93 422,100 408,107" fill="#c8aeaa"/>
            <text x="392" y="86" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui">padrão</text>
            <rect x="422" y="55" width="150" height="90" rx="12" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="497" y="82" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.2" font-weight="700">CONHECIMENTO</text>
            <text x="497" y="108" text-anchor="middle" fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">a queda se repete</text>
            <text x="497" y="126" text-anchor="middle" fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">todo março</text>
            <line x1="574" y1="100" x2="618" y2="100" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="618,93 632,100 618,107" fill="#c8aeaa"/>
            <text x="602" y="86" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui">pergunta</text>
            <rect x="632" y="55" width="150" height="90" rx="12" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="707" y="82" text-anchor="middle" fill="#7a1a1a" font-size="9" font-family="system-ui" letter-spacing="2.2" font-weight="700">DECISÃO</text>
            <circle cx="707" cy="115" r="17" fill="none" stroke="#7a1a1a" stroke-width="2"/>
            <polyline points="698,115 704,122 716,107" fill="none" stroke="#7a1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="kps">
          <div class="kp"><div class="kp-tag">Dado</div><div class="kp-text">Número bruto. Sem contexto, não responde perguntas.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Informação</div><div class="kp-text">Dado + contexto + significado. Responde "o quê" e "quando".</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Conhecimento</div><div class="kp-text">Informação + padrão + experiência. Responde "por quê" e permite antecipar.</div></div><div class="kp"><div class="kp-tag">Decisão</div><div class="kp-text">Conhecimento + pergunta certa = ação de negócio.</div></div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">← Fontes de Dados</button>
          <button class="pn-btn pn-fwd" data-show="p3">Dado Operacional →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — OPERACIONAL vs ANALÍTICO ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">A mesma base.<br><em>Dois propósitos.</em></div>
        <div class="diagram">
          <svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg">
            <rect x="18" y="16" width="308" height="258" rx="14" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <rect x="18" y="16" width="308" height="56" rx="14" fill="#7a1a1a" opacity=".06"/><rect x="18" y="56" width="308" height="16" fill="#7a1a1a" opacity=".06"/>
            <text x="172" y="46" text-anchor="middle" fill="#7a1a1a" font-size="14" font-weight="800" font-family="system-ui" letter-spacing="1.5">OLTP</text>
            <text x="172" y="65" text-anchor="middle" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2">OPERACIONAL</text>
            <circle cx="52" cy="104" r="4" fill="#7a1a1a"/><text x="66" y="108" fill="#1a0d0d" font-size="13" font-family="system-ui">Registra transações</text>
            <circle cx="52" cy="134" r="4" fill="#7a1a1a"/><text x="66" y="138" fill="#1a0d0d" font-size="13" font-family="system-ui">Alta velocidade de escrita</text>
            <circle cx="52" cy="164" r="4" fill="#7a1a1a"/><text x="66" y="168" fill="#1a0d0d" font-size="13" font-family="system-ui">Dados atuais</text>
            <circle cx="52" cy="194" r="4" fill="#7a1a1a"/><text x="66" y="198" fill="#1a0d0d" font-size="13" font-family="system-ui">Tabelas normalizadas</text>
            <circle cx="52" cy="224" r="4" fill="#7a1a1a"/><text x="66" y="228" fill="#1a0d0d" font-size="13" font-family="system-ui">Ex: ERP, e-commerce, CRM</text>
            <text x="350" y="152" text-anchor="middle" fill="#dfc9c0" font-size="13" font-weight="800" font-family="system-ui">VS</text>
            <rect x="374" y="16" width="308" height="258" rx="14" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <rect x="374" y="16" width="308" height="56" rx="14" fill="#b83030" opacity=".06"/><rect x="374" y="56" width="308" height="16" fill="#b83030" opacity=".06"/>
            <text x="528" y="46" text-anchor="middle" fill="#b83030" font-size="14" font-weight="800" font-family="system-ui" letter-spacing="1.5">OLAP</text>
            <text x="528" y="65" text-anchor="middle" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2">ANALÍTICO</text>
            <circle cx="408" cy="104" r="4" fill="#b83030"/><text x="422" y="108" fill="#1a0d0d" font-size="13" font-family="system-ui">Responde perguntas</text>
            <circle cx="408" cy="134" r="4" fill="#b83030"/><text x="422" y="138" fill="#1a0d0d" font-size="13" font-family="system-ui">Alta velocidade de leitura</text>
            <circle cx="408" cy="164" r="4" fill="#b83030"/><text x="422" y="168" fill="#1a0d0d" font-size="13" font-family="system-ui">Dados históricos</text>
            <circle cx="408" cy="194" r="4" fill="#b83030"/><text x="422" y="198" fill="#1a0d0d" font-size="13" font-family="system-ui">Estrutura dimensional</text>
            <circle cx="408" cy="224" r="4" fill="#b83030"/><text x="422" y="228" fill="#1a0d0d" font-size="13" font-family="system-ui">Ex: Data Warehouse, BI</text>
          </svg>
        </div>
        <div class="diagram">
          <img src="recursos/fig-1-4-transacional-analitico.png" alt="Comparação visual entre processamento transacional (OLTP) e processamento analítico (OLAP)." loading="lazy" style="width:100%;height:auto;">
        </div>
        <div class="kps">
          <div class="kp"><div class="kp-tag">Mesma base</div><div class="kp-text">Dados transacionais alimentam os sistemas analíticos após integração.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Propósitos</div><div class="kp-text">Operacional: executar o negócio. Analítico: entender e decidir.</div></div><div class="kp"><div class="kp-tag">Granularidade</div><div class="kp-text">O operacional guarda o evento individual — um pedido, um clique. O analítico agrega por dia, região ou produto. Escolher a granularidade errada é perder a pergunta antes de fazê-la.</div></div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">← Dado × Informação</button>
          <button class="pn-btn pn-fwd" data-show="p3b">OLAP vs. OLTP →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3B — ACCORDION OLAP vs OLTP ═══ -->
    <div id="p3b" class="page">
      <div class="t-body">
        <div class="t-title">Sete critérios.<br><em>Duas lógicas.</em></div>
        <p class="acc-hint">Clique em cada critério para revelar a comparação.</p>
        <div class="accordion">
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Finalidade</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Analisar grandes volumes de dados para apoiar a tomada de decisões.</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Gerenciar e processar transações em tempo real.</div></div></div></div>
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Fonte de dados</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Dados históricos e agregados de várias fontes.</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Dados transacionais e em tempo real de uma única fonte.</div></div></div></div>
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Estrutura de dados</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Bancos de dados multidimensionais (cubos) ou relacionais.</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Bancos de dados relacionais.</div></div></div></div>
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Modelo de dados</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Esquema em estrela, esquema de floco de neve ou outros modelos analíticos.</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Modelos normalizados ou desnormalizados.</div></div></div></div>
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Volume de dados</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Grandes requisitos de armazenamento — terabytes (TB) e petabytes (PB).</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Requisitos comparativamente menores — gigabytes (GB).</div></div></div></div>
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Tempo de resposta</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Tempos de resposta mais longos — normalmente segundos ou minutos.</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Tempos de resposta mais curtos — normalmente milissegundos.</div></div></div></div>
          <div class="acc-item"><div class="acc-trigger"><span class="acc-criterion">Aplicativos de exemplo</span><span class="acc-icon">+</span></div><div class="acc-body"><div class="acc-col"><div class="acc-col-tag olap">OLAP</div><div class="acc-col-text">Analisar tendências, prever comportamento do cliente e identificar lucratividade.</div></div><div class="acc-col"><div class="acc-col-tag oltp">OLTP</div><div class="acc-col-text">Processar pagamentos, gerenciar dados de clientes e processar pedidos.</div></div></div></div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">← Dado Operacional</button>
          <button class="pn-btn pn-fwd" data-show="p4">Jornada dos Dados →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — JORNADA DOS DADOS ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">Do dado bruto<br>à <em>decisão</em>.</div>
        <div class="diagram">
          <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="64" width="110" height="62" rx="10" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="65" y="88" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="1.5" font-weight="700">01</text>
            <text x="65" y="110" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="700">Geração</text>
            <text x="65" y="152" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">Fontes</text>
            <line x1="122" y1="95" x2="142" y2="95" stroke="#dfc9c0" stroke-width="1.5"/><polygon points="142,89 154,95 142,101" fill="#c8aeaa"/>
            <rect x="156" y="64" width="110" height="62" rx="10" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5" stroke-opacity=".5"/>
            <text x="211" y="88" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="1.5" font-weight="700">02</text>
            <text x="211" y="107" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui" font-weight="700">Armazena-</text>
            <text x="211" y="121" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui" font-weight="700">mento</text>
            <text x="211" y="152" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">BD / Lake</text>
            <line x1="268" y1="95" x2="288" y2="95" stroke="#dfc9c0" stroke-width="1.5"/><polygon points="288,89 300,95 288,101" fill="#c8aeaa"/>
            <rect x="302" y="64" width="110" height="62" rx="10" fill="#ffffff" stroke="#b83030" stroke-width="1.5"/>
            <text x="357" y="88" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="1.5" font-weight="700">03</text>
            <text x="357" y="110" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="700">Integração</text>
            <text x="357" y="152" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">ETL / DW</text>
            <line x1="414" y1="95" x2="434" y2="95" stroke="#dfc9c0" stroke-width="1.5"/><polygon points="434,89 446,95 434,101" fill="#c8aeaa"/>
            <rect x="448" y="64" width="110" height="62" rx="10" fill="#ffffff" stroke="#b83030" stroke-width="1.5" stroke-opacity=".5"/>
            <text x="503" y="88" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="1.5" font-weight="700">04</text>
            <text x="503" y="110" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="700">Análise</text>
            <text x="503" y="152" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">BI / ML</text>
            <line x1="560" y1="95" x2="580" y2="95" stroke="#dfc9c0" stroke-width="1.5"/><polygon points="580,89 592,95 580,101" fill="#c8aeaa"/>
            <rect x="594" y="64" width="98" height="62" rx="10" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="643" y="88" text-anchor="middle" fill="#7a1a1a" font-size="9" font-family="system-ui" letter-spacing="1.5" font-weight="700">05</text>
            <text x="643" y="110" text-anchor="middle" fill="#7a1a1a" font-size="12" font-family="system-ui" font-weight="700">Decisão</text>
            <text x="643" y="152" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">Gestão</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp"><div class="kp-tag">Governança</div><div class="kp-text">Políticas de qualidade e uso dos dados permeiam cada etapa.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Integração</div><div class="kp-text">Múltiplos sistemas transacionais consolidados em Data Warehouse ou Data Lake.</div></div>
          <div class="kp"><div class="kp-tag">Modelo de dados</div><div class="kp-text">Mapeia relações para atender às necessidades de negócio.</div></div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p3b">← OLAP vs. OLTP</button>
          <button class="pn-btn pn-fwd" data-show="p5">Banco de Dados →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — BANCO DE DADOS ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">Quatro <em>características</em>.<br>Uma definição.</div>
        <div class="diagram">
          <svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg">
            <line x1="298" y1="116" x2="190" y2="66" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="402" y1="116" x2="510" y2="66" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="298" y1="208" x2="190" y2="260" stroke="#dfc9c0" stroke-width="1.5"/>
            <line x1="402" y1="208" x2="510" y2="260" stroke="#dfc9c0" stroke-width="1.5"/>
            <circle cx="350" cy="162" r="64" fill="#ffffff" stroke="#7a1a1a" stroke-width="2"/>
            <text x="350" y="154" text-anchor="middle" fill="#1a0d0d" font-size="13" font-weight="800" font-family="system-ui">BANCO DE</text>
            <text x="350" y="175" text-anchor="middle" fill="#7a1a1a" font-size="13" font-weight="800" font-family="system-ui">DADOS</text>
            <rect x="80" y="28" width="175" height="54" rx="10" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="167" y="50" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">ESTRUTURADO</text>
            <text x="167" y="69" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui">Dados organizados</text>
            <rect x="445" y="28" width="175" height="54" rx="10" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="532" y="50" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">RELACIONADO</text>
            <text x="532" y="69" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui">Dados conectados</text>
            <rect x="80" y="246" width="175" height="54" rx="10" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="167" y="268" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">ELETRÔNICO</text>
            <text x="167" y="287" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui">Armazenado digitalmente</text>
            <rect x="445" y="246" width="175" height="54" rx="10" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="532" y="268" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">ACESSÍVEL</text>
            <text x="532" y="287" text-anchor="middle" fill="#1a0d0d" font-size="12" font-family="system-ui">Gerenciado via SGBD</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp"><div class="kp-tag">SGBD</div><div class="kp-text">Cria, modifica e gerencia objetos: tabelas, views, índices, schemas.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Operações</div><div class="kp-text">Gerencia requisições, transações e controle de acesso concorrente.</div></div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">← Jornada dos Dados</button>
          <button class="pn-btn pn-fwd" data-show="p6">Tipos de BD →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — TIPOS DE BD ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title"><em>Seis categorias</em>.<br>Da herança ao presente.</div>
        <table class="tbl">
          <thead><tr><th>Categoria</th><th>Exemplos</th><th>Características</th></tr></thead>
          <tbody>
            <tr><td>Dinossauros</td><td>IMS, ADABAS</td><td>Primeiras implementações. Sistemas legados.</td></tr>
            <tr><td>Elefantes</td><td>Oracle, IBM, Teradata</td><td>Maduros, robustos, rodam em mainframes e minicomputadores.</td></tr>
            <tr><td>Open Source</td><td>MySQL, PostgreSQL, MariaDB</td><td>Código aberto, baixo custo, ampla adoção.</td></tr>
            <tr><td>In-Memory</td><td>SAP HANA</td><td>Dados na RAM: acesso muito mais rápido que discos.</td></tr>
            <tr><td>NoSQL</td><td>MongoDB, Cassandra, DynamoDB</td><td>Dados não estruturados. Escala com a explosão digital.</td></tr>
            <tr><td>DBaaS</td><td>AWS RDS, Azure SQL</td><td>Banco como serviço em cloud. Deploy rápido.</td></tr>
          </tbody>
        </table>
        <div class="ref-links">
          <a href="https://db-engines.com/en/ranking" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> DB-Engines Ranking</a>
          <a href="https://dbdb.io/" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Database of Databases</a>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">← Banco de Dados</button>
          <button class="pn-btn pn-fwd" data-show="p7">Estrutura e Perguntas →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — A ESTRUTURA DETERMINA AS PERGUNTAS ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">A arquitetura<br><em>limita</em> as perguntas.</div>
        <div class="diagram">
          <svg viewBox="0 0 700 372" xmlns="http://www.w3.org/2000/svg">
            <rect x="90" y="18" width="520" height="80" rx="13" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="90" y="18" width="520" height="48" rx="13" fill="#7a1a1a" opacity=".05"/><rect x="90" y="50" width="520" height="16" fill="#7a1a1a" opacity=".05"/>
            <text x="200" y="52" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2" font-weight="700">CAMADA 1</text>
            <text x="200" y="76" fill="#1a0d0d" font-size="18" font-family="system-ui" font-weight="800">Arquitetura do Banco de Dados</text>
            <ellipse cx="570" cy="42" rx="26" ry="9" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="544" y="42" width="52" height="24" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <ellipse cx="570" cy="66" rx="26" ry="9" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <line x1="350" y1="100" x2="350" y2="132" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="343,132 350,145 357,132" fill="#c8aeaa"/>
            <text x="366" y="122" fill="#8a6060" font-size="10.5" font-family="system-ui" font-style="italic">determina</text>
            <rect x="90" y="148" width="520" height="80" rx="13" fill="#ffffff" stroke="#b83030" stroke-width="1.5"/>
            <rect x="90" y="148" width="520" height="48" rx="13" fill="#b83030" opacity=".05"/><rect x="90" y="180" width="520" height="16" fill="#b83030" opacity=".05"/>
            <text x="200" y="182" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2" font-weight="700">CAMADA 2</text>
            <text x="200" y="206" fill="#1a0d0d" font-size="18" font-family="system-ui" font-weight="800">Perguntas Possíveis</text>
            <text x="578" y="208" text-anchor="middle" fill="#b83030" font-size="44" font-family="system-ui" font-weight="800">?</text>
            <line x1="350" y1="230" x2="350" y2="262" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="343,262 350,275 357,262" fill="#c8aeaa"/>
            <text x="366" y="252" fill="#8a6060" font-size="10.5" font-family="system-ui" font-style="italic">orienta</text>
            <rect x="90" y="278" width="520" height="80" rx="13" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="90" y="278" width="520" height="48" rx="13" fill="#7a1a1a" opacity=".05"/><rect x="90" y="310" width="520" height="16" fill="#7a1a1a" opacity=".05"/>
            <text x="200" y="312" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2" font-weight="700">CAMADA 3</text>
            <text x="200" y="336" fill="#1a0d0d" font-size="18" font-family="system-ui" font-weight="800">Decisões de Negócio</text>
            <circle cx="574" cy="318" r="22" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <circle cx="574" cy="318" r="12" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <circle cx="574" cy="318" r="4" fill="#7a1a1a"/>
          </svg>
        </div>
        <div class="kps">
          <div class="kp"><div class="kp-tag">Para o gestor</div><div class="kp-text">Entender a estrutura do BD é saber quais perguntas são possíveis de fazer.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Consequência</div><div class="kp-text">Perguntas fora da arquitetura exigem reestruturação ou novas fontes.</div></div>
          <div class="kp"><div class="kp-tag">Implicação prática</div><div class="kp-text">Antes de decidir, verifique se os dados necessários estão estruturados.</div></div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p6">← Tipos de BD</button>
          <button class="pn-btn pn-fwd" data-show="p8">Vaidade vs. Acionável →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P8 — MÉTRICAS DE VAIDADE vs. ACIONÁVEIS ═══ -->
    <div id="p8" class="page">
      <div class="t-body">
        <div class="t-title">Número que impressiona<br>não é número que <em>decide</em>.</div>

        <div class="callout">
          <div class="callout-tag">O critério</div>
          Uma métrica só é <strong>acionável</strong> se a resposta a "e daí?" for uma ação concreta.
          Se ela apenas sobe e faz todo mundo se sentir bem, é <strong>métrica de vaidade</strong>.
          A diferença não está no número — está em o que ele permite decidir.
        </div>

        <div class="vanity-row">
          <div class="kp vanity-bad">
            <div class="vanity-tag">Métrica de vaidade</div>
            <div class="vanity-h">120 mil seguidores</div>
            <p class="vanity-p">Cresce sempre, nunca cai e não distingue quem compra de quem apenas observa. Nenhuma decisão de negócio muda em função dela.</p>
          </div>
          <div class="kp vanity-good">
            <div class="vanity-tag">Métrica acionável</div>
            <div class="vanity-h">Taxa de conversão por canal</div>
            <p class="vanity-p">Aponta onde investir e onde cortar verba. Uma queda tem causa rastreável e uma resposta possível.</p>
          </div>
        </div>

        <div class="vanity-sep"></div>

        <div class="data-table-wrap">
          <table class="tbl">
            <thead>
              <tr><th>Pergunta de teste</th><th>Vaidade</th><th>Acionável</th></tr>
            </thead>
            <tbody>
              <tr><td>Ela pode cair?</td><td class="bad">Quase nunca</td><td class="good">Sim, e isso é um alerta</td></tr>
              <tr><td>Aponta uma causa?</td><td class="bad">Não</td><td class="good">Sim, é segmentável</td></tr>
              <tr><td>Muda alguma decisão?</td><td class="bad">Não</td><td class="good">Sim, define onde agir</td></tr>
              <tr><td>Tem dono?</td><td class="bad">Ninguém responde por ela</td><td class="good">Uma área responde</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-green">
          <div class="callout-tag">Onde isso encontra a arquitetura</div>
          Transformar uma métrica de vaidade em acionável quase sempre exige <strong>dados que o banco ainda não guarda</strong>
          — origem do cadastro, data do primeiro pedido, canal de aquisição. É por isso que a estrutura de dados
          vem antes do dashboard: sem o campo armazenado, a pergunta não tem resposta.
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p7">← Estrutura e Perguntas</button>
          <button class="pn-btn pn-fwd" data-show="menu">Início →</button>
        </div>
      </div>
    </div>`;
