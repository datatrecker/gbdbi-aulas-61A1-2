/* ============================================================
   render.js — renderização de cada rota
   Todo texto vem de GBDBI.data (transcrito do PEA) ou de
   GBDBI.content (material original das aulas).
   ============================================================ */

GBDBI.render = (function () {

  var D = function () { return GBDBI.data.curso; };
  var P = function () { return GBDBI.progress; };

  /* ── helpers ─────────────────────────────────────────── */

  /* Único ponto do site onde dado vindo do visitante (location.hash,
     via naoEncontrado) entra em innerHTML — precisa de escaping manual. */
  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function aulaPorId(id) {
    return (GBDBI.data.aulas || []).filter(function (a) { return a.id === id; })[0];
  }

  function atividadePorId(id) {
    return (GBDBI.data.atividades || []).filter(function (a) { return a.id === id; })[0];
  }

  function biblioPorRef(ref) {
    var b = D().bibliografia;
    var todas = b.basica.concat(b.complementar);
    return todas.filter(function (i) { return i.ref === ref; })[0];
  }

  function lista(itens) {
    return '<ul class="pea-list">' + itens.map(function (i) {
      return '<li><span>' + i + '</span></li>';
    }).join('') + '</ul>';
  }

  function pill(id) {
    var e = P().get(id);
    return '<span class="progress-pill" data-state="' + e + '">' + P().rotulo(e) + '</span>';
  }

  function cardAula(a) {
    return '' +
      '<a class="aula-card" href="#/' + a.id + '">' +
        '<div class="aula-card-num"><span>Aula ' + a.num + '</span>' +
          (a.data ? '<span class="aula-card-data">' + a.data + '</span>' : '') + pill(a.id) + '</div>' +
        '<div class="aula-card-title">' + a.titulo + '</div>' +
        '<p class="aula-card-desc">' + a.resumo + '</p>' +
        '<div class="aula-card-tags">' + a.tags.map(function (t) {
          return '<span class="tag">' + t + '</span>';
        }).join('') + '</div>' +
        '<span class="aula-card-arrow" aria-hidden="true">&#8599;</span>' +
      '</a>';
  }

  function cardAtividade(at) {
    var aula = aulaPorId(at.aula);
    return '' +
      '<a class="aula-card" href="#/' + at.id + '">' +
        '<div class="aula-card-num"><span>Atividade ' + at.num + '</span>' +
          '<span class="progress-pill">' + at.entrega + '</span></div>' +
        '<div class="aula-card-title">' + at.titulo + '</div>' +
        '<p class="aula-card-desc">' + at.resumo + '</p>' +
        '<div class="aula-card-tags"><span class="tag tag-accent">Aula ' + aula.num + ' · ' + aula.titulo + '</span></div>' +
        '<span class="aula-card-arrow" aria-hidden="true">&#8599;</span>' +
      '</a>';
  }

  function ficha() {
    var i = D().identificacao;
    return '' +
      '<dl class="ficha">' +
        '<div><dt>Curso</dt><dd>' + i.curso + '</dd></div>' +
        '<div><dt>Disciplina</dt><dd>' + i.disciplina + '</dd></div>' +
        '<div><dt>Professor</dt><dd>' + i.professor + '</dd></div>' +
        '<div><dt>Coordenador</dt><dd>' + i.coordenador + '</dd></div>' +
        '<div><dt>Turma</dt><dd>' + i.turma + '</dd></div>' +
        '<div><dt>Período</dt><dd>' + i.periodo + '</dd></div>' +
        '<div><dt>Carga horária</dt><dd>' + i.cargaHoraria + '</dd></div>' +
        '<div><dt>PEA atualizado em</dt><dd>' + i.atualizadoEm + '</dd></div>' +
      '</dl>';
  }

  function tabelaAvaliacao() {
    var linhas = '';
    D().avaliacao.forEach(function (g) {
      linhas += '<tr class="group"><td colspan="3">' + g.grupo + '</td></tr>';
      g.itens.forEach(function (it) {
        linhas += '<tr><td>' + it.n + '</td><td>' + it.descricao + '</td><td>' + it.peso + '</td></tr>';
      });
    });
    return '' +
      '<div class="pea-table"><table>' +
        '<thead><tr><th>Tarefa</th><th>Descrição</th><th>Peso</th></tr></thead>' +
        '<tbody>' + linhas + '</tbody>' +
      '</table></div>';
  }

  /* Calendário: as 8 datas em uma tabela só. */
  function calendario() {
    var linhas = (GBDBI.data.aulas || []).map(function (a) {
      var at = a.atividade ? atividadePorId(a.atividade) : null;
      return '<tr>' +
        '<td><a href="#/' + a.id + '" style="color:var(--accent)">Aula ' + a.num + '</a></td>' +
        '<td style="font-family:var(--font-body)">' + a.titulo + '</td>' +
        '<td style="text-align:left;font-family:var(--font-body)">' +
          (at ? '<a href="#/' + at.id + '" style="color:var(--accent)">Atividade ' + at.num + '</a>' : '—') + '</td>' +
        '<td>' + (a.data || '—') + '</td>' +
      '</tr>';
    }).join('');

    return '' +
      '<div class="pea-table" style="margin-top:var(--space-6)"><table>' +
        '<caption class="sr-only">Calendário das aulas</caption>' +
        '<thead><tr><th>Aula</th><th>Tema</th><th>Atividade</th><th>Data</th></tr></thead>' +
        '<tbody>' + linhas + '</tbody>' +
      '</table></div>';
  }

  function blocoBibliografia(itens) {
    return '<div class="biblio">' + itens.map(function (i) {
      return '<div class="biblio-item">' +
        '<span class="biblio-ref">' + i.ref + '</span>' +
        '<div>' + i.texto +
          (i.link ? '<br><a href="' + i.link + '" target="_blank" rel="noopener">Acessar na Minha Biblioteca &#8599;</a>' : '') +
        '</div></div>';
    }).join('') + '</div>';
  }

  /* ── HOME ────────────────────────────────────────────── */

  function home() {
    var i = D().identificacao;
    var r = P().resumo();

    return '' +
    '<section class="hero anim-fade-up">' +
      '<div class="hero-eyebrow">ESPM · ' + i.curso + '</div>' +
      '<h1 class="hero-title">Gestão de Banco<br>de Dados e <em>BI</em></h1>' +
      '<p class="hero-subtitle">Oito aulas para transformar dados dispersos em decisões defensáveis: ' +
        'do modelo entidade-relacionamento ao dashboard executivo, passando por SQL, Data Warehouse, ' +
        'Big Data e governança. Metodologia PBL — cada aula gira em torno de um desafio prático.</p>' +
      '<div class="hero-meta">' +
        '<span>Turma ' + i.turma + '</span><span>' + i.periodo + '</span>' +
        '<span>' + i.cargaHoraria + '</span><span>8 aulas</span>' +
      '</div>' +
      '<a class="hero-cta" href="#/aula-01">Começar pela Aula 01 &#8594;</a>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Sua jornada</div>' +
      '<h2 class="section-title">As 8 aulas da disciplina</h2>' +
      '<p class="section-desc">' + r.concluidas + ' de ' + r.total + ' aulas concluídas · ' +
        r.andamento + ' em andamento. O progresso fica salvo neste navegador.</p>' +
      '<div class="progress-bar"><i style="width:' + r.percentual + '%"></i></div>' +
      '<div class="aulas-grid">' + (GBDBI.data.aulas || []).map(cardAula).join('') + '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Entregas com material próprio</div>' +
      '<h2 class="section-title">Atividades avaliativas</h2>' +
      '<p class="section-desc">As demais entregas semanais estão descritas na aba <strong>Plano de ensino</strong> ' +
        'de cada aula, no campo <em>Atividade prática</em>.</p>' +
      '<div class="aulas-grid">' + (GBDBI.data.atividades || []).map(cardAtividade).join('') + '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">PEA · 1. Competências</div>' +
      '<h2 class="section-title">O que você desenvolve aqui</h2>' +
      '<p class="section-desc">Competências profissionais e analíticas que o estudante terá desenvolvido ao concluir a disciplina.</p>' +
      '<div class="comp-grid">' + D().competencias.map(function (c) {
        return '<div class="comp-card"><div class="comp-label">Competência</div>' +
          '<div class="comp-title">' + c.titulo + '</div>' +
          '<p class="comp-text">' + c.texto + '</p></div>';
      }).join('') + '</div>' +
      '<a class="btn btn-outline btn-sm" style="margin-top:24px" href="#/plano">Ver os 11 objetivos de aprendizagem &#8594;</a>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">PEA · 3. Recursos pedagógicos</div>' +
      '<h2 class="section-title">Metodologia PBL</h2>' +
      '<div class="section-card" style="margin-top:24px">' +
        '<p style="font-size:var(--text-sm);color:var(--text-secondary)">' + D().recursosPedagogicos + '</p>' +
      '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">PEA · 4. Processo de avaliação</div>' +
      '<h2 class="section-title">Como você é avaliado</h2>' +
      tabelaAvaliacao() +
      '<a class="btn btn-outline btn-sm" style="margin-top:24px" href="#/avaliacao">Detalhes da avaliação &#8594;</a>' +
    '</section>';
  }

  /* ── PLANO DE ENSINO (PEA integral) ──────────────────── */

  function plano() {
    var b = D().bibliografia;

    var planoAulas = (GBDBI.data.aulas || []).map(function (a) {
      var refs = a.pea.bibliografia.length
        ? a.pea.bibliografia.join(', ')
        : '—';
      return '' +
        '<div class="section-card" style="margin-top:16px">' +
          '<div class="section-eyebrow">Aula ' + a.num + ' · ' + a.titulo +
            (a.data ? ' · ' + a.data : '') + '</div>' +
          '<div style="font-size:var(--text-sm);color:var(--text-primary);margin-top:12px"><strong>Objetivos de aprendizagem</strong></div>' +
          '<p style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:8px">' + a.pea.objetivos + '</p>' +
          '<div style="font-size:var(--text-sm);color:var(--text-primary);margin-top:20px"><strong>Conteúdo</strong></div>' +
          lista(a.pea.conteudo) +
          '<div style="font-size:var(--text-sm);color:var(--text-primary);margin-top:20px"><strong>Estratégia de ensino</strong></div>' +
          '<div class="info-box"><strong>Atividade prática · </strong>' + a.pea.pratica + '</div>' +
          (a.pea.ia ? '<div class="info-box"><strong>Integração com IA · </strong>' + a.pea.ia + '</div>' : '') +
          '<div class="hero-meta" style="margin-top:20px"><span>Bibliografia ' + refs + '</span></div>' +
          '<a class="btn btn-outline btn-sm" style="margin-top:20px" href="#/' + a.id + '">Abrir material da Aula ' + a.num + ' &#8594;</a>' +
        '</div>';
    }).join('');

    return '' +
    '<section class="hero anim-fade-up">' +
      '<div class="hero-eyebrow">Plano de Ensino e Aprendizagem</div>' +
      '<h1 class="hero-title">PEA <em>integral</em></h1>' +
      '<p class="hero-subtitle">Transcrição completa do Plano de Ensino e Aprendizagem da disciplina, ' +
        'atualizado em ' + D().identificacao.atualizadoEm + '. Esta é a fonte única de verdade deste site.</p>' +
      ficha() +
    '</section>' +

    '<section class="section" id="competencias">' +
      '<div class="section-eyebrow">1. Competências</div>' +
      '<h2 class="section-title">Competências profissionais e analíticas</h2>' +
      '<p class="section-desc">Ao concluir a disciplina, o estudante terá desenvolvido as seguintes competências:</p>' +
      '<div class="comp-grid">' + D().competencias.map(function (c) {
        return '<div class="comp-card"><div class="comp-label">Competência</div>' +
          '<div class="comp-title">' + c.titulo + '</div>' +
          '<p class="comp-text">' + c.texto + '</p></div>';
      }).join('') + '</div>' +
    '</section>' +

    '<section class="section" id="objetivos">' +
      '<div class="section-eyebrow">2. Objetivos de aprendizagem</div>' +
      '<h2 class="section-title">Os 11 objetivos</h2>' +
      lista(D().objetivos.map(function (o) {
        return '<strong>' + o.verbo + '</strong> ' + o.texto;
      })) +
    '</section>' +

    '<section class="section" id="recursos-pedagogicos">' +
      '<div class="section-eyebrow">3. Recursos pedagógicos</div>' +
      '<h2 class="section-title">Problem-Based Learning</h2>' +
      '<div class="section-card" style="margin-top:24px">' +
        '<p style="font-size:var(--text-sm);color:var(--text-secondary)">' + D().recursosPedagogicos + '</p>' +
      '</div>' +
    '</section>' +

    '<section class="section" id="avaliacao">' +
      '<div class="section-eyebrow">4. Processo de avaliação</div>' +
      '<h2 class="section-title">Tarefas e pesos</h2>' +
      tabelaAvaliacao() +
      '<a class="btn btn-outline btn-sm" style="margin-top:24px" href="#/avaliacao">Ver detalhamento &#8594;</a>' +
    '</section>' +

    '<section class="section" id="bibliografia">' +
      '<div class="section-eyebrow">5. Bibliografia</div>' +
      '<h2 class="section-title">5.1 Básica</h2>' +
      blocoBibliografia(b.basica) +
      '<h2 class="section-title" style="margin-top:40px">5.2 Complementar</h2>' +
      blocoBibliografia(b.complementar) +
    '</section>' +

    '<section class="section" id="plano-de-aulas">' +
      '<div class="section-eyebrow">6. Plano de aulas</div>' +
      '<h2 class="section-title">As 8 aulas, aula a aula</h2>' +
      '<p class="section-desc">Objetivos, conteúdo, estratégia de ensino e bibliografia de cada encontro, ' +
        'exatamente como descritos no PEA.</p>' +
      calendario() +
      planoAulas +
    '</section>';
  }

  /* ── AVALIAÇÃO ───────────────────────────────────────── */

  function avaliacao() {
    var a8 = aulaPorId('aula-08');

    var componentes = [
      { n: '1', t: 'Modelo ER e Lógico', d: 'Com justificativa das decisões de modelagem.' },
      { n: '2', t: 'Script SQL', d: 'Principais perguntas de negócio respondidas e interpretação dos resultados.' },
      { n: '3', t: 'Dashboard no Tableau', d: 'Insights acionáveis e pelo menos um KPI central.' },
      { n: '4', t: 'Justificativa SQL / NoSQL', d: 'Uso de NoSQL ou SQL para diferentes partes do projeto.' },
      { n: '5', t: 'Política de acesso e riscos LGPD', d: 'Mapa de riscos para o cenário apresentado.' }
    ];

    return '' +
    '<section class="hero anim-fade-up">' +
      '<div class="hero-eyebrow">PEA · 4. Processo de avaliação</div>' +
      '<h1 class="hero-title">Como você é <em>avaliado</em></h1>' +
      '<p class="hero-subtitle">Três tarefas compõem a nota: participação individual em aula, ' +
        'artefatos semanais em grupo e o Projeto Integrador da Aula 8.</p>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Pesos</div>' +
      '<h2 class="section-title">Distribuição da nota</h2>' +
      '<div class="avaliacao-grid">' +
        '<div class="peso-card"><div class="peso-value">20%</div><div class="peso-label">Participação / Colaboração</div>' +
          '<p class="peso-desc">Individual · Aulas 1 a 8. Envolvimento nas discussões e nos desafios PBL de cada encontro.</p></div>' +
        '<div class="peso-card"><div class="peso-value">40%</div><div class="peso-label">Artefatos semanais</div>' +
          '<p class="peso-desc">Em grupo · Aulas 1 a 7. Um artefato por aula, correspondente à atividade prática descrita no plano de ensino.</p></div>' +
        '<div class="peso-card"><div class="peso-value">40%</div><div class="peso-label">Projeto Integrador</div>' +
          '<p class="peso-desc">Em grupo · Aula 8. Apresentação final que integra modelagem, SQL, BI e governança.</p></div>' +
      '</div>' +
      tabelaAvaliacao() +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Artefatos semanais · 40%</div>' +
      '<h2 class="section-title">Uma entrega por aula, da 1 à 7</h2>' +
      '<p class="section-desc">Cada artefato é o produto da atividade prática da aula, conforme a Estratégia de Ensino do PEA.</p>' +
      '<div class="pea-table"><table>' +
        '<thead><tr><th>Aula</th><th>Artefato esperado</th></tr></thead><tbody>' +
        (GBDBI.data.aulas || []).filter(function (a) { return a.num !== '08'; }).map(function (a) {
          return '<tr><td><a href="#/' + a.id + '/plano" style="color:var(--accent)">Aula ' + a.num + '</a></td>' +
            '<td style="text-align:left;font-family:var(--font-body);color:var(--text-secondary)">' + a.pea.pratica + '</td></tr>';
        }).join('') +
      '</tbody></table></div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Projeto Integrador · 40%</div>' +
      '<h2 class="section-title">Os 5 componentes da entrega final</h2>' +
      '<p class="section-desc">' + a8.pea.objetivos + '</p>' +
      '<div class="kp-grid">' + componentes.map(function (c) {
        return '<div class="kp-card"><div class="kp-label">Componente ' + c.n + '</div>' +
          '<div class="comp-title">' + c.t + '</div>' +
          '<p class="kp-text">' + c.d + '</p></div>';
      }).join('') + '</div>' +
      '<a class="btn btn-primary btn-sm" style="margin-top:24px" href="#/atividade-08">Abrir o briefing do Projeto Integrador &#8594;</a>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Regras dos grupos</div>' +
      '<h2 class="section-title">Como funcionam as atividades em grupo</h2>' +
      '<p class="section-desc">As atividades avaliativas (Aulas 1 a 8) são feitas em grupo, com as seguintes regras básicas:</p>' +
      lista(D().regrasGrupo) +
    '</section>';
  }

  /* ── RECURSOS ────────────────────────────────────────── */

  function recursos() {
    var b = D().bibliografia;

    return '' +
    '<section class="hero anim-fade-up">' +
      '<div class="hero-eyebrow">Materiais de apoio</div>' +
      '<h1 class="hero-title">Ferramentas e <em>referências</em></h1>' +
      '<p class="hero-subtitle">Tudo o que as atividades práticas do PEA exigem, reunido em um lugar só — ' +
        'ambientes de prática, datasets, referências normativas e a bibliografia da disciplina.</p>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">Ferramentas e datasets</div>' +
      '<h2 class="section-title">Ambientes usados nas aulas</h2>' +
      '<div class="recursos-grid">' + D().recursos.map(function (r) {
        var attrs = r.externo ? ' target="_blank" rel="noopener"' : (r.download ? ' download' : '');
        var seta = r.download ? '&#8595;' : '&#8599;';
        return '<a class="recurso-card" href="' + r.href + '"' + attrs + '>' +
          '<div class="recurso-label">' + r.label + '</div>' +
          '<div class="recurso-title">' + r.titulo + ' ' + seta + '</div>' +
          '<p class="recurso-desc">' + r.desc + '</p></a>';
      }).join('') + '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">PEA · 5.1 Bibliografia básica</div>' +
      '<h2 class="section-title">Leituras obrigatórias</h2>' +
      blocoBibliografia(b.basica) +
    '</section>' +

    '<section class="section">' +
      '<div class="section-eyebrow">PEA · 5.2 Bibliografia complementar</div>' +
      '<h2 class="section-title">Aprofundamento</h2>' +
      blocoBibliografia(b.complementar) +
    '</section>';
  }

  /* ── AULA ────────────────────────────────────────────── */

  function aula(a, aba) {
    var aulas = GBDBI.data.aulas;
    var idx = aulas.indexOf(a);
    var ant = aulas[idx - 1], prox = aulas[idx + 1];
    var at = a.atividade ? atividadePorId(a.atividade) : null;
    var estado = P().get(a.id);

    var refs = a.pea.bibliografia.map(function (r) {
      var item = biblioPorRef(r);
      return item ? '<div class="biblio-item"><span class="biblio-ref">' + item.ref + '</span>' +
        '<div>' + item.texto +
        (item.link ? '<br><a href="' + item.link + '" target="_blank" rel="noopener">Acessar na Minha Biblioteca &#8599;</a>' : '') +
        '</div></div>' : '';
    }).join('');

    var navAulas = '<nav class="lesson-nav">' +
      (ant ? '<a class="lesson-nav-btn" href="#/' + ant.id + '"><div class="lesson-nav-label">&#8592; Aula ' + ant.num + '</div>' +
        '<div class="lesson-nav-title">' + ant.titulo + '</div></a>' : '<span class="lesson-nav-btn" style="opacity:.35">' +
        '<div class="lesson-nav-label">Início</div><div class="lesson-nav-title">Primeira aula</div></span>') +
      (prox ? '<a class="lesson-nav-btn next" href="#/' + prox.id + '"><div class="lesson-nav-label">Aula ' + prox.num + ' &#8594;</div>' +
        '<div class="lesson-nav-title">' + prox.titulo + '</div></a>' : '<span class="lesson-nav-btn next" style="opacity:.35">' +
        '<div class="lesson-nav-label">Fim</div><div class="lesson-nav-title">Última aula</div></span>') +
      '</nav>';

    return '' +
    '<div class="aula-head anim-fade-up">' +
      '<div class="aula-head-eyebrow">Aula ' + a.num + ' de 08' +
        (a.data ? ' &middot; ' + a.data : '') + '</div>' +
      '<h1 class="aula-head-title">' + a.titulo + '</h1>' +
      '<p class="aula-head-sub">' + a.resumo + '</p>' +
      '<div class="aula-actions">' +
        '<button type="button" class="btn btn-sm ' + (estado === 'concluida' ? 'btn-primary' : 'btn-outline') + '" data-acao="concluir" data-aula="' + a.id + '">' +
          (estado === 'concluida' ? '&#10003; Aula concluída' : 'Marcar como concluída') + '</button>' +
        pill(a.id) +
        (at ? '<a class="btn btn-sm btn-outline" href="#/' + at.id + '">Atividade ' + at.num + ' &#8594;</a>' : '') +
      '</div>' +
    '</div>' +

    '<div class="tabs" role="tablist">' +
      '<button class="tab' + (aba === 'plano' ? '' : ' active') + '" role="tab" data-tab="material" aria-selected="' + (aba === 'plano' ? 'false' : 'true') + '">Material da aula</button>' +
      '<button class="tab' + (aba === 'plano' ? ' active' : '') + '" role="tab" data-tab="plano" aria-selected="' + (aba === 'plano' ? 'true' : 'false') + '">Plano de ensino</button>' +
    '</div>' +

    '<section class="pea-panel' + (aba === 'plano' ? '' : ' active') + '" id="tab-material">' +
      '<div id="aula-content"><div class="loading">Carregando o material da aula…</div></div>' +
    '</section>' +

    '<section class="pea-panel' + (aba === 'plano' ? ' active' : '') + '" id="tab-plano">' +
      '<div class="section-card">' +
        '<div class="section-eyebrow">PEA · Objetivos de aprendizagem</div>' +
        '<p style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:12px">' + a.pea.objetivos + '</p>' +
      '</div>' +
      '<div class="section" style="border-bottom:none;padding-bottom:0">' +
        '<div class="section-eyebrow">PEA · Conteúdo</div>' +
        '<h2 class="section-title">O que é tratado nesta aula</h2>' +
        lista(a.pea.conteudo) +
      '</div>' +
      '<div class="section" style="border-bottom:none">' +
        '<div class="section-eyebrow">PEA · Estratégia de ensino</div>' +
        '<h2 class="section-title">Como a aula acontece</h2>' +
        '<div class="info-box"><strong>Atividade prática &middot; </strong>' + a.pea.pratica + '</div>' +
        (a.pea.ia ? '<div class="info-box"><strong>Integração com IA &middot; </strong>' + a.pea.ia + '</div>' : '') +
        (at ? '<a class="btn btn-primary btn-sm" style="margin-top:20px" href="#/' + at.id + '">Abrir a Atividade ' + at.num + ': ' + at.titulo + ' &#8594;</a>' : '') +
      '</div>' +
      (refs ? '<div class="section" style="border-bottom:none">' +
        '<div class="section-eyebrow">PEA · Bibliografia da aula</div>' +
        '<h2 class="section-title">Leitura de apoio</h2>' +
        '<div class="biblio">' + refs + '</div>' +
      '</div>' : '') +
    '</section>' +

    navAulas;
  }

  /* ── ATIVIDADE ───────────────────────────────────────── */

  function atividade(at) {
    var a = aulaPorId(at.aula);
    return '' +
    '<div class="aula-head anim-fade-up">' +
      '<div class="aula-head-eyebrow">Atividade ' + at.num + ' · ' + at.entrega + '</div>' +
      '<h1 class="aula-head-title">' + at.titulo + '</h1>' +
      '<p class="aula-head-sub">' + at.resumo + '</p>' +
      '<div class="aula-actions">' +
        '<a class="btn btn-sm btn-outline" href="#/' + a.id + '">&#8592; Aula ' + a.num + ' · ' + a.titulo + '</a>' +
        '<a class="btn btn-sm btn-outline" href="#/avaliacao">Como é avaliada</a>' +
      '</div>' +
    '</div>' +
    '<div class="activity-body" id="atividade-content"><div class="loading">Carregando a atividade…</div></div>';
  }

  /* ── ERRO / 404 ──────────────────────────────────────── */

  function naoEncontrado(rota) {
    return '' +
    '<section class="hero anim-fade-up">' +
      '<div class="hero-eyebrow">Erro 404</div>' +
      '<h1 class="hero-title">Página não <em>encontrada</em></h1>' +
      '<p class="hero-subtitle">A rota <code class="mono">' + escapeHTML(rota || '') + '</code> não existe neste site. ' +
        'Use o menu lateral ou volte ao início.</p>' +
      '<a class="hero-cta" href="#/">Voltar ao início &#8594;</a>' +
    '</section>';
  }

  function erroConteudo(msg) {
    return '<div class="info-box" style="border-left-color:var(--danger)">' +
      '<strong>Não foi possível carregar o material.</strong><br>' + msg +
      '<br><br>Se você abriu o arquivo direto do disco (<code class="mono">file://</code>), ' +
      'use um servidor local — por exemplo <code class="mono">python3 -m http.server</code> — ' +
      'ou acesse a versão publicada no GitHub Pages.</div>';
  }

  return {
    home: home, plano: plano, avaliacao: avaliacao, recursos: recursos,
    aula: aula, atividade: atividade,
    naoEncontrado: naoEncontrado, erroConteudo: erroConteudo,
    aulaPorId: aulaPorId, atividadePorId: atividadePorId
  };
})();
