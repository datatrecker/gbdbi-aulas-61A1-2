/* ============================================================
   app.js — bootstrap da SPA e handlers globais.

   O material das aulas aciona estas ações via atributos data-*
   (data-show, data-toggle, .acc-trigger, data-copy, data-action)
   em vez de handlers inline (onclick=...), que a Content-Security-Policy
   de index.html bloqueia (script-src sem 'unsafe-inline'/'unsafe-hashes' —
   ver site/README.md, seção "Convenção de segurança"). A delegação de
   clique abaixo é o único lugar que interpreta esses atributos.
   ============================================================ */

(function () {

  /* ── ações usadas pelo conteúdo das aulas ─────────────── */

  /* Troca a tela ativa dentro de uma aula. */
  function mostrarTela(telaId) {
    GBDBI.router.mostrarTela(telaId);
  }

  /* Acordeões e disclosures: alternam a classe .open no bloco.
     Endereçado por id (data-toggle="id-do-bloco") ou pelo próprio
     gatilho (.acc-trigger, que sobe até o item pai). */
  function toggleAcc(alvo) {
    var el = typeof alvo === 'string'
      ? document.getElementById(alvo)
      : (alvo && alvo.closest('.acc-item, .disc, .nosql-type'));
    if (el) el.classList.toggle('open');
  }

  /* Copia o conteúdo de um bloco de código. */
  function copyCode(botao, alvoId) {
    var alvo = document.getElementById(alvoId);
    if (!alvo) return;

    var texto = alvo.innerText;
    var original = botao.textContent;

    function ok() {
      botao.textContent = 'Copiado!';
      setTimeout(function () { botao.textContent = original; }, 1600);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(ok, fallback);
    } else {
      fallback();
    }

    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = texto;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:absolute;left:-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); ok(); }
      catch (e) { botao.textContent = 'Copie manualmente'; setTimeout(function () { botao.textContent = original; }, 1600); }
      document.body.removeChild(ta);
    }
  }

  /* Aula 5 · revela a análise dos dashboards após a discussão. */
  function revealP2Analysis() {
    var el = document.getElementById('p2-analysis');
    if (!el) return;
    el.style.display = 'flex';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── bootstrap ────────────────────────────────────────── */

  function delegacao() {
    document.addEventListener('click', function (e) {

      /* abas da aula */
      var tab = e.target.closest('.tab[data-tab]');
      if (tab) {
        var nome = tab.getAttribute('data-tab');
        var rota = GBDBI.router.rotaAtual().rota;
        GBDBI.router.ativarAba(nome);
        history.replaceState(null, '', '#/' + rota + (nome === 'plano' ? '/plano' : ''));
        return;
      }

      /* marcar aula como concluída */
      var btn = e.target.closest('[data-acao="concluir"]');
      if (btn) {
        GBDBI.progress.alternarConclusao(btn.getAttribute('data-aula'));
        var estado = GBDBI.progress.get(btn.getAttribute('data-aula'));
        var concluida = estado === 'concluida';
        btn.innerHTML = concluida ? '&#10003; Aula concluída' : 'Marcar como concluída';
        btn.classList.toggle('btn-primary', concluida);
        btn.classList.toggle('btn-outline', !concluida);
        var pill = btn.parentNode.querySelector('.progress-pill');
        if (pill) {
          pill.setAttribute('data-state', estado);
          pill.textContent = GBDBI.progress.rotulo(estado);
        }
        return;
      }

      /* navegação interna de uma aula (cards do menu, botões ← →) */
      var mostrar = e.target.closest('[data-show]');
      if (mostrar) {
        mostrarTela(mostrar.getAttribute('data-show'));
        return;
      }

      /* acordeão acionado pelo próprio gatilho */
      var accSelf = e.target.closest('.acc-trigger');
      if (accSelf) {
        toggleAcc(accSelf);
        return;
      }

      /* acordeão/disclosure endereçado por id */
      var accId = e.target.closest('[data-toggle]');
      if (accId) {
        toggleAcc(accId.getAttribute('data-toggle'));
        return;
      }

      /* copiar bloco de código */
      var copiar = e.target.closest('[data-copy]');
      if (copiar) {
        copyCode(copiar, copiar.getAttribute('data-copy'));
        return;
      }

      /* aula 5 · revelar análise dos dashboards */
      if (e.target.closest('[data-action="reveal-p2-analysis"]')) {
        revealP2Analysis();
        return;
      }
    });
  }

  function iniciar() {
    GBDBI.theme.init();
    GBDBI.nav.init();
    delegacao();
    GBDBI.router.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
