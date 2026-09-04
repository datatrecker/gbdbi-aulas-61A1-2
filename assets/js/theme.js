/* ============================================================
   theme.js — alternância dark/light com persistência
   ============================================================ */

GBDBI.theme = (function () {
  var KEY = 'gbdbi:tema';

  function atual() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function aplicar(t) {
    document.documentElement.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'light' ? '#F7F7F5' : '#0D0D0D');
    try { localStorage.setItem(KEY, t); } catch (e) {}
  }

  function alternar() {
    aplicar(atual() === 'light' ? 'dark' : 'light');
  }

  function init() {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', alternar);
  }

  return { init: init, alternar: alternar, atual: atual };
})();
