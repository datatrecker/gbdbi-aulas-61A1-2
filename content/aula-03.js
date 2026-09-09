GBDBI.content["aula-03"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gest&#227;o BD &amp; BI · 26.09.2026</div>
        <div class="m-title">Aula 3 — A Linguagem<br>das <em>Respostas</em></div>
        <div class="m-sub">DDL · DML · SELECT · FROM · WHERE · JOIN · GROUP BY</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">O que voc&#234; vai saber fazer ao final desta aula — cinco objetivos de aprendizagem.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Vis&#227;o Geral da Aula</div><p class="mc-p">O problema da segunda-feira na SoundByte e os cinco comandos que resolvem 80% das perguntas.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">O Modelo SoundByte</div><p class="mc-p">Do cat&#225;logo desnormalizado &#224;s 7 tabelas relacionais prontas para consulta.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">SELECT e FROM</div><p class="mc-p">Escolha o qu&#234; mostrar e de qual tabela — a base de qualquer consulta.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p_where"><div class="mc-num">04</div><div class="mc-h">WHERE — Filtrando Linhas</div><p class="mc-p">Filtre linhas por condi&#231;&#227;o antes de retornar o resultado. Operadores: =, BETWEEN, LIKE, IN, AND, OR.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">05</div><div class="mc-h">JOIN — Cruzando Tabelas</div><p class="mc-p">INNER, LEFT, RIGHT e FULL OUTER JOIN: cruze tabelas pela chave e entenda o que cada tipo retorna.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">06</div><div class="mc-h">GROUP BY e Agrega&#231;&#245;es</div><p class="mc-p">Agrupe para calcular totais, m&#233;dias e contagens — a SQL equivalente da tabela din&#226;mica.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">07</div><div class="mc-h">O que a IA pode e n&#227;o pode fazer</div><p class="mc-p">A IA gera c&#243;digo correto sintaticamente. Quem valida se a resposta faz sentido de neg&#243;cio ainda &#233; o humano.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">08</div><div class="mc-h">Links e Ferramentas</div><p class="mc-p">Tutoriais de sintaxe SQL, tipos de dados, ambiente online e cria&#231;&#227;o de ERDs.</p><span class="mc-arrow">&#8599;</span></div>
        <div class="mcard" data-show="p8"><div class="mc-num">09</div><div class="mc-h">Exerc&#237;cio &#8212; Banco de Dados Netflix</div><p class="mc-p">Do diagrama &#224; consulta: perguntas anal&#237;ticas com aux&#237;lio da IA, respondidas em SQL.</p><span class="mc-arrow">&#8599;</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS DA AULA ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que voc&#234; vai<br><em>saber fazer.</em></div>
        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Reconhecer os cinco comandos SQL fundamentais — SELECT, FROM, WHERE, JOIN e GROUP BY — e seus prop&#243;sitos b&#225;sicos.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar como cada cl&#225;usula SQL transforma os dados para responder uma pergunta de neg&#243;cio espec&#237;fica.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Escrever consultas com SELECT, WHERE, JOIN e GROUP BY para extrair informa&#231;&#245;es de um banco relacional normalizado.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Interpretar o resultado de uma consulta e diagnosticar por que uma query retorna dados errados ou gera erros de sintaxe.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Julgar se a resposta retornada por uma query — inclusive gerada por IA — responde corretamente a pergunta de neg&#243;cio original.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">&#8592; In&#237;cio</button>
          <button class="pn-btn pn-fwd" data-show="p1">Vis&#227;o Geral &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — VISÃO GERAL ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">Quem vai buscar<br><em>as respostas?</em></div>

        <!-- SQL demo -->
        <div class="sql-block">
<pre><span class="cm">-- SELECIONE o nome dos artistas</span>
<span class="k">SELECT</span> artista_nome
<span class="cm">-- DA tabela artistas</span>
<span class="k">FROM</span>   artistas
<span class="cm">-- ONDE o g&#234;nero seja MPB</span>
<span class="k">WHERE</span>  artista_genero = <span class="s">'MPB'</span>;</pre>
        </div>

        <!-- Accordion: Conceitos Trabalhados -->
        <div class="accordion">
          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Conceitos Trabalhados</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag olap">SQL como alfabetiza&#231;&#227;o</div>
                <div class="acc-col-text">SQL &#233; quase portugu&#234;s. Uma query pode ser lida em voz alta e compreendida por quem nunca programou — o ponto &#233; esse.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag oltp">Os 5 comandos do dia a dia</div>
                <div class="acc-col-text">SELECT · FROM · WHERE · JOIN · GROUP BY resolvem 80% das perguntas anal&#237;ticas de uma empresa. Os outros 20% s&#227;o varia&#231;&#245;es.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag olap">Humano valida, IA gera</div>
                <div class="acc-col-text">A IA pode gerar c&#243;digo correto que responde a pergunta errada. A curadoria anal&#237;tica ainda &#233; humana.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">O Problema da Segunda-Feira</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag olap">Clientes inativos</div>
                <div class="acc-col-text">Quais clientes n&#227;o compram h&#225; mais de seis meses? Marketing precisa da lista para a campanha de reativa&#231;&#227;o.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag oltp">Artistas em crescimento</div>
                <div class="acc-col-text">Quais artistas tiveram crescimento de receita nos &#250;ltimos 12 meses? Curadoria precisa renovar contratos.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag olap">Ticket m&#233;dio por pa&#237;s</div>
                <div class="acc-col-text">Quais pa&#237;ses t&#234;m o maior ticket m&#233;dio? Expans&#227;o precisa definir mercados priorit&#225;rios.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">&#8592; Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">O Modelo SoundByte &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — O MODELO SOUNDBYTE ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">Do caos &#224; consulta:<br><em>7 tabelas.</em></div>

        <div class="diagram">
          <svg viewBox="0 0 700 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Antes -->
            <rect x="20" y="10" width="300" height="120" rx="12" fill="#ffffff" stroke="#dfc9c0" stroke-width="1.5"/>
            <rect x="20" y="10" width="300" height="40" rx="12" fill="#b83030" opacity=".06"/>
            <rect x="20" y="34" width="300" height="16" fill="#b83030" opacity=".06"/>
            <text x="170" y="36" text-anchor="middle" fill="#b83030" font-size="10" font-weight="800" font-family="system-ui" letter-spacing="1">&#10007; ANTES — 1 TABELA, 23 COLUNAS</text>
            <text x="40" y="68" fill="#1a0d0d" font-size="11" font-family="system-ui">pedido_id, cliente_id, artista_id,</text>
            <text x="40" y="84" fill="#1a0d0d" font-size="11" font-family="system-ui">faixa_id, album_id, gravadora_id...</text>
            <text x="40" y="104" fill="#b83030" font-size="10" font-family="system-ui">Anomalias de inser&#231;&#227;o, altera&#231;&#227;o, exclus&#227;o</text>
            <text x="40" y="118" fill="#b83030" font-size="10" font-family="system-ui">Ana Lima com dois IDs. Pre&#231;o zerado.</text>

            <!-- Arrow -->
            <line x1="330" y1="70" x2="370" y2="70" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="368,64 380,70 368,76" fill="#c8aeaa"/>

            <!-- Depois -->
            <rect x="390" y="10" width="290" height="120" rx="12" fill="#ffffff" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="390" y="10" width="290" height="40" rx="12" fill="#7a1a1a" opacity=".06"/>
            <rect x="390" y="34" width="290" height="16" fill="#7a1a1a" opacity=".06"/>
            <text x="535" y="36" text-anchor="middle" fill="#7a1a1a" font-size="10" font-weight="800" font-family="system-ui" letter-spacing="1">&#10003; DEPOIS — 7 TABELAS</text>
            <text x="410" y="68" fill="#1a0d0d" font-size="11" font-family="system-ui">clientes · artistas · gravadoras</text>
            <text x="410" y="84" fill="#1a0d0d" font-size="11" font-family="system-ui">albuns · faixas · pedidos · itens_pedido</text>
            <text x="410" y="104" fill="#7a1a1a" font-size="10" font-family="system-ui">Cada entidade em sua tabela.</text>
            <text x="410" y="118" fill="#7a1a1a" font-size="10" font-family="system-ui">PKs e FKs garantem integridade.</text>
          </svg>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">clientes</div><div class="kp-text">PK: cliente_id · cliente_nome · cliente_email · cliente_pais · cliente_cidade</div></div>
          <div class="kp"><div class="kp-tag">artistas</div><div class="kp-text">PK: artista_id · artista_nome · artista_genero · artista_pais_origem</div></div>
          <div class="kp"><div class="kp-tag">gravadoras</div><div class="kp-text">PK: gravadora_id · gravadora_nome</div></div>
          <div class="kp"><div class="kp-tag">albuns</div><div class="kp-text">PK: album_id · album_titulo · album_ano · FK: artista_id · FK: gravadora_id</div></div>
          <div class="kp"><div class="kp-tag">faixas</div><div class="kp-text">PK: faixa_id · faixa_titulo · faixa_duracao_seg · faixa_preco_usd · faixa_formato · FK: album_id</div></div>
          <div class="kp"><div class="kp-tag">pedidos</div><div class="kp-text">PK: pedido_id · pedido_data · FK: cliente_id</div></div>
          <div class="kp"><div class="kp-tag">itens_pedido</div><div class="kp-text">FK: pedido_id · FK: faixa_id · qtd_comprada · total_item_usd · PK composta</div></div>
        </div>

        <!-- DDL completo -->
        <div class="sql-wrap">
          <div class="sql-header">
            <div class="sql-label">DDL &middot; SoundByte</div>
            <button class="copy-btn" data-copy="ddl-soundbyte">Copiar</button>
          </div>
          <div class="sql-block">
<pre><code id="ddl-soundbyte"><span class="k">CREATE TABLE</span> clientes (
  cliente_id     <span class="f">SERIAL</span>       <span class="k">PRIMARY KEY</span>,
  cliente_nome   <span class="f">VARCHAR</span>(<span class="n">100</span>) <span class="k">NOT NULL</span>,
  cliente_email  <span class="f">VARCHAR</span>(<span class="n">100</span>) <span class="k">UNIQUE NOT NULL</span>,
  cliente_pais   <span class="f">VARCHAR</span>(<span class="n">50</span>),
  cliente_cidade <span class="f">VARCHAR</span>(<span class="n">50</span>)
);

<span class="k">CREATE TABLE</span> artistas (
  artista_id          <span class="f">SERIAL</span>       <span class="k">PRIMARY KEY</span>,
  artista_nome        <span class="f">VARCHAR</span>(<span class="n">100</span>) <span class="k">NOT NULL</span>,
  artista_genero      <span class="f">VARCHAR</span>(<span class="n">50</span>),
  artista_pais_origem <span class="f">VARCHAR</span>(<span class="n">50</span>)
);

<span class="k">CREATE TABLE</span> gravadoras (
  gravadora_id   <span class="f">SERIAL</span>       <span class="k">PRIMARY KEY</span>,
  gravadora_nome <span class="f">VARCHAR</span>(<span class="n">100</span>) <span class="k">NOT NULL</span>
);

<span class="k">CREATE TABLE</span> albuns (
  album_id      <span class="f">SERIAL</span>       <span class="k">PRIMARY KEY</span>,
  album_titulo  <span class="f">VARCHAR</span>(<span class="n">150</span>) <span class="k">NOT NULL</span>,
  album_ano     <span class="f">SMALLINT</span>,
  artista_id    <span class="f">INTEGER</span>      <span class="k">REFERENCES</span> artistas(artista_id),
  gravadora_id  <span class="f">INTEGER</span>      <span class="k">REFERENCES</span> gravadoras(gravadora_id)
);

<span class="k">CREATE TABLE</span> faixas (
  faixa_id          <span class="f">SERIAL</span>       <span class="k">PRIMARY KEY</span>,
  faixa_titulo      <span class="f">VARCHAR</span>(<span class="n">200</span>) <span class="k">NOT NULL</span>,
  faixa_duracao_seg <span class="f">INTEGER</span>,
  faixa_preco_usd   <span class="f">NUMERIC</span>(<span class="n">6</span>,<span class="n">2</span>) <span class="k">NOT NULL</span>,
  faixa_formato     <span class="f">VARCHAR</span>(<span class="n">10</span>),
  album_id          <span class="f">INTEGER</span>      <span class="k">REFERENCES</span> albuns(album_id)
);

<span class="k">CREATE TABLE</span> pedidos (
  pedido_id   <span class="f">SERIAL</span>  <span class="k">PRIMARY KEY</span>,
  pedido_data <span class="f">DATE</span>    <span class="k">NOT NULL</span>,
  cliente_id  <span class="f">INTEGER</span> <span class="k">REFERENCES</span> clientes(cliente_id)
);

<span class="k">CREATE TABLE</span> itens_pedido (
  pedido_id      <span class="f">INTEGER</span>      <span class="k">REFERENCES</span> pedidos(pedido_id),
  faixa_id       <span class="f">INTEGER</span>      <span class="k">REFERENCES</span> faixas(faixa_id),
  qtd_comprada   <span class="f">INTEGER</span>      <span class="k">DEFAULT</span> <span class="n">1</span>,
  total_item_usd <span class="f">NUMERIC</span>(<span class="n">6</span>,<span class="n">2</span>),
  <span class="k">PRIMARY KEY</span> (pedido_id, faixa_id)
);</code></pre>
          </div>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">DDL</div><div class="kp-text">Data Definition Language — comandos que criam e alteram a estrutura do banco (CREATE, ALTER, DROP).</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">DML</div><div class="kp-text">Data Manipulation Language — comandos que movimentam dados (INSERT, UPDATE, DELETE, SELECT).</div></div>
          <div class="kp"><div class="kp-tag">REFERENCES</div><div class="kp-text">Declara a FK e delega ao SGBD a responsabilidade de garantir a integridade referencial automaticamente.</div></div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">&#8592; Vis&#227;o Geral</button>
          <button class="pn-btn pn-fwd" data-show="p3">SELECT e FROM &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — SELECT e FROM ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">Escolha o qu&#234;<br><em>e de onde.</em></div>

        <div class="diagram">
          <svg viewBox="0 0 700 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- SELECT box -->
            <rect x="20" y="18" width="205" height="84" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="122" y="43" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.5" font-weight="700">SELECT</text>
            <text x="122" y="68" text-anchor="middle" fill="#7a1a1a" font-size="15" font-family="'SF Mono','Consolas',monospace" font-weight="700">cliente_nome</text>
            <text x="122" y="89" text-anchor="middle" fill="#8a6060" font-size="12" font-family="system-ui">Quais colunas mostrar</text>
            <!-- Arrow -->
            <line x1="227" y1="60" x2="260" y2="60" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="258,54 270,60 258,66" fill="#c8aeaa"/>
            <!-- FROM box -->
            <rect x="273" y="18" width="162" height="84" rx="10" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <text x="354" y="43" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.5" font-weight="700">FROM</text>
            <text x="354" y="68" text-anchor="middle" fill="#b83030" font-size="15" font-family="'SF Mono','Consolas',monospace" font-weight="700">clientes</text>
            <text x="354" y="89" text-anchor="middle" fill="#8a6060" font-size="12" font-family="system-ui">Qual tabela consultar</text>
            <!-- Arrow -->
            <line x1="437" y1="60" x2="468" y2="60" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="466,54 478,60 466,66" fill="#c8aeaa"/>
            <!-- Result box -->
            <rect x="481" y="8" width="205" height="104" rx="10" fill="#f5ecea" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="583" y="32" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.5" font-weight="700">RESULTADO</text>
            <line x1="493" y1="40" x2="674" y2="40" stroke="#dfc9c0" stroke-width="1"/>
            <text x="503" y="58" fill="#8a6060" font-size="12" font-family="system-ui">Carlos Mendes</text>
            <text x="503" y="76" fill="#8a6060" font-size="12" font-family="system-ui">Julia Ferreira</text>
            <text x="503" y="94" fill="#8a6060" font-size="12" font-family="system-ui">Emma Clarke</text>
            <text x="503" y="104" fill="#8a6060" font-size="10" font-family="system-ui">&#8230;</text>
          </svg>
        </div>

        <div class="sql-block">
<pre><span class="k">SELECT</span> cliente_nome, cliente_email, cliente_pais
<span class="k">FROM</span>   clientes;</pre>
        </div>

        <table class="tbl">
          <thead><tr><th>cliente_nome</th><th>cliente_email</th><th>cliente_pais</th></tr></thead>
          <tbody>
            <tr><td>Carlos Mendes</td><td>carlos@email.com</td><td>Brasil</td></tr>
            <tr><td>Julia Ferreira</td><td>julia@email.com</td><td>Brasil</td></tr>
            <tr><td>Emma Clarke</td><td>emma@email.com</td><td>UK</td></tr>
            <tr><td>Yuki Tanaka</td><td>yuki@email.com</td><td>Jap&#227;o</td></tr>
          </tbody>
        </table>

        <div class="sql-block">
<pre><span class="k">SELECT</span> faixa_titulo, faixa_preco_usd, faixa_formato
<span class="k">FROM</span>   faixas
<span class="k">ORDER BY</span> faixa_preco_usd <span class="k">DESC</span>;</pre>
        </div>

        <table class="tbl">
          <thead><tr><th>faixa_titulo</th><th>faixa_preco_usd</th><th>faixa_formato</th></tr></thead>
          <tbody>
            <tr><td>Milonga Infinita</td><td>4.99</td><td>MP3</td></tr>
            <tr><td>Nacht Signal</td><td>4.49</td><td>FLAC</td></tr>
            <tr><td>Saudade Eterna</td><td>3.99</td><td>MP3</td></tr>
            <tr><td>Foggy Days</td><td>3.99</td><td>AAC</td></tr>
            <tr><td>Teranga</td><td>1.99</td><td>MP3</td></tr>
          </tbody>
        </table>

        <div class="kps">
          <div class="kp"><div class="kp-tag">SELECT *</div><div class="kp-text">O asterisco retorna todas as colunas. &#218;til para explorar, mas evite em produ&#231;&#227;o — traz dados desnecess&#225;rios e sobrecarrega o banco.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">ORDER BY</div><div class="kp-text">Ordena o resultado. ASC (padr&#227;o, crescente) ou DESC (decrescente).</div></div>
          <div class="kp"><div class="kp-tag">Alias com AS</div><div class="kp-text">SELECT faixa_preco_usd AS preco renomeia a coluna no resultado, &#250;til para relat&#243;rios mais leg&#237;veis.</div></div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">&#8592; Modelo SoundByte</button>
          <button class="pn-btn pn-fwd" data-show="p_where">WHERE &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P_WHERE — WHERE ═══ -->
    <div id="p_where" class="page">
      <div class="t-body">
        <div class="t-title">Filtre as linhas<br><em>que importam.</em></div>

        <table class="tbl">
          <thead><tr><th>cliente_id</th><th>cliente_nome</th><th>cliente_email</th><th>cliente_pais</th></tr></thead>
          <tbody>
            <tr><td>5001</td><td>Carlos Mendes</td><td>carlos@email.com</td><td>Brasil</td></tr>
            <tr><td>5002</td><td>Julia Ferreira</td><td>julia@email.com</td><td>Brasil</td></tr>
            <tr><td>5003</td><td>Yuki Tanaka</td><td>yuki@email.com</td><td>Jap&#227;o</td></tr>
            <tr><td>5004</td><td>Emma Clarke</td><td>emma@email.com</td><td>UK</td></tr>
            <tr><td>5005</td><td>Ana Lima</td><td>ana@email.com</td><td>Brasil</td></tr>
          </tbody>
        </table>

        <div class="sql-block">
<pre><span class="k">SELECT</span> cliente_nome, cliente_email, cliente_pais
<span class="k">FROM</span>   clientes
<span class="k">WHERE</span>  cliente_pais = <span class="s">'Brasil'</span>;</pre>
        </div>

        <table class="tbl">
          <thead><tr><th>cliente_nome</th><th>cliente_email</th><th>cliente_pais</th></tr></thead>
          <tbody>
            <tr><td>Carlos Mendes</td><td>carlos@email.com</td><td>Brasil</td></tr>
            <tr><td>Julia Ferreira</td><td>julia@email.com</td><td>Brasil</td></tr>
            <tr><td>Ana Lima</td><td>ana@email.com</td><td>Brasil</td></tr>
          </tbody>
        </table>

        <div class="sql-block">
<pre><span class="cm">-- Faixas baratas em formato MP3</span>
<span class="k">SELECT</span> faixa_titulo, faixa_preco_usd, faixa_formato
<span class="k">FROM</span>   faixas
<span class="k">WHERE</span>  faixa_preco_usd <span class="k">BETWEEN</span> <span class="n">1.99</span> <span class="k">AND</span> <span class="n">3.99</span>
  <span class="k">AND</span>  faixa_formato = <span class="s">'MP3'</span>
<span class="k">ORDER BY</span> faixa_preco_usd <span class="k">DESC</span>;</pre>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">Operadores de compara&#231;&#227;o</div><div class="kp-text">= igual · &lt;&gt; diferente · &gt; maior · &lt; menor · &gt;= &lt;= maior/menor ou igual.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">BETWEEN · LIKE · IN</div><div class="kp-text"><strong>BETWEEN a AND b</strong> — intervalo inclusivo · <strong>LIKE '%texto%'</strong> — busca parcial · <strong>IN (a, b, c)</strong> — lista de valores permitidos.</div></div>
          <div class="kp"><div class="kp-tag">AND · OR · IS NULL</div><div class="kp-text"><strong>AND</strong> todas as condi&#231;&#245;es devem ser verdadeiras · <strong>OR</strong> basta uma · <strong>IS NULL</strong> / <strong>IS NOT NULL</strong> verificam aus&#234;ncia de valor — campo vazio n&#227;o &#233; igual a zero.</div></div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">&#8592; SELECT e FROM</button>
          <button class="pn-btn pn-fwd" data-show="p4">JOIN &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — JOIN ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">Cruze tabelas<br><em>pela chave.</em></div>

        <!-- Venn diagram — 4 tipos de JOIN -->
        <div class="diagram">
          <svg viewBox="0 0 750 168" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <defs>
              <clipPath id="clip-inner-join"><circle cx="80" cy="85" r="47"/></clipPath>
            </defs>

            <!-- INNER JOIN -->
            <text x="102" y="14" text-anchor="middle" fill="#7a1a1a" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">INNER JOIN</text>
            <circle cx="80" cy="85" r="47" fill="#f5ecea" stroke="#dfc9c0" stroke-width="1.5"/>
            <circle cx="125" cy="85" r="47" fill="#f5ecea" stroke="#dfc9c0" stroke-width="1.5"/>
            <circle cx="125" cy="85" r="47" clip-path="url(#clip-inner-join)" fill="#7a1a1a" opacity=".82"/>
            <circle cx="80"  cy="85" r="47" fill="none" stroke="#dfc9c0" stroke-width="1.5"/>
            <circle cx="125" cy="85" r="47" fill="none" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="53"  y="89" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui">TABLE1</text>
            <text x="153" y="89" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui">TABLE2</text>
            <text x="102" y="150" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" font-style="italic">Apenas registros comuns</text>

            <line x1="185" y1="18" x2="185" y2="142" stroke="#dfc9c0" stroke-width="1" stroke-dasharray="3 3"/>

            <!-- LEFT JOIN -->
            <text x="286" y="14" text-anchor="middle" fill="#7a1a1a" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">LEFT JOIN</text>
            <circle cx="305" cy="85" r="47" fill="#f5ecea"/>
            <circle cx="260" cy="85" r="47" fill="#7a1a1a" opacity=".82"/>
            <circle cx="260" cy="85" r="47" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <circle cx="305" cy="85" r="47" fill="none" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="233" y="89" text-anchor="middle" fill="#fdf8f6" font-size="8.5" font-family="system-ui">TABLE1</text>
            <text x="333" y="89" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui">TABLE2</text>
            <text x="286" y="150" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" font-style="italic">Todos da esquerda</text>

            <line x1="370" y1="18" x2="370" y2="142" stroke="#dfc9c0" stroke-width="1" stroke-dasharray="3 3"/>

            <!-- RIGHT JOIN -->
            <text x="471" y="14" text-anchor="middle" fill="#7a1a1a" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">RIGHT JOIN</text>
            <circle cx="445" cy="85" r="47" fill="#f5ecea"/>
            <circle cx="490" cy="85" r="47" fill="#7a1a1a" opacity=".82"/>
            <circle cx="445" cy="85" r="47" fill="none" stroke="#dfc9c0" stroke-width="1.5"/>
            <circle cx="490" cy="85" r="47" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="418" y="89" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui">TABLE1</text>
            <text x="518" y="89" text-anchor="middle" fill="#fdf8f6" font-size="8.5" font-family="system-ui">TABLE2</text>
            <text x="471" y="150" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" font-style="italic">Todos da direita</text>

            <line x1="555" y1="18" x2="555" y2="142" stroke="#dfc9c0" stroke-width="1" stroke-dasharray="3 3"/>

            <!-- FULL OUTER JOIN -->
            <text x="656" y="14" text-anchor="middle" fill="#7a1a1a" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">FULL OUTER JOIN</text>
            <circle cx="630" cy="85" r="47" fill="#7a1a1a" opacity=".82"/>
            <circle cx="675" cy="85" r="47" fill="#7a1a1a" opacity=".82"/>
            <circle cx="630" cy="85" r="47" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <circle cx="675" cy="85" r="47" fill="none" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="603" y="89" text-anchor="middle" fill="#fdf8f6" font-size="8.5" font-family="system-ui">TABLE1</text>
            <text x="703" y="89" text-anchor="middle" fill="#fdf8f6" font-size="8.5" font-family="system-ui">TABLE2</text>
            <text x="656" y="150" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" font-style="italic">Todos, de ambas as tabelas</text>
          </svg>
        </div>

        <!-- Tabelas CLIENTES <-> PEDIDOS -->
        <div class="diagram" style="margin-bottom:28px;">
          <svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <rect x="20" y="18" width="230" height="170" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="20" y="18" width="230" height="36" rx="10" fill="#7a1a1a" opacity=".06"/>
            <rect x="20" y="38" width="230" height="16" fill="#7a1a1a" opacity=".06"/>
            <text x="135" y="42" text-anchor="middle" fill="#7a1a1a" font-size="10" font-family="system-ui" font-weight="800" letter-spacing=".5">CLIENTES</text>
            <text x="57"  y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">CLIENTE_ID</text>
            <text x="120" y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">NOME</text>
            <text x="185" y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">PA&#205;S</text>
            <line x1="32" y1="74" x2="238" y2="74" stroke="#f0e0da" stroke-width="1"/>
            <rect x="32" y="59" width="22" height="10" rx="2" fill="#7a1a1a"/>
            <text x="43" y="67" text-anchor="middle" fill="#fdf8f6" font-size="7.5" font-family="system-ui" font-weight="800">PK</text>
            <text x="58"  y="96"  fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="600">5001</text>
            <text x="118" y="96"  fill="#1a0d0d" font-size="12" font-family="system-ui">Carlos</text>
            <text x="185" y="96"  fill="#1a0d0d" font-size="12" font-family="system-ui">Brasil</text>
            <line x1="32" y1="104" x2="238" y2="104" stroke="#f5ece8" stroke-width="1"/>
            <text x="58"  y="122" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="600">5002</text>
            <text x="118" y="122" fill="#1a0d0d" font-size="12" font-family="system-ui">Julia</text>
            <text x="185" y="122" fill="#1a0d0d" font-size="12" font-family="system-ui">Brasil</text>
            <line x1="32" y1="130" x2="238" y2="130" stroke="#f5ece8" stroke-width="1"/>
            <text x="58"  y="148" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="600">5004</text>
            <text x="118" y="148" fill="#1a0d0d" font-size="12" font-family="system-ui">Emma</text>
            <text x="185" y="148" fill="#1a0d0d" font-size="12" font-family="system-ui">UK</text>
            <line x1="32" y1="156" x2="238" y2="156" stroke="#f5ece8" stroke-width="1"/>
            <text x="58"  y="174" fill="#8a6060" font-size="12" font-family="system-ui">&#8230;</text>
            <line x1="252" y1="96" x2="316" y2="96" stroke="#b83030" stroke-width="1.5" stroke-dasharray="4 3"/>
            <polygon points="316,90 328,96 316,102" fill="#b83030"/>
            <text x="284" y="86"  text-anchor="middle" fill="#b83030" font-size="9" font-family="system-ui" font-weight="700">JOIN</text>
            <text x="284" y="112" text-anchor="middle" fill="#b09898" font-size="8.5" font-family="system-ui">cliente_id</text>
            <rect x="330" y="18" width="350" height="170" rx="10" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <rect x="330" y="18" width="350" height="36" rx="10" fill="#b83030" opacity=".06"/>
            <rect x="330" y="38" width="350" height="16" fill="#b83030" opacity=".06"/>
            <text x="505" y="42" text-anchor="middle" fill="#b83030" font-size="10" font-family="system-ui" font-weight="800" letter-spacing=".5">PEDIDOS</text>
            <text x="368" y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">PED_ID</text>
            <text x="421" y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">CLI_ID</text>
            <text x="466" y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">DATA</text>
            <text x="566" y="68" fill="#8a6060" font-size="8.5" font-family="system-ui" font-weight="700" letter-spacing="1">TOTAL</text>
            <line x1="342" y1="74" x2="668" y2="74" stroke="#f0e0da" stroke-width="1"/>
            <rect x="342" y="59" width="22" height="10" rx="2" fill="#7a1a1a"/>
            <text x="353" y="67" text-anchor="middle" fill="#fdf8f6" font-size="7.5" font-family="system-ui" font-weight="800">PK</text>
            <rect x="397" y="59" width="20" height="10" rx="2" fill="#b83030"/>
            <text x="407" y="67" text-anchor="middle" fill="#fdf8f6" font-size="7.5" font-family="system-ui" font-weight="800">FK</text>
            <text x="358" y="96"  fill="#1a0d0d" font-size="12" font-family="system-ui">1001</text>
            <text x="415" y="96"  fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">5001</text>
            <text x="462" y="96"  fill="#1a0d0d" font-size="12" font-family="system-ui">2024-03-01</text>
            <text x="564" y="96"  fill="#1a0d0d" font-size="12" font-family="system-ui">2.99</text>
            <line x1="342" y1="104" x2="668" y2="104" stroke="#f5ece8" stroke-width="1"/>
            <text x="358" y="122" fill="#1a0d0d" font-size="12" font-family="system-ui">1002</text>
            <text x="415" y="122" fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">5002</text>
            <text x="462" y="122" fill="#1a0d0d" font-size="12" font-family="system-ui">2024-03-02</text>
            <text x="564" y="122" fill="#1a0d0d" font-size="12" font-family="system-ui">6.98</text>
            <line x1="342" y1="130" x2="668" y2="130" stroke="#f5ece8" stroke-width="1"/>
            <text x="358" y="148" fill="#1a0d0d" font-size="12" font-family="system-ui">1006</text>
            <text x="415" y="148" fill="#b83030" font-size="12" font-family="system-ui" font-weight="600">5001</text>
            <text x="462" y="148" fill="#1a0d0d" font-size="12" font-family="system-ui">2024-03-06</text>
            <text x="564" y="148" fill="#1a0d0d" font-size="12" font-family="system-ui">2.99</text>
            <line x1="342" y1="156" x2="668" y2="156" stroke="#f5ece8" stroke-width="1"/>
            <text x="358" y="174" fill="#8a6060" font-size="12" font-family="system-ui">&#8230;</text>
          </svg>
        </div>

        <div class="sql-block">
<pre><span class="k">SELECT</span> p.pedido_id,
       p.pedido_data,
       c.cliente_nome,
       c.cliente_pais,
       ip.total_item_usd
<span class="k">FROM</span>   pedidos        p
<span class="k">JOIN</span>   clientes       c  <span class="k">ON</span> p.cliente_id = c.cliente_id
<span class="k">JOIN</span>   itens_pedido   ip <span class="k">ON</span> p.pedido_id  = ip.pedido_id
<span class="k">WHERE</span>  p.pedido_data &gt;= <span class="s">'2024-03-01'</span>
<span class="k">ORDER BY</span> p.pedido_data;</pre>
        </div>

        <div class="sql-block">
<pre><span class="k">SELECT</span> c.cliente_nome,
       c.cliente_email,
       <span class="f">MAX</span>(p.pedido_data) <span class="k">AS</span> ultima_compra
<span class="k">FROM</span>   clientes c
<span class="k">LEFT JOIN</span> pedidos p <span class="k">ON</span> c.cliente_id = p.cliente_id
<span class="k">GROUP BY</span> c.cliente_id, c.cliente_nome, c.cliente_email
<span class="k">HAVING</span>   <span class="f">MAX</span>(p.pedido_data) &lt; <span class="f">CURRENT_DATE</span> - <span class="f">INTERVAL</span> <span class="s">'180 days'</span>
   <span class="k">OR</span>    <span class="f">MAX</span>(p.pedido_data) <span class="k">IS NULL</span>
<span class="k">ORDER BY</span> ultima_compra <span class="k">ASC NULLS LAST</span>;</pre>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">INNER JOIN</div><div class="kp-text">Retorna apenas linhas com correspond&#234;ncia nas duas tabelas. &#201; o JOIN padr&#227;o — equivale a cruzar duas planilhas pelo ID em comum.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">LEFT JOIN</div><div class="kp-text">Retorna todas as linhas da tabela esquerda, mesmo sem correspond&#234;ncia na direita. Linhas sem match chegam com NULL — &#250;til para detectar clientes sem pedidos.</div></div>
          <div class="kp"><div class="kp-tag">NULLS LAST</div><div class="kp-text">PostgreSQL: ORDER BY x ASC NULLS LAST empurra os NULLs para o final — clientes sem nenhuma compra ficam no final da lista.</div></div>
        </div>

        <!-- Exercicio Pratico -->
        <div class="accordion">
          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Exerc&#237;cio Pr&#225;tico — JOIN</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag olap">Tabela CLIENTES</div>
                <div class="acc-col-text">1001 Jose Andrade (RJ) · 1002 Maria Mendonca (SP) · 1003 Marcio Mota (PR) · 1004 Claudia Silva (SC)</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag oltp">Tabela PEDIDOS</div>
                <div class="acc-col-text">Pedido 10 → cliente 1001 (2020-03-10) · Pedido 20 → cliente 1002 (2020-03-11) · Pedido 30 → cliente 1003 (2020-03-11)</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag olap">Como fazer</div>
                <div class="acc-col-text">1) Acesse sqliteonline.com e selecione PGLite. 2) Copie o esquema SQL abaixo e execute. 3) Escreva um JOIN que retorne: n&#250;mero do pedido, nome do cliente, data do pedido e estado.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sql-block">
