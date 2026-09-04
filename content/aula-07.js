GBDBI.content["aula-07"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gestão BD &amp; BI</div>
        <div class="m-title">Aula 7 — O Guardião<br>dos <em>Ativos</em></div>
        <div class="m-sub">DAMA-DMBOK · LGPD · Segurança · Conformidade</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">Mapa de competências — o que você vai saber fazer ao final desta aula.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Visão Geral da Aula</div><p class="mc-p">Estagiários da SoundByte tem acesso a e-mails, pagamentos e GPS de 800 mil usuários. O risco ainda não virou vazamento — mas pode.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">O que e Governança de Dados</div><p class="mc-p">A definição que cabe em uma frase — e tudo o que a governança não e, mesmo que pareça ser.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">De Dispersos a Estratégicos</div><p class="mc-p">A jornada de dados não governados até ativo estratégico — e os cinco passos para implementar essa transição.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">Os 4 Componentes da Governança</div><p class="mc-p">Organização · Regras · Processos · Ferramentas — os pilares que sustentam um programa de governança maduro.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">Qualidade · Segurança · Privacidade</div><p class="mc-p">Os três pilares operacionais: dado correto, acesso controlado por cargo e uso legal conforme a LGPD.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">06</div><div class="mc-h">As 6 Dimensões da Qualidade</div><p class="mc-p">Acurácia, Completude, Consistência, Tempestividade, Validade e Unicidade — como medir se um dado e confiável.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">07</div><div class="mc-h">Métricas e Impacto nos Negócios</div><p class="mc-p">-52% em violações de compliance, +66% em segurança, +15-25% de ROI tecnológico. O que medir para saber se funciona.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p8"><div class="mc-num">08</div><div class="mc-h">Boas Práticas de Implementação</div><p class="mc-p">Modelos federados, gestão da mudança, governança evolutiva — governança não e um projeto, e um sistema operacional.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p9"><div class="mc-num">09</div><div class="mc-h">Atividade Avaliativa</div><p class="mc-p">Dois grupos, quatro cenários: RBAC + Auditoria (G1) e Política LGPD + Qualidade de Dados (G2).</p><span class="mc-arrow">&#8599;</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que você vai<br><em>saber fazer.</em></div>
        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Nomear os 4 componentes da governança de dados, as 6 dimensões de qualidade e os princípios básicos da LGPD aplicáveis a dados de usuários.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar a diferença entre governança como processo contínuo e projeto pontual — e por que a tecnologia e meio, não fim.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Construir uma matriz RBAC definindo níveis de acesso por cargo para um cenário real, diferenciando leitura, edição e exclusão por tipo de dado.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Identificar as principais falhas de segurança e lacunas de conformidade com a LGPD em uma política de acesso a dados apresentada por outro grupo.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Propor uma política de governança de dados para a SoundByte, com papéis definidos, regras de acesso, processo de auditoria e análise de riscos validada por IA.</div>
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
        <div class="t-title">O risco ainda não<br><em>virou vazamento.</em></div>

        <div class="callout" style="margin-bottom:32px;">
          <div class="callout-tag">O Problema Central</div>
          <p style="font-size:14.5px;line-height:1.75;font-style:italic;">Uma auditoria interna da SoundByte descobriu que estagiários do time de marketing tem acesso direto a base de dados com e-mails, histórico de pagamentos e localização GPS de 800 mil usuários. Um desses estagiários exportou um relatório com dados pessoais para uma planilha pessoal para trabalhar de casa. A empresa pode ser multada em até 2% do faturamento anual. O vazamento ainda não aconteceu. Mas o risco e real.</p>
        </div>

        <div class="disc open" id="disc-importa">
          <button class="disc-trigger" data-toggle="disc-importa">
            <span class="disc-title">Por Que Esta Aula Importa</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <p style="font-size:13.5px;line-height:1.75;margin-bottom:16px;">A aula parte de dois casos reais de empresas que sofreram consequências por ma governança. A pergunta para a turma: em qual desses casos o problema foi técnico? Em qual foi de processo e política? A turma quase sempre percebe que ambos eram <strong>problemas de processo disfarçados de problemas técnicos</strong>.</p>
              <div class="kps">
                <div class="kp"><div class="kp-tag">O erro que parece técnico</div><div class="kp-text">Quando um estagiário acessa dados sensíveis, o problema não e o banco de dados — e que nunca ninguém definiu quem pode ver o que. A falha e de política, não de tecnologia.</div></div>
                <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">A LGPD em vigor</div><div class="kp-text">Desde 2021 a ANPD já aplicou sanções. Multas de até 2% do faturamento, limitadas a R$ 50 milhões por infração, não são hipótese — são realidade para empresas sem governança.</div></div>
                <div class="kp"><div class="kp-tag">Dado como ativo e passivo</div><div class="kp-text">O mesmo dado que gera valor para recomendações pode gerar passivo se mal gerenciado. Governança e o que define se o dado e um ativo ou um risco.</div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="disc" id="disc-overview">
          <button class="disc-trigger" data-toggle="disc-overview">
            <span class="disc-title">Conteúdo, Atividade e IA</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="kps">
                <div class="kp"><div class="kp-tag">Conteúdo Fundamental</div><div class="kp-text">Princípios de governança de dados (<a href="https://www.damadmbok.org/" target="_blank" rel="noopener noreferrer">DAMA-DMBOK</a>), qualidade de dados, segurança, privacidade e conformidade com a LGPD.</div></div>
                <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Atividade Avaliativa</div><div class="kp-text">Em grupos, os alunos redigem uma política simplificada de acesso a dados para a SoundByte, definindo quem pode ler, editar ou excluir informações em cada nível hierárquico.</div></div>
                <div class="kp"><div class="kp-tag">Integração com IA</div><div class="kp-text">A IA atua como "Auditora de Riscos": o grupo submete sua política e recebe análise das três principais falhas de segurança ou lacunas de conformidade com a LGPD.</div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">&#8592; Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">O que e Governança &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — O QUE E GOVERNANÇA ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">Clareza no meio<br><em>da complexidade.</em></div>

        <div class="quote-card">
          <div class="quote-text">"Quem pode fazer <strong>o que</strong> com <strong>quais</strong> dados, sob <strong>quais</strong> condições — escrito em regras, implementado em processos, incorporado em sistemas e continuamente auditado. Isso e governança de dados."</div>
          <div class="quote-sub">Não se trata de tecnologia ou ferramentas — trata-se de criar clareza na complexidade.</div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">O que a governança <strong>não e</strong></div>
        <div class="kps" style="margin-bottom:28px;">
          <div class="kp" style="border-left:3px solid var(--accent-hover);">
            <div class="kp-tag" style="color:var(--accent-hover);">&#10060; Projeto pontual de limpeza</div>
            <div class="kp-text">A qualidade dos dados se degrada continuamente sem um processo permanente de gestão. Limpeza sem processo e obra sem manutenção.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--accent-hover);">
            <div class="kp-tag" style="color:var(--accent-hover);">&#10060; Apenas ferramentas de TI</div>
            <div class="kp-text">Soluções digitais são facilitadoras, não substitutas de processos bem definidos e engajamento organizacional. A ferramenta não governa — as pessoas governam.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--accent-hover);">
            <div class="kp-tag" style="color:var(--accent-hover);">&#10060; Responsabilidade so da TI</div>
            <div class="kp-text">Governança exige colaboração entre áreas de negócio e participação ativa de stakeholders. Se so a TI define padrões, marketing e finanças adotam métricas conflitantes.</div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">A governança como sistema operacional</div>
        <div class="kps" style="margin-bottom:28px;">
          <div class="kp"><div class="kp-tag">Evita o Caos</div><div class="kp-text">Decisões equivocadas por dados inconsistentes entre sistemas. Se vendas e financeiro reportam faturamentos diferentes, ha um problema de governança.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Garante Usabilidade</div><div class="kp-text">Dados confiáveis, controlados e acessíveis para quem precisa — na hora certa e com o nível de permissão adequado ao cargo.</div></div>
        </div>

        <!-- MENTI P2 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            A SoundByte opera três sistemas que reportam "usuários ativos" de forma diferente: o sistema de marketing aponta <strong style="color:var(--warn);">750 mil</strong>, o financeiro registra <strong style="color:var(--warn);">800 mil</strong> e o app indica <strong style="color:var(--warn);">820 mil</strong>. A diretoria quer um único número para o relatório trimestral.
          </div>
          <div class="menti-question">O que essa situação revela sobre a SoundByte?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">O sistema de marketing esta desatualizado e precisa ser substituído</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">A empresa precisa de mais analistas para reconciliar os números manualmente</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">Falta uma política de governança com glossário corporativo e fonte única de verdade</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">E normal que sistemas diferentes mostrem números ligeiramente diferentes</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas</span>
            <a class="menti-cta" href="https://www.menti.com/al9hrkenwaqb" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">&#8592; Visão Geral</button>
          <button class="pn-btn pn-fwd" data-show="p3">De Dispersos a Estratégicos &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — DE DISPERSOS A ESTRATÉGICOS ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">Dados dispersos hoje,<br><em>ativo estratégico amanhã.</em></div>

        <div class="ov-section-tag" style="margin-bottom:16px;">A Jornada — Transformando Dados em Ativo Estratégico</div>

        <div class="diagram">
          <svg viewBox="0 0 720 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;min-width:480px;">
            <rect x="8" y="10" width="158" height="88" rx="10" fill="#e85050"/>
            <text x="87" y="38" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Dados</text>
            <text x="87" y="53" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Dispersos</text>
            <text x="87" y="74" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">Não estruturados</text>
            <text x="87" y="88" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">e desorganizados</text>
            <polygon points="171,55 179,49 179,61" fill="#888"/>
            <rect x="183" y="10" width="158" height="88" rx="10" fill="#e07a20"/>
            <text x="262" y="38" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Implementar</text>
            <text x="262" y="53" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Governança</text>
            <text x="262" y="74" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">Políticas e</text>
            <text x="262" y="88" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">procedimentos</text>
            <polygon points="346,55 354,49 354,61" fill="#888"/>
            <rect x="358" y="10" width="158" height="88" rx="10" fill="#c0b020"/>
            <text x="437" y="38" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Praticar Gestão</text>
            <text x="437" y="53" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">de Dados</text>
            <text x="437" y="74" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">Qualidade e</text>
            <text x="437" y="88" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">segurança</text>
            <polygon points="521,55 529,49 529,61" fill="#888"/>
            <rect x="533" y="10" width="179" height="88" rx="10" fill="#3a9a50"/>
            <text x="622" y="38" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Ativo</text>
            <text x="622" y="53" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#fff">Estratégico</text>
            <text x="622" y="74" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">Dados valiosos</text>
            <text x="622" y="88" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="rgba(255,255,255,.85)">e bem gerenciados</text>
          </svg>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Os 5 Passos para Implementar Governança</div>

        <div class="step-indicator">
          <div class="step-row">
            <div class="step-num-circle" style="background:#e85050;color:#fff;">1</div>
            <div class="step-content">
              <div class="step-title">Dados Não Governados</div>
              <div class="step-desc">Ponto de partida: dados acessíveis sem controle, sem política definida de quem pode ver o que. O risco existe mesmo que ainda não tenha virado incidente.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#e07a20;color:#fff;">2</div>
            <div class="step-content">
              <div class="step-title">Definir Regras</div>
              <div class="step-desc">Estabelecer políticas de acesso a dados: classificação por sensibilidade, papéis e responsabilidades, glossário corporativo e regras de privacidade.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#c0b020;color:#fff;">3</div>
            <div class="step-content">
              <div class="step-title">Implementar Processos</div>
              <div class="step-desc">Aplicar regras através de fluxos de trabalho: solicitação de acesso, gestão de mudanças, resposta a incidentes e monitoramento contínuo.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a9a70;color:#fff;">4</div>
            <div class="step-content">
              <div class="step-title">Incorporar em Sistemas</div>
              <div class="step-desc">Integrar as regras em sistemas de dados: controles de acesso técnicos, catálogos de dados, rastreamento de linhagem e alertas automáticos.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a7ab0;color:#fff;">5</div>
            <div class="step-content">
              <div class="step-title">Dados Governados</div>
              <div class="step-desc">Estado desejado: dados acessíveis sob controle, com rastreabilidade completa, qualidade monitorada e conformidade garantida continuamente.</div>
            </div>
          </div>
        </div>

        <!-- MENTI P3 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            O time de TI da SoundByte já designou Data Stewards e documentou as políticas de acesso. Mas o time de marketing continua mandando e-mails diretamente aos engenheiros pedindo extrações de dados — sem usar o processo oficial de solicitação.
          </div>
          <div class="menti-question">Em qual das 5 etapas da jornada a SoundByte esta travada?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">Etapa 1 — Dados Não Governados: as regras nunca foram definidas</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">Etapa 2 — Definir Regras: faltam políticas de acesso documentadas</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">Etapa 3 — Implementar Processos: as regras existem, mas os fluxos não são seguidos</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">Etapa 5 — Dados Governados: a situação já esta sob controle</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas</span>
            <a class="menti-cta" href="https://www.menti.com/al9hrkenwaqb" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">&#8592; O que e Governança</button>
          <button class="pn-btn pn-fwd" data-show="p4">Os 4 Componentes &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — OS 4 COMPONENTES ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">Os pilares que<br><em>sustentam a governança.</em></div>

        <div class="step-indicator">
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a60b0;color:#fff;">1</div>
            <div class="step-content">
              <div class="step-title">Organização e Responsabilidades</div>
              <div class="step-desc">Data Owners definem a estratégia e tomam decisões sobre políticas de dados. Data Stewards cuidam da gestão operacional diária, assegurando qualidade e conformidade. Empresas com papéis bem definidos alcançam retornos significativamente maiores sobre investimentos em tecnologia.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#5a3ab0;color:#fff;">2</div>
            <div class="step-content">
              <div class="step-title">Regras e Padrões</div>
              <div class="step-desc">Políticas para classificação, retenção, privacidade, segurança e compartilhamento de dados. Glossários corporativos e padrões de metadados que estabelecem uma linguagem comum — evitando que "receita" seja interpretada de forma diferente por vendas e finanças.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a90a0;color:#fff;">3</div>
            <div class="step-content">
              <div class="step-title">Processos e Monitoramento</div>
              <div class="step-desc">Fluxos de solicitação de acesso, gestão de mudanças e resposta a incidentes, acompanhados de mecanismos de monitoramento contínuo. Quando um analista solicita acesso a dados sensíveis, o processo registra a autorização e permite auditoria posterior.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a7a5a;color:#fff;">4</div>
            <div class="step-content">
              <div class="step-title">Ferramentas e Infraestrutura</div>
              <div class="step-desc">Catálogos de dados, gestão de metadados, controle de acesso e rastreamento de linhagem. A tecnologia deve apoiar a estratégia — não defini-la. Um catálogo de dados ajuda os usuários a localizar informações confiáveis rapidamente, mas so e útil se houver regras claras sobre quem pode atualizar ou excluir registros.</div>
            </div>
          </div>
        </div>

        <!-- MENTI P4 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            A SoundByte investiu <strong style="color:var(--warn);">R$ 200 mil</strong> em uma ferramenta de catálogo de dados. Seis meses depois, a ferramenta esta vazia — nenhum time documentou seus dados nela. O CEO quer saber por que o investimento não gerou resultado.
          </div>
          <div class="menti-question">Qual componente da governança foi negligenciado antes de comprar a ferramenta?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">Ferramentas e Infraestrutura — a ferramenta escolhida era tecnicamente inadequada</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">Organização e Responsabilidades — nenhum Data Owner ou Steward foi designado para alimentar o catálogo</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">Processos e Monitoramento — faltava um dashboard de qualidade integrado</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">Regras e Padrões — o glossário corporativo estava incompleto</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas</span>
            <a class="menti-cta" href="https://www.menti.com/al9hrkenwaqb" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">&#8592; De Dispersos a Estratégicos</button>
          <button class="pn-btn pn-fwd" data-show="p5">Qualidade · Segurança · Privacidade &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — OS TRÊS PILARES OPERACIONAIS ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">Os três pilares<br><em>operacionais.</em></div>

        <div class="kps" style="margin-bottom:28px;">
          <div class="kp" style="border-left:3px solid var(--ok);">
            <div class="kp-tag" style="color:var(--ok);">&#9989; Qualidade</div>
            <div class="kp-text"><em>"Esse dado esta correto e completo?"</em> — Dicionário de dados, validações e responsabilidades claras sobre quem mantem cada conjunto de dados. Sem qualidade, a análise não tem valor — garbage in, garbage out.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--accent);">
            <div class="kp-tag" style="color:var(--accent);">&#128272; Segurança e Acesso (RBAC)</div>
            <div class="kp-text"><em>"Quem pode ver e editar o que?"</em> — O cargo define o acesso, não o indivíduo. Um estagiário de marketing não precisa ver o CPF de clientes para fazer uma campanha de e-mail. Role-Based Access Control.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--accent);">
            <div class="kp-tag" style="color:var(--accent);">&#128274; Criptografia</div>
            <div class="kp-text"><em>"E se alguém levar o banco inteiro?"</em> &mdash; O controle de acesso protege quem entra pela porta; a criptografia protege o dado quando a porta é contornada. <strong>Em trânsito</strong> (TLS entre aplicação e banco) e <strong>em repouso</strong> (disco e backups cifrados). Para os campos mais sensíveis &mdash; CPF, cartão, geolocalização &mdash; vale ainda mascaramento ou tokenização, de modo que o analista trabalhe sem nunca ver o valor real. A LGPD trata isso como medida técnica de segurança, não como opcional.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--danger);">
            <div class="kp-tag" style="color:var(--danger);">&#9878;&#65039; Privacidade e Conformidade (LGPD)</div>
            <div class="kp-text"><em>"Esse uso do dado e legal e ético?"</em> — A LGPD esta em vigor desde 2021 e a ANPD já aplicou sanções. Multas podem chegar a 2% do faturamento, limitado a R$ 50 milhões por infração. Não e hipótese.</div>
          </div>
        </div>

        <div class="callout" style="margin-bottom:28px;">
          <div class="callout-tag">O Caso SoundByte — Qual Pilar Foi Violado?</div>
          Estagiários com acesso a GPS e histórico de pagamentos de 800 mil usuários: violação do pilar de <strong>Segurança (RBAC)</strong> — o cargo não justifica o acesso. Exportar dados pessoais para planilha pessoal: violação do pilar de <strong>Privacidade (LGPD)</strong> — dado pessoal fora do ambiente controlado sem base legal. A qualidade do dado e irrelevante quando o acesso e indevido.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">LGPD — O que o gestor de dados precisa saber</div>
        <div class="kps" style="margin-bottom:28px;">
          <div class="kp"><div class="kp-tag">Bases Legais de Tratamento</div><div class="kp-text">Consentimento, legítimo interesse, execução de contrato, obrigação legal e proteção da vida. Cada operação com dados pessoais precisa de uma base legal documentada.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Dados Sensíveis</div><div class="kp-text">Saúde, biometria, orientação sexual, convicção religiosa e política tem proteção reforçada. Localização GPS pode ser considerada dado pessoal sensível em certos contextos.</div></div>
          <div class="kp"><div class="kp-tag">Direitos do Titular</div><div class="kp-text">Acesso, correção, exclusão, portabilidade e revogação do consentimento. A empresa precisa ter processos para responder a essas solicitações dentro dos prazos legais.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">DPO e ANPD</div><div class="kp-text">O Data Protection Officer (Encarregado) e o elo entre a empresa, os titulares e a Autoridade Nacional de Proteção de Dados. Empresas de médio e grande porte devem designar um.</div></div>
        </div>

        <!-- MENTI P5 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            Para uma campanha regional de São Paulo, uma analista de marketing acessa diretamente o banco de dados de produção da SoundByte e exporta nome, e-mail e CEP de <strong style="color:var(--warn);">430 mil usuários</strong> para uma planilha no seu computador pessoal.
          </div>
          <div class="menti-question">Quais pilares da governança foram violados nessa ação?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">Apenas Qualidade — os dados exportados podem estar desatualizados</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">Apenas RBAC — a analista não deveria ter acesso direto ao banco de produção</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">RBAC e LGPD — acesso excessivo ao banco de produção + dados pessoais fora do ambiente controlado sem base legal</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">Nenhum — a analista estava apenas fazendo o trabalho dela</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas</span>
            <a class="menti-cta" href="https://www.menti.com/al9hrkenwaqb" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">&#8592; Os 4 Componentes</button>
          <button class="pn-btn pn-fwd" data-show="p6">As 6 Dimensões da Qualidade &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — AS 6 DIMENSÕES DA QUALIDADE ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title">Um dado ruim e<br><em>pior que nenhum dado.</em></div>

        <div class="callout" style="margin-bottom:32px;">
          Um cadastro de clientes com endereços incompletos ou duplicados compromete campanhas de marketing e análises de mercado. A qualidade dos dados deve ser medida por dimensões mensuráveis — não por percepção.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">As 6 Dimensões da Qualidade de Dados</div>

        <table class="tbl">
          <thead><tr><th>Dimensao</th><th>Descricao</th></tr></thead>
          <tbody>
            <tr><td><strong>Acurácia</strong></td><td>A precisão dos dados em refletir a realidade. O CPF registrado pertence ao cliente correto? O valor de venda bate com a nota fiscal?</td></tr>
            <tr><td><strong>Completude</strong></td><td>A extensão em que todos os dados necessários estão presentes. Campos obrigatórios ausentes, como telefone sem DDD ou endereço sem CEP.</td></tr>
            <tr><td><strong>Unicidade</strong></td><td>A ausência de dados duplicados. Um cliente cadastrado duas vezes com e-mails diferentes gera ruído nas análises e campanhas desnecessárias.</td></tr>
            <tr><td><strong>Tempestividade</strong></td><td>A disponibilidade dos dados quando necessário. Dados atualizados na hora certa — um endereço desatualizado em um CRM e um dado incompleto no momento errado.</td></tr>
            <tr><td><strong>Validade</strong></td><td>A conformidade dos dados com as regras e restrições definidas. Um CEP com 7 dígitos, uma data de nascimento no futuro — dados que passam pela entrada mas violam regras de negócio.</td></tr>
            <tr><td><strong>Consistência</strong></td><td>A uniformidade dos dados em diferentes conjuntos. Se vendas reporta R$ 1,2 M e financeiro reporta R$ 1,1 M para o mesmo período, ha inconsistência — e uma das fontes esta errada.</td></tr>
          </tbody>
        </table>

        <div class="callout" style="margin-top:28px;margin-bottom:28px;">
          <strong>Regra prática:</strong> para avaliar se a governança esta funcionando, verifique as três perguntas: (1) a mesma métrica produz resultados idênticos em todos os sistemas? (2) consigo rastrear a origem e transformações de qualquer dado? (3) todo acesso e pre-autorizado e toda alteração pode ser auditada?
        </div>

        <!-- MENTI P6 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            O time de BI da SoundByte descobre três problemas nos dados antes de uma apresentação a diretoria: <strong style="color:var(--warn);">(1)</strong> o mesmo CPF aparece com dois cadastros diferentes; <strong style="color:var(--warn);">(2)</strong> 9% dos CEPs tem apenas 7 dígitos; <strong style="color:var(--warn);">(3)</strong> o plano do usuário consta como "premium" no CRM e "standard" no sistema de faturamento.
          </div>
          <div class="menti-question">Quais dimensões de qualidade estão comprometidas nesse cenário?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">Apenas Validade — os CEPs com 7 dígitos estão no formato errado</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">Acurácia e Completude — os dados não refletem a realidade e tem campos incompletos</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">Unicidade, Validade e Consistência — CPF duplicado, CEP inválido e dados conflitantes entre sistemas</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">Todas as 6 dimensões são igualmente afetadas</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas</span>
            <a class="menti-cta" href="https://www.mentimeter.com" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">&#8592; Qualidade · Segurança · Privacidade</button>
          <button class="pn-btn pn-fwd" data-show="p7">Métricas e Impacto &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — MÉTRICAS E IMPACTO ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">O que medir para<br><em>saber se funciona.</em></div>

        <div class="ov-section-tag" style="margin-bottom:16px;">3 Requisitos para Verificar a Efetividade</div>
        <div class="kps" style="margin-bottom:28px;">
          <div class="kp"><div class="kp-tag">Consistência entre Domínios</div><div class="kp-text">Métricas iguais em todos os sistemas. Se vendas e financeiro reportam faturamentos diferentes para o mesmo período, ha falha de governança.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--accent-hover)">Rastreabilidade Completa</div><div class="kp-text">Explicar a origem e transformações de qualquer dado. Essencial em auditorias: a empresa deve mostrar de onde vieram os números de um relatório.</div></div>
          <div class="kp"><div class="kp-tag">Autorização &amp; Auditoria</div><div class="kp-text">Todo acesso pre-autorizado e toda alteração auditável. Em setores regulados (saúde, finanças), prática obrigatória para evitar fraudes.</div></div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Espectro de Métricas de Efetividade</div>
        <table class="tbl" style="margin-bottom:32px;">
          <thead><tr><th>Categoria</th><th>Métricas</th></tr></thead>
          <tbody>
            <tr><td><strong>Custo</strong></td><td>Tempo para entrega de dados · Custo por ativo governado · Horas de retrabalho</td></tr>
            <tr><td><strong>Risco</strong></td><td>Frequência de acessos não autorizados · N. de incidentes de privacidade · Score de conformidade LGPD</td></tr>
            <tr><td><strong>Utilidade</strong></td><td>Tempo para encontrar dados · Taxa de reutilização · Satisfação dos usuários de dados</td></tr>
          </tbody>
        </table>

        <div class="ov-section-tag" style="margin-bottom:16px;">Impacto de uma Governança Madura</div>
        <div class="kps" style="margin-bottom:28px;">
          <div class="kp" style="border-left:3px solid var(--accent-hover);">
            <div class="kp-tag" style="color:var(--accent-hover);">-52% Violações de Compliance</div>
            <div class="kp-text">Redução significativa nas violações de compliance em organizações com governança estruturada.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--ok);">
            <div class="kp-tag" style="color:var(--ok);">+66% Segurança de Dados</div>
            <div class="kp-text">Aumento na segurança dos dados com políticas de acesso e monitoramento contínuo implementados.</div>
          </div>
          <div class="kp" style="border-left:3px solid var(--accent);">
            <div class="kp-tag" style="color:var(--accent);">+15-25% ROI Tecnológico</div>
            <div class="kp-text">Aumento no retorno sobre investimento tecnológico. Dados de qualidade aceleram projetos de IA e BI.</div>
          </div>
        </div>

        <div class="callout" style="margin-bottom:28px;">
          <div class="callout-tag">Além do Compliance</div>
          Governança madura se torna vantagem competitiva: acelera projetos de IA (modelos treinados com dados confiáveis), permite expansão segura para novos mercados e reduz riscos sem comprometer a inovação. Uma empresa que governa bem seus dados consegue treinar modelos de IA com informações confiáveis, evitando vieses e erros que poderiam comprometer resultados.
        </div>

        <!-- MENTI P7 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            O gerente de governança apresenta ao diretor financeiro três métricas do último trimestre: <strong style="color:var(--warn);">(1)</strong> número de ferramentas de governança adquiridas; <strong style="color:var(--warn);">(2)</strong> redução de 40% nos acessos não autorizados detectados; <strong style="color:var(--warn);">(3)</strong> tempo médio para localizar um dado no catálogo caiu de 3h para 25 min.
          </div>
          <div class="menti-question">Qual das três métricas NÃO mede efetividade da governança?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">Número de ferramentas adquiridas — mede gasto, não resultado</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">Redução nos acessos não autorizados — e uma métrica de risco válida</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">Tempo para localizar dados — e uma métrica de utilidade válida</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">Todas as três são métricas válidas de efetividade da governança</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas</span>
            <a class="menti-cta" href="https://www.menti.com/al9hrkenwaqb" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p6">&#8592; As 6 Dimensões da Qualidade</button>
          <button class="pn-btn pn-fwd" data-show="p8">Boas Práticas &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P8 — BOAS PRÁTICAS DE IMPLEMENTAÇÃO ═══ -->
    <div id="p8" class="page">
      <div class="t-body">
        <div class="t-title">Governança não e um projeto.<br><em>E um sistema.</em></div>

        <div class="quote-card">
          <div class="quote-text">"A governança de dados não e um projeto com início e fim definidos, mas um modelo operacional contínuo. Quando bem implementada, ela se torna quase invisível, funcionando como um sistema operacional que sustenta decisões estratégicas."</div>
          <div class="quote-sub">Adaptado de: <em>Beyond the Buzzwords: Data Governance as Your Organization's Data Operating System</em> — <a href="https://medium.com/@jinlow/beyond-the-buzzwords-data-governance-as-your-organizations-data-operating-system-890cb77dcd5e" target="_blank" rel="noopener" style="color:var(--accent)">Medium, @jinlow</a></div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Princípios de Implementação Bem-Sucedida</div>
        <div class="step-indicator" style="margin-bottom:28px;">
          <div class="step-row">
            <div class="step-num-circle" style="background:#c08a20;color:#fff;">1</div>
            <div class="step-content">
              <div class="step-title">Comece pelo Valor de Negócio</div>
              <div class="step-desc">Não comece pela tecnologia. Identifique onde a ma qualidade ou o acesso indevido gera custo ou risco para o negócio — e resolva isso primeiro. O valor justifica o investimento.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a7ab0;color:#fff;">2</div>
            <div class="step-content">
              <div class="step-title">Adote Modelos Federados</div>
              <div class="step-desc">Equilibre padronização central com autonomia local. Cada área tem suas particularidades — um modelo muito centralizado gera resistência; muito descentralizado gera caos. Padronização + autonomia local e o equilíbrio certo.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#5a3ab0;color:#fff;">3</div>
            <div class="step-content">
              <div class="step-title">Invista em Gestão da Mudança</div>
              <div class="step-desc">Resistências internas são o maior obstáculo. Comunicação interna, capacitação e exemplos de sucesso rápidos são cruciais para superar a inércia organizacional.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a9a50;color:#fff;">4</div>
            <div class="step-content">
              <div class="step-title">Automatize Processos</div>
              <div class="step-desc">Processos manuais de governança falham por inconsistência humana. Automação de alertas de acesso, validações de qualidade e revisões periódicas reduz o custo operacional e aumenta a confiabilidade.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a9ab0;color:#fff;">5</div>
            <div class="step-content">
              <div class="step-title">Trate a Governança como Produto Evolutivo</div>
              <div class="step-desc">Medir e ajustar continuamente. Um comitê de governança que revisa periodicamente indicadores de qualidade e ajusta políticas conforme novas regulamentações ou mudanças no mercado e o modelo maduro.</div>
            </div>
          </div>
        </div>

        <div class="callout" style="margin-bottom:28px;">
          <div class="callout-tag">O Iceberg da Governança</div>
          O que aparece acima da superfície — políticas visíveis, catálogos, dashboards de qualidade — e apenas a ponta. Abaixo estão os processos contínuos de monitoramento, a cultura organizacional de responsabilidade sobre dados e a competitividade que a governança madura gera. <strong>Dados como passivo são o risco de quem ignora o que esta embaixo.</strong>
        </div>

        <!-- MENTI P8 -->
        <div class="menti-block">
          <div class="menti-header">
            <span class="menti-eyebrow">&#127918; Quiz Mentimeter</span>
            <span class="menti-badge">&#127942; Quiz · Leaderboard</span>
          </div>
          <div class="menti-scenario">
            O DPO da SoundByte monta um cronograma ambicioso: no mês 1, criar todas as políticas + catálogo completo + controles de acesso + auditoria + treinamento de todos os <strong style="color:var(--warn);">200 funcionários</strong>. Três meses depois, apenas 20% do plano foi executado e a equipe esta desmotivada.
          </div>
          <div class="menti-question">Qual princípio de implementação esse projeto contrariou desde o início?</div>
          <div class="menti-options">
            <div class="menti-option">
              <div class="menti-opt-letter">A</div>
              <div class="menti-opt-text">Automatizar Processos — os controles foram configurados manualmente</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">B</div>
              <div class="menti-opt-text">Adotar Modelos Federados — centralizou tudo sem dar autonomia as áreas</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">C</div>
              <div class="menti-opt-text">Começar pelo Valor de Negócio — tentou resolver tudo de uma vez em vez de priorizar o maior risco primeiro</div>
            </div>
            <div class="menti-option">
              <div class="menti-opt-letter">D</div>
              <div class="menti-opt-text">Investir em Gestão da Mudança — esqueceu de comunicar o propósito as equipes</div>
            </div>
          </div>
          <div class="menti-footer">
            <span class="menti-lb">&#127941; Exibir quadro de liderança após as respostas · &#129351; Campeão da aula revelado aqui!</span>
            <a class="menti-cta" href="https://www.menti.com/al9hrkenwaqb" target="_blank" rel="noopener">Abrir no Mentimeter &#8599;</a>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p7">&#8592; Métricas e Impacto</button>
          <button class="pn-btn pn-fwd" data-show="p9">Atividade Avaliativa &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P9 — ATIVIDADE AVALIATIVA ═══ -->
    <div id="p9" class="page">
      <div class="t-body">
        <div class="t-title">Guardiões<br><em>da SoundByte.</em></div>

        <div class="callout" style="margin-bottom:32px;font-size:14px;line-height:1.75;">
          <div class="callout-tag">O Cenário</div>
          A auditoria da SoundByte confirmou o risco. A empresa precisa urgentemente de um plano de governança. Cada grupo atuará como <strong>consultores de dados</strong> e e responsável por <strong>dois cenários complementares</strong> — trabalhando de forma independente, sem interação entre grupos. Ao final, cada grupo apresenta os dois cenários ao professor em 8 minutos.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Grupo 1 — Segurança e Controle</div>
        <div class="step-indicator" style="margin-bottom:28px;">
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a60b0;color:#fff;">A</div>
            <div class="step-content">
              <div class="step-title">&#128272; Matriz RBAC — Níveis de Acesso por Cargo</div>
              <div class="step-desc">Definir quem pode <strong>ler</strong>, <strong>editar</strong> e <strong>excluir</strong> cada tipo de dado da SoundByte (pagamentos, dados pessoais, histórico de streaming, GPS) para cada cargo: Estagiário de Marketing, Analista de Marketing, Gerente de Marketing, Analista de BI, DPO.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#3a60b0;color:#fff;">C</div>
            <div class="step-content">
              <div class="step-title">&#128269; Processo de Auditoria de Acessos</div>
              <div class="step-desc">Propor o processo de rastreamento de quem acessou quais dados e quando: estrutura do log, frequência de revisão, responsáveis, fluxo de escalonamento de incidentes e alertas automáticos — alinhados a Matriz RBAC do mesmo grupo.</div>
            </div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Grupo 2 — Privacidade e Qualidade</div>
        <div class="step-indicator" style="margin-bottom:32px;">
          <div class="step-row">
            <div class="step-num-circle" style="background:#5a3ab0;color:#fff;">B</div>
            <div class="step-content">
              <div class="step-title">&#9878;&#65039; Política de Uso de Dados Pessoais (LGPD)</div>
              <div class="step-desc">Criar a política de uso de dados pessoais para campanhas de marketing da SoundByte: base legal para cada tipo de dado, finalidade permitida, período de retenção, processo de revogação de consentimento e plano de resposta a incidentes.</div>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num-circle" style="background:#5a3ab0;color:#fff;">D</div>
            <div class="step-content">
              <div class="step-title">&#128202; Plano de Qualidade de Dados</div>
              <div class="step-desc">Avaliar os dados da SoundByte nas 6 dimensões de qualidade (Acurácia, Completude, Unicidade, Tempestividade, Validade, Consistência), propor regras de qualidade, ações de melhoria e KPIs de monitoramento — conectados a Política LGPD do mesmo grupo.</div>
            </div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:12px;">Atividade Avaliativa</div>
        <a class="activity-link" href="#/atividade-07">
          <div class="activity-link-icon">&#128737;&#65039;</div>
          <div>
            <div class="activity-link-title">Atividade Avaliativa 7 — Guardiões da SoundByte</div>
            <div class="activity-link-desc">Instruções, templates e critérios para os dois grupos. Grupo 1: Cenários A + C · Grupo 2: Cenários B + D. Inclui prompts de revisão por IA para cada cenário.</div>
          </div>
          <div class="activity-link-arrow">&#8599;</div>
        </a>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p8">&#8592; Boas Práticas</button>
          <button class="pn-btn pn-fwd" data-show="menu">&#8592; Menu Principal</button>
        </div>
      </div>
    </div>`;
