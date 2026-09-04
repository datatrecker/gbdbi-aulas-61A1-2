GBDBI.content["atividade-04"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">AULA 4 · ATIVIDADE AVALIATIVA · 28.09.2026</div>
      <h1 class="hero-title">Do operacional<br>ao <em>Star Schema</em></h1>
      <p class="hero-subtitle">
        Na Atividade 2 você modelou o sistema de controle de voos. Agora ele vira um Data Warehouse:
        processo de negócio, granularidade, fato, dimensões e SCD tipo 2.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Artefato semanal</span>
        <span class="tag tag-surface">Modelagem dimensional</span>
        <span class="tag tag-surface">Canvas · 04.10.2026</span>
      </div>
    </section>

    <section class="section" id="contexto">
      <div class="section-eyebrow">00 · Ponto de partida</div>
      <h2 class="section-title">O Mesmo Sistema, Outra Pergunta</h2>
      <p class="section-desc">Na <a href="#/atividade-02" style="color:var(--accent)">Atividade 2</a> você fez a modelagem de dados de um Sistema de Controle de Voos — um modelo <strong>operacional</strong>, desenhado para registrar o que acontece. Agora crie um <strong>DW com modelo Star Schema</strong> para analisar um processo de negócio relacionado com esse banco.</p>

      <div class="callout">
        <div class="callout-tag">A mudança de eixo</div>
        O modelo da Atividade 2 responde "este voo decolou?". O Star Schema responde
        "a ocupação das aeronaves melhorou no trimestre?". Não é o mesmo modelo com outro nome —
        é outra estrutura, porque a pergunta mudou.
      </div>
    </section>

    <section class="section" id="tarefa">
      <div class="section-eyebrow">01 · Tarefa</div>
      <h2 class="section-title">Os Quatro Passos</h2>
      <p class="section-desc">Na ordem — cada um depende do anterior.</p>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Identifique o processo de negócio</div>
        <div class="step-desc">Qual evento do negócio você vai analisar? É a decisão que governa todas as seguintes.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Defina a granularidade</div>
        <div class="step-desc">O que é uma linha da tabela fato? Uma escalação? Um voo? Um voo por funcionário? Declare em uma frase.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">3</div>
        <div class="step-content"><div class="step-title">Defina dimensões e fato</div>
        <div class="step-desc">Quais atributos servem para cortar a análise (dimensões) e quais são os números que se somam (métricas do fato).</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">4</div>
        <div class="step-content"><div class="step-title">Projete o esquema estrela com SCD tipo 2</div>
        <div class="step-desc">Ao menos uma dimensão precisa preservar histórico: surrogate key, vigência e indicador de linha corrente.</div></div>
      </div>

      <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin:var(--space-5) 0;">
        <a class="btn btn-outline" href="https://dbdiagram.io/home" target="_blank" rel="noopener">Abrir o dbdiagram.io &#8599;</a>
      </div>

      <div class="info-box">
        <strong>Dica:</strong> use a IA e o dbdiagram.io para gerar o modelo. O dbdiagram aceita a definição
        em texto e desenha o diagrama — o que torna barato testar mais de uma granularidade antes de decidir.
      </div>
    </section>

    <section class="section" id="justificativa">
      <div class="section-eyebrow">02 · O que mais pesa</div>
      <h2 class="section-title">Justifique as Escolhas</h2>
      <p class="section-desc">O diagrama sozinho não basta. Justifique, por escrito:</p>

      <ul class="pea-list">
        <li>o <strong>processo de negócio</strong> escolhido — e por que ele, e não outro;</li>
        <li>a <strong>granularidade</strong> adotada — e o que ela permite e impede de perguntar;</li>
        <li>as <strong>dimensões</strong> — por que cada uma existe;</li>
        <li>as <strong>métricas da tabela fato</strong> — e se são aditivas, semi-aditivas ou não-aditivas.</li>
      </ul>

      <div class="callout callout-green">
        <div class="callout-tag">Por que o SCD tipo 2 aparece aqui</div>
        Se uma aeronave for reconfigurada e passar de 180 para 200 assentos, os voos do ano passado
        precisam continuar sendo medidos contra 180 — senão a taxa de ocupação histórica muda sozinha.
        É exatamente o problema que o SCD tipo 2 resolve.
      </div>

      <div class="info-box">
        <strong>Entrega:</strong> poste no Canvas um arquivo <strong>PDF</strong> com o diagrama do modelo Star Schema
        e as justificativas. Prazo: <strong>04.10.2026 às 23h59</strong>.
      </div>
    </section>`;