<pre><span class="cm">-- Tabela de clientes</span>
<span class="k">CREATE TABLE</span> <span class="n">CLIENTES</span> (
    <span class="n">Num_Cliente</span>  <span class="f">INTEGER</span>      <span class="k">PRIMARY KEY</span>,
    <span class="n">Nome_Cliente</span> <span class="f">VARCHAR</span>(<span class="n">100</span>),
    <span class="n">Cidade</span>       <span class="f">VARCHAR</span>(<span class="n">100</span>),
    <span class="n">Estado</span>       <span class="f">CHAR</span>(<span class="n">2</span>)
);

<span class="cm">-- Tabela de pedidos</span>
<span class="k">CREATE TABLE</span> <span class="n">PEDIDOS</span> (
    <span class="n">Num_Pedido</span>  <span class="f">INTEGER</span> <span class="k">PRIMARY KEY</span>,
    <span class="n">Num_Cliente</span> <span class="f">INTEGER</span>,
    <span class="n">Data_Pedido</span> <span class="f">DATE</span>,
    <span class="k">FOREIGN KEY</span> (<span class="n">Num_Cliente</span>) <span class="k">REFERENCES</span> <span class="n">CLIENTES</span>(<span class="n">Num_Cliente</span>)
);

<span class="cm">-- Inserindo dados na tabela CLIENTES</span>
<span class="k">INSERT INTO</span> <span class="n">CLIENTES</span> (<span class="n">Num_Cliente</span>, <span class="n">Nome_Cliente</span>, <span class="n">Cidade</span>, <span class="n">Estado</span>) <span class="k">VALUES</span>
(<span class="n">1001</span>, <span class="s">'Jose Andrade'</span>,   <span class="s">'Rio de Janeiro'</span>,  <span class="s">'RJ'</span>),
(<span class="n">1002</span>, <span class="s">'Maria Mendonca'</span>,  <span class="s">'Campinas'</span>,         <span class="s">'SP'</span>),
(<span class="n">1003</span>, <span class="s">'Marcio Mota'</span>,    <span class="s">'Curitiba'</span>,         <span class="s">'PR'</span>),
(<span class="n">1004</span>, <span class="s">'Claudia Silva'</span>,  <span class="s">'Santa Catarina'</span>,   <span class="s">'SC'</span>);

