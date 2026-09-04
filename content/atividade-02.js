GBDBI.content["atividade-02"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">AULA 2 · ATIVIDADE AVALIATIVA · 26.09.2026</div>
      <h1 class="hero-title">Sistema de<br>Controle de <em>Voos</em></h1>
      <p class="hero-subtitle">
        Uma companhia aérea quer informatizar o controle de voos, aeronaves e tripulação.
        Sua equipe foi contratada para modelar os dados em diagrama entidade-relacionamento.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Artefato semanal</span>
        <span class="tag tag-surface">Em equipe</span>
        <span class="tag tag-surface">Canvas · 27.09.2026</span>
      </div>
    </section>

    <section class="section" id="problema">
      <div class="section-eyebrow">00 · Descrição do problema</div>
      <h2 class="section-title">O Que a Companhia Precisa Registrar</h2>

      <div class="kp-grid">
        <div class="kp-card">
          <div class="kp-label">Aeronaves</div>
          <div class="kp-text">Cada aeronave é identificada por um número único <code>Aer_ID</code> e possui <strong>modelo</strong> e <strong>total de assentos disponíveis</strong>.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Voos</div>
          <div class="kp-text">Identificados por <code>Voo_ID</code>. Para cada voo registra-se o nome da <strong>companhia aérea</strong>, a <strong>data</strong>, o horário de <strong>partida</strong> e o de <strong>chegada</strong>.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Funcionários</div>
          <div class="kp-text">Cada um identificado por <code>Func_ID</code>, com <strong>nome</strong> e <strong>sobrenome</strong>.</div>
        </div>
        <div class="kp-card">
          <div class="kp-label">Escalação</div>
          <div class="kp-text">Um funcionário pode ser escalado para vários voos, exercendo a função de <strong>piloto</strong> ou <strong>co-piloto</strong> em cada um deles.</div>
        </div>
      </div>

      <div class="ov-section-tag" style="margin-top:var(--space-6);margin-bottom:var(--space-3);">Resumo das regras de negócio</div>
      <ul class="pea-list">
        <li>Uma <strong>aeronave</strong> pode ser usada em <strong>vários voos</strong>, mas cada voo utiliza <strong>apenas uma aeronave</strong>.</li>
        <li>Um <strong>voo</strong> é identificado por <code>Voo_ID</code> e registra companhia, data, hora de partida e de chegada.</li>
        <li>Um <strong>funcionário</strong> pode participar de <strong>vários voos</strong>, e em cada voo pode assumir a posição de piloto ou co-piloto.</li>
        <li>Cada <strong>voo</strong> conta com <strong>vários funcionários</strong>, exercendo posições distintas.</li>
      </ul>

      <div class="info-box">
        Uma aeronave só pode estar associada a vários voos <strong>em horários distintos</strong> — o mesmo avião
        não decola duas vezes ao mesmo tempo. Pense em como (ou se) o seu modelo expressa isso.
      </div>
    </section>

    <section class="section" id="tarefa">
      <div class="section-eyebrow">01 · Tarefa</div>
      <h2 class="section-title">O Que Entregar</h2>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Identifique as entidades principais</div>
        <div class="step-desc">Com seus atributos e chaves primárias.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Modele os relacionamentos</div>
        <div class="step-desc">Indicando as cardinalidades envolvidas em cada um.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">3</div>
        <div class="step-content"><div class="step-title">Avalie a necessidade de entidade associativa</div>
        <div class="step-desc">Há relacionamento com atributo próprio — como a posição do funcionário no voo? Se há, ele precisa virar entidade.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">4</div>
        <div class="step-content"><div class="step-title">Represente nos três níveis</div>
        <div class="step-desc">Diagramas ER para os modelos <strong>Conceitual</strong>, <strong>Lógico</strong> e <strong>Físico</strong>, na notação <strong>Crow's Foot</strong>.</div></div>
      </div>

      <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin:var(--space-5) 0;">
        <a class="btn btn-outline" href="https://lucid.app" target="_blank" rel="noopener">Abrir o Lucidchart &#8599;</a>
      </div>

      <div class="callout">
        <div class="callout-tag">A pergunta que decide o modelo</div>
        "Piloto" e "co-piloto" são <em>tipos de funcionário</em> ou <em>papéis que um funcionário exerce em um voo específico</em>?
        A resposta muda a estrutura inteira: no primeiro caso vira atributo de funcionário; no segundo,
        atributo do relacionamento entre funcionário e voo — e aí você precisa de uma entidade associativa.
      </div>

      <div class="info-box">
        <strong>Entrega:</strong> poste no Canvas o diagrama feito no Lucid.
      </div>
    </section>

    <section class="section" id="conexao">
      <div class="section-eyebrow">02 · Atenção</div>
      <h2 class="section-title">Este Modelo Volta na Atividade 4</h2>
      <p class="section-desc">A <a href="#/atividade-04" style="color:var(--accent)">Atividade 4</a> pede um Data Warehouse em Star Schema construído <strong>sobre este mesmo sistema de voos</strong>. Um modelo malfeito aqui custa caro lá — guarde o arquivo do Lucid.</p>
    </section>`;
