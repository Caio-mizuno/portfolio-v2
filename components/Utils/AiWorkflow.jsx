import {
  Lightbulb,
  ListChecks,
  Bot,
  GitPullRequest,
  FlaskConical,
  MonitorCheck,
} from "lucide-react";

const aiWorkflow = {
  eyebrow: "Meu fluxo de trabalho atual",
  title: "Desenvolvimento assistido por IA",
  description:
    "Uso o Claude Code como um time de engenharia, mas as decisões de produto e de arquitetura continuam comigo. Cada funcionalidade começa num brainstorming que vira uma spec escrita e, depois, um plano de tarefas pequenas, tudo guiado pelas skills do Superpowers. Agentes especialistas em backend, frontend, performance e segurança executam o plano em TDD, e cada entrega passa por agentes revisores antes de seguir adiante. Nada é dado como pronto sem evidência: testes automatizados e gates de qualidade no CI, somados a testes assistidos em que o agente percorre os fluxos no navegador real e eu valido o resultado.",
  steps: [
    {
      num: "01",
      title: "Brainstorming & spec",
      description:
        "A ideia vira uma especificação escrita com objetivos, não-objetivos e decisões de arquitetura.",
      icon: <Lightbulb />,
    },
    {
      num: "02",
      title: "Plano",
      description:
        "A spec é quebrada em tarefas pequenas, cada uma com critérios de aceite e testes definidos.",
      icon: <ListChecks />,
    },
    {
      num: "03",
      title: "Agentes",
      description:
        "Subagentes especialistas (backend, frontend, performance e segurança) executam o plano tarefa a tarefa.",
      icon: <Bot />,
    },
    {
      num: "04",
      title: "Revisores",
      description:
        "Agentes revisores conferem aderência à spec, autorização, N+1, transações e falhas silenciosas.",
      icon: <GitPullRequest />,
    },
    {
      num: "05",
      title: "Testes automatizados",
      description:
        "Ciclo RED → GREEN com Pest, PHPUnit, Vitest e pytest, além de Pint, Larastan, ESLint e tsc no CI.",
      icon: <FlaskConical />,
    },
    {
      num: "06",
      title: "Testes assistidos",
      description:
        "O agente percorre os fluxos no navegador real e eu valido cada entrega antes de ir para a main.",
      icon: <MonitorCheck />,
    },
  ],
};

export default aiWorkflow;