<span class="cm">-- Inserindo dados na tabela PEDIDOS</span>
<span class="k">INSERT INTO</span> <span class="n">PEDIDOS</span> (<span class="n">Num_Pedido</span>, <span class="n">Num_Cliente</span>, <span class="n">Data_Pedido</span>) <span class="k">VALUES</span>
(<span class="n">10</span>, <span class="n">1001</span>, <span class="s">'2020-03-10'</span>),
(<span class="n">20</span>, <span class="n">1002</span>, <span class="s">'2020-03-11'</span>),
(<span class="n">30</span>, <span class="n">1003</span>, <span class="s">'2020-03-11'</span>);</pre>
        </div>

        <div class="kps">
          <div class="kp" style="border-left:3px solid var(--danger);">
            <div class="kp-tag" style="color:var(--danger);">Desafio</div>
            <div class="kp-text">Escreva uma consulta <strong>JOIN</strong> que retorne uma tabela com as colunas: <strong>Num_Pedido · Nome_Cliente · Data_Pedido · Estado</strong></div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p_where">&#8592; WHERE</button>
          <button class="pn-btn pn-fwd" data-show="p5">GROUP BY &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — GROUP BY e AGREGAÇÕES ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">Agrupe para<br><em>enxergar padr&#245;es.</em></div>

        <div class="diagram">
          <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Before: individual rows -->
            <text x="140" y="20" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">SEM GROUP BY</text>
            <rect x="20" y="30" width="240" height="178" rx="10" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="68" y="54" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">PA&#205;S</text>
            <text x="155" y="54" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">TOTAL</text>
            <line x1="32" y1="60" x2="248" y2="60" stroke="#f0e0da" stroke-width="1"/>
            <text x="66" y="79" fill="#1a0d0d" font-size="11.5" font-family="system-ui">Brasil</text>
            <text x="158" y="79" fill="#1a0d0d" font-size="11.5" font-family="system-ui">2.99</text>
            <line x1="32" y1="86" x2="248" y2="86" stroke="#f5ece8" stroke-width="1"/>
            <text x="66" y="105" fill="#1a0d0d" font-size="11.5" font-family="system-ui">Brasil</text>
            <text x="158" y="105" fill="#1a0d0d" font-size="11.5" font-family="system-ui">6.98</text>
            <line x1="32" y1="112" x2="248" y2="112" stroke="#f5ece8" stroke-width="1"/>
            <text x="66" y="131" fill="#1a0d0d" font-size="11.5" font-family="system-ui">UK</text>
            <text x="158" y="131" fill="#1a0d0d" font-size="11.5" font-family="system-ui">3.99</text>
            <line x1="32" y1="138" x2="248" y2="138" stroke="#f5ece8" stroke-width="1"/>
            <text x="66" y="157" fill="#1a0d0d" font-size="11.5" font-family="system-ui">Brasil</text>
            <text x="158" y="157" fill="#1a0d0d" font-size="11.5" font-family="system-ui">2.99</text>
            <line x1="32" y1="164" x2="248" y2="164" stroke="#f5ece8" stroke-width="1"/>
            <text x="66" y="183" fill="#8a6060" font-size="11.5" font-family="system-ui">&#8230;</text>
            <text x="158" y="183" fill="#8a6060" font-size="11.5" font-family="system-ui">&#8230;</text>

            <!-- Arrow -->
            <line x1="274" y1="110" x2="320" y2="110" stroke="#b83030" stroke-width="2"/>
            <polygon points="320,104 334,110 320,116" fill="#b83030"/>
            <text x="296" y="100" text-anchor="middle" fill="#b83030" font-size="9.5" font-family="system-ui" font-weight="700">GROUP BY</text>
            <text x="296" y="127" text-anchor="middle" fill="#b09898" font-size="8.5" font-family="system-ui">cliente_pais</text>

            <!-- After: grouped rows -->
            <text x="530" y="20" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">COM GROUP BY</text>
            <rect x="340" y="30" width="340" height="148" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="385" y="54" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">PA&#205;S</text>
            <text x="470" y="54" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">PEDIDOS</text>
            <text x="580" y="54" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">TICKET M&#201;D.</text>
            <line x1="352" y1="60" x2="668" y2="60" stroke="#f0e0da" stroke-width="1"/>
            <text x="383" y="85" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="700">Brasil</text>
            <text x="490" y="85" fill="#1a0d0d" font-size="12" font-family="system-ui">18</text>
            <text x="590" y="85" fill="#7a1a1a" font-size="12" font-family="system-ui" font-weight="700">4.12</text>
            <line x1="352" y1="93" x2="668" y2="93" stroke="#f5ece8" stroke-width="1"/>
            <text x="383" y="118" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="700">UK</text>
            <text x="490" y="118" fill="#1a0d0d" font-size="12" font-family="system-ui">4</text>
            <text x="590" y="118" fill="#7a1a1a" font-size="12" font-family="system-ui" font-weight="700">3.99</text>
            <line x1="352" y1="126" x2="668" y2="126" stroke="#f5ece8" stroke-width="1"/>
            <text x="383" y="151" fill="#1a0d0d" font-size="12" font-family="system-ui" font-weight="700">Jap&#227;o</text>
            <text x="490" y="151" fill="#1a0d0d" font-size="12" font-family="system-ui">3</text>
            <text x="590" y="151" fill="#7a1a1a" font-size="12" font-family="system-ui" font-weight="700">4.65</text>
            <line x1="352" y1="159" x2="668" y2="159" stroke="#f5ece8" stroke-width="1"/>
            <text x="383" y="178" fill="#8a6060" font-size="12" font-family="system-ui">&#8230;</text>
          </svg>
        </div>

        <div class="sql-block">
