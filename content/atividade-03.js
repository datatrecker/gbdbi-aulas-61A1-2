GBDBI.content["atividade-03"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">AULA 3 · ATIVIDADE AVALIATIVA · 26.09.2026</div>
      <h1 class="hero-title">Chinook — SQL que<br>responde ao <em>negócio</em></h1>
      <p class="hero-subtitle">
        Uma loja de música digital fictícia, criada a partir da biblioteca do iTunes.
        Quatro perguntas de negócio para responder em SQL — e três que você vai formular.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Artefato semanal</span>
        <span class="tag tag-surface">SQL</span>
        <span class="tag tag-surface">Canvas · 04.10.2026</span>
      </div>
    </section>

    <section class="section" id="contexto">
      <div class="section-eyebrow">00 · A base</div>
      <h2 class="section-title">O Banco de Dados Chinook</h2>
      <p class="section-desc">Base fictícia de uma loja de música digital, montada a partir da biblioteca do iTunes. São 11 tabelas cobrindo catálogo, clientes, funcionários e faturamento.</p>

      <div class="kp-grid">
        <div class="kp-card"><div class="kp-label">Catálogo</div><div class="kp-text">275 artistas, 347 álbuns e 3.503 faixas, classificadas em 25 gêneros.</div></div>
        <div class="kp-card"><div class="kp-label">Clientes</div><div class="kp-text">59 clientes distribuídos por 24 países, atendidos por 8 funcionários.</div></div>
        <div class="kp-card"><div class="kp-label">Faturamento</div><div class="kp-text">412 faturas e 2.240 itens de fatura, entre 2021 e 2025.</div></div>
        <div class="kp-card"><div class="kp-label">Entrega</div><div class="kp-text">Um arquivo <code>.sql</code> com todas as consultas e um <code>.xlsx</code> com todas as respostas.</div></div>
      </div>

      <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin:var(--space-5) 0;">
        <a class="btn btn-primary" href="recursos/Chinook_PostgreSQL.sql" download>&darr; Chinook_PostgreSQL.sql</a>
        <a class="btn btn-outline" href="recursos/Chinook_ERD.png" target="_blank" rel="noopener">Ver o ERD em tamanho real &#8599;</a>
        <a class="btn btn-outline" href="https://sqliteonline.com/" target="_blank" rel="noopener">SQLite Online &#8599;</a>
      </div>

      <div class="diagram">
        <img src="recursos/Chinook_ERD.png" alt="Diagrama entidade-relacionamento do banco Chinook, com as tabelas artist, album, track, genre, media_type, playlist, playlist_track, customer, employee, invoice e invoice_line." loading="lazy" style="width:100%;height:auto;">
      </div>

      <div class="info-box">
        <strong>Nomes em snake_case.</strong> As colunas seguem o padrão <code>customer_id</code>, <code>invoice_date</code>,
        <code>unit_price</code>, <code>first_name</code>. A tabela de itens chama-se <code>invoice_line</code>, com underscore.
      </div>
    </section>

    <section class="section" id="ambiente">
      <div class="section-eyebrow">01 · Ambiente</div>
      <h2 class="section-title">Como Carregar a Base</h2>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Acesse o SQLite Online</div>
        <div class="step-desc">Em <a class="ext-link" href="https://sqliteonline.com/" target="_blank" rel="noopener">sqliteonline.com</a>. Nenhuma instalação necessária.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Selecione o PGLite</div>
        <div class="step-desc">O script é PostgreSQL — escolha o motor <strong>PGLite</strong> antes de carregar, senão a sintaxe falha.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">3</div>
        <div class="step-content"><div class="step-title">Carregue o Chinook_PostgreSQL.sql</div>
        <div class="step-desc">Execute o script inteiro. Ele cria e popula as 11 tabelas.</div></div>
      </div>
    </section>

    <section class="section" id="perguntas">
      <div class="section-eyebrow">02 · Tarefa</div>
      <h2 class="section-title">As Quatro Perguntas Obrigatórias</h2>
      <p class="section-desc">Responda cada uma com SQL. A consulta faz parte da entrega, não só o resultado.</p>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Os 10 artistas com maior receita total de vendas</div>
        <div class="step-desc">Atenção ao caminho: a receita está em <code>invoice_line</code> e o artista em <code>artist</code> — há duas tabelas entre eles.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Ticket médio por país dos clientes</div>
        <div class="step-desc">Ordenado do maior para o menor.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">3</div>
        <div class="step-content"><div class="step-title">Clientes que não compraram após 2024</div>
        <div class="step-desc">Liste nome, país e data da última compra.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">4</div>
        <div class="step-content"><div class="step-title">Para cada país, o artista com maior número de faixas vendidas</div>
        <div class="step-desc">Um artista por país — pense em como desempatar e como filtrar só o primeiro de cada grupo.</div></div>
      </div>

      <div class="sql-block">
        <div class="sql-header">
          <span class="sql-label">Ponto de partida — o caminho das junções</span>
          <button class="copy-btn" data-copy="at3-join">Copiar</button>
        </div>
<pre id="at3-join"><span class="cm">-- Da receita até o artista: invoice_line → track → album → artist</span>
<span class="k">SELECT</span> <span class="n">ar.name</span> <span class="k">AS</span> <span class="n">artista</span>,
       <span class="f">SUM</span>(<span class="n">il.unit_price</span> * <span class="n">il.quantity</span>) <span class="k">AS</span> <span class="n">receita</span>
<span class="k">FROM</span>   <span class="n">invoice_line</span> il
  <span class="k">JOIN</span> <span class="n">track</span>  t  <span class="k">ON</span> <span class="n">t.track_id</span>   = <span class="n">il.track_id</span>
  <span class="k">JOIN</span> <span class="n">album</span>  al <span class="k">ON</span> <span class="n">al.album_id</span>  = <span class="n">t.album_id</span>
  <span class="k">JOIN</span> <span class="n">artist</span> ar <span class="k">ON</span> <span class="n">ar.artist_id</span> = <span class="n">al.artist_id</span>
<span class="k">GROUP</span>  <span class="k">BY</span> <span class="n">ar.artist_id</span>, <span class="n">ar.name</span>
<span class="k">ORDER</span>  <span class="k">BY</span> <span class="n">receita</span> <span class="k">DESC</span>;

<span class="cm">-- Este é só o caminho. As quatro perguntas exigem mais do que isto.</span></pre>
      </div>

      <div class="callout">
        <div class="callout-tag">Cuidado com a pergunta 1</div>
        Nem toda faixa pertence a um álbum — <code>track.album_id</code> aceita nulo. Um <code>JOIN</code> descarta
        essas faixas silenciosamente e a receita total não fecha. Decida se isso importa para a resposta e justifique.
      </div>
    </section>

    <section class="section" id="ia">
      <div class="section-eyebrow">03 · Com auxílio da IA</div>
      <h2 class="section-title">Mais Três Perguntas — Suas</h2>
      <p class="section-desc">Com auxílio da IA, crie <strong>pelo menos 3 novas perguntas analíticas</strong> focadas na tomada de decisão sobre esta loja de música digital.</p>

      <div class="kp-grid">
        <div class="kp-card"><div class="kp-label">Formule</div><div class="kp-text">As perguntas precisam ser de decisão, não de curiosidade: alguém na loja teria de agir diferente em função da resposta.</div></div>
        <div class="kp-card"><div class="kp-label">Justifique</div><div class="kp-text">Diga <strong>por que</strong> cada pergunta é relevante para o negócio.</div></div>
        <div class="kp-card"><div class="kp-label">Responda</div><div class="kp-text">Cada uma com SQL, como nas quatro obrigatórias.</div></div>
      </div>

      <div class="info-box">
        Vale usar a IA para gerar e depurar SQL — mas o julgamento sobre <em>quais perguntas importam</em>
        é o que está sendo avaliado aqui.
      </div>
    </section>

    <section class="section" id="entrega">
      <div class="section-eyebrow">04 · Entrega</div>
      <h2 class="section-title">Entregáveis</h2>
      <p class="section-desc">Pelo Canvas, até <strong>04.10.2026 às 23h59</strong>.</p>

      <div class="step-row">
        <div class="step-num-circle">1</div>
        <div class="step-content"><div class="step-title">Arquivo SQL</div>
        <div class="step-desc">Contendo as consultas para todas as perguntas — as 4 obrigatórias e as 3 que você criou.</div></div>
      </div>
      <div class="step-row">
        <div class="step-num-circle">2</div>
        <div class="step-content"><div class="step-title">Arquivo XLSX</div>
        <div class="step-desc">Contendo todas as respostas.</div></div>
      </div>
    </section>`;
