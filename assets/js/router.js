/* ============================================================
   router.js — roteamento por hash (#/rota/subrota)
   Trocar de tela dentro de uma aula não re-renderiza a página.
   ============================================================ */

GBDBI.router = (function () {

  var R = function () { return GBDBI.render; };
  var elView;
  var atual = { rota: null, sub: null };

  /* ── utilidades ──────────────────────────────────────── */

  function parse() {
    var h = (location.hash || '').replace(/^#\/?/, '').replace(/\/+$/, '');
    var partes = h.split('/').filter(Boolean);
    return { rota: partes[0] || 'home', sub: partes[1] || null };
  }

  function irPara(hash) {
    if (location.hash === hash) aplicar();
    else location.hash = hash;
  }

  /* 'instant' é necessário: html { scroll-behavior: smooth } transformaria
     'auto' em animação, que competiria com o scroll até a âncora. */
  function subirTopo() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function foco() {
    elView.focus({ preventScroll: true });
  }

  /* ── telas internas de uma aula (.page) ──────────────── */

  function mostrarTela(telaId, rolar) {
    var host = document.getElementById('aula-content');
    if (!host) return;
    var telas = host.querySelectorAll('.page');
    if (!telas.length) return;

    var alvo = host.querySelector('#' + CSS.escape(telaId));
    if (!alvo || !alvo.classList.contains('page')) {
      alvo = host.querySelector('#menu.page') || telas[0];
      telaId = alvo.id;
    }

    Array.prototype.forEach.call(telas, function (p) { p.classList.remove('active'); });
    alvo.classList.add('active');

    atual.sub = telaId;
    GBDBI.nav.marcarTela(telaId);

    var esperado = '#/' + atual.rota + (telaId && telaId !== 'menu' ? '/' + telaId : '');
    if (location.hash !== esperado) {
      history.replaceState(null, '', esperado);
    }
    if (rolar !== false) subirTopo();
  }

  /* ── âncoras dentro de uma atividade ─────────────────── */

  /* Posição calculada em vez de scrollIntoView: desconta o header sticky
     e roda depois do layout, com o conteúdo já injetado. */
  function irParaAncora(id) {
    if (!id) { subirTopo(); return; }
    var alvo = document.getElementById(id);
    if (!alvo) { subirTopo(); return; }
    GBDBI.nav.marcarTela(id);
    /* getBoundingClientRect força o layout, então a posição já é a final —
       adiar para requestAnimationFrame perderia a rolagem em aba oculta,
       onde o rAF não dispara. */
    var y = alvo.getBoundingClientRect().top + window.pageYOffset - 80;
    var suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(0, y), behavior: suave ? 'smooth' : 'instant' });
  }

  /* ── abas da aula ────────────────────────────────────── */

  function ativarAba(nome) {
    var tabs = elView.querySelectorAll('.tab[data-tab]');
    if (!tabs.length) return;
    Array.prototype.forEach.call(tabs, function (t) {
      var on = t.getAttribute('data-tab') === nome;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    ['material', 'plano'].forEach(function (n) {
      var p = document.getElementById('tab-' + n);
      if (p) p.classList.toggle('active', n === nome);
    });
  }

  /* ── rotas ───────────────────────────────────────────── */

  function rotaEstatica(nome, html, trilha) {
    elView.innerHTML = html;
    GBDBI.nav.marcarAtivo(nome, null);
    GBDBI.nav.breadcrumb(trilha);
    document.title = trilha[trilha.length - 1].text + ' · Gestão de BD e BI';
    subirTopo();
    foco();
  }

  function rotaAula(a, sub) {
    var aba = sub === 'plano' ? 'plano' : 'material';
    var tela = aba === 'plano' ? null : (sub || 'menu');

    GBDBI.progress.iniciar(a.id);
    elView.innerHTML = R().aula(a, aba);
    GBDBI.nav.marcarAtivo(a.id, tela);
    GBDBI.nav.breadcrumb([
      { text: 'Início', href: '#/' },
      { text: 'Aula ' + a.num, href: '#/' + a.id },
      { text: a.titulo }
    ]);
    document.title = 'Aula ' + a.num + ' · ' + a.titulo + ' · Gestão de BD e BI';
    subirTopo();
    foco();

    GBDBI.carregarConteudo(a.id).then(function (html) {
      var host = document.getElementById('aula-content');
      if (!host || atual.rota !== a.id) return;
      host.innerHTML = html;
      mostrarTela(tela || 'menu', false);
    }).catch(function (err) {
      var host = document.getElementById('aula-content');
      if (host) host.innerHTML = R().erroConteudo(err.message);
    });
  }

  function rotaAtividade(at, sub) {
    var a = R().aulaPorId(at.aula);

    elView.innerHTML = R().atividade(at);
    GBDBI.nav.marcarAtivo(at.id, sub);
    GBDBI.nav.breadcrumb([
      { text: 'Início', href: '#/' },
      { text: 'Aula ' + a.num, href: '#/' + a.id },
      { text: 'Atividade ' + at.num }
    ]);
    document.title = 'Atividade ' + at.num + ' · ' + at.titulo + ' · Gestão de BD e BI';
    subirTopo();
    foco();

    GBDBI.carregarConteudo(at.id).then(function (html) {
      var host = document.getElementById('atividade-content');
      if (!host || atual.rota !== at.id) return;
      host.innerHTML = html;
      if (sub) irParaAncora(sub);
    }).catch(function (err) {
      var host = document.getElementById('atividade-content');
      if (host) host.innerHTML = R().erroConteudo(err.message);
    });
  }

  /* ── despacho ────────────────────────────────────────── */

  function aplicar() {
    var r = parse();
    var aula = R().aulaPorId(r.rota);
    var ativ = R().atividadePorId(r.rota);
    var mesmaPagina = atual.rota === r.rota;

    /* Navegação interna: só troca a tela/âncora, sem re-render. */
    if (mesmaPagina && aula) {
      if (r.sub === 'plano') { ativarAba('plano'); subirTopo(); }
      else { ativarAba('material'); mostrarTela(r.sub || 'menu'); }
      return;
    }
    if (mesmaPagina && ativ) { irParaAncora(r.sub); return; }

    atual = { rota: r.rota, sub: r.sub };

    if (aula) return rotaAula(aula, r.sub);
    if (ativ) return rotaAtividade(ativ, r.sub);

    switch (r.rota) {
      case 'home':
        return rotaEstatica('home', R().home(), [{ text: 'Início' }]);
      case 'plano':
        return rotaEstatica('plano', R().plano(), [
          { text: 'Início', href: '#/' }, { text: 'Plano de ensino' }]);
      case 'avaliacao':
        return rotaEstatica('avaliacao', R().avaliacao(), [
          { text: 'Início', href: '#/' }, { text: 'Avaliação' }]);
      case 'recursos':
        return rotaEstatica('recursos', R().recursos(), [
          { text: 'Início', href: '#/' }, { text: 'Recursos' }]);
      default:
        atual.rota = null;
        return rotaEstatica('', R().naoEncontrado('#/' + r.rota), [
          { text: 'Início', href: '#/' }, { text: 'Não encontrado' }]);
    }
  }

  function init() {
    elView = document.getElementById('view');
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.addEventListener('hashchange', aplicar);
    aplicar();
  }

  return {
    init: init, aplicar: aplicar, irPara: irPara,
    mostrarTela: mostrarTela, ativarAba: ativarAba, rotaAtual: function () { return atual; }
  };
})();