<pre><span class="k">SELECT</span> c.cliente_pais,
       <span class="f">COUNT</span>(<span class="k">DISTINCT</span> p.pedido_id)    <span class="k">AS</span> total_pedidos,
       <span class="f">ROUND</span>(<span class="f">SUM</span>(ip.total_item_usd), <span class="n">2</span>)  <span class="k">AS</span> receita_total,
       <span class="f">ROUND</span>(<span class="f">AVG</span>(ip.total_item_usd), <span class="n">2</span>)  <span class="k">AS</span> ticket_medio
<span class="k">FROM</span>   clientes c
<span class="k">JOIN</span>   pedidos p       <span class="k">ON</span> c.cliente_id = p.cliente_id
<span class="k">JOIN</span>   itens_pedido ip <span class="k">ON</span> p.pedido_id  = ip.pedido_id
<span class="k">WHERE</span>  c.cliente_pais <span class="k">IS NOT NULL</span>
<span class="k">GROUP BY</span> c.cliente_pais
<span class="k">ORDER BY</span> ticket_medio <span class="k">DESC</span>;</pre>
        </div>

        <table class="tbl">
          <thead><tr><th>cliente_pais</th><th>total_pedidos</th><th>receita_total</th><th>ticket_medio</th></tr></thead>
          <tbody>
            <tr><td>Jap&#227;o</td><td>3</td><td>17.94</td><td>5.98</td></tr>
            <tr><td>Alemanha</td><td>2</td><td>11.46</td><td>5.73</td></tr>
            <tr><td>Argentina</td><td>2</td><td>9.98</td><td>4.99</td></tr>
            <tr><td>Brasil</td><td>18</td><td>57.84</td><td>3.21</td></tr>
          </tbody>
        </table>

        <div class="kps">
          <div class="kp"><div class="kp-tag">Fun&#231;&#245;es de agrega&#231;&#227;o</div><div class="kp-text"><strong>COUNT</strong> conta linhas · <strong>SUM</strong> soma · <strong>AVG</strong> m&#233;dia · <strong>MAX/MIN</strong> extremos. Sempre usadas com GROUP BY ou aplicadas a toda a tabela.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">HAVING vs WHERE</div><div class="kp-text"><strong>WHERE</strong> filtra antes da agrega&#231;&#227;o (linha por linha). <strong>HAVING</strong> filtra depois — &#233; o WHERE dos grupos. Ex.: HAVING COUNT(*) &gt; 5</div></div>
          <div class="kp"><div class="kp-tag">A tabela din&#226;mica do SQL</div><div class="kp-text">GROUP BY &#233; a SQL equivalente de arrastar um campo para "Linhas" no pivot e outro para "Valores". A diferen&#231;a: &#233; reproduz&#237;vel, audit&#225;vel e escal&#225;vel.</div></div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">&#8592; WHERE e JOIN</button>
          <button class="pn-btn pn-fwd" data-show="p6">IA e SQL &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — O QUE A IA PODE E NÃO PODE ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title">A IA escreve.<br><em>Voc&#234; valida.</em></div>

        <div class="kps">
          <div class="kp">
            <div class="kp-tag">O que a IA faz bem</div>
            <div class="kp-text">Gerar queries sintaticamente corretas a partir de uma descri&#231;&#227;o em portugu&#234;s. Identificar erros de sintaxe. Sugerir &#237;ndices e otimiza&#231;&#245;es. Explicar cl&#225;usulas. Converter entre dialetos (PostgreSQL, MySQL, SQLite).</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--danger)">O que o humano deve validar</div>
            <div class="kp-text">Se a query responde a pergunta de neg&#243;cio certa. Se os JOINs est&#227;o duplicando ou perdendo linhas. Se o filtro de data usa o campo correto. Se o resultado faz sentido no contexto do neg&#243;cio. Se h&#225; NULLs afetando m&#233;dia ou total.</div>
          </div>
        </div>

        <div class="sql-block">
