GBDBI.content["aula-02"] = `<!-- ═══ MENU ═══ -->
    <div id="menu" class="page active">
      <div class="m-header">
        <div class="m-eyebrow">ESPM · Gestão BD &amp; BI</div>
        <div class="m-title">Aula 2 — A Arquitetura<br>do <em>Caos</em></div>
        <div class="m-sub">Entidades · Atributos · Cardinalidade · Chaves · 1FN · 2FN · 3FN</div>
      </div>
      <div class="m-grid">
        <div class="mcard" data-show="p0"><div class="mc-num">00</div><div class="mc-h">Objetivos da Aula</div><p class="mc-p">O que você vai aprender hoje — seis objetivos de aprendizagem.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p1"><div class="mc-num">01</div><div class="mc-h">Visão Geral da Aula</div><p class="mc-p">Por que esta aula importa, conteúdo fundamental e atividade prática.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p2"><div class="mc-num">02</div><div class="mc-h">Modelo Entidade-Relacionamento</div><p class="mc-p">Como entidades, atributos e instâncias se traduzem em tabelas e colunas.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p3"><div class="mc-num">03</div><div class="mc-h">Relacionamentos e Cardinalidades</div><p class="mc-p">1:1, 1:N e N:M — como as entidades se conectam e em que proporção.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p4"><div class="mc-num">04</div><div class="mc-h">Normalização: 1FN · 2FN · 3FN</div><p class="mc-p">As três formas normais e as anomalias que cada uma previne.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p5"><div class="mc-num">05</div><div class="mc-h">Tipos de Chaves</div><p class="mc-p">PK, FK, Natural, Substituta, Composta, Candidata e Alternativa.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p6"><div class="mc-num">06</div><div class="mc-h">Integridade Referencial</div><p class="mc-p">A FK deve sempre encontrar sua PK. Quando essa regra é quebrada.</p><span class="mc-arrow">↗</span></div>
        <div class="mcard" data-show="p7"><div class="mc-num">07</div><div class="mc-h">Modelagem de Dados</div><p class="mc-p">Conceitual, Lógico e Físico: os três níveis de abstração do modelo.</p><span class="mc-arrow">↗</span></div>
      </div>
    </div>

    <!-- ═══ P0 — OBJETIVOS ═══ -->
    <div id="p0" class="page">
      <div class="t-body">
        <div class="t-title">O que você vai<br><em>aprender hoje.</em></div>
        <div class="obj-card">
          <div class="obj-eyebrow">Objetivos da Aula</div>
          <div class="obj-list">
            <div class="obj-item"><span class="obj-bullet"></span> Identificar os conceitos de entidade, atributo, relacionamento, cardinalidade e chave em um modelo de dados.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Explicar as diferenças entre os tipos de chave (PK, FK, natural, substituta) e o papel de cada forma normal.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Construir um diagrama Entidade-Relacionamento a partir da descrição textual de um processo de negócio.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Identificar anomalias de inserção, alteração e exclusão em um modelo desnormalizado e apontar sua causa.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Julgar se um esquema relacional atinge a 3ª Forma Normal, diagnosticando dependências parciais e transitivas.</div>
            <div class="obj-item"><span class="obj-bullet"></span> Projetar um modelo de dados completo — do diagrama ER conceitual ao esquema físico normalizado — para um processo de negócio real, garantindo integridade referencial e conformidade com a 3ª Forma Normal.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="menu">← Início</button>
          <button class="pn-btn pn-fwd" data-show="p1">Visão Geral →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P1 — VISÃO GERAL ═══ -->
    <div id="p1" class="page">
      <div class="t-body">
        <div class="t-title">A arquitetura<br><em>do caos.</em></div>

        <div class="ov-section-tag" style="margin-top:8px;">Conceitos Trabalhados</div>
        <div class="ov-concepts ov-concepts-stack">
          <div class="ov-concept">
            <h4>Entidade e atributo</h4>
            <img src="recursos/fig-2-1-entidade-atributo.png" alt="Diagrama ilustrando entidade e atributo em modelagem de dados." loading="lazy" style="width:100%;height:auto;border-radius:var(--radius-sm);margin:var(--space-3) 0;">
            <p>O que existe e merece uma tabela própria — e o que descreve essa entidade. Endereço começa como atributo de Cliente, mas se o cliente tem múltiplos endereços, precisa virar entidade.</p>
          </div>
          <div class="ov-concept">
            <h4>Relacionamento e cardinalidade</h4>
            <img src="recursos/fig-2-2-relacionamento-cardinalidade.png" alt="Diagrama ilustrando relacionamento e cardinalidade entre entidades." loading="lazy" style="width:100%;height:auto;border-radius:var(--radius-sm);margin:var(--space-3) 0;">
            <p>Como as entidades se conectam e quantos de um lado podem se relacionar com quantos do outro. Se Faixa e Álbum estão na mesma tabela, como armazenar uma faixa em dois álbuns?</p>
          </div>
          <div class="ov-concept">
            <h4>Modelagem aplicada</h4>
            <p>Os grupos constroem o modelo ER de um processo de vendas em linguagem de negócio — sem jargão técnico — e comparam com o modelo relacional real ao final.</p>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p0">← Objetivos</button>
          <button class="pn-btn pn-fwd" data-show="p2">Modelo ER →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P2 — MODELO ENTIDADE-RELACIONAMENTO ═══ -->
    <div id="p2" class="page">
      <div class="t-body">
        <div class="t-title">O mundo real<br><em>vira banco de dados.</em></div>
        <div class="diagram">
          <svg viewBox="0 0 700 252" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Column headers -->
            <text x="180" y="22" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.5" font-weight="700">MODELO ER</text>
            <text x="520" y="22" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2.5" font-weight="700">BANCO DE DADOS</text>
            <!-- Divider -->
            <line x1="348" y1="10" x2="348" y2="242" stroke="#f0e0da" stroke-width="1" stroke-dasharray="3 3"/>

            <!-- Row 1: Entidade → Tabela -->
            <rect x="60" y="36" width="240" height="56" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="180" y="58" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">ENTIDADE</text>
            <text x="180" y="79" text-anchor="middle" fill="#1a0d0d" font-size="15" font-family="system-ui" font-weight="800">Cliente</text>
            <line x1="302" y1="64" x2="342" y2="64" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="342,58 354,64 342,70" fill="#c8aeaa"/>
            <rect x="358" y="36" width="282" height="56" rx="10" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="499" y="58" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">TABELA</text>
            <text x="499" y="79" text-anchor="middle" fill="#1a0d0d" font-size="15" font-family="system-ui" font-weight="700">tbl_clientes</text>

            <!-- Row 2: Atributo → Coluna -->
            <ellipse cx="180" cy="148" rx="120" ry="30" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <text x="180" y="143" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">ATRIBUTO</text>
            <text x="180" y="161" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">email</text>
            <line x1="302" y1="148" x2="342" y2="148" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="342,142 354,148 342,154" fill="#c8aeaa"/>
            <rect x="358" y="120" width="282" height="56" rx="10" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="499" y="142" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">COLUNA</text>
            <text x="499" y="163" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">email VARCHAR(100)</text>

            <!-- Row 3: Instância → Registro -->
            <rect x="60" y="200" width="240" height="46" rx="10" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="180" y="219" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">INSTÂNCIA</text>
            <text x="180" y="236" text-anchor="middle" fill="#1a0d0d" font-size="13" font-family="system-ui" font-weight="700">João Silva</text>
            <line x1="302" y1="223" x2="342" y2="223" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="342,217 354,223 342,229" fill="#c8aeaa"/>
            <rect x="358" y="200" width="282" height="46" rx="10" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="499" y="219" text-anchor="middle" fill="#8a6060" font-size="9" font-family="system-ui" letter-spacing="2" font-weight="700">REGISTRO / LINHA</text>
            <text x="499" y="236" text-anchor="middle" fill="#1a0d0d" font-size="13" font-family="system-ui" font-weight="700">1 · joao@email.com</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Entidade</div>
            <div class="kp-text">Objeto do mundo real com existência independente. Vira uma tabela no banco.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--danger)">Atributo</div>
            <div class="kp-text">Propriedade que descreve a entidade. Vira uma coluna na tabela.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Instância</div>
            <div class="kp-text">Um valor concreto da entidade. Vira uma linha (registro) na tabela.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p1">← Visão Geral</button>
          <button class="pn-btn pn-fwd" data-show="p3">Cardinalidades →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P3 — RELACIONAMENTOS E CARDINALIDADES ═══ -->
    <div id="p3" class="page">
      <div class="t-body">
        <div class="t-title">Como as entidades<br><em>se conectam.</em></div>
        <div class="diagram">
          <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Label col -->
            <text x="18" y="62" fill="#8a6060" font-size="10" font-family="system-ui" font-weight="700">1:1</text>
            <text x="18" y="148" fill="#8a6060" font-size="10" font-family="system-ui" font-weight="700">1:N</text>
            <text x="18" y="234" fill="#8a6060" font-size="10" font-family="system-ui" font-weight="700">N:M</text>

            <!-- Row 1: 1:1 -->
            <rect x="52" y="36" width="170" height="48" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="137" y="65" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">Pessoa</text>
            <line x1="224" y1="60" x2="290" y2="60" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="232" y="52" text-anchor="start" fill="#b09898" font-size="10" font-family="system-ui">1</text>
            <text x="281" y="52" text-anchor="end" fill="#b09898" font-size="10" font-family="system-ui">1</text>
            <rect x="292" y="36" width="170" height="48" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="377" y="65" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">CPF</text>
            <text x="560" y="65" fill="#8a6060" font-size="12" font-family="system-ui">Uma pessoa tem um CPF.</text>

            <!-- Row 2: 1:N -->
            <rect x="52" y="122" width="170" height="48" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="137" y="151" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">Categoria</text>
            <line x1="224" y1="146" x2="290" y2="146" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="240" y="138" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">1</text>
            <text x="276" y="138" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">N</text>
            <rect x="292" y="122" width="170" height="48" rx="10" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <text x="377" y="151" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">Produto</text>
            <text x="534" y="142" fill="#8a6060" font-size="12" font-family="system-ui">Uma categoria agrupa</text>
            <text x="534" y="158" fill="#8a6060" font-size="12" font-family="system-ui">muitos produtos.</text>

            <!-- Row 3: N:M via junction -->
            <rect x="52" y="208" width="150" height="48" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="127" y="237" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">Cliente</text>
            <line x1="204" y1="232" x2="240" y2="232" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="222" y="224" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">N</text>
            <rect x="242" y="212" width="120" height="40" rx="8" fill="#f5ecea" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="302" y="237" text-anchor="middle" fill="#8a6060" font-size="11" font-family="system-ui" font-weight="600">Pedido</text>
            <line x1="364" y1="232" x2="400" y2="232" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="382" y="224" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">N</text>
            <rect x="402" y="208" width="150" height="48" rx="10" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <text x="477" y="237" text-anchor="middle" fill="#1a0d0d" font-size="14" font-family="system-ui" font-weight="700">Produto</text>
            <text x="578" y="227" fill="#8a6060" font-size="12" font-family="system-ui">Tabela</text>
            <text x="578" y="243" fill="#8a6060" font-size="12" font-family="system-ui">associativa.</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp">
            <div class="kp-tag">1:1</div>
            <div class="kp-text">Um registro de A corresponde a exatamente um de B. Ex: Pessoa ↔ CPF.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--danger)">1:N</div>
            <div class="kp-text">Um registro de A corresponde a vários de B. Ex: Categoria → Produtos.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">N:M</div>
            <div class="kp-text">Muitos de A para muitos de B. Requer tabela associativa no modelo físico.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p2">← Modelo ER</button>
          <button class="pn-btn pn-fwd" data-show="p4">Normalização →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4 — NORMALIZAÇÃO ═══ -->
    <div id="p4" class="page">
      <div class="t-body">
        <div class="t-title">Três formas.<br><em>Um dado limpo.</em></div>
        <div class="diagram">
          <svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Step 0: Desnormalizada -->
            <rect x="10" y="58" width="118" height="64" rx="10" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <text x="69" y="80" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">ORIGINAL</text>
            <text x="69" y="100" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui" font-weight="700">Desnor-</text>
            <text x="69" y="114" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui" font-weight="700">malizada</text>
            <text x="69" y="148" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">Caos</text>
            <!-- Arrow -->
            <line x1="130" y1="90" x2="150" y2="90" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="150,84 162,90 150,96" fill="#c8aeaa"/>
            <!-- Step 1: 1FN -->
            <rect x="164" y="48" width="134" height="74" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <text x="231" y="70" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">PRIMEIRA</text>
            <text x="231" y="84" text-anchor="middle" fill="#7a1a1a" font-size="15" font-family="system-ui" font-weight="800">1FN</text>
            <text x="231" y="103" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui">Valores atômicos</text>
            <text x="231" y="148" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">Sem grupos repetitivos</text>
            <!-- Arrow -->
            <line x1="300" y1="90" x2="320" y2="90" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="320,84 332,90 320,96" fill="#c8aeaa"/>
            <!-- Step 2: 2FN -->
            <rect x="334" y="48" width="134" height="74" rx="10" fill="#fff" stroke="#7a1a1a" stroke-width="1.5" stroke-opacity=".6"/>
            <text x="401" y="70" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">SEGUNDA</text>
            <text x="401" y="84" text-anchor="middle" fill="#7a1a1a" font-size="15" font-family="system-ui" font-weight="800">2FN</text>
            <text x="401" y="103" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui">Dep. total na PK</text>
            <text x="401" y="148" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">Sem dep. parciais</text>
            <!-- Arrow -->
            <line x1="470" y1="90" x2="490" y2="90" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="490,84 502,90 490,96" fill="#c8aeaa"/>
            <!-- Step 3: 3FN -->
            <rect x="504" y="48" width="134" height="74" rx="10" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <text x="571" y="70" text-anchor="middle" fill="#8a6060" font-size="8.5" font-family="system-ui" letter-spacing="1" font-weight="700">TERCEIRA</text>
            <text x="571" y="84" text-anchor="middle" fill="#b83030" font-size="15" font-family="system-ui" font-weight="800">3FN</text>
            <text x="571" y="103" text-anchor="middle" fill="#1a0d0d" font-size="11" font-family="system-ui">Atributos → só a PK</text>
            <text x="571" y="148" text-anchor="middle" fill="#b09898" font-size="10" font-family="system-ui">Sem dep. transitivas</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Anomalia de Inserção</div>
            <div class="kp-text">Não é possível inserir um cliente sem que ele tenha comprado algum produto.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--danger)">Anomalia de Alteração</div>
            <div class="kp-text">Para atualizar o telefone de um cliente, todos os seus registros devem ser alterados.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Anomalia de Exclusão</div>
            <div class="kp-text">Excluir os produtos de um cliente apaga também seus dados cadastrais.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p3">← Cardinalidades</button>
          <button class="pn-btn pn-fwd" data-show="p4b">Anomalias →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4B — ANOMALIAS DE DADOS ═══ -->
    <div id="p4b" class="page">
      <div class="t-body">
        <div class="t-title">Quando o modelo<br><em>trai o dado.</em></div>

        <p class="anomaly-intro">Tabela desnormalizada — um único modelo para cliente, pedido e produto. Parece simples, mas esconde três armadilhas:</p>

        <div class="anomaly-table-wrap">
          <table class="anomaly-tbl">
            <thead>
              <tr>
                <th>PedidoID</th>
                <th>ClienteID</th>
                <th>Cliente</th>
                <th class="highlight-alt">Email</th>
                <th>ProdutoID</th>
                <th>Produto</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P001</td><td>C01</td><td>João</td>
                <td class="highlight-alt">joao@email.com</td>
                <td>PR01</td><td>Fone BT</td><td>R$ 150</td>
              </tr>
              <tr>
                <td>P002</td><td>C01</td><td>João</td>
                <td class="highlight-alt">joao@email.com</td>
                <td>PR02</td><td>Caixa Som</td><td>R$ 300</td>
              </tr>
              <tr class="highlight-del">
                <td>P003</td><td>C02</td><td>Maria</td>
                <td>maria@email.com</td>
                <td>PR03</td><td>Headphone</td><td>R$ 200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="anomaly-cards">
          <div class="anomaly-card anomaly-ins">
            <div class="an-icon">＋</div>
            <div class="an-tag">Anomalia de Inserção</div>
            <div class="an-text">Não é possível cadastrar um cliente <strong>sem que exista um pedido</strong>. Como preencher ProdutoID e Preço para um cliente que ainda não comprou?</div>
          </div>
          <div class="anomaly-card anomaly-alt">
            <div class="an-icon">✎</div>
            <div class="an-tag">Anomalia de Alteração</div>
            <div class="an-text">O email de João aparece em <strong>duas linhas</strong>. Atualizar apenas uma cria inconsistência — o banco passa a ter dois emails diferentes para o mesmo cliente.</div>
          </div>
          <div class="anomaly-card anomaly-del">
            <div class="an-icon">✕</div>
            <div class="an-tag">Anomalia de Exclusão</div>
            <div class="an-text">Excluir o pedido P003 <strong>apaga o cadastro de Maria</strong>. Um cancelamento de compra destrói permanentemente os dados do cliente.</div>
          </div>
        </div>

        <div class="pg-nav">
          <button class="pn-btn" data-show="p4">← Normalização</button>
          <button class="pn-btn pn-fwd" data-show="p4c">Formas Normais →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P4C — FORMAS NORMAIS ═══ -->
    <div id="p4c" class="page">
      <div class="t-body">
        <div class="t-title">Três formas.<br><em>Um dado limpo.</em></div>

        <div class="nf-grid">

          <!-- 1FN -->
          <div class="nf-card">
            <div class="nf-header">
              <div class="nf-badge">1FN</div>
              <div class="nf-htext">
                <h4>Primeira Forma Normal — Atomicidade</h4>
                <p>Cada célula deve conter um único valor. Sem listas, sem grupos repetitivos dentro de uma coluna.</p>
              </div>
            </div>
            <div class="nf-body">
              <div>
                <div class="nf-col-label bad">✗ Violação</div>
                <table class="nf-tbl">
                  <thead><tr><th>ClienteID</th><th>Nome</th><th>Telefones</th></tr></thead>
                  <tbody>
                    <tr><td>C01</td><td>João</td><td class="bad-cell">99999-1111, 88888-2222</td></tr>
                    <tr><td>C02</td><td>Maria</td><td class="bad-cell">77777-3333</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="nf-col-label good">✓ Corrigido</div>
                <table class="nf-tbl">
                  <thead><tr><th>ClienteID</th><th>Nome</th><th>Telefone</th></tr></thead>
                  <tbody>
                    <tr><td>C01</td><td>João</td><td>99999-1111</td></tr>
                    <tr><td>C01</td><td>João</td><td>88888-2222</td></tr>
                    <tr><td>C02</td><td>Maria</td><td>77777-3333</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 2FN -->
          <div class="nf-card">
            <div class="nf-header">
              <div class="nf-badge soft">2FN</div>
              <div class="nf-htext">
                <h4>Segunda Forma Normal — Dependência Total</h4>
                <p>Todo atributo não-chave deve depender da chave primária <em>inteira</em>. Proíbe dependências parciais em chaves compostas.</p>
              </div>
            </div>
            <div class="nf-body">
              <div>
                <div class="nf-col-label bad">✗ Violação — PK = (PedidoID + ProdID)</div>
                <table class="nf-tbl">
                  <thead><tr><th>PedidoID</th><th>ProdID</th><th>NomeProd</th><th>Qtd</th></tr></thead>
                  <tbody>
                    <tr><td>P001</td><td>PR01</td><td class="dep-underline">Fone BT</td><td>2</td></tr>
                    <tr><td>P002</td><td>PR01</td><td class="dep-underline">Fone BT</td><td>1</td></tr>
                    <tr><td>P002</td><td>PR02</td><td class="dep-underline">Caixa Som</td><td>3</td></tr>
                  </tbody>
                </table>
                <p style="font-size:11px;color:var(--muted);margin-top:6px;">NomeProd depende só de ProdID — não da chave completa.</p>
              </div>
              <div>
                <div class="nf-col-label good">✓ Corrigido — tabelas separadas</div>
                <table class="nf-tbl" style="margin-bottom:8px;">
                  <thead><tr><th>PedidoID</th><th>ProdID</th><th>Qtd</th></tr></thead>
                  <tbody>
                    <tr><td>P001</td><td>PR01</td><td>2</td></tr>
                    <tr><td>P002</td><td>PR01</td><td>1</td></tr>
                  </tbody>
                </table>
                <table class="nf-tbl">
                  <thead><tr><th>ProdID</th><th>NomeProd</th></tr></thead>
                  <tbody>
                    <tr><td>PR01</td><td>Fone BT</td></tr>
                    <tr><td>PR02</td><td>Caixa Som</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 3FN -->
          <div class="nf-card">
            <div class="nf-header">
              <div class="nf-badge">3FN</div>
              <div class="nf-htext">
                <h4>Terceira Forma Normal — Sem Transitividade</h4>
                <p>Nenhum atributo não-chave pode depender de outro atributo não-chave. Proíbe cadeias de dependência indireta.</p>
              </div>
            </div>
            <div class="nf-body">
              <div>
                <div class="nf-col-label bad">✗ Violação</div>
                <table class="nf-tbl">
                  <thead><tr><th>ClienteID</th><th>Nome</th><th>CEP</th><th>Cidade</th></tr></thead>
                  <tbody>
                    <tr><td>C01</td><td>João</td><td class="dep-underline">01310-100</td><td class="bad-cell">São Paulo</td></tr>
                    <tr><td>C02</td><td>Maria</td><td class="dep-underline">01310-100</td><td class="bad-cell">São Paulo</td></tr>
                    <tr><td>C03</td><td>Pedro</td><td class="dep-underline">30112-000</td><td class="bad-cell">Belo Horizonte</td></tr>
                  </tbody>
                </table>
                <p style="font-size:11px;color:var(--muted);margin-top:6px;">ClienteID → CEP → Cidade (dependência transitiva).</p>
              </div>
              <div>
                <div class="nf-col-label good">✓ Corrigido</div>
                <table class="nf-tbl" style="margin-bottom:8px;">
                  <thead><tr><th>ClienteID</th><th>Nome</th><th>CEP</th></tr></thead>
                  <tbody>
                    <tr><td>C01</td><td>João</td><td>01310-100</td></tr>
                    <tr><td>C02</td><td>Maria</td><td>01310-100</td></tr>
                    <tr><td>C03</td><td>Pedro</td><td>30112-000</td></tr>
                  </tbody>
                </table>
                <table class="nf-tbl">
                  <thead><tr><th>CEP</th><th>Cidade</th></tr></thead>
                  <tbody>
                    <tr><td>01310-100</td><td>São Paulo</td></tr>
                    <tr><td>30112-000</td><td>Belo Horizonte</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div><!-- /nf-grid -->

        <div class="pg-nav" style="margin-top:32px;">
          <button class="pn-btn" data-show="p4b">← Anomalias</button>
          <button class="pn-btn pn-fwd" data-show="p5">Tipos de Chaves →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P5 — TIPOS DE CHAVES ═══ -->
    <div id="p5" class="page">
      <div class="t-body">
        <div class="t-title">A identidade<br><em>de cada registro.</em></div>
        <p class="acc-hint">Clique em cada tipo para ver definição e exemplo.</p>
        <div class="accordion">

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Primária (PK)</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">Identificador único de cada linha. Não aceita nulos. Só existe uma por tabela.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">Número da conta em uma instituição financeira.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Estrangeira (FK)</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">Coluna que referencia a PK de outra tabela. Estabelece o relacionamento entre tabelas.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">CodFabricante em Produtos referencia CodFabricante em Fabricantes.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Natural</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">Atributo que já existe no mundo real e identifica um registro de forma única.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">CPF, CNPJ, nome do país. Risco: regras de negócio podem mudar.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Substituta (Surrogate)</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">Atributo criado exclusivamente para ser chave primária, sem significado para o negócio.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">id_cliente (inteiro auto-incremento), UUID. Impacto mínimo com mudanças de negócio.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Composta</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">PK formada pela combinação de dois ou mais atributos que juntos identificam uma linha.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">Rua + Número + Cidade + CEP identifica um endereço de forma única.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Candidata</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">Qualquer atributo (ou combinação) que poderia ser usado como PK por ser único na tabela.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">Em Clientes: CPF, Código do Cliente e Nome+Sobrenome+Data são todas candidatas.</div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <div class="acc-trigger">
              <span class="acc-criterion">Chave Alternativa / Única</span>
              <span class="acc-icon">+</span>
            </div>
            <div class="acc-body">
              <div class="acc-col">
                <div class="acc-col-tag">Definição</div>
                <div class="acc-col-text">Chave candidata que não foi escolhida como PK. Garante unicidade mas não é o identificador principal.</div>
              </div>
              <div class="acc-col">
                <div class="acc-col-tag ex">Exemplo</div>
                <div class="acc-col-text">Se CPF é a PK, então Código do Cliente é a chave alternativa.</div>
              </div>
            </div>
          </div>

        </div>
        <div class="pg-nav" style="margin-top:32px;">
          <button class="pn-btn" data-show="p4c">← Formas Normais</button>
          <button class="pn-btn pn-fwd" data-show="p6">Integridade →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P6 — INTEGRIDADE REFERENCIAL ═══ -->
    <div id="p6" class="page">
      <div class="t-body">
        <div class="t-title">A FK deve encontrar<br><em>sua PK.</em></div>
        <div class="diagram">
          <svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Table: Fabricantes (left) -->
            <rect x="30" y="20" width="270" height="200" rx="12" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <!-- Header -->
            <rect x="30" y="20" width="270" height="40" rx="12" fill="#7a1a1a" opacity=".08"/>
            <rect x="30" y="44" width="270" height="16" fill="#7a1a1a" opacity=".08"/>
            <text x="165" y="46" text-anchor="middle" fill="#7a1a1a" font-size="11" font-family="system-ui" font-weight="800" letter-spacing=".5">FABRICANTES</text>
            <!-- Col headers -->
            <text x="65" y="74" fill="#8a6060" font-size="9.5" font-family="system-ui" font-weight="700">CodFabricante</text>
            <text x="215" y="74" fill="#8a6060" font-size="9.5" font-family="system-ui" font-weight="700">Nome</text>
            <line x1="42" y1="80" x2="288" y2="80" stroke="#f0e0da" stroke-width="1"/>
            <!-- PK badge -->
            <rect x="42" y="60" width="24" height="14" rx="3" fill="#7a1a1a"/>
            <text x="54" y="71" text-anchor="middle" fill="#fdf8f6" font-size="8" font-family="system-ui" font-weight="800">PK</text>
            <!-- Rows -->
            <text x="90" y="105" fill="#1a0d0d" font-size="13" font-family="system-ui" font-weight="600">2001</text>
            <text x="200" y="105" fill="#1a0d0d" font-size="13" font-family="system-ui">Sony</text>
            <line x1="42" y1="114" x2="288" y2="114" stroke="#f5ece8" stroke-width="1"/>
            <text x="90" y="138" fill="#1a0d0d" font-size="13" font-family="system-ui" font-weight="600">2002</text>
            <text x="200" y="138" fill="#1a0d0d" font-size="13" font-family="system-ui">JBL</text>
            <line x1="42" y1="148" x2="288" y2="148" stroke="#f5ece8" stroke-width="1"/>
            <text x="90" y="172" fill="#1a0d0d" font-size="13" font-family="system-ui" font-weight="600">2003</text>
            <text x="200" y="172" fill="#1a0d0d" font-size="13" font-family="system-ui">Bose</text>

            <!-- Arrow FK → PK -->
            <path d="M400 105 Q440 105 440 170 Q440 235 490 235" fill="none" stroke="#b83030" stroke-width="1.5" stroke-dasharray="5 3"/>
            <polygon points="490,229 502,235 490,241" fill="#b83030"/>
            <text x="432" y="188" fill="#b83030" font-size="10" font-family="system-ui" font-weight="700" transform="rotate(-90,432,188)">FK → PK</text>

            <!-- Table: Produtos (right) -->
            <rect x="398" y="20" width="272" height="240" rx="12" fill="#fff" stroke="#dfc9c0" stroke-width="1.5"/>
            <rect x="398" y="20" width="272" height="40" rx="12" fill="#b83030" opacity=".07"/>
            <rect x="398" y="44" width="272" height="16" fill="#b83030" opacity=".07"/>
            <text x="534" y="46" text-anchor="middle" fill="#b83030" font-size="11" font-family="system-ui" font-weight="800" letter-spacing=".5">PRODUTOS</text>
            <!-- Col headers -->
            <text x="422" y="74" fill="#8a6060" font-size="9" font-family="system-ui" font-weight="700">CodProd</text>
            <text x="496" y="74" fill="#8a6060" font-size="9" font-family="system-ui" font-weight="700">Nome</text>
            <text x="580" y="74" fill="#8a6060" font-size="9" font-family="system-ui" font-weight="700">CodFab</text>
            <line x1="410" y1="80" x2="658" y2="80" stroke="#f0e0da" stroke-width="1"/>
            <!-- PK + FK badges -->
            <rect x="410" y="60" width="24" height="14" rx="3" fill="#7a1a1a"/>
            <text x="422" y="71" text-anchor="middle" fill="#fdf8f6" font-size="8" font-family="system-ui" font-weight="800">PK</text>
            <rect x="568" y="60" width="22" height="14" rx="3" fill="#b83030"/>
            <text x="579" y="71" text-anchor="middle" fill="#fdf8f6" font-size="8" font-family="system-ui" font-weight="800">FK</text>
            <!-- Rows -->
            <text x="426" y="105" fill="#1a0d0d" font-size="12" font-family="system-ui">P001</text>
            <text x="490" y="105" fill="#1a0d0d" font-size="12" font-family="system-ui">Headphone</text>
            <text x="582" y="105" fill="#b83030" font-size="13" font-family="system-ui" font-weight="700">2001</text>
            <line x1="410" y1="114" x2="658" y2="114" stroke="#f5ece8" stroke-width="1"/>
            <text x="426" y="138" fill="#1a0d0d" font-size="12" font-family="system-ui">P002</text>
            <text x="490" y="138" fill="#1a0d0d" font-size="12" font-family="system-ui">Caixa Som</text>
            <text x="582" y="138" fill="#b83030" font-size="13" font-family="system-ui" font-weight="700">2002</text>
            <line x1="410" y1="148" x2="658" y2="148" stroke="#f5ece8" stroke-width="1"/>
            <text x="426" y="172" fill="#1a0d0d" font-size="12" font-family="system-ui">P003</text>
            <text x="490" y="172" fill="#1a0d0d" font-size="12" font-family="system-ui">Fone BT</text>
            <text x="582" y="172" fill="#b83030" font-size="13" font-family="system-ui" font-weight="700">2001</text>
            <line x1="410" y1="182" x2="658" y2="182" stroke="#f5ece8" stroke-width="1"/>
            <!-- Violation row -->
            <rect x="398" y="190" width="272" height="44" rx="0" fill="#b83030" opacity=".05"/>
            <text x="426" y="215" fill="#8a6060" font-size="12" font-family="system-ui">P004</text>
            <text x="490" y="215" fill="#8a6060" font-size="12" font-family="system-ui">Amplif.</text>
            <text x="576" y="215" fill="#b83030" font-size="13" font-family="system-ui" font-weight="700">9999 ✗</text>
            <text x="534" y="232" text-anchor="middle" fill="#b83030" font-size="9.5" font-family="system-ui" font-weight="700">Violação referencial</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Regra</div>
            <div class="kp-text">O valor de uma FK deve existir como PK na tabela referenciada.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--danger)">Violação</div>
            <div class="kp-text">FK com valor sem PK correspondente — o registro fica "órfão" no banco.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Consequência</div>
            <div class="kp-text">O SGBD rejeita inserções, updates e exclusões que violem a integridade.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p5">← Tipos de Chaves</button>
          <button class="pn-btn pn-fwd" data-show="p7">Modelagem →</button>
        </div>
      </div>
    </div>

    <!-- ═══ P7 — MODELAGEM DE DADOS ═══ -->
    <div id="p7" class="page">
      <div class="t-body">
        <div class="t-title">Três camadas.<br><em>Uma só realidade.</em></div>
        <div class="diagram">
          <svg viewBox="0 0 700 390" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
            <!-- Layer 1: Conceitual — box x=40..480 -->
            <rect x="40" y="18" width="440" height="80" rx="13" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="40" y="18" width="440" height="48" rx="13" fill="#7a1a1a" opacity=".05"/>
            <rect x="40" y="50" width="440" height="16" fill="#7a1a1a" opacity=".05"/>
            <text x="150" y="50" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2" font-weight="700">CAMADA 1</text>
            <text x="150" y="76" fill="#1a0d0d" font-size="18" font-family="system-ui" font-weight="800">Modelo Conceitual</text>
            <!-- Labels outside box (right) -->
            <text x="498" y="46" fill="#7a1a1a" font-size="11" font-family="system-ui" font-weight="700">Entidades</text>
            <text x="498" y="64" fill="#7a1a1a" font-size="11" font-family="system-ui" font-weight="700">Relacionamentos</text>
            <text x="498" y="82" fill="#8a6060" font-size="10" font-family="system-ui">Regras de negócio</text>
            <!-- Arrow 1 -->
            <line x1="260" y1="100" x2="260" y2="132" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="253,132 260,145 267,132" fill="#c8aeaa"/>
            <text x="274" y="122" fill="#8a6060" font-size="10.5" font-family="system-ui" font-style="italic">refina</text>
            <!-- Layer 2: Lógico -->
            <rect x="40" y="148" width="440" height="80" rx="13" fill="#fff" stroke="#b83030" stroke-width="1.5"/>
            <rect x="40" y="148" width="440" height="48" rx="13" fill="#b83030" opacity=".05"/>
            <rect x="40" y="180" width="440" height="16" fill="#b83030" opacity=".05"/>
            <text x="150" y="180" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2" font-weight="700">CAMADA 2</text>
            <text x="150" y="206" fill="#1a0d0d" font-size="18" font-family="system-ui" font-weight="800">Modelo Lógico</text>
            <!-- Labels outside box (right) -->
            <text x="498" y="168" fill="#b83030" font-size="11" font-family="system-ui" font-weight="700">Tabelas · Colunas</text>
            <text x="498" y="186" fill="#b83030" font-size="11" font-family="system-ui" font-weight="700">PKs · FKs</text>
            <text x="498" y="204" fill="#8a6060" font-size="10" font-family="system-ui">Independente de BD</text>
            <!-- Arrow 2 -->
            <line x1="260" y1="230" x2="260" y2="262" stroke="#dfc9c0" stroke-width="1.5"/>
            <polygon points="253,262 260,275 267,262" fill="#c8aeaa"/>
            <text x="274" y="252" fill="#8a6060" font-size="10.5" font-family="system-ui" font-style="italic">implementa</text>
            <!-- Layer 3: Físico -->
            <rect x="40" y="278" width="440" height="80" rx="13" fill="#fff" stroke="#7a1a1a" stroke-width="1.5"/>
            <rect x="40" y="278" width="440" height="48" rx="13" fill="#7a1a1a" opacity=".05"/>
            <rect x="40" y="310" width="440" height="16" fill="#7a1a1a" opacity=".05"/>
            <text x="150" y="310" fill="#8a6060" font-size="9.5" font-family="system-ui" letter-spacing="2" font-weight="700">CAMADA 3</text>
            <text x="150" y="336" fill="#1a0d0d" font-size="18" font-family="system-ui" font-weight="800">Modelo Físico</text>
            <!-- Labels outside box (right) -->
            <text x="498" y="298" fill="#7a1a1a" font-size="11" font-family="system-ui" font-weight="700">SQL · Tipos de dados</text>
            <text x="498" y="316" fill="#7a1a1a" font-size="11" font-family="system-ui" font-weight="700">Índices · Partições</text>
            <text x="498" y="334" fill="#8a6060" font-size="10" font-family="system-ui">Específico para o BD</text>
          </svg>
        </div>
        <div class="kps">
          <div class="kp">
            <div class="kp-tag">Conceitual</div>
            <div class="kp-text">O quê e como os dados se relacionam. Sem detalhes técnicos.</div>
          </div>
          <div class="kp">
            <div class="kp-tag" style="color:var(--danger)">Lógico</div>
            <div class="kp-text">Tabelas, colunas, chaves e relacionamentos — independente do banco escolhido.</div>
          </div>
          <div class="kp">
            <div class="kp-tag">Físico</div>
            <div class="kp-text">SQL, tipos de dados (INT, VARCHAR…), índices e otimizações para o BD específico.</div>
          </div>
        </div>
        <div class="pg-nav">
          <button class="pn-btn" data-show="p6">← Integridade</button>
          <button class="pn-btn pn-fwd" data-show="menu">Início →</button>
        </div>
      </div>
    </div>`;
