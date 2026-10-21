import { Database, Binary, Search, MessageSquareText } from "lucide-react";

const aiRag = {
  eyebrow: "Motor de IA",
  title: "Respostas automáticas com RAG",
  description:
    "Construí um motor de IA que responde automaticamente aos usuários com base no conhecimento de cada cliente. Antes de gerar a resposta, ele busca os trechos relevantes nos documentos (RAG), então o modelo fala do negócio em vez de inventar. É um microsserviço reutilizável: qualquer aplicação pluga um chat nele, e hoje ele alimenta o assistente do EtiqNova.",
  steps: [
    {
      title: "Base de conhecimento",
      description:
        "A aplicação sincroniza documentos e regras de cada cliente, sempre isolados por tenant.",
      icon: <Database />,
    },
    {
      title: "Embeddings",
      description: "Perguntas e documentos viram vetores com o modelo bge\u2011m3.",
      icon: <Binary />,
    },
    {
      title: "Busca vetorial",
      description:
        "O Qdrant traz os trechos mais relevantes, sempre filtrados pelo cliente.",
      icon: <Search />,
    },
    {
      title: "Resposta em streaming",
      description:
        "O Qwen2.5 via llama.cpp responde em cima desses trechos e envia o texto em tempo real (SSE).",
      icon: <MessageSquareText />,
    },
  ],
  notes: [
    "Isolamento multi-tenant: não existe busca sem cliente definido",
    "Modelos abertos rodando localmente, sem custo por token: 98,9 tokens/s com GPU",
    "Motor plugável: API compatível com OpenAI, troca para Ollama ou vLLM mudando só a URL",
    "O navegador nunca acessa o motor: sessão por JWT de 15 min, histórico e rate limit no Redis",
    "Sem LangChain: fluxo curto e coberto por testes com pytest",
  ],
  stack: [
    "Python",
    "FastAPI",
    "Qdrant",
    "llama.cpp",
    "Qwen2.5",
    "bge-m3",
    "Redis",
    "SSE",
    "Docker",
  ],
};

export default aiRag;
