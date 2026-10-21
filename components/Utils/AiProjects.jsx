import { Ticket, Wallet, Clapperboard } from "lucide-react";

const aiProjects = [
  {
    title: "EtiqNova",
    slug: "etiqnova",
    category: "Ingressos e parques",
    summary: "Ingressos, PDV e validação por QR Code para parques, com chat de IA (RAG).",
    status: "MVP concluído",
    icon: <Ticket />,
    preview: {
      image: "/assets/ia/etiqnova.jpg",
      label: "EtiqNova · landing page",
    },
    description:
      "Plataforma multi-tenant para venda de ingressos e operação de parques de entretenimento: venda online, PDV, totem e validação de entrada por QR Code com lotação em tempo real.",
    features: [
      "Checkout Pix e cartão com split entre plataforma e parque e repasse automático via Pix",
      "Multi-gateway configurável por cliente: Mercado Pago, Asaas e PagBank",
      "PDV, totem self-service e lotação ao vivo via WebSocket",
      "Chat com IA (RAG) treinado na base de cada parque, com modelos abertos rodando localmente",
    ],
    highlights: [
      { value: "2.600+", label: "testes automatizados" },
      { value: "300+", label: "commits co-assinados com IA" },
      { value: "~6", label: "semanas de desenvolvimento" },
    ],
    stack: [
      "Laravel 12",
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Reverb",
      "FastAPI",
      "Qdrant",
      "llama.cpp",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    title: "PropenCash",
    slug: "propencash",
    category: "Gestão para negócios de serviço",
    summary: "Agenda, financeiro e cobrança online para barbearias e salões.",
    status: "MVP em evolução",
    icon: <Wallet />,
    preview: {
      image: "/assets/ia/propencash.jpg",
      label: "PropenCash · landing page",
    },
    description:
      "Gestão completa para barbearias, salões e pequenos negócios de serviço: agenda, clientes, estoque, financeiro, comissões e cobrança online em um só lugar.",
    features: [
      "Página pública de agendamento com 8 templates customizáveis",
      "Recebimento online com split por estabelecimento: Asaas, Mercado Pago e PagBank",
      "Emissão de NFS-e por 3 gateways, com processamento assíncrono",
      "Assinatura da plataforma com planos, trial e liberação de recursos por plano",
    ],
    highlights: [
      { value: "450+", label: "testes automatizados" },
      { value: "8", label: "agentes especialistas e revisores" },
      { value: "140+", label: "commits" },
    ],
    stack: [
      "Laravel 12",
      "Vue 3",
      "TypeScript",
      "Vuetify",
      "Tailwind",
      "Pinia",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "PostAuto",
    slug: "postauto",
    category: "Vídeos com IA",
    summary: "Vídeos gerados por IA e publicados no YouTube, Instagram e TikTok.",
    status: "MVP",
    icon: <Clapperboard />,
    preview: {
      image: "/assets/ia/postauto.jpg",
      label: "PostAuto · dashboard com dados de exemplo",
    },
    description:
      "Vídeos curtos com IA no piloto automático: o usuário escreve um prompt, escolhe o modelo e o sistema gera o vídeo e publica no YouTube, Instagram Reels e TikTok, na hora ou agendado.",
    features: [
      "9 provedores de vídeo com IA atrás de uma única interface: Veo 3.1, Sora 2, Runway, Kling, Luma, MiniMax e outros",
      "Publicação pelas APIs oficiais do YouTube, Instagram e TikTok, com conexão via OAuth",
      "Agendamento por plataforma com filas, retry e renovação automática de tokens",
      "Credenciais de cada usuário criptografadas e sempre mascaradas na API",
    ],
    highlights: [
      { value: "9", label: "modelos de vídeo com IA" },
      { value: "46", label: "testes automatizados" },
      { value: "2", label: "dias da ideia ao MVP" },
    ],
    stack: [
      "Laravel 12",
      "Next.js 16",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Redis",
      "Docker",
      "ffmpeg",
    ],
  },
];

export default aiProjects;
