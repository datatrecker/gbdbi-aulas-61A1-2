/* ============================================================
   GBDBI — Dados do curso
   Fonte única: PEA-Gestao-BD-BI-61A1-2.pdf (atualizado em 30/03/2026)
   Editar este arquivo é suficiente para atualizar o site.
   ============================================================ */

GBDBI.data.curso = {

  identificacao: {
    curso: 'Pós-Graduação em Data Analytics e Marketing',
    coordenador: 'José Anibal Ferreira',
    professor: 'Deoclides Francisco de Souza Filho',
    disciplina: 'Gestão de Banco de Dados e BI',
    turma: '61A1-2',
    periodo: 'Noturno',
    cargaHoraria: '24 h',
    atualizadoEm: '30/03/2026'
  },

  /* PEA · 1. Competências */
  competencias: [
    {
      titulo: 'Fundamentos de bancos de dados',
      texto: 'Domínio dos princípios dos bancos de dados relacionais, incluindo estruturas, chaves, relacionamentos, integridade referencial e linguagem SQL.'
    },
    {
      titulo: 'Modelagem de dados',
      texto: 'Capacidade de projetar e interpretar modelos relacionais e dimensionais (ER e Star Schema), identificando entidades, atributos, dimensões, fatos e granularidade.'
    },
    {
      titulo: 'Inteligência de negócios (BI)',
      texto: 'Competência para aplicar conceitos e ferramentas de Business Intelligence na geração de insights e na resposta a questões de negócio.'
    },
    {
      titulo: 'Arquiteturas e tecnologias de dados',
      texto: 'Visão crítica sobre arquiteturas de Data Warehouse, Big Data e bancos NoSQL, compreendendo suas aplicações e limitações no contexto organizacional.'
    },
    {
      titulo: 'Governança e gestão de dados',
      texto: 'Consciência sobre a necessidade e os princípios da governança de dados na gestão de negócios contemporânea.'
    },
    {
      titulo: 'Postura crítica e realista',
      texto: 'Avaliação equilibrada dos benefícios, limitações e adequações das tecnologias de dados para a tomada de decisão orientada por evidências.'
    }
  ],

  /* PEA · 2. Objetivos de aprendizagem */
  objetivos: [
    { verbo: 'Reconhecer e descrever', texto: 'os princípios dos bancos de dados relacionais, os tipos de SGBDs, os conceitos de chaves primárias e estrangeiras, e os fundamentos da integridade referencial.' },
    { verbo: 'Identificar e nomear', texto: 'os conceitos centrais do Data Warehouse, da modelagem dimensional (Star Schema) e do Business Intelligence, incluindo granularidade, dimensões, fatos e métricas de negócio.' },
    { verbo: 'Explicar', texto: 'os fundamentos da modelagem de dados por meio do modelo entidade-relacionamento (ER), descrevendo entidades, atributos, relacionamentos e as principais arquiteturas de bancos de dados.' },
    { verbo: 'Interpretar', texto: 'modelos de dados elaborados segundo as modelagens relacional e dimensional, compreendendo a lógica de estruturação dos dados e sua relação com os objetivos de negócio.' },
    { verbo: 'Descrever', texto: 'os princípios de Big Data e bancos de dados não relacionais (NoSQL), explicando seus casos de uso e diferenças em relação ao modelo relacional.' },
    { verbo: 'Utilizar', texto: 'a linguagem SQL para implementar modelos de dados relacionais, executando operações de criação, inserção, consulta e manipulação de dados em um banco de dados.' },
    { verbo: 'Aplicar', texto: 'a sequência metodológica da modelagem dimensional para construir um modelo Star Schema completo, gerando datasets estruturados adequados para análises estatísticas e de BI.' },
    { verbo: 'Comparar', texto: 'as características, objetivos, restrições e pré-requisitos das modelagens relacional e dimensional, identificando a adequação de cada abordagem a diferentes contextos e demandas de negócio.' },
    { verbo: 'Examinar', texto: 'questões de negócio e determinar quais estruturas de dados, arquiteturas e ferramentas de BI são mais adequadas para respondê-las, justificando as escolhas com base em critérios técnicos e organizacionais.' },
    { verbo: 'Formular', texto: 'um julgamento crítico sobre os potenciais benefícios e as limitações dos bancos de dados relacionais, do Data Warehouse e das soluções de modelagem dimensional, adotando uma postura realista.' },
    { verbo: 'Defender', texto: 'a necessidade da governança de dados no contexto da gestão organizacional, avaliando seus impactos sobre a qualidade, a segurança e o uso estratégico das informações.' }
  ],

  /* PEA · 3. Recursos Pedagógicos */
  recursosPedagogicos: 'A metodologia adotada é PBL – Problem-Based Learning, na qual os alunos aprendem a partir de problemas reais ou realistas do contexto organizacional. Cada aula é estruturada em torno de um desafio prático, promovendo aprendizagem ativa, colaborativa, investigativa e contextualizada.',

  /* PEA · 4. Processo de Avaliação */
  avaliacao: [
    {
      grupo: 'Avaliação Individual',
      itens: [
        { n: '1', descricao: 'Participação/Colaboração em aula (Aulas 1 – 8)', peso: '20%' }
      ]
    },
    {
      grupo: 'Avaliação em Grupo',
      itens: [
        { n: '2', descricao: 'Artefatos semanais (Aulas 1 – 7)', peso: '40%' },
        { n: '3', descricao: 'Projeto Integrador (Aula 8)', peso: '40%' }
      ]
    }
  ],

  /* Regras dos grupos das atividades avaliativas (Aulas 1 – 8) */
  regrasGrupo: [
    'Os grupos podem ser os mesmos das outras disciplinas.',
    'Não haverá sorteio de participantes.',
    'Pode haver grupo de 1 aluno.',
    'Os grupos serão preenchidos no Canvas para cada atividade.',
    'Os alunos que faltarem na aula não poderão fazer parte do grupo.',
    'Os alunos que faltaram poderão fazer as atividades posteriormente, com dedução de 20% na nota.',
    'Os grupos para a atividade de Projeto Final (Aula 8) não estão sujeitos à regra de falta de aluno.',
    'A entrega com atraso de qualquer uma das atividades terá a nota deduzida em 20%.'
  ],

  /* PEA · 5. Bibliografia */
  bibliografia: {
    basica: [
      { ref: '[1]', texto: 'PICHETTI, R.; CORTES, E.; PAIXÃO, V. <em>Banco de dados</em>. 1ª ed. Porto Alegre: SAGAH, 2020.', link: 'http://portal.espm.br/paginas/redirect?aluno=5636&professor=9057&funcionario=5629&fonte=minha_biblioteca&isbn=9786556900186' },
      { ref: '[2]', texto: 'CARDOSO, V.; CARDOSO, G. <em>Linguagem SQL: fundamentos e práticas</em>. 1ª ed. São Paulo: Saraiva, 2013.', link: 'http://portal.espm.br/paginas/redirect?aluno=5636&professor=9057&funcionario=5629&fonte=minha_biblioteca&isbn=9788502200463' },
      { ref: '[3]', texto: 'SHARDA, R.; DELEN, D.; TURBAN, E. <em>Business Intelligence e análise de dados para gestão do negócio</em>. 4ª ed. Porto Alegre: Bookman, 2019.', link: 'http://portal.espm.br/paginas/redirect?aluno=5636&professor=9057&funcionario=5629&fonte=minha_biblioteca&isbn=9788582605202' },
      { ref: '[4]', texto: 'SANTOS, R. et al. <em>Fundamentos de Big Data</em>. 1ª ed. Porto Alegre: SAGAH, 2021.', link: 'http://portal.espm.br/paginas/redirect?aluno=5636&professor=9057&funcionario=5629&fonte=minha_biblioteca&isbn=9786556901749' },
      { ref: '[5]', texto: 'BARBIERI, C. <em>Governança de Dados: práticas, conceitos e novos caminhos</em>. 1ª ed. Rio de Janeiro: Alta Books, 2020.', link: 'http://portal.espm.br/paginas/redirect?aluno=5636&professor=9057&funcionario=5629&fonte=minha_biblioteca&isbn=9788550815435' }
    ],
    complementar: [
      { ref: '[6]', texto: 'ZHAO, Alice. <em>SQL Guia Prático: um guia para uso de SQL</em>. 4ª ed. São Paulo: Novatec, 2023.', link: null },
      { ref: '[7]', texto: 'KIMBALL, R.; ROSS, M. <em>The Data Warehouse Toolkit: the definitive guide to dimensional modeling</em>. 3rd edition. New York: Willey Computer Publishing, 2013.', link: null }
    ]
  },

  /* Ferramentas e materiais usados nas aulas (derivados das Estratégias de Ensino do PEA) */
  recursos: [
    { label: 'Dataset · Projeto Integrador', titulo: 'soundbyte_projeto_final.sql', desc: 'Script PostgreSQL da SoundByte: 9 tabelas, 200 usuários, 5.338 reproduções e 18 meses de operação (jan/2023 a jun/2024). Inclui 3 views analíticas e 7 perguntas de negócio sugeridas.', href: 'recursos/soundbyte_projeto_final.sql', externo: false, download: true },
    { label: 'Planilha · Atividade 1', titulo: 'soundbyte_aula_1.xlsx', desc: 'Relatório de desempenho de artistas da SoundByte em três abas — Visão Inicial, Dados Completos e o roteiro da Atividade 1.', href: 'recursos/soundbyte_aula_1.xlsx', externo: false, download: true },
    { label: 'Dataset · Atividade 3', titulo: 'Chinook_PostgreSQL.sql', desc: 'Banco Chinook completo: 11 tabelas, 275 artistas, 3.503 faixas, 59 clientes em 24 países e 412 faturas. Carregue no SQLite Online com o motor PGLite.', href: 'recursos/Chinook_PostgreSQL.sql', externo: false, download: true },
    { label: 'Diagrama · Atividade 3', titulo: 'ERD do Chinook', desc: 'Diagrama entidade-relacionamento das 11 tabelas do Chinook — referência para escrever as junções.', href: 'recursos/Chinook_ERD.png', externo: true },
    { label: 'Dataset · Atividade 5', titulo: 'SoundByte_DW.xlsx', desc: 'Data Warehouse da SoundByte em esquema estrela: fact_sales (809 transações de 2023–2024) e as dimensões dim_time, dim_product e dim_customer. Base do dashboard no Tableau.', href: 'recursos/SoundByte_DW.xlsx', externo: false, download: true },
    { label: 'Diagrama · Atividade 5', titulo: 'ERD do esquema estrela', desc: 'Modelo dimensional da SoundByte — use como referência ao criar os relacionamentos no Tableau.', href: 'recursos/SoundByte_Store_ERD.png', externo: true },
    { label: 'Dashboard', titulo: 'Chinook Analytics Dashboard', desc: 'Dashboard de referência com análises completas da base musical Chinook — usado na Aula 3.', href: 'recursos/Chinook_Analytics_Dashboard.html', externo: false },
    { label: 'Ferramenta · Aula 3', titulo: 'SQLite Online', desc: 'Ambiente SQL no navegador com o dataset público Chinook, usado na prática de DDL, DML, junções e agregações.', href: 'https://sqliteonline.com', externo: true },
    { label: 'Ferramenta · Aula 2', titulo: 'Lucidchart', desc: 'Ferramenta de diagramação usada para converter descrições de processo de negócio em diagramas ER.', href: 'https://www.lucidchart.com', externo: true },
    { label: 'Ferramenta · Aula 5', titulo: 'Tableau Public', desc: 'Construção de dashboards interativos com filtros de data, geolocalização e KPIs de conversão.', href: 'https://public.tableau.com/app/discover', externo: true },
    { label: 'Ferramenta · Aula 6', titulo: 'MongoDB Atlas', desc: 'Plano gratuito para criar coleções de documentos JSON, praticar inserção e busca com esquema flexível.', href: 'https://www.mongodb.com/atlas', externo: true },
    { label: 'Referência · Aula 7', titulo: 'Guia de Governança de Dados — Gov.br', desc: 'Guia rápido de governança de dados do governo brasileiro, base para a política de acesso da Aula 7.', href: 'https://www.gov.br/governodigital/pt-br/governanca-de-dados', externo: true },
    { label: 'Referência · Aula 7', titulo: 'LGPD — Lei nº 13.709/2018', desc: 'Texto integral da Lei Geral de Proteção de Dados Pessoais: princípios, bases legais e obrigações.', href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm', externo: true },
    { label: 'Referência · Aula 1', titulo: 'DB-Engines Ranking', desc: 'Ranking dos sistemas de gerenciamento de banco de dados mais utilizados no mundo.', href: 'https://db-engines.com/en/ranking', externo: true }
  ]
};
