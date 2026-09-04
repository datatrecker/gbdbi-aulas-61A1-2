/* ============================================================
   nav.js — sidebar (índice das 8 aulas + subnav), breadcrumb
   e comportamento mobile (hambúrguer + overlay)
   ============================================================ */

GBDBI.nav = (function () {

  var GERAIS = [
    { id: 'home',      num: '⌂', text: 'Início',            href: '#/' },
    { id: 'plano',     num: '§', text: 'Plano de ensino',   href: '#/plano' },
    { id: 'avaliacao', num: '%', text: 'Avaliação',         href: '#/avaliacao' },
    { id: 'recursos',  num: '↗', text: 'Recursos',          href: '#/recursos' }
  ];

  var elNav, elSidebar, elOverlay, elBread, elHamburger;

  /* ── construção ──────────────────────────────────────── */

  function link(item) {
    return '<a class="sidebar-link" href="' + item.href + '" data-nav="' + item.id + '">' +
      '<span class="sidebar-num" aria-hidden="true">' + item.num + '</span>' +
      '<span class="sidebar-text">' + item.text + '</span></a>';
  }

  function itemAula(a) {
    var sub = (a.subnav || []).map(function (s) {
      return '<a class="sidebar-sublink" href="#/' + a.id + '/' + s.id + '" data-sub="' + s.id + '">' +
        '<span class="sidebar-subnum" aria-hidden="true">' + s.num + '</span>' +
        '<span>' + s.text + '</span></a>';
    }).join('');

    return '<div class="sidebar-item" data-aula="' + a.id + '">' +
      '<a class="sidebar-link" href="#/' + a.id + '" data-nav="' + a.id + '">' +
        '<span class="sidebar-num" aria-hidden="true">' + a.num + '</span>' +
        '<span class="sidebar-text">' + a.titulo + '</span>' +
        '<span class="dot" data-state="' + GBDBI.progress.get(a.id) + '" title="' +
          GBDBI.progress.rotulo(GBDBI.progress.get(a.id)) + '"></span>' +
      '</a>' +
      (sub ? '<div class="sidebar-sub">' + sub + '</div>' : '') +
    '</div>';
  }

  function itemAtividade(at) {
    var sub = (at.subnav || []).map(function (s) {
      return '<a class="sidebar-sublink" href="#/' + at.id + '/' + s.id + '" data-sub="' + s.id + '">' +
        '<span class="sidebar-subnum" aria-hidden="true">' + s.num + '</span>' +
        '<span>' + s.text + '</span></a>';
    }).join('');

    return '<div class="sidebar-item" data-aula="' + at.id + '">' +
      '<a class="sidebar-link" href="#/' + at.id + '" data-nav="' + at.id + '">' +
        '<span class="sidebar-num" aria-hidden="true">' + at.num + '</span>' +
        '<span class="sidebar-text">' + at.titulo + '</span>' +
      '</a>' +
      (sub ? '<div class="sidebar-sub">' + sub + '</div>' : '') +
    '</div>';
  }

  function construir() {
    elNav.innerHTML =
      '<div class="sidebar-section-label">Disciplina</div>' +
      '<div class="sidebar-nav">' + GERAIS.map(link).join('') + '</div>' +
      '<div class="sidebar-divider"></div>' +
      '<div class="sidebar-section-label">Aulas</div>' +
      '<div class="sidebar-nav">' + (GBDBI.data.aulas || []).map(itemAula).join('') + '</div>' +
      '<div class="sidebar-divider"></div>' +
      '<div class="sidebar-section-label">Atividades</div>' +
      '<div class="sidebar-nav">' + (GBDBI.data.atividades || []).map(itemAtividade).join('') + '</div>';
  }

  /* ── estado ativo ────────────────────────────────────── */

  function marcarAtivo(rotaId, telaId) {
    Array.prototype.forEach.call(elNav.querySelectorAll('.sidebar-link'), function (el) {
      el.classList.toggle('active', el.getAttribute('data-nav') === rotaId);
    });
    Array.prototype.forEach.call(elNav.querySelectorAll('.sidebar-item'), function (el) {
      el.classList.toggle('active', el.getAttribute('data-aula') === rotaId);
    });
    marcarTela(telaId);

    /* Adiado um frame: o navegador restaura o scroll dos containers
       após o load, e a correção precisa vir depois disso. */
    requestAnimationFrame(revelarAtivo);
  }

  /* Rola a sidebar só quando o item ativo está de fato fora de vista —
     o cabeçalho sticky é descontado do topo visível. */
  function revelarAtivo() {
    var ativo = elNav.querySelector('.sidebar-link.active');
    if (!ativo) return;
    var topoUtil = elSidebar.getBoundingClientRect().top +
      document.querySelector('.sidebar-header').offsetHeight;
    var base = elSidebar.getBoundingClientRect().bottom;
    var r = ativo.getBoundingClientRect();
    if (r.top < topoUtil) elSidebar.scrollTop -= (topoUtil - r.top) + 8;
    else if (r.bottom > base) elSidebar.scrollTop += (r.bottom - base) + 8;
  }

  function marcarTela(telaId) {
    Array.prototype.forEach.call(elNav.querySelectorAll('.sidebar-sublink'), function (el) {
      el.classList.remove('active');
    });
    if (!telaId) return;
    var item = elNav.querySelector('.sidebar-item.active');
    if (!item) return;
    var alvo = item.querySelector('.sidebar-sublink[data-sub="' + telaId + '"]');
    if (alvo) alvo.classList.add('active');
  }

  function atualizarDots() {
    Array.prototype.forEach.call(elNav.querySelectorAll('.sidebar-item'), function (el) {
      var dot = el.querySelector('.dot');
      if (!dot) return;
      var estado = GBDBI.progress.get(el.getAttribute('data-aula'));
      dot.setAttribute('data-state', estado);
      dot.setAttribute('title', GBDBI.progress.rotulo(estado));
    });
  }

  /* ── breadcrumb ──────────────────────────────────────── */

  function breadcrumb(trilha) {
    elBread.innerHTML = trilha.map(function (t, i) {
      var ultimo = i === trilha.length - 1;
      var no = ultimo
        ? '<span class="current">' + t.text + '</span>'
        : '<a href="' + t.href + '">' + t.text + '</a>';
      return (i ? '<span class="sep" aria-hidden="true">/</span>' : '') + no;
    }).join('');
  }

  /* ── mobile ──────────────────────────────────────────── */

  function abrir() {
    elSidebar.classList.add('open');
    elOverlay.hidden = false;
    elOverlay.classList.add('open');
    elHamburger.setAttribute('aria-expanded', 'true');
  }

  function fechar() {
    elSidebar.classList.remove('open');
    elOverlay.classList.remove('open');
    elOverlay.hidden = true;
    elHamburger.setAttribute('aria-expanded', 'false');
  }

  function init() {
    elNav = document.getElementById('sidebar-nav');
    elSidebar = document.getElementById('sidebar');
    elOverlay = document.getElementById('sidebar-overlay');
    elBread = document.getElementById('breadcrumb');
    elHamburger = document.getElementById('hamburger');

    construir();

    elHamburger.addEventListener('click', function () {
      elSidebar.classList.contains('open') ? fechar() : abrir();
    });
    document.getElementById('sidebar-close').addEventListener('click', fechar);
    elOverlay.addEventListener('click', fechar);

    /* Qualquer link da sidebar fecha o menu no mobile. */
    elNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fechar();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fechar();
    });

    document.addEventListener('gbdbi:progresso', atualizarDots);
  }

  return {
    init: init, marcarAtivo: marcarAtivo, marcarTela: marcarTela,
    breadcrumb: breadcrumb, fechar: fechar, atualizarDots: atualizarDots
  };
})();
