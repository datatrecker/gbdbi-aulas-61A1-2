GBDBI.content["aula-06"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM &middot; Gest&atilde;o BD &amp; BI &middot; 19.10.2026</div>
        <div class="m-title">Aula 6 &mdash; A Escala<br>do <em>Big Data</em></div>
        <div class="m-sub">Big Data &middot; NoSQL &middot; MongoDB &middot; JSON</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">O que voc&ecirc; vai aprender hoje &mdash; cinco objetivos de aprendizagem.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Vis&atilde;o Geral da Aula</div><p class="mc-p">A SoundByte lan&ccedil;ou um app. Agora recebe 2 milh&otilde;es de eventos por hora. O banco de dados relacional trava.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">O Que &eacute; Big Data</div><p class="mc-p">Os 5 Vs &mdash; Volume, Velocidade, Variedade, Veracidade e Valor &mdash; e por que eles importam para o neg&oacute;cio.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">Estruturado vs N&atilde;o Estruturado</div><p class="mc-p">80% dos dados do mundo s&atilde;o n&atilde;o estruturados. O que isso significa e como cada tipo &eacute; armazenado.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">NoSQL: Al&eacute;m das Tabelas</div><p class="mc-p">O que &eacute; NoSQL, por que surgiu e quais s&atilde;o os quatro tipos de banco n&atilde;o relacional.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">Tipos de BD NoSQL</div><p class="mc-p">Documento (MongoDB), Grafo (Neo4j), Chave-Valor (Redis) e Coluna Larga (Cassandra) &mdash; cada um para um caso de uso.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">06</div><div class="mc-h">SQL vs NoSQL na Pr&aacute;tica</div><p class="mc-p">O mesmo problema modelado nos dois paradigmas &mdash; e por que a complexidade &eacute; muito diferente.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">07</div><div class="mc-h">Vantagens e Desafios</div><p class="mc-p">Flexibilidade, escalabilidade e alto desempenho &mdash; mas tamb&eacute;m desafios reais de qualidade e consist&ecirc;ncia.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p8"><div class="mc-num">08</div><div class="mc-h">Atividade Pr&aacute;tica &mdash; MongoDB</div><p class="mc-p">Criar uma cole&ccedil;&atilde;o de documentos JSON no MongoDB Atlas simulando perfis de usu&aacute;rios da SoundByte.</p><span class="mc-arrow">&nearr;</span></div>
        <div class="mcard" data-show="p9"><div class="mc-num">09</div><div class="mc-h">A Pergunta Estrat&eacute;gica</div><p class="mc-p">SQL ou NoSQL? A resposta que a arquitetura de dados moderna exige &mdash; e que o neg&oacute;cio precisa entender.</p><span class="mc-arrow">&nearr;</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que voc&ecirc; vai<br><em>saber fazer.</em></div>
        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Nomear os 5 Vs do Big Data e identificar os quatro tipos de banco NoSQL (Documento, Grafo, Chave-Valor, Coluna Larga).</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar por que o modelo relacional n&atilde;o escala para dados de alto volume e variedade, e qual limita&ccedil;&atilde;o cada tipo de NoSQL resolve.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Representar dados de perfil de usu&aacute;rio em formato JSON e inserir documentos em uma cole&ccedil;&atilde;o MongoDB no Atlas.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Comparar a modelagem SQL e NoSQL para um mesmo problema e identificar quando cada abordagem &eacute; mais adequada.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Projetar o esquema NoSQL adequado para o cen&aacute;rio de eventos da SoundByte e justificar a escolha do tipo de banco para cada pergunta de neg&oacute;cio.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">&larr; In&iacute;cio</button>
          <button class="pn-btn pn-fwd" data-show="p1">Vis&atilde;o Geral &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — VISÃO GERAL ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">O banco de dados<br><em>travou.</em></div>

        <div class="callout" style="margin-bottom:32px;">
          <div class="callout-tag">O Problema Central</div>
          <p style="font-size:14.5px;line-height:1.75;font-style:italic;">A SoundByte lan&ccedil;ou um aplicativo de streaming. Agora recebe 2 milh&otilde;es de eventos por hora: cliques, pausas, buscas, coment&aacute;rios, avalia&ccedil;&otilde;es com emojis e dados de localiza&ccedil;&atilde;o com precis&atilde;o de GPS. Cada usu&aacute;rio interage de um jeito diferente. O banco de dados relacional trava quando tenta armazenar isso.</p>
        </div>

        <div class="disc open" id="disc-conceitos">
          <button class="disc-trigger" data-toggle="disc-conceitos">
            <span class="disc-title">Conceitos Trabalhados</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>Big Data</h4>
                  <p>Conjuntos de dados t&atilde;o grandes, r&aacute;pidos ou variados que as ferramentas tradicionais n&atilde;o conseguem processar. Definido pelos 5 Vs: Volume, Velocidade, Variedade, Veracidade e Valor.</p>
                </div>
                <div class="ov-concept">
                  <h4>Dados N&atilde;o Estruturados</h4>
                  <p>80% dos dados do mundo n&atilde;o cabem em linhas e colunas fixas: textos, imagens, &aacute;udios, v&iacute;deos, posts de redes sociais, logs de eventos.</p>
                </div>
                <div class="ov-concept">
                  <h4>NoSQL</h4>
                  <p>Conjunto de conceitos para tratar dados n&atilde;o estruturados com rapidez e confiabilidade. Surgiu da necessidade de ir al&eacute;m do que bancos relacionais conseguem atender.</p>
                </div>
                <div class="ov-concept">
                  <h4>Banco de Documentos</h4>
                  <p>Armazena dados em estruturas semelhantes a documentos JSON. Cada documento pode ter campos diferentes &mdash; sem esquema fixo. Principal representante: MongoDB.</p>
                </div>
                <div class="ov-concept">
                  <h4>JSON</h4>
                  <p>JavaScript Object Notation &mdash; formato de texto leve para troca de dados, com pares chave-valor e suporte a listas e objetos aninhados. Base do modelo de documentos.</p>
                </div>
                <div class="ov-concept">
                  <h4>Arquitetura Poliglota</h4>
                  <p>Uso do banco certo para a pergunta certa. SQL e NoSQL coexistem na mesma arquitetura &mdash; cada um otimizado para um tipo de consulta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="disc" id="disc-importa">
          <button class="disc-trigger" data-toggle="disc-importa">
            <span class="disc-title">Por Que Esta Aula Importa</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div style="font-size:13.5px;line-height:1.75;color:var(--text);max-width:720px;margin-bottom:16px;">
                A abertura mostra tr&ecirc;s exemplos reais de dados que n&atilde;o cabem em tabelas:
              </div>
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>LinkedIn &mdash; Perfil de Usu&aacute;rio</h4>
                  <p>Campos que alguns t&ecirc;m e outros n&atilde;o: certifica&ccedil;&otilde;es, idiomas, publica&ccedil;&otilde;es, projetos. Uma tabela com colunas fixas deixaria 80% das c&eacute;lulas vazias.</p>
                </div>
                <div class="ov-concept">
                  <h4>Amazon &mdash; Cat&aacute;logo de Produtos</h4>
                  <p>Cada categoria tem atributos completamente diferentes: um livro tem ISBN e autor; um t&ecirc;nis tem numera&ccedil;&atilde;o e material; um DVD tem resolu&ccedil;&atilde;o e legendas.</p>
                </div>
                <div class="ov-concept">
                  <h4>Spotify &mdash; Hist&oacute;rico de Intera&ccedil;&otilde;es</h4>
                  <p>Eventos sem estrutura fixa por usu&aacute;rio: um ouve, pausa, busca, cria playlist, compartilha, pula. Cada sess&atilde;o &eacute; uma sequ&ecirc;ncia &uacute;nica de a&ccedil;&otilde;es.</p>
                </div>
              </div>
              <div class="callout" style="margin-top:4px;">
                <strong>A pergunta para a turma:</strong> o que aconteceria se voc&ecirc; tentasse colocar esses dados em uma tabela com colunas fixas?
              </div>
            </div>
          </div>
        </div>

        <div class="disc" id="disc-summary">
          <button class="disc-trigger" data-toggle="disc-summary">
            <span class="disc-title">Conte&uacute;do, Atividade e IA</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <div class="ov-concepts">
                <div class="ov-concept">
                  <h4>Conte&uacute;do Fundamental</h4>
                  <p>Conceitos de Big Data (V's), bancos de dados NoSQL (Documento, Chave-Valor, Grafos) e limita&ccedil;&otilde;es do modelo relacional.</p>
                </div>
                <div class="ov-concept">
                  <h4>Atividade Pr&aacute;tica</h4>
                  <p>Utilizando o MongoDB Atlas (plano gratuito), os alunos criar&atilde;o uma cole&ccedil;&atilde;o de documentos JSON simulando perfis de usu&aacute;rios com campos vari&aacute;veis e praticar&atilde;o consultas b&aacute;sicas.</p>
                </div>
                <div class="ov-concept">
                  <h4>Integra&ccedil;&atilde;o com IA</h4>
                  <p>Prompt sugerido: <em>&ldquo;Converta esta estrutura de tabelas de Clientes e Endere&ccedil;os SQL em um &uacute;nico documento JSON otimizado para leituras frequentes em um banco NoSQL como o MongoDB.&rdquo;</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">&larr; Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">Big Data &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — O QUE É BIG DATA ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">Tudo o que fazemos<br><em>deixa um rastro.</em></div>

        <div class="quote-card">
          <div class="quote-text">&ldquo;A ideia b&aacute;sica por tr&aacute;s do termo &lsquo;Big Data&rsquo; &eacute; que tudo o que fazemos est&aacute; deixando cada vez mais um rastro digital &mdash; ou dados &mdash; que podemos usar e analisar para nos tornarmos mais inteligentes. As for&ccedil;as motrizes neste admirável mundo novo s&atilde;o o acesso a volumes cada vez maiores de dados e nossa capacidade tecnol&oacute;gica cada vez maior de minerar esses dados para obter insights comerciais.&rdquo;</div>
          <div class="quote-author">Bernard Marr</div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Os 5 Vs do Big Data</div>
        <div class="v-grid">
          <div class="v-card v1">
            <div class="v-letter">V</div>
            <div class="v-name">Volume</div>
            <div class="v-desc">2 milh&otilde;es de eventos por hora na SoundByte. 90% dos dados do mundo foram criados nos &uacute;ltimos 2 anos. Escala que os bancos relacionais n&atilde;o sustentam sozinhos.</div>
          </div>
          <div class="v-card v2">
            <div class="v-letter">V</div>
            <div class="v-name">Velocidade</div>
            <div class="v-desc">Cliques em milissegundos, streaming em tempo real. Cada 60 segundos: 72 horas de v&iacute;deo enviadas ao YouTube, 204 milh&otilde;es de e-mails, 216.000 posts no Instagram.</div>
          </div>
          <div class="v-card v3">
            <div class="v-letter">V</div>
            <div class="v-name">Variedade</div>
            <div class="v-desc">Dados sem estrutura fixa &mdash; emojis, GPS, &aacute;udio, v&iacute;deo, texto livre. 80% do crescimento dos dados &eacute; v&iacute;deo, imagem e documentos. N&atilde;o cabe em linhas e colunas.</div>
          </div>
          <div class="v-card v4">
            <div class="v-letter">V</div>
            <div class="v-name">Veracidade</div>
            <div class="v-desc">Localiza&ccedil;&atilde;o imprecisa ou falsa &eacute; um problema de veracidade. 1 em cada 3 l&iacute;deres empresariais n&atilde;o confia nos dados que usa para tomar decis&otilde;es.</div>
          </div>
          <div class="v-card v5">
            <div class="v-letter">V</div>
            <div class="v-name">Valor</div>
            <div class="v-desc">O que as recomenda&ccedil;&otilde;es personalizadas geram para o neg&oacute;cio &eacute; o valor. Big Data = capacidade de extrair maior Valor por meio de insights superiores.</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-tag">Os 5 Vs e os Tipos de NoSQL</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-top:8px;">
            <div>
              <strong>Volume, Velocidade e Variedade</strong><br>
              <span style="font-size:12.5px;color:var(--muted)">2 milh&otilde;es de eventos por hora, cliques em milissegundos, dados sem estrutura fixa &mdash; os tr&ecirc;s Vs que o banco relacional n&atilde;o sustenta sozinho.</span>
            </div>
            <div>
              <strong>Veracidade e Valor</strong><br>
              <span style="font-size:12.5px;color:var(--muted)">Localiza&ccedil;&atilde;o imprecisa &eacute; um problema de veracidade. O que as recomenda&ccedil;&otilde;es personalizadas geram &eacute; o valor. Os dois Vs que definem se vale a pena coletar o dado.</span>
            </div>
            <div>
              <strong>Documento, Grafo, Chave-Valor, Coluna Larga</strong><br>
              <span style="font-size:12.5px;color:var(--muted)">Cada tipo de NoSQL existe para um caso de uso. A escolha depende da pergunta que voc&ecirc; quer responder &mdash; n&atilde;o da tecnologia preferida.</span>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">&larr; Vis&atilde;o Geral</button>
          <button class="pn-btn pn-fwd" data-show="p3">Estruturado vs N&atilde;o Estruturado &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — DADOS ESTRUTURADOS vs NÃO ESTRUTURADOS ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">80% dos dados<br><em>n&atilde;o s&atilde;o estruturados.</em></div>

        <div class="data-table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th></th>
                <th>Dados Estruturados</th>
                <th>Dados N&atilde;o Estruturados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Caracter&iacute;sticas</td>
                <td>
                  <ul>
                    <li>Modelos de dados pr&eacute;-definidos</li>
                    <li>Apenas texto (inclui n&uacute;meros), usualmente</li>
                    <li>F&aacute;cil de fazer buscas</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>N&atilde;o tem modelos de dados pr&eacute;-definidos</li>
                    <li>Pode ser textos, imagens, sons, v&iacute;deos ou outro formato</li>
                    <li>Dif&iacute;cil de fazer buscas</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Armazenados em</td>
                <td>
                  <ul>
                    <li>Bancos de dados relacionais</li>
                    <li>Data Warehouses</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Aplica&ccedil;&otilde;es</li>
                    <li>Bancos de dados NoSQL</li>
                    <li>Data Warehouses</li>
                    <li>Data Lakes</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Gerados por</td>
                <td><ul><li>Humanos ou m&aacute;quinas</li></ul></td>
                <td><ul><li>Humanos ou m&aacute;quinas</li></ul></td>
              </tr>
              <tr>
                <td>Aplica&ccedil;&otilde;es t&iacute;picas</td>
                <td>
                  <ul>
                    <li>Sistemas de reservas a&eacute;reas</li>
                    <li>Controle de estoque</li>
                    <li>Sistemas CRM</li>
                    <li>Sistemas ERP</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Processamento de texto</li>
                    <li>Softwares de apresenta&ccedil;&atilde;o</li>
                    <li>Clientes de e-mail</li>
                    <li>Ferramentas de edi&ccedil;&atilde;o de v&iacute;deos</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>
                  <ul>
                    <li>Datas</li>
                    <li>N&uacute;meros de telefone</li>
                    <li>N&uacute;meros de cart&atilde;o de cr&eacute;dito</li>
                    <li>Nomes de clientes</li>
                    <li>Endere&ccedil;os</li>
                    <li>Informa&ccedil;&otilde;es transacionais</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Arquivos de texto</li>
                    <li>Relat&oacute;rios</li>
                    <li>Mensagens de e-mail</li>
                    <li>Arquivos de &aacute;udio</li>
                    <li>Arquivos de v&iacute;deo</li>
                    <li>Imagens</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:28px;width:100%;max-width:720px;">
          Fonte: <a href="https://www.ibm.com/think/topics/structured-vs-unstructured-data" target="_blank" rel="noopener" style="color:var(--accent)">IBM &mdash; Structured vs Unstructured Data</a>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">&larr; Big Data</button>
          <button class="pn-btn pn-fwd" data-show="p4">NoSQL &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — NOSQL: ALÉM DAS TABELAS ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">N&atilde;o &eacute; &ldquo;sem SQL&rdquo;.<br><em>&Eacute; &ldquo;al&eacute;m do SQL&rdquo;.</em></div>

        <div class="callout" style="margin-bottom:32px;">
          <div class="callout-tag">O que &eacute; NoSQL</div>
          NoSQL &eacute;, em verdade, um conjunto de conceitos utilizados para tratar dados n&atilde;o estruturados <strong>com rapidez e confiabilidade</strong>. Esses conceitos surgiram da necessidade em se buscar uma solu&ccedil;&atilde;o que os bancos de dados relacionais n&atilde;o conseguiam atender.<br><br>
          Diferente do modelo relacional, que armazena dados em linhas e colunas, o NoSQL permite diferentes formas de armazenamento, cada uma otimizada para um caso de uso espec&iacute;fico.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Os 4 Tipos de Banco NoSQL</div>

        <div class="diagram">
          <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
            <!-- Document -->
            <rect x="20" y="20" width="155" height="140" rx="10" fill="#e8f0fa" stroke="#b0c8ec" stroke-width="1.5"/>
            <text x="97" y="46" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#2a5eb0">DOCUMENTO</text>
            <rect x="72" y="56" width="22" height="28" rx="2" fill="#fff" stroke="#b0c8ec" stroke-width="1"/>
            <line x1="76" y1="66" x2="90" y2="66" stroke="#b0c8ec" stroke-width="1.2"/>
            <line x1="76" y1="71" x2="90" y2="71" stroke="#b0c8ec" stroke-width="1.2"/>
            <line x1="76" y1="76" x2="84" y2="76" stroke="#b0c8ec" stroke-width="1.2"/>
            <rect x="85" y="64" width="14" height="18" rx="1" fill="#c8d8f0" stroke="#b0c8ec" stroke-width="1"/>
            <rect x="97" y="70" width="14" height="14" rx="1" fill="#a0b8e0" stroke="#b0c8ec" stroke-width="1"/>
            <text x="97" y="104" text-anchor="middle" font-family="system-ui" font-size="10" fill="#2a5eb0" font-weight="700">MongoDB</text>
            <text x="97" y="120" text-anchor="middle" font-family="system-ui" font-size="10" fill="#5a7aaa">Perfis &middot; Cat&aacute;logos</text>
            <text x="97" y="135" text-anchor="middle" font-family="system-ui" font-size="10" fill="#5a7aaa">Conte&uacute;do &middot; Eventos</text>

            <!-- Graph -->
            <rect x="195" y="20" width="155" height="140" rx="10" fill="#eaf8ea" stroke="#a0d0a0" stroke-width="1.5"/>
            <text x="272" y="46" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#3a8a3a">GRAFO</text>
            <circle cx="258" cy="70" r="8" fill="#fff" stroke="#a0d0a0" stroke-width="1.5"/>
            <circle cx="278" cy="60" r="6" fill="#c8e8c8" stroke="#a0d0a0" stroke-width="1.2"/>
            <circle cx="286" cy="78" r="6" fill="#c8e8c8" stroke="#a0d0a0" stroke-width="1.2"/>
            <circle cx="264" cy="86" r="6" fill="#c8e8c8" stroke="#a0d0a0" stroke-width="1.2"/>
            <line x1="258" y1="62" x2="274" y2="63" stroke="#a0d0a0" stroke-width="1.5"/>
            <line x1="263" y1="75" x2="282" y2="74" stroke="#a0d0a0" stroke-width="1.5"/>
            <line x1="258" y1="78" x2="260" y2="80" stroke="#a0d0a0" stroke-width="1.5"/>
            <text x="272" y="104" text-anchor="middle" font-family="system-ui" font-size="10" fill="#3a8a3a" font-weight="700">Neo4j</text>
            <text x="272" y="120" text-anchor="middle" font-family="system-ui" font-size="10" fill="#5aaa5a">Recomenda&ccedil;&otilde;es</text>
            <text x="272" y="135" text-anchor="middle" font-family="system-ui" font-size="10" fill="#5aaa5a">Redes Sociais</text>

            <!-- Key-Value -->
            <rect x="370" y="20" width="155" height="140" rx="10" fill="#faf0e0" stroke="#e0c880" stroke-width="1.5"/>
            <text x="447" y="46" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#c08a20">CHAVE-VALOR</text>
            <rect x="415" y="54" width="28" height="10" rx="2" fill="#e8c860" stroke="#c0a040" stroke-width="1"/>
            <rect x="447" y="54" width="34" height="10" rx="2" fill="#fff8e0" stroke="#c0a040" stroke-width="1"/>
            <rect x="415" y="68" width="28" height="10" rx="2" fill="#e8c860" stroke="#c0a040" stroke-width="1"/>
            <rect x="447" y="68" width="34" height="10" rx="2" fill="#fff8e0" stroke="#c0a040" stroke-width="1"/>
            <rect x="415" y="82" width="28" height="10" rx="2" fill="#e8c860" stroke="#c0a040" stroke-width="1"/>
            <rect x="447" y="82" width="34" height="10" rx="2" fill="#fff8e0" stroke="#c0a040" stroke-width="1"/>
            <text x="447" y="104" text-anchor="middle" font-family="system-ui" font-size="10" fill="#c08a20" font-weight="700">Redis</text>
            <text x="447" y="120" text-anchor="middle" font-family="system-ui" font-size="10" fill="#aaa050">Cache &middot; Sess&otilde;es</text>
            <text x="447" y="135" text-anchor="middle" font-family="system-ui" font-size="10" fill="#aaa050">Logs &middot; Filas</text>

            <!-- Wide-column -->
            <rect x="545" y="20" width="155" height="140" rx="10" fill="#f8f0e0" stroke="#d0b888" stroke-width="1.5"/>
            <text x="622" y="46" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="800" fill="#805020">COLUNA LARGA</text>
            <rect x="575" y="54" width="12" height="36" rx="1" fill="#c8a060" stroke="#a07840" stroke-width="1"/>
            <rect x="590" y="54" width="18" height="36" rx="1" fill="#e8c898" stroke="#a07840" stroke-width="1"/>
            <rect x="611" y="54" width="12" height="20" rx="1" fill="#c8a060" stroke="#a07840" stroke-width="1"/>
            <rect x="626" y="54" width="16" height="28" rx="1" fill="#e8c898" stroke="#a07840" stroke-width="1"/>
            <text x="622" y="104" text-anchor="middle" font-family="system-ui" font-size="10" fill="#805020" font-weight="700">Cassandra</text>
            <text x="622" y="120" text-anchor="middle" font-family="system-ui" font-size="10" fill="#a07840">Pesquisa Web</text>
            <text x="622" y="135" text-anchor="middle" font-family="system-ui" font-size="10" fill="#a07840">IoT &middot; Escala</text>
          </svg>
        </div>

        <div style="font-size:11px;color:var(--muted);margin-bottom:28px;width:100%;max-width:720px;">
          Refer&ecirc;ncia: <a href="https://www.ibm.com/topics/nosql-databases" target="_blank" rel="noopener" style="color:var(--accent)">IBM &mdash; What is a NoSQL database?</a>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">&larr; Estruturado vs N&atilde;o Estruturado</button>
          <button class="pn-btn pn-fwd" data-show="p5">Tipos de BD NoSQL &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — TIPOS DE BD NOSQL ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">A escolha depende<br><em>da pergunta.</em></div>

        <!-- DOCUMENTO -->
        <div class="nosql-type" id="nt-doc">
          <div class="nosql-type-header" data-toggle="nt-doc" role="button" tabindex="0">
            <span class="nosql-type-tag tag-doc">Documento</span>
            <span class="nosql-type-name">Banco de Documentos</span>
            <span class="nosql-type-vendor">MongoDB &middot; CouchDB &middot; Firestore</span>
            <span class="nosql-chevron">&#9654;</span>
          </div>
          <div class="nosql-type-body">
            <div class="nosql-type-desc">
              <p>Armazena elementos de dados em estruturas semelhantes a documentos que codificam informa&ccedil;&otilde;es em formatos como JSON.</p>
              <p>Cada documento pode ter campos completamente diferentes &mdash; sem esquema r&iacute;gido definido previamente.</p>
              <span class="use-label">Usos comuns</span>
              <p>Gerenciamento de conte&uacute;do, monitoramento de aplicativos m&oacute;veis e da Web, perfis de usu&aacute;rios, cat&aacute;logos de produtos.</p>
              <div style="margin-top:12px;">
                <a class="ext-link" href="https://db-engines.com/en/ranking/document+store" target="_blank" rel="noopener" style="margin-top:0;">&nearr; DB-Engines Ranking of Document Stores</a>
              </div>
            </div>
            <div class="nosql-type-code">
              <code><span class="cm">// Documento simples</span>
{
  <span class="s">"FirstName"</span>: <span class="s">"Bob"</span>,
  <span class="s">"Address"</span>: <span class="s">"5 Oak St."</span>,
  <span class="s">"Hobby"</span>: <span class="s">"sailing"</span>
}

<span class="cm">// Documento com subdocumentos</span>
{
  <span class="s">"_id"</span>: <span class="s">"123"</span>,
  <span class="s">"date"</span>: <span class="s">"10/10/2017"</span>,
  <span class="s">"ship_status"</span>: <span class="s">"backordered"</span>,
  <span class="s">"orderitems"</span>: [
    { <span class="s">"itemid"</span>: <span class="s">"4348"</span>, <span class="s">"price"</span>: <span class="n">10.00</span> },
    { <span class="s">"itemid"</span>: <span class="s">"5648"</span>, <span class="s">"price"</span>: <span class="n">15.00</span> }
  ]
}</code>
            </div>
          </div>
        </div>

        <!-- GRAFO -->
        <div class="nosql-type" id="nt-graph">
          <div class="nosql-type-header" data-toggle="nt-graph" role="button" tabindex="0">
            <span class="nosql-type-tag tag-graph">Grafo</span>
            <span class="nosql-type-name">Banco de Grafos</span>
            <span class="nosql-type-vendor">Neo4j &middot; Amazon Neptune &middot; ArangoDB</span>
            <span class="nosql-chevron">&#9654;</span>
          </div>
          <div class="nosql-type-body">
            <div class="nosql-type-desc">
              <p>Enfatiza as conex&otilde;es entre os elementos de dados, armazenando &ldquo;n&oacute;s&rdquo; relacionados em grafos para acelerar as consultas.</p>
              <p>Ideal quando os relacionamentos entre os dados s&atilde;o t&atilde;o importantes quanto os dados em si.</p>
              <span class="use-label">Usos comuns</span>
              <p>Mecanismos de recomenda&ccedil;&atilde;o, aplicativos geoespaciais, redes sociais, detec&ccedil;&atilde;o de fraudes.</p>
              <div style="margin-top:12px;">
                <a class="ext-link" href="https://db-engines.com/en/ranking/graph+dbms" target="_blank" rel="noopener" style="margin-top:0;">&nearr; DB-Engines Ranking of Graph DBMS</a>
              </div>
            </div>
            <div class="nosql-type-code">
              <code><span class="cm">// Exemplo de grafo</span>
<span class="cm">// N&oacute;s: Julie, Bob, Jim, Steve</span>
<span class="cm">// N&oacute;s: Rock Music, BMW, IBM, Fido</span>

Julie ──Sister In-Law To──▶ Steve
  │
Listens To
  │
  ▼
Rock Music ◀── Listens To ── Bob
                               │
                    ┌──────────┼──────┐
                 Married     Drives  Works
                   To          │     For
                    │         BMW    IBM
                    ▼
                 Colleague Of
                    │
                    ▼
                   Jim ── Has Pet ──▶ Fido
                    │
                 Works For
                    │
                    ▼
                   IBM</code>
            </div>
          </div>
        </div>

        <!-- CHAVE-VALOR -->
        <div class="nosql-type" id="nt-kv">
          <div class="nosql-type-header" data-toggle="nt-kv" role="button" tabindex="0">
            <span class="nosql-type-tag tag-kv">Chave-Valor</span>
            <span class="nosql-type-name">Banco Chave-Valor</span>
            <span class="nosql-type-vendor">Redis &middot; DynamoDB &middot; Riak</span>
            <span class="nosql-chevron">&#9654;</span>
          </div>
          <div class="nosql-type-body">
            <div class="nosql-type-desc">
              <p>Usa um modelo de dados simples que combina uma chave exclusiva e seu valor associado no armazenamento de elementos de dados.</p>
              <p>Extremamente r&aacute;pido para leituras e grava&ccedil;&otilde;es &mdash; ideal para dados acessados com frequ&ecirc;ncia.</p>
              <span class="use-label">Usos comuns</span>
              <p>Armazenamento de dados de fluxo de cliques, logs de aplicativos, cache de sess&otilde;es, filas de mensagens.</p>
              <div style="margin-top:12px;">
                <a class="ext-link" href="https://db-engines.com/en/ranking/key-value+store" target="_blank" rel="noopener" style="margin-top:0;">&nearr; DB-Engines Ranking of Key-value Stores</a>
              </div>
            </div>
            <div class="nosql-type-code">
              <code><span class="cm">// Estrutura Chave → Valor</span>

<span class="n">user:1001</span>  →  { nome: "Alice",
               plano: "premium" }

<span class="n">session:xyz</span> →  { userId: 1001,
               expires: "2026-06-01",
               token: "abc123" }

<span class="cm">// Exemplo DynamoDB</span>
<span class="cm">// Partition Key + Sort Key</span>

Product ID │ Type      │ Attributes
───────────┼───────────┼──────────────────
    1      │ Book ID   │ Odyssey, Homer
    2      │ Album ID  │ 6 Partitas, Bach
    3      │ Movie ID  │ The Kid, Chaplin</code>
            </div>
          </div>
        </div>

        <!-- COLUNA LARGA -->
        <div class="nosql-type" id="nt-wide">
          <div class="nosql-type-header" data-toggle="nt-wide" role="button" tabindex="0">
            <span class="nosql-type-tag tag-wide">Coluna Larga</span>
            <span class="nosql-type-name">Banco de Coluna Larga</span>
            <span class="nosql-type-vendor">Cassandra &middot; HBase &middot; Google Bigtable</span>
            <span class="nosql-chevron">&#9654;</span>
          </div>
          <div class="nosql-type-body">
            <div class="nosql-type-desc">
              <p>Tamb&eacute;m chamados de bancos de dados em estilo de tabela. Armazenam dados em tabelas que podem ter um n&uacute;mero muito grande de colunas &mdash; e cada linha pode ter colunas diferentes.</p>
              <p>Projetados para escalar horizontalmente por clusters de servidores.</p>
              <span class="use-label">Usos comuns</span>
              <p>Pesquisa na Internet e outros aplicativos da Web em grande escala, IoT, an&aacute;lise de s&eacute;ries temporais.</p>
              <div style="margin-top:12px;">
                <a class="ext-link" href="https://db-engines.com/en/ranking/wide+column+store" target="_blank" rel="noopener" style="margin-top:0;">&nearr; DB-Engines Ranking of Wide Column Stores</a>
              </div>
            </div>
            <div class="nosql-type-code">
              <code><span class="cm">// Tabela UserProfile (Wide-column)</span>
<span class="cm">// Cada linha tem colunas diferentes!</span>

Bob:
  emailAddress: bob@example.com
  gender: male
  age: 35

Britney:
  emailAddress: brit@example.com
  gender: female
  <span class="cm">// sem campo "age"</span>

Tori:
  emailAddress: tori@example.com
  country: Sweden
  hairColor: Blue
  <span class="cm">// sem "gender" nem "age"</span></code>
            </div>
          </div>
        </div>

        <!-- TABELA COMPARATIVA -->
        <div class="ov-section-tag" style="margin-top:32px;margin-bottom:16px;">Quadro comparativo &mdash; modelos de banco de dados</div>
        <div class="data-table-wrap" style="margin-bottom:28px;">
          <table class="data-table" style="font-size:12px;">
            <thead>
              <tr>
                <th style="background:var(--s1);color:var(--muted);">Modelo</th>
                <th style="background:var(--s1);color:var(--text);">Estrutura do valor</th>
                <th style="background:var(--s1);color:var(--text);">Como se consulta</th>
                <th style="background:var(--s1);color:var(--text);">Quando usar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight:700;color:var(--accent);white-space:nowrap;">Documento</td>
                <td>Documentos estruturados (JSON/BSON), com campos aninhados e arrays.</td>
                <td>Consulta por chave <strong>e</strong> por campos internos; poss&iacute;vel indexar atributos e realizar filtros ricos.</td>
                <td>Perfis de usu&aacute;rio, cat&aacute;logos, CMS, e-commerce, logs estruturados, qualquer cen&aacute;rio com esquema flex&iacute;vel.</td>
              </tr>
              <tr>
                <td style="font-weight:700;color:var(--ok);white-space:nowrap;">Grafo</td>
                <td>N&oacute;s (entidades) e arestas (relacionamentos), com propriedades em ambos.</td>
                <td>Consulta focada em <strong>relacionamentos</strong> e travessias (ex.: &ldquo;amigos de amigos&rdquo;, caminhos, recomenda&ccedil;&otilde;es).</td>
                <td>Redes sociais, recomenda&ccedil;&atilde;o de produtos, fraud detection, sistemas com grafos densos de relacionamentos.</td>
              </tr>
              <tr>
                <td style="font-weight:700;color:var(--warn);white-space:nowrap;">Chave-Valor</td>
                <td>Par simples: <code style="background:var(--s2);padding:1px 4px;border-radius:3px;">chave &rarr; valor</code>; o valor &eacute; tratado como blob/opaco.</td>
                <td>Acesso muito r&aacute;pido <strong>apenas pela chave</strong>; n&atilde;o h&aacute; consulta interna ao valor.</td>
                <td>Sess&otilde;es de usu&aacute;rio, cache, flags de configura&ccedil;&atilde;o, carrinhos tempor&aacute;rios, quando o acesso &eacute; sempre por ID.</td>
              </tr>
              <tr>
                <td style="font-weight:700;color:var(--warn);white-space:nowrap;">Coluna Larga</td>
                <td>Linhas com conjuntos de colunas muito esparsas, agrupadas em fam&iacute;lias; cada linha pode ter colunas diferentes.</td>
                <td>Consulta por chave de linha e por faixa de colunas; otimizada para escanear muitas colunas em poucas linhas.</td>
                <td>Logs de eventos, m&eacute;tricas de tempo (time series), big data anal&iacute;tico, hist&oacute;rico de atividades com muitas colunas esparsas.</td>
              </tr>
              <tr>
                <td style="font-weight:700;color:var(--accent);white-space:nowrap;">Relacional (SQL)</td>
                <td>Tabelas com <strong>linhas e colunas fixas</strong>, relacionadas por chaves estrangeiras.</td>
                <td>Consulta com <strong>SQL</strong>: filtros, joins, agrupamentos, subquerys etc.; forte suporte a transa&ccedil;&otilde;es ACID.</td>
                <td>Sistemas com dados bem estruturados e relacionamentos fixos (ERP, financeiro, invent&aacute;rio, CRM, aplica&ccedil;&otilde;es transacionais cr&iacute;ticas).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">&larr; NoSQL</button>
          <button class="pn-btn pn-fwd" data-show="p6">SQL vs NoSQL &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — SQL vs NOSQL NA PRÁTICA ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title">Um problema,<br><em>dois paradigmas.</em></div>

        <p style="font-size:13.5px;line-height:1.7;max-width:720px;width:100%;margin-bottom:28px;color:var(--text);">
          Estudantes t&ecirc;m hobbies. Um estudante pode ter v&aacute;rios hobbies e um hobby pode ser compartilhado por v&aacute;rios estudantes (rela&ccedil;&atilde;o M:M). Veja como cada paradigma resolve este problema.
        </p>

        <!-- Passo 1: diagrama SQL inicial -->
        <div class="disc open" id="disc-sql1">
          <button class="disc-trigger" data-toggle="disc-sql1">
            <span class="disc-title">1. SQL &mdash; Modelo Inicial (problema)</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <p style="font-size:13px;line-height:1.65;color:var(--text);margin-bottom:16px;">
                No modelo inicial, cada estudante s&oacute; pode ter <strong>um</strong> hobby &mdash; porque a coluna <code style="background:var(--s2);padding:1px 5px;border-radius:3px;font-size:12px;">hobby</code> admite apenas um valor.
              </p>
              <div class="compare" style="margin-bottom:16px;">
                <div class="cmp-card">
                  <div class="cmp-head sql-h">Disciplinas</div>
                  <div class="cmp-body" style="font-family:'SF Mono','Fira Code',monospace;font-size:12px;">
                    PK &nbsp;id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INT<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;nome_disciplina &nbsp;VARCHAR(45)
                  </div>
                </div>
                <div class="cmp-card">
                  <div class="cmp-head sql-h">Estudantes</div>
                  <div class="cmp-body" style="font-family:'SF Mono','Fira Code',monospace;font-size:12px;">
                    PK &nbsp;id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INT<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;nome &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VARCHAR(45)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--danger);">hobby &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VARCHAR(45)</span><br>
                    FK &nbsp;disciplinas_id INT
                  </div>
                </div>
              </div>
              <div class="callout" style="background:rgba(184,48,48,.06);border-color:var(--accent-hover);">
                <strong style="color:var(--accent-hover);">Problema:</strong> Como fazer para que um estudante possa ter <em>v&aacute;rios</em> hobbies e que um hobby seja compartilhado por <em>v&aacute;rios</em> estudantes?
              </div>
            </div>
          </div>
        </div>

        <!-- Passo 2: SQL solução M:M -->
        <div class="disc open" id="disc-sql2">
          <button class="disc-trigger" data-toggle="disc-sql2">
            <span class="disc-title">2. SQL &mdash; Solu&ccedil;&atilde;o M:M (tabela intermedi&aacute;ria)</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <p style="font-size:13px;line-height:1.65;color:var(--text);margin-bottom:16px;">
                A solu&ccedil;&atilde;o relacional exige uma <strong>tabela intermedi&aacute;ria</strong> <code style="background:var(--s2);padding:1px 5px;border-radius:3px;font-size:12px;">Estudantes_Hobbies</code> para modelar a rela&ccedil;&atilde;o M:M. Resultado: 4 tabelas, 3 JOINs para uma consulta simples.
              </p>

              <div class="sql-wrap">
                <div class="sql-header">
                  <div class="sql-label">Schema SQL</div>
                  <button class="copy-btn" data-copy="sql-schema">Copiar</button>
                </div>
                <div class="sql-block"><pre><code id="sql-schema"><span class="k">CREATE TABLE</span> \`Disciplinas\` (
  \`id\` INT,
  \`nome_disciplina\` <span class="k">VARCHAR</span>(<span class="n">45</span>),
  <span class="k">PRIMARY KEY</span> (\`id\`)
);

<span class="k">CREATE TABLE</span> \`Estudantes\` (
  \`id\` INT,
  \`nome\` <span class="k">VARCHAR</span>(<span class="n">45</span>),
  \`disciplinas_id\` INT,
  <span class="k">PRIMARY KEY</span> (\`id\`),
  <span class="k">FOREIGN KEY</span> (\`disciplinas_id\`)
    <span class="k">REFERENCES</span> \`Disciplinas\`(\`id\`)
);

<span class="k">CREATE TABLE</span> \`Hobbies\` (
  \`id\` INT,
  \`hobby\` <span class="k">VARCHAR</span>(<span class="n">45</span>),
  <span class="k">PRIMARY KEY</span> (\`id\`)
);

<span class="k">CREATE TABLE</span> \`Estudantes_Hobbies\` (
  \`estudantes_id\` INT,
  \`hobbies_id\` INT,
  <span class="k">FOREIGN KEY</span> (\`hobbies_id\`)
    <span class="k">REFERENCES</span> \`Hobbies\`(\`id\`),
  <span class="k">FOREIGN KEY</span> (\`estudantes_id\`)
    <span class="k">REFERENCES</span> \`Estudantes\`(\`id\`)
);</code></pre>
                </div>
              </div>

              <div class="sql-wrap">
                <div class="sql-header">
                  <div class="sql-label">Dados de Exemplo</div>
                  <button class="copy-btn" data-copy="sql-data">Copiar</button>
                </div>
                <div class="sql-block"><pre><code id="sql-data"><span class="k">INSERT INTO</span> Disciplinas (\`id\`, \`nome_disciplina\`)
<span class="k">VALUES</span>
  (<span class="n">1</span>, <span class="s">'eletromagnetismo'</span>),
  (<span class="n">2</span>, <span class="s">'c&aacute;lculo diferencial'</span>);

<span class="k">INSERT INTO</span> Estudantes (\`id\`, \`nome\`, \`disciplinas_id\`)
<span class="k">VALUES</span>
  (<span class="n">1</span>, <span class="s">'Emmanuel Kant'</span>, <span class="n">1</span>),
  (<span class="n">2</span>, <span class="s">'Albert Einstein'</span>, <span class="n">2</span>);

<span class="k">INSERT INTO</span> Hobbies (\`id\`, \`hobby\`)
<span class="k">VALUES</span>
  (<span class="n">1</span>, <span class="s">'jardinagem'</span>), (<span class="n">2</span>, <span class="s">'leitura'</span>),
  (<span class="n">3</span>, <span class="s">'nata&ccedil;&atilde;o'</span>), (<span class="n">4</span>, <span class="s">'corrida'</span>),
  (<span class="n">5</span>, <span class="s">'xadrez'</span>);

<span class="k">INSERT INTO</span> Estudantes_Hobbies
  (\`estudantes_id\`, \`hobbies_id\`)
<span class="k">VALUES</span>
  (<span class="n">1</span>, <span class="n">1</span>),  <span class="cm">-- Kant: jardinagem</span>
  (<span class="n">2</span>, <span class="n">3</span>),  <span class="cm">-- Einstein: nata&ccedil;&atilde;o</span>
  (<span class="n">2</span>, <span class="n">4</span>);  <span class="cm">-- Einstein: corrida</span></code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Passo 3: NoSQL -->
        <div class="disc open" id="disc-nosql">
          <button class="disc-trigger" data-toggle="disc-nosql">
            <span class="disc-title">3. NoSQL &mdash; Schema MongoDB</span>
            <span class="disc-icon">&#9654;</span>
          </button>
          <div class="disc-body">
            <div class="disc-inner">
              <p style="font-size:13px;line-height:1.65;color:var(--text);margin-bottom:16px;">
                No NoSQL, tudo em <strong>um &uacute;nico documento</strong>. Os hobbies s&atilde;o arrays embutidos, os campos s&atilde;o livres por documento &mdash; sem necessidade de tabelas intermedi&aacute;rias.
              </p>
              <div class="sql-wrap">
                <div class="sql-header">
                  <div class="sql-label">Schema NoSQL &mdash; MongoDB</div>
                  <button class="copy-btn" data-copy="nosql-schema">Copiar</button>
                </div>
                <div class="sql-block"><pre><code id="nosql-schema">db.disciplina.insert_many([
  {
    <span class="s">"nome"</span>: <span class="s">"Emmanuel Kant"</span>,
    <span class="s">"hobbies"</span>: <span class="s">"jardinagem"</span>,
    <span class="s">"nome_disciplina"</span>: <span class="s">"eletromagnetismo"</span>
  },
  {
    <span class="s">"nome"</span>: <span class="s">"Albert Einstein"</span>,
    <span class="s">"hobbies"</span>: {
      <span class="s">"exerc&iacute;cios"</span>: [<span class="s">"nata&ccedil;&atilde;o"</span>, <span class="s">"corrida"</span>],
      <span class="s">"jogos"</span>: <span class="s">"xadrez"</span>
    },
    <span class="s">"nome_disciplina"</span>: <span class="s">"c&aacute;lculo diferencial"</span>,
    <span class="s">"notas_provas"</span>: [<span class="n">100</span>, <span class="n">100</span>, <span class="n">100</span>]
  }
])</code></pre>
                </div>
              </div>

              <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;width:100%;max-width:720px;margin-bottom:0;">
                <div style="background:rgba(58,100,180,.06);border:1px solid rgba(58,100,180,.2);border-radius:10px;padding:14px 16px;">
                  <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:var(--accent);margin-bottom:8px;">SQL</div>
                  <ul style="list-style:none;font-size:12.5px;line-height:1.65;color:var(--text);">
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>4 tabelas</li>
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>3 JOINs para consulta simples</li>
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>Esquema r&iacute;gido e pr&eacute;-definido</li>
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>Adicionar campo exige ALTER TABLE</li>
                  </ul>
                </div>
                <div style="background:rgba(58,138,58,.06);border:1px solid rgba(58,138,58,.2);border-radius:10px;padding:14px 16px;">
                  <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:var(--ok);margin-bottom:8px;">NoSQL</div>
                  <ul style="list-style:none;font-size:12.5px;line-height:1.65;color:var(--text);">
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>1 cole&ccedil;&atilde;o</li>
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>Consulta direta no documento</li>
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>Esquema flex&iacute;vel por documento</li>
                    <li style="display:flex;gap:8px;padding:2px 0;"><span style="color:var(--muted)">&mdash;</span>Novos campos sem migra&ccedil;&atilde;o</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">&larr; Tipos de BD NoSQL</button>
          <button class="pn-btn pn-fwd" data-show="p7">Vantagens e Desafios &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — VANTAGENS E DESAFIOS ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">N&atilde;o existe<br><em>bala de prata.</em></div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Vantagens de usar um banco de dados NoSQL</div>
        <div class="adv-list">
          <div class="adv-item">
            <div class="adv-label flex">Flexibilidade</div>
            <div class="adv-body">
              <ul>
                <li>Permitem armazenar dados n&atilde;o estruturados em v&aacute;rios formatos: documentos, colunas e pares chave-valor</li>
                <li>N&atilde;o requerem um esquema r&iacute;gido definido previamente, permitindo adicionar novos dados sem ter que predefini-los</li>
              </ul>
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-label escala">Escalabilidade</div>
            <div class="adv-body">
              <ul>
                <li>S&atilde;o projetados para aumentar a escala horizontalmente usando clusters distribu&iacute;dos de hardware</li>
                <li>Podem lidar com grandes volumes de dados e usu&aacute;rios simult&acirc;neos sem comprometer o desempenho</li>
                <li>Permitem aumentar a capacidade de armazenamento e processamento conforme o aplicativo cresce</li>
              </ul>
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-label desemp">Alto desempenho</div>
            <div class="adv-body">
              <ul>
                <li>S&atilde;o constru&iacute;dos para ter &oacute;timo desempenho, medido pela taxa de transfer&ecirc;ncia e lat&ecirc;ncia</li>
                <li>Oferecem baixa lat&ecirc;ncia e alto desempenho mesmo com grandes volumes de dados</li>
              </ul>
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-label custo">Custos reduzidos</div>
            <div class="adv-body">
              <ul>
                <li>Muitos s&atilde;o gratuitos e de c&oacute;digo aberto, como o MongoDB</li>
                <li>Possuem uma arquitetura eficiente e escal&aacute;vel, evitando a necessidade de uma arquitetura monol&iacute;tica cara</li>
                <li>Podem reduzir os custos de infraestrutura por serem projetados para rodar em cluster e na nuvem</li>
              </ul>
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-label disp">Disponibilidade</div>
            <div class="adv-body">
              <ul>
                <li>Costumam contar com arquiteturas de software eficientes de replica&ccedil;&atilde;o de dados</li>
                <li>Se um ou mais servidores caem, outro est&aacute; apto para continuar o trabalho</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;margin-top:16px;">Principais desafios ao usar NoSQL</div>
        <div class="adv-list">
          <div class="adv-item">
            <div class="adv-label chall">Integra&ccedil;&atilde;o de dados</div>
            <div class="adv-body" style="font-size:13px;line-height:1.6;color:var(--text);">A diversidade de fontes e formatos pode dificultar a integra&ccedil;&atilde;o e a sincroniza&ccedil;&atilde;o de dados, levando a inconsist&ecirc;ncias entre diferentes conjuntos de dados.</div>
          </div>
          <div class="adv-item">
            <div class="adv-label chall">Qualidade dos dados</div>
            <div class="adv-body" style="font-size:13px;line-height:1.6;color:var(--text);">A combina&ccedil;&atilde;o de dados n&atilde;o estruturados e inconsistentes pode resultar em dados ausentes, duplicados ou conflitantes &mdash; um desafio significativo para an&aacute;lises confi&aacute;veis.</div>
          </div>
          <div class="adv-item">
            <div class="adv-label chall">Gerenciamento de esquemas</div>
            <div class="adv-body" style="font-size:13px;line-height:1.6;color:var(--text);">A flexibilidade de esquema pode complicar o gerenciamento de dados. A falta de estrutura r&iacute;gida pode levar a uma organiza&ccedil;&atilde;o desorganizada e dif&iacute;cil de manter ao longo do tempo.</div>
          </div>
          <div class="adv-item">
            <div class="adv-label chall">Consultas complexas</div>
            <div class="adv-body" style="font-size:13px;line-height:1.6;color:var(--text);">Consultas que exigem jun&ccedil;&otilde;es ou agrega&ccedil;&otilde;es podem ser menos eficientes em NoSQL do que em bancos relacionais tradicionais &mdash; impacta an&aacute;lises de dados mais sofisticadas.</div>
          </div>
          <div class="adv-item">
            <div class="adv-label chall">Analytics limitado</div>
            <div class="adv-body" style="font-size:13px;line-height:1.6;color:var(--text);">Muitos bancos NoSQL n&atilde;o possuem as mesmas capacidades anal&iacute;ticas que sistemas de data warehouse tradicionais, limitando a profundidade das an&aacute;lises realizadas diretamente.</div>
          </div>
          <div class="adv-item">
            <div class="adv-label chall">Falta de padr&otilde;es</div>
            <div class="adv-body" style="font-size:13px;line-height:1.6;color:var(--text);">A aus&ecirc;ncia de padr&otilde;es uniformes entre diferentes tecnologias NoSQL dificulta a ado&ccedil;&atilde;o, a migra&ccedil;&atilde;o entre plataformas e a forma&ccedil;&atilde;o de equipes que trabalham com m&uacute;ltiplas tecnologias.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p6">&larr; SQL vs NoSQL</button>
          <button class="pn-btn pn-fwd" data-show="p8">Atividade Pr&aacute;tica &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P8 — ATIVIDADE PRÁTICA ═══ -->
    <div id="p8" class="page">
      <div class="t-body">
        <div class="t-title">M&atilde;os ao<br><em>documento.</em></div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Atividade &mdash; Perfis de Usu&aacute;rios no MongoDB Atlas</div>

        <div class="step-list">
          <div class="step">
            <div class="step-num">1</div>
            <div>
              <div class="step-title">Crie sua conta no MongoDB Atlas</div>
              <div class="step-text" style="margin-top:6px;display:flex;flex-direction:column;gap:6px;">
                <span>Utilize o plano gratuito (M0 Free Tier). Nenhum cart&atilde;o de cr&eacute;dito &eacute; necess&aacute;rio.</span>
                <a class="ext-link" href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noopener">&nearr; MongoDB Atlas &mdash; Criar Conta</a>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div>
              <div class="step-title">Crie um Cluster e um Database</div>
              <div class="step-text" style="margin-top:6px;">
                Crie um cluster M0 (gratuito), um banco de dados chamado <code style="background:var(--s2);padding:1px 5px;border-radius:3px;">soundbyte</code> e uma cole&ccedil;&atilde;o chamada <code style="background:var(--s2);padding:1px 5px;border-radius:3px;">usuarios</code>.
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div>
              <div class="step-title">Insira Perfis com Campos Vari&aacute;veis</div>
              <div class="step-text" style="margin-top:6px;margin-bottom:8px;">
                Note que cada documento tem campos diferentes &mdash; demonstrando a flexibilidade do esquema NoSQL.
              </div>
              <div class="sql-wrap" style="margin-bottom:0;">
                <div class="sql-header">
                  <div class="sql-label">Insert Document &mdash; cole o array JSON no Data Explorer</div>
                  <button class="copy-btn" data-copy="mongo-insert">Copiar</button>
                </div>
                <div class="sql-block"><pre><code id="mongo-insert">[
  {
    <span class="s">"nome"</span>: <span class="s">"Ana Souza"</span>,
    <span class="s">"plano"</span>: <span class="s">"premium"</span>,
    <span class="s">"generos_favoritos"</span>: [<span class="s">"pop"</span>, <span class="s">"mpb"</span>],
    <span class="s">"localizacao"</span>: {
      <span class="s">"cidade"</span>: <span class="s">"S&atilde;o Paulo"</span>,
      <span class="s">"lat"</span>: <span class="n">-23.5</span>,
      <span class="s">"lon"</span>: <span class="n">-46.6</span>
    },
    <span class="s">"ultima_sessao"</span>: <span class="s">"2026-05-30T14:22:00"</span>,
    <span class="s">"avaliacoes"</span>: [<span class="s">"&#x1F60D;"</span>, <span class="s">"&#x1F525;"</span>, <span class="s">"&#x1F634;"</span>]
  },
  {
    <span class="s">"nome"</span>: <span class="s">"Bruno Mendes"</span>,
    <span class="s">"plano"</span>: <span class="s">"gratuito"</span>,
    <span class="s">"generos_favoritos"</span>: [<span class="s">"rock"</span>],
    <span class="s">"dispositivos"</span>: [<span class="s">"android"</span>, <span class="s">"smart_tv"</span>],
    <span class="s">"ultima_sessao"</span>: <span class="s">"2026-05-29T08:05:00"</span>
  },
  {
    <span class="s">"nome"</span>: <span class="s">"Carla Lima"</span>,
    <span class="s">"plano"</span>: <span class="s">"premium"</span>,
    <span class="s">"podcast_favorito"</span>: <span class="s">"Roda Viva"</span>,
    <span class="s">"horas_ouvidas_mes"</span>: <span class="n">42.5</span>,
    <span class="s">"historico_recente"</span>: [
      {
        <span class="s">"faixa"</span>: <span class="s">"Aquarela"</span>,
        <span class="s">"artista"</span>: <span class="s">"Toquinho"</span>,
        <span class="s">"duracao_s"</span>: <span class="n">240</span>
      },
      {
        <span class="s">"faixa"</span>: <span class="s">"Garota de Ipanema"</span>,
        <span class="s">"artista"</span>: <span class="s">"Tom Jobim"</span>,
        <span class="s">"duracao_s"</span>: <span class="n">186</span>
      }
    ]
  }
]</code></pre>
                </div>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <div>
              <div class="step-title">Pratique Consultas B&aacute;sicas</div>
              <div class="step-text" style="margin-top:6px;margin-bottom:12px;">
                No Data Explorer, cole cada filtro abaixo no campo <strong>Filter</strong> da cole&ccedil;&atilde;o e clique em <strong>Apply</strong>. Observe como o MongoDB retorna documentos com estruturas diferentes.
              </div>

              <div class="sql-wrap" style="margin-bottom:12px;">
                <div class="sql-label">Todos os usu&aacute;rios</div>
                <div class="sql-block"><pre><code id="mongo-q1">{}</code></pre></div>
              </div>
              <div class="sql-wrap" style="margin-bottom:12px;">
                <div class="sql-label">Apenas usu&aacute;rios premium</div>
                <div class="sql-block"><pre><code id="mongo-q2">{ <span class="s">"plano"</span>: <span class="s">"premium"</span> }</code></pre></div>
              </div>
              <div class="sql-wrap" style="margin-bottom:12px;">
                <div class="sql-label">Usu&aacute;rios com rock entre os g&ecirc;neros favoritos</div>
                <div class="sql-block"><pre><code id="mongo-q3">{ <span class="s">"generos_favoritos"</span>: <span class="s">"rock"</span> }</code></pre></div>
              </div>
              <div class="sql-wrap" style="margin-bottom:0;">
                <div class="sql-label">Usu&aacute;rios com mais de 40 horas ouvidas no m&ecirc;s</div>
                <div class="sql-block"><pre><code id="mongo-q4">{ <span class="s">"horas_ouvidas_mes"</span>: { <span class="s">"$gt"</span>: <span class="n">40</span> } }</code></pre></div>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">5</div>
            <div>
              <div class="step-title">Adicione um Novo Campo sem Migra&ccedil;&atilde;o</div>
              <div class="step-text" style="margin-top:6px;margin-bottom:12px;">
                No Data Explorer: filtre com o JSON abaixo, clique no &iacute;cone de edi&ccedil;&atilde;o de um documento premium e acrescente o campo <code style="background:var(--s2);padding:1px 5px;border-radius:3px;">"notificacoes_ativas": true</code> diretamente no JSON &mdash; sem precisar tocar nos documentos de plano gratuito.
              </div>

              <div class="sql-wrap" style="margin-bottom:12px;">
                <div class="sql-label">1 &mdash; Filtro: localize os documentos a editar</div>
                <div class="sql-block"><pre><code id="mongo-filter-update">{ <span class="s">"plano"</span>: <span class="s">"premium"</span> }</code></pre></div>
              </div>
              <div class="sql-wrap" style="margin-bottom:12px;">
                <div class="sql-header">
                  <div class="sql-label">2 &mdash; Documento editado (exemplo: Ana Souza)</div>
                  <button class="copy-btn" data-copy="mongo-update">Copiar</button>
                </div>
                <div class="sql-block"><pre><code id="mongo-update">{
  <span class="s">"nome"</span>: <span class="s">"Ana Souza"</span>,
  <span class="s">"plano"</span>: <span class="s">"premium"</span>,
  <span class="s">"generos_favoritos"</span>: [<span class="s">"pop"</span>, <span class="s">"mpb"</span>],
  <span class="s">"localizacao"</span>: {
    <span class="s">"cidade"</span>: <span class="s">"S&atilde;o Paulo"</span>,
    <span class="s">"lat"</span>: <span class="n">-23.5</span>,
    <span class="s">"lon"</span>: <span class="n">-46.6</span>
  },
  <span class="s">"ultima_sessao"</span>: <span class="s">"2026-05-30T14:22:00"</span>,
  <span class="s">"avaliacoes"</span>: [<span class="s">"&#x1F60D;"</span>, <span class="s">"&#x1F525;"</span>, <span class="s">"&#x1F634;"</span>],
  <span class="s">"notificacoes_ativas"</span>: <span class="k">true</span>
}</code></pre>
                </div>
              </div>

              <div style="font-size:12px;color:var(--muted);margin:4px 0 12px;width:100%;max-width:720px;">
                Para atualizar <strong>m&uacute;ltiplos documentos</strong> de uma vez, use o bot&atilde;o <strong>Update</strong> da cole&ccedil;&atilde;o no Data Explorer e preencha os dois campos abaixo.
              </div>
              <div class="sql-wrap" style="margin-bottom:12px;">
                <div class="sql-label">3 &mdash; Update: campo Filter (quais documentos atualizar)</div>
                <div class="sql-block"><pre><code id="mongo-bulk-filter">{ <span class="s">"plano"</span>: <span class="s">"premium"</span> }</code></pre></div>
              </div>
              <div class="sql-wrap" style="margin-bottom:0;">
                <div class="sql-header">
                  <div class="sql-label">3 &mdash; Update: campo Update (o que alterar)</div>
                  <button class="copy-btn" data-copy="mongo-bulk-update">Copiar</button>
                </div>
                <div class="sql-block"><pre><code id="mongo-bulk-update">{
  <span class="s">"$set"</span>: {
    <span class="s">"notificacoes_ativas"</span>: <span class="k">true</span>
  }
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="callout" style="margin-bottom:28px;">
          <div class="callout-tag">Integra&ccedil;&atilde;o com IA</div>
          <strong>Prompt sugerido:</strong> <em>&ldquo;Converta esta estrutura de tabelas SQL em um &uacute;nico documento JSON otimizado para leituras frequentes em um banco NoSQL como o MongoDB Atlas, adaptado para inserir os dados usando o Data Explorer (modo JSON estrito, isto &eacute;, puro, sem coment&aacute;rios, apenas aspas duplas, sem v&iacute;rgulas finais e apenas dados).&rdquo;</em>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p7">&larr; Vantagens e Desafios</button>
          <button class="pn-btn pn-fwd" data-show="p9">A Pergunta Estrat&eacute;gica &rarr;</button>
        </div>
      </div>
    </div>

    <!-- ═══ P9 — A PERGUNTA ESTRATÉGICA ═══ -->
    <div id="p9" class="page">
      <div class="t-body">
        <div class="t-title">O banco certo<br><em>para a pergunta certa.</em></div>

        <div class="callout" style="margin-bottom:32px;font-size:14.5px;line-height:1.75;">
          <div class="callout-tag">A Pergunta Estrat&eacute;gica do Debriefing</div>
          Se a SoundByte quiser saber o <strong>faturamento total por usu&aacute;rio nos &uacute;ltimos 12 meses</strong>, qual banco usa? Se quiser saber <strong>quais m&uacute;sicas um usu&aacute;rio espec&iacute;fico ouviu hoje &agrave;s 15h</strong>, qual banco usa? A resposta esperada: <em>os dois coexistem</em>. Arquitetura de dados moderna usa o banco certo para a pergunta certa.
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">SQL ou NoSQL? Depende da pergunta.</div>

        <div class="compare" style="margin-bottom:28px;">
          <div class="cmp-card">
            <div class="cmp-head sql-h">Use SQL quando...</div>
            <div class="cmp-body">
              <ul>
                <li>Os dados s&atilde;o estruturados e o esquema &eacute; est&aacute;vel</li>
                <li>Voc&ecirc; precisa de JOINs complexos e transa&ccedil;&otilde;es ACID</li>
                <li>A pergunta &eacute; agrega&ccedil;&atilde;o hist&oacute;rica (faturamento, churn)</li>
                <li>A equipe conhece SQL bem &mdash; menor curva de aprendizado</li>
                <li>O volume &eacute; gerenci&aacute;vel por um servidor vertical</li>
              </ul>
            </div>
          </div>
          <div class="cmp-card">
            <div class="cmp-head nosql-h">Use NoSQL quando...</div>
            <div class="cmp-body">
              <ul>
                <li>Os dados s&atilde;o vari&aacute;veis, sem esquema fixo</li>
                <li>O volume &eacute; massivo e cresce rapidamente</li>
                <li>A velocidade de grava&ccedil;&atilde;o/leitura &eacute; cr&iacute;tica</li>
                <li>Cada registro pode ter campos completamente diferentes</li>
                <li>Voc&ecirc; precisa escalar horizontalmente em cluster</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ov-section-tag" style="margin-bottom:16px;">Na SoundByte &mdash; Arquitetura Poliglota</div>
        <div class="ov-concepts" style="margin-bottom:28px;">
          <div class="ov-concept">
            <h4>PostgreSQL (SQL)</h4>
            <p>Faturamento por usu&aacute;rio, hist&oacute;rico de assinaturas, relat&oacute;rios financeiros, dados transacionais. Respostas para o conselho e para o BI.</p>
          </div>
          <div class="ov-concept">
            <h4>MongoDB (Documento)</h4>
            <p>Perfis de usu&aacute;rios, cat&aacute;logo de m&uacute;sicas, avalia&ccedil;&otilde;es com emojis, hist&oacute;rico detalhado de reprodu&ccedil;&atilde;o. Esquema flex&iacute;vel por usu&aacute;rio.</p>
          </div>
          <div class="ov-concept">
            <h4>Redis (Chave-Valor)</h4>
            <p>Sess&otilde;es ativas, cache de recomenda&ccedil;&otilde;es, fila de eventos em tempo real. Baix&iacute;ssima lat&ecirc;ncia para os 2 milh&otilde;es de eventos por hora.</p>
          </div>
          <div class="ov-concept">
            <h4>Neo4j (Grafo)</h4>
            <p>Engine de recomenda&ccedil;&atilde;o: &ldquo;usu&aacute;rios que ouviram X tamb&eacute;m ouviram Y&rdquo;. Relacionamentos entre artistas, g&ecirc;neros e ouvintes.</p>
          </div>
        </div>

        <div style="width:100%;max-width:720px;padding:20px 24px;background:var(--s1);border:1px solid var(--border);border-radius:10px;font-size:13.5px;line-height:1.7;color:var(--text);margin-bottom:28px;">
          <strong>A li&ccedil;&atilde;o desta aula:</strong> NoSQL n&atilde;o substitui SQL &mdash; complementa. A escolha do banco n&atilde;o &eacute; sobre tecnologia preferida: &eacute; sobre <em>qual pergunta voc&ecirc; quer responder</em> e <em>qual &eacute; a natureza dos seus dados</em>. O gestor de dados moderno precisa entender os dois paradigmas.
        </div>

        <div class="ov-section-tag" style="margin-bottom:12px;">Atividade Avaliativa</div>
        <div style="width:100%;max-width:720px;margin-bottom:28px;">
          <a class="ext-link" href="#/atividade-06" style="margin-top:0;">&nearr; Atividade Avaliativa 6 &mdash; MongoDB</a>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p8">&larr; Atividade Pr&aacute;tica</button>
          <button class="pn-btn pn-fwd" data-show="menu">&larr; Menu Principal</button>
        </div>
      </div>
    </div>`;
