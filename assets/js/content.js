/* ============================================================
   content.js — carregamento sob demanda do material das aulas
   Cada arquivo content/<id>.js atribui GBDBI.content[id] = "<html>".
   ============================================================ */

GBDBI.carregarConteudo = (function () {
  var pendentes = {};

  return function (id) {
    if (GBDBI.content[id]) return Promise.resolve(GBDBI.content[id]);
    if (pendentes[id]) return pendentes[id];

    pendentes[id] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'content/' + id + '.js';
      s.async = true;
      s.onload = function () {
        if (GBDBI.content[id]) resolve(GBDBI.content[id]);
        else reject(new Error('Conteúdo vazio: ' + id));
      };
      s.onerror = function () {
        delete pendentes[id];
        reject(new Error('Falha ao carregar o material de ' + id));
      };
      document.head.appendChild(s);
    });

    return pendentes[id];
  };
})();
