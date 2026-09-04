/* ============================================================
   GBDBI — Atividades avaliativas com material próprio.
   As demais entregas semanais estão descritas na aba
   "Plano de ensino" de cada aula (campo Atividade prática do PEA).
   ============================================================ */

GBDBI.data.atividades = [

  {
    id: 'atividade-01', num: '01', aula: 'aula-01',
    titulo: 'Os Números que Mentem sem Mentir',
    resumo: 'Decidir com a visão operacional, listar as perguntas que ela não responde e revisar a decisão com os dados analíticos completos.',
    entrega: 'Artefato semanal · em grupo',
    subnav: [
      { id: 'contexto', num: '00', text: 'Contexto' },
      { id: 'tarefa', num: '01', text: 'Tarefa' },
      { id: 'roteiro', num: '02', text: 'Roteiro' }
    ]
  },

  {
    id: 'atividade-02', num: '02', aula: 'aula-02',
    titulo: 'Sistema de Controle de Voos',
    resumo: 'Modelar voos, aeronaves e tripulação em diagramas ER conceitual, lógico e físico, em notação Crow’s Foot.',
    entrega: 'Artefato semanal · em equipe',
    subnav: [
      { id: 'problema', num: '00', text: 'Problema' },
      { id: 'tarefa', num: '01', text: 'Tarefa' },
      { id: 'conexao', num: '02', text: 'Atenção' }
    ]
  },

  {
    id: 'atividade-03', num: '03', aula: 'aula-03',
    titulo: 'Chinook — SQL que Responde ao Negócio',
    resumo: 'Carregar o banco Chinook e responder quatro perguntas de negócio em SQL, mais três formuladas com auxílio da IA.',
    entrega: 'Artefato semanal · SQL + XLSX',
    subnav: [
      { id: 'contexto', num: '00', text: 'A base' },
      { id: 'ambiente', num: '01', text: 'Ambiente' },
      { id: 'perguntas', num: '02', text: 'Perguntas' },
      { id: 'ia', num: '03', text: 'Com a IA' },
      { id: 'entrega', num: '04', text: 'Entrega' }
    ]
  },

  {
    id: 'atividade-04', num: '04', aula: 'aula-04',
    titulo: 'Do Operacional ao Star Schema',
    resumo: 'Transformar o modelo de voos da Atividade 2 em um Data Warehouse dimensional, com granularidade declarada e SCD tipo 2.',
    entrega: 'Artefato semanal · PDF',
    subnav: [
      { id: 'contexto', num: '00', text: 'Ponto de partida' },
      { id: 'tarefa', num: '01', text: 'Tarefa' },
      { id: 'justificativa', num: '02', text: 'Justificativa' }
    ]
  },

  {
    id: 'atividade-05', num: '05', aula: 'aula-05',
    titulo: 'Dashboard Analítico no Tableau',
    resumo: 'Construir um dashboard executivo interativo sobre o Data Warehouse da SoundByte: seis visualizações, dois KPIs e filtros em uma única tela.',
    entrega: 'Artefato semanal · individual',
    subnav: [
      { id: 'contexto', num: '00', text: 'Contexto' },
      { id: 'materiais', num: '01', text: 'Materiais' },
      { id: 'perguntas', num: '02', text: 'Perguntas' },
      { id: 'visualizacoes', num: '03', text: 'Visualizações' },
      { id: 'passo-a-passo', num: '04', text: 'Passo a passo' },
      { id: 'entrega', num: '05', text: 'Entrega' },
      { id: 'duvidas', num: '06', text: 'Dúvidas' }
    ]
  },

  {
    id: 'atividade-06', num: '06', aula: 'aula-06',
    titulo: 'Conversão SQL → MongoDB',
    resumo: 'Converter um schema relacional em documentos JSON, inserir a coleção no MongoDB Atlas e escrever consultas e agregações.',
    entrega: 'Artefato semanal · em grupo',
    subnav: [
      { id: 'contexto', num: '00', text: 'Contexto' },
      { id: 'schema-sql', num: '01', text: 'Schema SQL' },
      { id: 'tarefa-1', num: '02', text: 'Tarefa 1 — Modelagem' },
      { id: 'tarefa-2', num: '03', text: 'Tarefa 2 — Inserção' },
      { id: 'tarefa-3', num: '04', text: 'Tarefa 3 — Queries' },
      { id: 'entrega', num: '05', text: 'Entrega' }
    ]
  },

  {
    id: 'atividade-07', num: '07', aula: 'aula-07',
    titulo: 'Política de Governança de Dados',
    resumo: 'Redigir uma política simplificada de acesso (RBAC), avaliar riscos de conformidade com a LGPD e propor métricas de qualidade.',
    entrega: 'Artefato semanal · em grupo',
    subnav: [
      { id: 'contexto', num: '00', text: 'Contexto' },
      { id: 'grupo-1', num: '01', text: 'Segurança e Auditoria' },
      { id: 'grupo-2', num: '02', text: 'LGPD e Qualidade' },
      { id: 'entrega', num: '03', text: 'Entrega' }
    ]
  },

  {
    id: 'atividade-08', num: '08', aula: 'aula-08',
    titulo: 'Projeto Integrador',
    resumo: 'Entrega final em grupo: modelagem, script SQL comentado, dashboard de BI, justificativa SQL/NoSQL e política de acesso com mapa de riscos LGPD.',
    entrega: 'Projeto Integrador · 40% da nota',
    subnav: [
      { id: 'briefing', num: '00', text: 'Briefing' },
      { id: 'componente-a', num: 'A', text: 'Modelagem de Dados' },
      { id: 'componente-b', num: 'B', text: 'Arquitetura Analítica' },
      { id: 'componente-c', num: 'C', text: 'Governança e Qualidade' },
      { id: 'componente-d', num: 'D', text: 'Narrativa Executiva' },
      { id: 'entrega', num: '05', text: 'Entrega e Avaliação' }
    ]
  }

];
