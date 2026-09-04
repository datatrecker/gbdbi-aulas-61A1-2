GBDBI.content["atividade-07"] = `<section class="hero anim-fade-up">
      <div class="hero-eyebrow">AULA 7 · ATIVIDADE AVALIATIVA · 26.10.2026</div>
      <h1 class="hero-title">Governança<br><em>na SoundByte</em></h1>
      <p class="hero-subtitle">
        Dois grupos, dois pilares complementares da governança de dados.
        Segurança e auditoria para o Grupo 1. LGPD e qualidade de dados para o Grupo 2.
      </p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--space-4);">
        <span class="activity-badge disponivel">Disponível</span>
        <span class="tag tag-surface">Grupos 3-4 pessoas</span>
        <span class="tag tag-surface">10 pontos</span>
        <span class="tag tag-surface">Canvas + Apresentação · 09.11.2026</span>
      </div>
    </section>

    <!-- CONTEXTO -->
    <section class="section" id="contexto">
      <div class="section-eyebrow">00 · Cenário</div>
      <h2 class="section-title">Contexto da Atividade</h2>
      <p class="section-desc">A SoundByte está se preparando para uma rodada série B e os investidores exigiram um relatório de maturidade de dados antes de assinar. Sua turma está dividida em dois grupos, cada um responsável por um pilar da governança.</p>

      <div class="compare-grid">
        <div class="compare-card">
          <div class="compare-head good">Grupo 1</div>
          <div class="compare-body">
            <p><strong>Segurança e Controle de Acesso</strong></p>
            <p>Implementar RBAC (papéis e permissões), sistema de auditoria com log de operações e políticas de acesso para diferentes perfis de usuário.</p>
            <p><em>Foco: quem pode ver e modificar o quê</em></p>
          </div>
        </div>
        <div class="compare-card">
          <div class="compare-head b">Grupo 2</div>
          <div class="compare-body">
            <p><strong>LGPD + Qualidade de Dados</strong></p>
            <p>Mapear dados pessoais no schema SoundByte, identificar bases legais, propor política de retenção e criar queries de monitoramento das 6 dimensões de qualidade.</p>
            <p><em>Foco: dados corretos e uso responsável</em></p>
          </div>
        </div>
      </div>

      <div class="info-box">
        <strong>Base de dados:</strong> use o schema SoundByte das aulas anteriores (7 tabelas: clientes, artistas, gravadoras, albuns, faixas, pedidos, itens_pedido). Crie os dados que precisar para demonstrar os controles.
      </div>
    </section>

    <!-- GRUPO 1 -->
    <section class="section" id="grupo-1">
      <div class="section-eyebrow">01 · Grupo 1</div>
      <h2 class="section-title">Segurança e Controle de Acesso (RBAC)</h2>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">1a</div>
          <div class="step-content">
            <div class="step-title">Definir os Papéis (Roles)</div>
            <div class="step-desc">Crie pelo menos 3 papéis para a SoundByte com permissões distintas. Documente o que cada papel pode e não pode fazer.</div>
          </div>
        </div>
      </div>

      <div style="overflow-x:auto; margin-top:var(--space-4); margin-bottom:var(--space-5);">
        <table class="data-table">
          <thead>
            <tr><th>Papel</th><th>SELECT</th><th>INSERT</th><th>UPDATE</th><th>DELETE</th><th>Tabelas Permitidas</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>analista_bi</code></td>
              <td>✓</td><td>✗</td><td>✗</td><td>✗</td>
              <td>Todas (somente leitura)</td>
            </tr>
            <tr>
              <td><code>gestor_catalogo</code></td>
              <td>✓</td><td>✓</td><td>✓</td><td>✗</td>
              <td>artistas, albuns, faixas, gravadoras</td>
            </tr>
            <tr>
              <td><code>admin_dados</code></td>
              <td>✓</td><td>✓</td><td>✓</td><td>✓</td>
              <td>Todas as tabelas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">1b</div>
          <div class="step-content">
            <div class="step-title">Implementar com SQL — CREATE USER e GRANT</div>
            <div class="step-desc">Crie os usuários e atribua permissões usando a sintaxe do MySQL ou PostgreSQL.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre>-- MySQL: criar usuários com senhas seguras
CREATE USER 'ana_bi'@'%'      IDENTIFIED BY 'Senha@2026!';
CREATE USER 'pedro_cat'@'%'   IDENTIFIED BY 'Cat@2026!';
CREATE USER 'admin_dba'@'%'   IDENTIFIED BY 'Admin@2026!';

-- Analista BI: somente leitura em todas as tabelas
GRANT SELECT ON soundbyte.* TO 'ana_bi'@'%';

-- Gestor de catálogo: leitura e escrita nas tabelas de conteúdo
GRANT SELECT, INSERT, UPDATE ON soundbyte.artistas   TO 'pedro_cat'@'%';
GRANT SELECT, INSERT, UPDATE ON soundbyte.albuns      TO 'pedro_cat'@'%';
GRANT SELECT, INSERT, UPDATE ON soundbyte.faixas      TO 'pedro_cat'@'%';
GRANT SELECT, INSERT, UPDATE ON soundbyte.gravadoras  TO 'pedro_cat'@'%';

-- Admin: acesso total
GRANT ALL PRIVILEGES ON soundbyte.* TO 'admin_dba'@'%';

-- Aplicar as permissões
FLUSH PRIVILEGES;

-- Verificar permissões de um usuário
SHOW GRANTS FOR 'ana_bi'@'%';</pre>
      </div>

      <div class="step-indicator" style="margin-top:var(--space-5);">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">1c</div>
          <div class="step-content">
            <div class="step-title">Tabela de Auditoria com Trigger</div>
            <div class="step-desc">Crie uma tabela de log que registre automaticamente qualquer alteração nas tabelas sensíveis.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre>-- Tabela de auditoria
CREATE TABLE audit_log (
  log_id      INT         PRIMARY KEY AUTO_INCREMENT,
  tabela      VARCHAR(60) NOT NULL,
  operacao    ENUM('INSERT','UPDATE','DELETE') NOT NULL,
  usuario_db  VARCHAR(60) NOT NULL DEFAULT (CURRENT_USER()),
  timestamp   DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  dado_antes  JSON,
  dado_depois JSON
);

-- Trigger: registrar UPDATE em clientes
DELIMITER $$
CREATE TRIGGER trg_clientes_update
AFTER UPDATE ON clientes
FOR EACH ROW
BEGIN
  INSERT INTO audit_log (tabela, operacao, dado_antes, dado_depois)
  VALUES (
    'clientes', 'UPDATE',
    JSON_OBJECT('cliente_id', OLD.cliente_id, 'email', OLD.email, 'plano', OLD.plano),
    JSON_OBJECT('cliente_id', NEW.cliente_id, 'email', NEW.email, 'plano', NEW.plano)
  );
END$$
DELIMITER ;

-- Testar: alterar um cliente e verificar o log
UPDATE clientes SET plano = 'premium' WHERE cliente_id = 1;
SELECT * FROM audit_log ORDER BY timestamp DESC LIMIT 5;</pre>
      </div>

      <div class="info-box" style="margin-top:var(--space-5);">
        <strong>Entrega Grupo 1:</strong> Script SQL completo (CREATE USER + GRANT + tabela de auditoria + 3 triggers) + relatório de 1 página explicando as decisões de design dos papéis e por que cada permissão foi concedida ou negada.
      </div>
    </section>

    <!-- GRUPO 2 -->
    <section class="section" id="grupo-2">
      <div class="section-eyebrow">02 · Grupo 2</div>
      <h2 class="section-title">LGPD + Qualidade de Dados</h2>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">2a</div>
          <div class="step-content">
            <div class="step-title">Mapeamento de Dados Pessoais</div>
            <div class="step-desc">Percorra o schema SoundByte e identifique cada campo que constitui dado pessoal segundo a LGPD. Documente em uma tabela.</div>
          </div>
        </div>
      </div>

      <div style="overflow-x:auto; margin-top:var(--space-4); margin-bottom:var(--space-5);">
        <table class="data-table">
          <thead>
            <tr><th>Tabela</th><th>Campo</th><th>Classificação</th><th>Base Legal</th><th>Retenção</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>clientes</td><td><code>nome</code></td>
              <td>Dado pessoal</td><td>Contrato</td><td>Vigência + 5 anos</td>
            </tr>
            <tr>
              <td>clientes</td><td><code>email</code></td>
              <td>Dado pessoal</td><td>Contrato / Consentimento</td><td>Vigência + 5 anos</td>
            </tr>
            <tr>
              <td>clientes</td><td><code>data_nascimento</code></td>
              <td>Dado pessoal</td><td>Contrato</td><td>Vigência + 5 anos</td>
            </tr>
            <tr>
              <td>clientes</td><td><code>pais</code></td>
              <td>Dado pessoal (localização)</td><td>Interesse legítimo</td><td>Vigência + 2 anos</td>
            </tr>
            <tr>
              <td>pedidos</td><td><code>data_pedido</code></td>
              <td>Dado de comportamento</td><td>Obrigação legal fiscal</td><td>5 anos (NFe)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">2b</div>
          <div class="step-content">
            <div class="step-title">Queries de Qualidade — 6 Dimensões</div>
            <div class="step-desc">Crie uma query SQL para medir cada dimensão de qualidade de dados no schema SoundByte.</div>
          </div>
        </div>
      </div>

      <div class="sql-block">
<pre>-- 1. COMPLETUDE: % de clientes com todos os campos obrigatórios
SELECT
  COUNT(*)                                                          AS total,
  SUM(CASE WHEN nome IS NOT NULL AND email IS NOT NULL
           AND data_cadastro IS NOT NULL THEN 1 ELSE 0 END)       AS completos,
  ROUND(100.0 * SUM(CASE WHEN nome IS NOT NULL AND email IS NOT NULL
       AND data_cadastro IS NOT NULL THEN 1 ELSE 0 END) / COUNT(*), 2) AS pct_completude
FROM clientes;

-- 2. UNICIDADE: e-mails duplicados
SELECT email, COUNT(*) AS ocorrencias
FROM   clientes
GROUP  BY email HAVING COUNT(*) > 1;

-- 3. VALIDADE: pedidos com total negativo ou zero
SELECT pedido_id, total, status
FROM   pedidos
WHERE  total <= 0;

-- 4. CONSISTÊNCIA: pedidos cujo total não bate com a soma dos itens
SELECT p.pedido_id,
       p.total                  AS total_cabecalho,
       SUM(ip.preco_unitario * ip.quantidade) AS total_calculado,
       ABS(p.total - SUM(ip.preco_unitario * ip.quantidade)) AS divergencia
FROM   pedidos p
  JOIN itens_pedido ip ON ip.pedido_id = p.pedido_id
GROUP  BY p.pedido_id, p.total
HAVING divergencia > 0.01;

-- 5. PRECISÃO: artistas sem gravadora associada (orfãos)
SELECT a.artista_id, a.nome
FROM   artistas a
  LEFT JOIN gravadoras g ON g.gravadora_id = a.gravadora_id
WHERE  g.gravadora_id IS NULL;

-- 6. ATUALIDADE: pedidos com data de mais de 5 anos atrás ainda como 'pendente'
SELECT pedido_id, data_pedido, status
FROM   pedidos
WHERE  status = 'pendente'
  AND  data_pedido < DATE_SUB(CURDATE(), INTERVAL 5 YEAR);</pre>
      </div>

      <div class="info-box" style="margin-top:var(--space-5);">
        <strong>Entrega Grupo 2:</strong> planilha de mapeamento de dados pessoais (pode ser Google Sheets exportada como PDF) + script SQL com as 6 queries de qualidade + relatório de 1 página com os resultados encontrados e recomendações de melhoria.
      </div>
    </section>

    <!-- ENTREGA -->
    <section class="section" id="entrega">
      <div class="section-eyebrow">03 · Entrega</div>
      <h2 class="section-title">Entrega e Apresentação</h2>

      <div class="step-indicator">
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--surface-2);">1</div>
          <div class="step-content">
            <div class="step-title">Entrega no Canvas — 08.11.2026 às 23h59</div>
            <div class="step-desc">G1: <code>AT7_G1_Seguranca_Nomes.pdf</code> + script SQL. G2: <code>AT7_G2_LGPD_Qualidade_Nomes.pdf</code> + script SQL + planilha de mapeamento.</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num-circle" style="background:var(--accent);color:#fff;">2</div>
          <div class="step-content">
            <div class="step-title">Apresentação — 09.11.2026 (última aula)</div>
            <div class="step-desc">Cada grupo tem 8 minutos para apresentar + 2 minutos de perguntas. G1 apresenta os controles de acesso e demonstra o log de auditoria. G2 apresenta o mapa de dados pessoais e as métricas de qualidade encontradas.</div>
          </div>
        </div>
      </div>

      <div class="avaliacao-grid" style="margin-top:var(--space-5);">
        <div class="peso-card">
          <div class="peso-value">40%</div>
          <div class="peso-label">Implementação SQL</div>
          <div class="peso-desc">Scripts funcionam corretamente e cobrem todos os requisitos da tarefa</div>
        </div>
        <div class="peso-card">
          <div class="peso-value">30%</div>
          <div class="peso-label">Análise e Justificativa</div>
          <div class="peso-desc">Decisões documentadas com raciocínio claro de negócio e compliance</div>
        </div>
        <div class="peso-card">
          <div class="peso-value">30%</div>
          <div class="peso-label">Apresentação</div>
          <div class="peso-desc">Clareza, domínio do conteúdo e capacidade de responder perguntas</div>
        </div>
      </div>
    </section>

    <nav class="lesson-nav">
      <a class="lesson-nav-btn" href="#/aula-07">
        <span>←</span>
        <div>
          <div class="lesson-nav-label">Voltar à</div>
          <div class="lesson-nav-title">Aula 7 — O Guardião dos Ativos</div>
        </div>
      </a>
      <a class="lesson-nav-btn" href="#/atividade-08">
        <div style="text-align:right;">
          <div class="lesson-nav-label">Próxima Atividade</div>
          <div class="lesson-nav-title">Atividade 8 — Projeto Final</div>
        </div>
        <span>→</span>
      </a>
    </nav>`;
