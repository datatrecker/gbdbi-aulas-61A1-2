/* ============================================================
   progress.js — estado de progresso por aula (localStorage)
   Estados: 'nao-iniciada' | 'andamento' | 'concluida'
   ============================================================ */

GBDBI.progress = (function () {
  var KEY = 'gbdbi:progresso';
  var cache = null;

  var ROTULO = {
    'nao-iniciada': 'Não iniciada',
    'andamento': 'Em andamento',
    'concluida': 'Concluída'
  };

  function todos() {
    if (cache) return cache;
    try { cache = JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { cache = {}; }
    return cache;
  }

  function salvar() {
    try { localStorage.setItem(KEY, JSON.stringify(todos())); } catch (e) {}
    document.dispatchEvent(new CustomEvent('gbdbi:progresso'));
  }

  function get(id) {
    return todos()[id] || 'nao-iniciada';
  }

  function set(id, estado) {
    todos()[id] = estado;
    salvar();
  }

  /* Visitar uma aula já a tira de "não iniciada". */
  function iniciar(id) {
    if (get(id) === 'nao-iniciada') set(id, 'andamento');
  }

  function alternarConclusao(id) {
    set(id, get(id) === 'concluida' ? 'andamento' : 'concluida');
  }

  function resumo() {
    var aulas = GBDBI.data.aulas || [];
    var concluidas = 0, andamento = 0;
    aulas.forEach(function (a) {
      var e = get(a.id);
      if (e === 'concluida') concluidas++;
      else if (e === 'andamento') andamento++;
    });
    return {
      total: aulas.length,
      concluidas: concluidas,
      andamento: andamento,
      percentual: aulas.length ? Math.round((concluidas / aulas.length) * 100) : 0
    };
  }

  function rotulo(estado) { return ROTULO[estado] || ROTULO['nao-iniciada']; }

  return {
    get: get, set: set, iniciar: iniciar,
    alternarConclusao: alternarConclusao,
    resumo: resumo, rotulo: rotulo
  };
})();