<pre><span class="cm">Tenho um banco PostgreSQL com as tabelas:
  - clientes (cliente_id, cliente_nome, cliente_pais)
  - pedidos (pedido_id, cliente_id, pedido_data)
  - itens_pedido (pedido_id, faixa_id, total_item_usd)

Escreva uma query que retorne os 5 pa&#237;ses com maior
ticket m&#233;dio por pedido, excluindo clientes sem pa&#237;s
cadastrado. Ordene do maior para o menor.</span></pre>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">Regra de ouro</div><div class="kp-text">Quanto mais contexto voc&#234; d&#225; &#224; IA (nomes reais das tabelas, colunas existentes, o que a query deve responder), mais precisa e valid&#225;vel fica a resposta.</div></div>
        </div>

        <!-- Query com erros -->
        <div class="sql-block">
<pre><span class="cm">-- Pergunta: Quais os artistas com maior receita em 2024?
-- Esta query tem 3 erros. Use a IA para encontr&#225;-los.</span>

<span class="k">SELECT</span> ar.Name <span class="k">AS</span> artista,
       <span class="f">SUM</span>(il.UnitPrice * il.Quantity) <span class="k">AS</span> receita
<span class="k">FROM</span>   Artist ar
<span class="k">JOIN</span>   Album  al <span class="k">ON</span> ar.ArtistId = al.ArtistId
<span class="k">JOIN</span>   Track   t <span class="k">ON</span> al.AlbumId  = t.AlbumId
<span class="k">JOIN</span>   InvoiceLine il <span class="k">ON</span> t.TrackId = il.TrackId
<span class="k">WHERE</span>  <span class="err">il.InvoiceDate</span> &gt; <span class="s">'2024-01-01'</span>   <span class="cm">-- Erro 1</span>
<span class="k">GROUP BY</span> ar.Name
<span class="err">ORDERED BY</span> receita <span class="k">DESC</span>              <span class="cm">-- Erro 2</span>
<span class="err">LIMIT</span> <span class="n">10</span>;                              <span class="cm">-- Erro 3 (l&#243;gico)</span></pre>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">Erro 1 — Campo errado</div><div class="kp-text">InvoiceDate pertence &#224; tabela <strong>Invoice</strong>, n&#227;o a <strong>InvoiceLine</strong>. Falta o JOIN com Invoice na query.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">Erro 2 — Sintaxe</div><div class="kp-text">ORDERED BY n&#227;o existe em SQL. O comando correto &#233; <strong>ORDER BY</strong>. O banco retorna erro imediatamente.</div></div>
          <div class="kp"><div class="kp-tag">Erro 3 — L&#243;gico</div><div class="kp-text">Sem o JOIN com Invoice, a query n&#227;o filtra por data e retorna receita hist&#243;rica completa, n&#227;o apenas de 2024 — a resposta parece correta mas est&#225; errada.</div></div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">&#8592; GROUP BY</button>
          <button class="pn-btn pn-fwd" data-show="p7">Links e Ferramentas &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — LINKS E FERRAMENTAS ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">As ferramentas<br><em>do dia a dia.</em></div>
        <p class="acc-hint">Tutoriais e ferramentas para praticar SQL e modelagem fora da sala de aula.</p>

        <div class="ov-section-tag" style="margin-top:20px;">Sintaxe SQL</div>
        <div class="ref-links">
          <a href="https://www.w3schools.com/sql/default.asp" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> W3Schools &#8212; SQL Tutorial</a>
        </div>

        <div class="ov-section-tag" style="margin-top:24px;">Tipos de Dados SQL</div>
        <div class="ref-links">
          <a href="https://www.w3schools.com/sql/sql_datatypes.asp" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> W3Schools &#8212; Tipos de Dados</a>
          <a href="https://www.postgresql.org/docs/current/datatype.html" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> PostgreSQL &#8212; Data Types</a>
        </div>

        <div class="ov-section-tag" style="margin-top:24px;">Criar Banco Relacional (OLTP)</div>
        <div class="ref-links">
          <a href="https://sqliteonline.com/" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> SQLite Online</a>
          <a href="https://www.sqlite.org/about.html" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> SQLite &#8212; Sobre</a>
        </div>

        <div class="ov-section-tag" style="margin-top:24px;">Criar ERDs a partir do SQL Schema</div>
        <div class="ref-links">
          <a href="https://dbdiagram.io/d" target="_blank" class="ref-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> dbdiagram.io</a>
        </div>

        <div class="pg-nav" style="margin-top:32px;">
          <button class="pn-btn" data-show="p6">&#8592; IA e SQL</button>
          <button class="pn-btn pn-fwd" data-show="p8">Exerc&#237;cio: Netflix &#8594;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P8 — EXERCÍCIO: BANCO DE DADOS NETFLIX ═══ -->
    <div id="p8" class="page">
      <div class="t-body">
        <div class="t-title">Da IA ao<br><em>insight.</em></div>

        <div class="callout" style="margin-bottom:20px;">
          <div class="callout-tag">Exerc&#237;cio 1 &#8212; Banco de Dados Netflix</div>
          Com a ajuda da IA, formule perguntas anal&#237;ticas sobre um banco de dados real e responda com SQL &#8212; do diagrama &#224; consulta.
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px;">
          <a class="btn btn-primary" href="recursos/netflixdb-postgres.sql" download>&darr; netflixdb-postgres.sql</a>
          <a class="btn btn-outline" href="https://sqliteonline.com/" target="_blank" rel="noopener">SQLite Online &#8599;</a>
          <a class="btn btn-outline" href="https://dbdiagram.io/home" target="_blank" rel="noopener">dbdiagram &#8599;</a>
        </div>

        <div class="step-row">
          <div class="step-num-circle">1</div>
          <div class="step-content"><div class="step-title">Acesse o SQLite Online</div>
          <div class="step-desc">Abra o navegador e acesse o ambiente de consulta em sqliteonline.com. Nenhuma instala&#231;&#227;o necess&#225;ria.</div></div>
        </div>
        <div class="step-row">
          <div class="step-num-circle">2</div>
          <div class="step-content"><div class="step-title">Carregue o banco de dados Netflix</div>
          <div class="step-desc">Importe o arquivo <code>netflixdb-postgres.sql</code>. Selecione o motor <strong>PGLite</strong> antes de carregar.</div></div>
        </div>
        <div class="step-row">
          <div class="step-num-circle">3</div>
          <div class="step-content"><div class="step-title">Crie perguntas anal&#237;ticas com aux&#237;lio da IA</div>
          <div class="step-desc">Crie pelo menos <strong>3 perguntas anal&#237;ticas</strong> focadas na tomada de decis&#227;o sobre este banco de dados, e diga por que cada uma &#233; relevante. Responda cada uma com SQL.</div></div>
        </div>
        <div class="step-row">
          <div class="step-num-circle">4</div>
          <div class="step-content"><div class="step-title">Rode o script e salve os arquivos</div>
          <div class="step-desc">Execute o SQL gerado no SQLite Online e salve dois arquivos: um <code>.sql</code> com as consultas de todas as perguntas, e um <code>.xlsx</code> com todas as respostas.</div></div>
        </div>

        <div class="ov-section-tag" style="margin:28px 0 12px;">Caminho sugerido &#8212; ERD com a IA</div>
        <div class="accordion">
          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Como gerar o script a partir de um diagrama</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag olap">Passo 1 &#8212; Diagrama</div>
                <div class="acc-col-text">Crie um diagrama ERD do banco de dados usando o <a class="ext-link" href="https://dbdiagram.io/home" target="_blank" rel="noopener">dbdiagram</a> e salve o diagrama como figura PNG.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag oltp">Passo 2 &#8212; Prompt</div>
                <div class="acc-col-text">Carregue o diagrama na IA e use o prompt abaixo.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sql-block" style="margin-top:16px;">
<pre><span class="cm">Eu tenho o banco de dados PostgreSQL da figura anexada.
Proponha 3 perguntas anal&#237;ticas e crie um script com
consultas SQL para cada pergunta em um &#250;nico arquivo,
contendo as perguntas e seus insights nos coment&#225;rios
antes de cada consulta.</span></pre>
        </div>

        <div class="kps">
          <div class="kp"><div class="kp-tag">Entrega 1</div><div class="kp-text">Arquivo <code>.sql</code> contendo as consultas para todas as perguntas.</div></div>
          <div class="kp"><div class="kp-tag" style="color:var(--danger)">Entrega 2</div><div class="kp-text">Arquivo <code>.xlsx</code> contendo todas as respostas.</div></div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p7">&#8592; Links e Ferramentas</button>
          <button class="pn-btn pn-fwd" data-show="menu">In&#237;cio &#8594;</button>
        </div>
      </div>
    </div>`;
