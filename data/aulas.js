/* ============================================================
   GBDBI — Plano de Aulas
   Campos `pea` transcritos do PEA-Gestao-BD-BI-61A1-2.pdf (§6 Plano de Aulas).
   Campos `subnav` mapeiam as telas do material de cada aula.
   ============================================================ */

GBDBI.data.aulas = [

  {
    id: 'aula-01', num: '01', data: '21/09/2026',
    titulo: 'O Dado que Você Não Enxerga',
    resumo: 'Hierarquia dado–informação–conhecimento–decisão, dado operacional vs. analítico e como a arquitetura do banco delimita as perguntas possíveis.',
    tags: ['Fundamentos', 'OLTP · OLAP', 'Dado como ativo'],
    atividade: 'atividade-01',
    pea: {
      objetivos: 'Distinguir dado, informação e decisão; compreender a diferença entre dados operacionais e analíticos; e reconhecer como a arquitetura de um banco de dados delimita as perguntas que podem — ou não — ser respondidas.',
      conteudo: [
        'Hierarquia dado–informação–conhecimento–decisão',
        'Dado operacional vs. dado analítico: estrutura, granularidade e finalidade',
        'Como a arquitetura do banco de dados determina a visibilidade das métricas',
        'Métricas de vaidade vs. métricas acionáveis para decisão estratégica'
      ],
      pratica: 'Análise em grupos de uma planilha de vendas: os alunos identificam quais métricas visíveis são insuficientes para decisão e mapeiam os dados adicionais necessários para transformá-las em informação acionável.',
      ia: 'Cada aluno descreve um problema de negócio real e utiliza a IA como entrevistadora — ela faz perguntas para mapear quais dados precisariam ser coletados antes de qualquer análise. A turma compara as perguntas geradas e discute lacunas.',
      bibliografia: ['[1]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Fontes de Dados' },
      { id: 'p2', num: '02', text: 'Dado × Info × Decisão' },
      { id: 'p3', num: '03', text: 'Operacional vs Analítico' },
      { id: 'p3b', num: '03b', text: 'OLAP vs OLTP' },
      { id: 'p4', num: '04', text: 'Jornada dos Dados' },
      { id: 'p5', num: '05', text: 'Banco de Dados' },
      { id: 'p6', num: '06', text: 'Tipos de BD' },
      { id: 'p7', num: '07', text: 'Estrutura e Perguntas' },
      { id: 'p8', num: '08', text: 'Vaidade vs Acionável' }
    ]
  },

  {
    id: 'aula-02', num: '02', data: '26/09/2026',
    titulo: 'A Arquitetura do Caos',
    resumo: 'Diagramas entidade-relacionamento, cardinalidades, chaves, integridade referencial e as três primeiras formas normais.',
    tags: ['Modelagem ER', 'Normalização', 'Chaves'],
    atividade: 'atividade-02',
    pea: {
      objetivos: 'Elaborar e interpretar diagramas entidade-relacionamento (ER); aplicar as três primeiras formas normais para eliminar anomalias de dados; e usar chaves primárias e estrangeiras para garantir integridade referencial.',
      conteudo: [
        'Entidades, atributos e relacionamentos; cardinalidade (1:1, 1:N, N:M)',
        'Chaves primárias, estrangeiras e integridade referencial',
        'Diagrama ER: modelo conceitual, lógico e físico',
        'Formas normais 1FN, 2FN e 3FN — problemas que cada uma resolve'
      ],
      pratica: 'No Lucidchart, os alunos convertem a descrição textual de um processo de negócio em diagrama ER, estabelecem cardinalidade e aplicam chaves estrangeiras — por exemplo, garantindo que um pedido não exista sem cliente válido.',
      ia: 'A IA atua como analista de requisitos invertido: o aluno descreve o modelo e a IA faz perguntas críticas sobre entidades esquecidas. Em seguida, o aluno submete o esquema e pergunta se está na 3ª Forma Normal.',
      bibliografia: ['[1]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Visão Geral' },
      { id: 'p2', num: '02', text: 'Modelo ER' },
      { id: 'p3', num: '03', text: 'Cardinalidades' },
      { id: 'p4', num: '04', text: 'Normalização' },
      { id: 'p4b', num: '04b', text: 'Anomalias' },
      { id: 'p4c', num: '04c', text: 'Formas Normais' },
      { id: 'p5', num: '05', text: 'Tipos de Chaves' },
      { id: 'p6', num: '06', text: 'Integridade Referencial' },
      { id: 'p7', num: '07', text: 'Modelagem de Dados' }
    ]
  },

  {
    id: 'aula-03', num: '03', data: '26/09/2026',
    titulo: 'A Linguagem das Respostas',
    resumo: 'SQL de ponta a ponta — DDL, DML, consultas, junções e agregações que respondem a perguntas de negócio.',
    tags: ['SQL', 'JOIN', 'GROUP BY'],
    atividade: 'atividade-03',
    pea: {
      objetivos: 'Utilizar a linguagem SQL (DDL e DML) para criar estruturas de dados e escrever consultas que respondam a perguntas de negócio, incluindo junções entre tabelas e agrupamentos com funções de agregação.',
      conteudo: [
        'DDL: CREATE, ALTER, DROP — criação e manutenção de estruturas',
        'DML: INSERT, UPDATE, DELETE — manipulação de dados',
        'Consultas: SELECT, FROM, WHERE, ORDER BY',
        'Junções: INNER JOIN, LEFT JOIN',
        'Agregações: GROUP BY, HAVING, COUNT, SUM, AVG'
      ],
      pratica: 'No SQLite Online com o dataset público Chinook (loja de música fictícia), os alunos escrevem consultas para responder perguntas de negócio: artistas mais vendidos por país, clientes com maior ticket médio.',
      ia: 'Introdução ao uso de IA para gerar e depurar SQL. O aluno pede ao ChatGPT uma consulta complexa e, em seguida, usa a ferramenta para explicar o erro em uma consulta propositalmente quebrada fornecida pelo professor.',
      bibliografia: ['[2]', '[6]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Visão Geral' },
      { id: 'p2', num: '02', text: 'Modelo SoundByte' },
      { id: 'p3', num: '03', text: 'SELECT e FROM' },
      { id: 'p_where', num: '04', text: 'WHERE' },
      { id: 'p4', num: '05', text: 'JOIN' },
      { id: 'p5', num: '06', text: 'GROUP BY' },
      { id: 'p6', num: '07', text: 'IA e SQL' },
      { id: 'p7', num: '08', text: 'Links e Ferramentas' },
      { id: 'p8', num: '09', text: 'Exercício: Netflix' }
    ]
  },

  {
    id: 'aula-04', num: '04', data: '28/09/2026',
    titulo: 'O Refino Analítico',
    resumo: 'Data Warehouse, modelagem dimensional, tabela fato, dimensões e Slowly Changing Dimensions.',
    tags: ['Data Warehouse', 'Star Schema', 'SCD'],
    atividade: 'atividade-04',
    pea: {
      objetivos: 'Diferenciar modelagem relacional de modelagem dimensional; construir um modelo Star Schema completo com tabela fato e dimensões; e compreender como a desnormalização facilita análises de Business Intelligence.',
      conteudo: [
        'Princípios do Data Warehouse e sua diferença em relação ao banco transacional',
        'Modelagem dimensional: Star Schema vs. Snowflake Schema',
        'Tabela Fato: granularidade, métricas aditivas, semi-aditivas e não-aditivas',
        'Dimensões: Tempo, Produto, Loja, Cliente',
        'Slowly Changing Dimensions (SCD) — tipos e impacto nos relatórios'
      ],
      pratica: 'Os alunos reestruturam o banco de dados relacional da Aula 2 em um modelo dimensional, identificando a Fato Vendas e as Dimensões Tempo, Produto, Loja e Cliente. Usam planilhas online para simular a desnormalização.',
      ia: 'Uso de prompts para modelar Slowly Changing Dimensions. Prompt exemplo: como modelar a Dimensão Cliente para manter o histórico de mudanças de endereço sem perder a precisão de relatórios de vendas passadas.',
      bibliografia: ['[1]', '[7]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Visão Geral' },
      { id: 'p2', num: '02', text: 'OLTP vs OLAP' },
      { id: 'p3', num: '03', text: 'Arquitetura Analítica' },
      { id: 'p4', num: '04', text: 'Data Warehouse' },
      { id: 'p5', num: '05', text: 'Star Schema' },
      { id: 'p6', num: '06', text: 'Modelagem Dimensional' },
      { id: 'p7', num: '07', text: 'IA e Analytics' }
    ]
  },

  {
    id: 'aula-05', num: '05', data: '05/10/2026',
    titulo: 'A Visualização do Sucesso',
    resumo: 'Ciclo de BI, KPIs vs. métricas de vaidade, escolha de visualizações e storytelling com dados no Tableau.',
    tags: ['Business Intelligence', 'Dashboard', 'KPIs'],
    atividade: 'atividade-05',
    pea: {
      objetivos: 'Construir dashboards interativos no Tableau conectados a datasets reais; selecionar visualizações adequadas ao tipo de dado e ao público-alvo; e distinguir métricas de vaidade de métricas acionáveis no contexto de BI.',
      conteudo: [
        'Conceitos de Business Intelligence e seu ciclo: coletar, integrar, analisar, comunicar',
        'KPIs vs. métricas de vaidade — critérios para escolha',
        'Tipos de visualização e adequação ao dado e à audiência',
        'Storytelling com dados: estrutura narrativa de um dashboard executivo',
        'Boas práticas no Tableau: filtros, hierarquias e drill-down'
      ],
      pratica: 'No Tableau, os alunos conectam um dataset de marketing e criam um dashboard interativo com filtros de data, geolocalização e KPIs de conversão.',
      ia: 'A IA sugere o melhor gráfico para o dado. Prompt exemplo: para mostrar a evolução da taxa de conversão mensal comparada com a meta trimestral, qual visualização é mais eficaz para um público executivo e por quê?',
      bibliografia: ['[3]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Visão Geral' },
      { id: 'p2', num: '02', text: 'Dashboard Eficaz' },
      { id: 'p3', num: '03', text: 'Métricas' },
      { id: 'p4', num: '04', text: 'Categorias de Análise' },
      { id: 'p5', num: '05', text: 'Ecossistema de Dados' },
      { id: 'p6', num: '06', text: 'Tableau e Ferramentas' },
      { id: 'p7', num: '07', text: 'IA e Visualização' }
    ]
  },

  {
    id: 'aula-06', num: '06', data: '19/10/2026',
    titulo: 'A Escala do Big Data',
    resumo: 'Os Vs do Big Data, limites do relacional em alta escala, tipos de NoSQL e prática com MongoDB.',
    tags: ['Big Data', 'NoSQL', 'MongoDB'],
    atividade: 'atividade-06',
    pea: {
      objetivos: 'Descrever os princípios do Big Data (os Vs) e os principais tipos de bancos NoSQL; realizar operações básicas em um banco de documentos (MongoDB); e comparar o modelo relacional com o modelo de documentos JSON.',
      conteudo: [
        'Big Data: Volume, Velocidade, Variedade, Veracidade e Valor',
        'Limitações do modelo relacional em cenários de alta escala',
        'Tipos de NoSQL: Documento, Chave-Valor, Coluna Larga, Grafos',
        'MongoDB: coleções, documentos JSON e esquema flexível',
        'Quando usar SQL vs. NoSQL — critérios de decisão'
      ],
      pratica: 'No MongoDB Atlas (plano gratuito), os alunos criam uma coleção de documentos JSON simulando perfis de usuários com campos variáveis. Praticam inserção e busca, percebendo a flexibilidade de esquema.',
      ia: 'Uso de IA para converter esquemas relacionais em documentos JSON. Prompt: converta esta estrutura de tabelas Clientes e Endereços SQL em um único documento JSON otimizado para leituras frequentes no MongoDB.',
      bibliografia: ['[4]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Visão Geral' },
      { id: 'p2', num: '02', text: 'Big Data' },
      { id: 'p3', num: '03', text: 'Estruturado vs Não Estruturado' },
      { id: 'p4', num: '04', text: 'NoSQL: Além das Tabelas' },
      { id: 'p5', num: '05', text: 'Tipos de BD NoSQL' },
      { id: 'p6', num: '06', text: 'SQL vs NoSQL' },
      { id: 'p7', num: '07', text: 'Vantagens e Desafios' },
      { id: 'p8', num: '08', text: 'Atividade MongoDB' },
      { id: 'p9', num: '09', text: 'Pergunta Estratégica' }
    ]
  },

  {
    id: 'aula-07', num: '07', data: '26/10/2026',
    titulo: 'O Guardião dos Ativos',
    resumo: 'DAMA-DMBOK, qualidade de dados, segurança e privacidade, LGPD e os papéis de Data Owner, Data Steward e DPO.',
    tags: ['Governança', 'LGPD', 'Qualidade de dados'],
    atividade: 'atividade-07',
    pea: {
      objetivos: 'Aplicar os princípios de governança de dados (DAMA-DMBOK) para definir políticas de acesso; avaliar riscos de conformidade com a LGPD; e defender a necessidade da governança como pilar estratégico da gestão de dados.',
      conteudo: [
        'Framework DAMA-DMBOK: domínios de governança de dados',
        'Qualidade de dados: dimensões e impacto nas decisões',
        'Segurança e privacidade de dados: controle de acesso e criptografia',
        'LGPD: princípios, bases legais e obrigações organizacionais',
        'Papéis e responsabilidades: Data Owner, Data Steward, DPO'
      ],
      pratica: 'Em grupos, os alunos redigem uma política simplificada de acesso a dados para uma agência de marketing, definindo quem pode ler, editar ou excluir informações em cada nível hierárquico, com base no guia rápido de governança do governo brasileiro.',
      ia: 'A IA atua como Auditora de Riscos: o aluno submete sua política proposta e pergunta quais são as principais falhas de segurança ou lacunas de conformidade com a LGPD para o cenário de uma empresa de marketing.',
      bibliografia: ['[5]']
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Visão Geral' },
      { id: 'p2', num: '02', text: 'O que é Governança' },
      { id: 'p3', num: '03', text: 'Dispersos a Estratégicos' },
      { id: 'p4', num: '04', text: '4 Componentes' },
      { id: 'p5', num: '05', text: 'Qual. Seg. Privacidade' },
      { id: 'p6', num: '06', text: '6 Dimensões Qualidade' },
      { id: 'p7', num: '07', text: 'Métricas e Impacto' },
      { id: 'p8', num: '08', text: 'Boas Práticas' },
      { id: 'p9', num: '09', text: 'Atividade' }
    ]
  },

  {
    id: 'aula-08', num: '08', data: '09/11/2026',
    titulo: 'O Projeto Final Integrador',
    resumo: 'Revisão integradora e apresentação em grupo conectando modelagem, SQL, BI e governança em um único projeto.',
    tags: ['Projeto Integrador', 'Apresentação', 'Avaliação'],
    atividade: 'atividade-08',
    pea: {
      objetivos: 'Integrar e demonstrar, por meio de um projeto prático, as competências desenvolvidas ao longo da disciplina: modelagem relacional e dimensional, SQL aplicado a questões de negócio, visualização em BI e governança de dados.',
      conteudo: [
        'Revisão integradora: conexões entre modelagem, SQL, BI e governança',
        'Apresentação e defesa de decisões de modelagem com justificativa técnica',
        'Interpretação de resultados de consultas SQL no contexto de negócio',
        'Comunicação de insights via dashboard no Tableau',
        'Avaliação crítica de escolhas tecnológicas: SQL vs. NoSQL; conformidade LGPD'
      ],
      pratica: 'Projeto final integrado — apresentação em grupo contendo: (1) Modelo ER e Lógico com justificativa das decisões de modelagem; (2) Script SQL com as principais perguntas de negócio respondidas e interpretação dos resultados; (3) Dashboard no Tableau com insights acionáveis e pelo menos um KPI central; (4) Justificativa do uso de NoSQL ou SQL para diferentes partes do projeto; e (5) Política de acesso e mapa de riscos LGPD para o cenário apresentado.',
      ia: null,
      bibliografia: []
    },
    subnav: [
      { id: 'menu', num: '⌂', text: 'Menu' },
      { id: 'p0', num: '00', text: 'Objetivos' },
      { id: 'p1', num: '01', text: 'Due Diligence' },
      { id: 'p2', num: '02', text: '4 Componentes' },
      { id: 'p3', num: '03', text: 'Dados Fornecidos' },
      { id: 'p4', num: '04', text: 'Dicas Práticas' },
      { id: 'p5', num: '05', text: 'Atividade' }
    ]
  }

];
