const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minhas Experiências",
  description: "A seção a seguir apresenta minhas experiências profissionais, destacando as principais atividades e responsabilidades que assumi ao longo da minha trajetória.",
  items: [
    {
      company: "ME2 Software",
      position: "Squad Leader",
      duration: "2023 - " + new Date().getFullYear(),
      projects: [
        {
          title: "Libercard",
          description: "Sistema de Cartões Pré-Pagos e Benefícios",
        },
        {
          title: "Recarga Online",
          description: "Sistema de Cartões Vale Transporte",
        },
        {
          title: "Antecipação",
          description: "Sistema de Antecipação de Recebíveis",
        },
      ],
    },
    {
      company: "Encode",
      position: "Fullstack Developer",
      duration: "2022 - 2023",
      projects: [
        {
          title: "Magazine Brindes",
          description: "Sistema de E-commerce",
        },
        {
          title: "Swing360",
          description: "Sistema de Cartões Vale Transporte",
        },
        {
          title: "Samulife",
          description: "Sistema de Saúde",
        },
        {
          title: "Moove",
          description: "Mobilidade Urbana",
        },
      ],
    },
    {
      company: "Sicredi",
      position: "Analista de Desenvolvimento de Sistemas",
      duration: "2021 - 2022",
      projects: [
        {
          title: "Analise de Crédito",
          description: "Sistema Financeiro",
        },
      ],
    },
  ],
};

export default experience;
