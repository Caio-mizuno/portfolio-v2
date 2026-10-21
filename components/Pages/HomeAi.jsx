import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import aiDocs from "@/components/Utils/AiDocs";
import aiProjects from "@/components/Utils/AiProjects";

const BrowserFrame = ({ image, label, alt, sizes }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-primary">
    <div className="flex items-center gap-2 px-4 h-8 border-b border-white/10 bg-black/30">
      <span className="w-2 h-2 rounded-full bg-white/20"></span>
      <span className="w-2 h-2 rounded-full bg-white/20"></span>
      <span className="w-2 h-2 rounded-full bg-white/20"></span>
      <span className="ml-3 text-[11px] text-white/40 truncate">{label}</span>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
      />
    </div>
  </div>
);

const HomeAi = () => {
  return (
    <section id="ia-no-dia-a-dia" className="scroll-mt-8 pt-20 xl:pt-28">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 text-center xl:text-left">
          <div className="flex flex-col gap-4">
            <span className="text-accent uppercase tracking-widest text-sm">
              Desenvolvimento com IA
            </span>
            <h2 className="h2 text-balance">IA no meu dia a dia</h2>
            <p className="max-w-[620px] text-white/60 mx-auto xl:mx-0">
              Documentei o que aprendi usando o Claude Code e apliquei esse
              fluxo, com agentes, revisores e testes, em SaaS completos e num
              motor de IA que responde usuários automaticamente com RAG.
            </p>
          </div>
          <Link
            href="/ia"
            className="self-center xl:self-auto inline-flex items-center gap-2 text-accent hover:text-white transition-all"
          >
            Ver meu fluxo completo
            <BsArrowUpRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-[30px]">
          <a
            href={aiDocs.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#232329] rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:bg-[#2a2a31] transition-all duration-300"
          >
            <BrowserFrame
              image={aiDocs.image}
              label={aiDocs.label}
              alt={`Tela da documentação ${aiDocs.title}`}
              sizes="(max-width: 1200px) 100vw, 640px"
            />
            <div className="flex flex-col gap-4">
              <span className="text-secondary-light text-sm uppercase tracking-widest">
                {aiDocs.eyebrow}
              </span>
              <h3 className="text-2xl xl:text-3xl font-bold leading-tight group-hover:text-accent transition-all duration-300">
                {aiDocs.title}
              </h3>
              <p className="text-white/60 text-sm">{aiDocs.description}</p>
              <ul className="flex flex-wrap gap-2">
                {aiDocs.topics.map((topic) => {
                  return (
                    <li
                      key={topic}
                      className="px-3 py-1 rounded-md bg-primary text-white/80 text-xs"
                    >
                      {topic}
                    </li>
                  );
                })}
              </ul>
              <span className="mt-2 inline-flex items-center gap-2 self-start px-5 h-11 rounded-full border border-accent text-accent text-sm uppercase tracking-[2px] group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                Abrir a doc
                <BsArrowUpRight />
              </span>
            </div>
          </a>

          <ul className="flex flex-col gap-[30px]">
            {aiProjects.map((project) => {
              return (
                <li key={project.slug} className="flex-1">
                  <Link
                    href={`/ia#${project.slug}`}
                    className="group h-full bg-[#232329] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-5 items-center hover:bg-[#2a2a31] transition-all duration-300"
                  >
                    <BrowserFrame
                      image={project.preview.image}
                      label={project.title}
                      alt={`Tela do ${project.title}`}
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col">
                          <span className="text-secondary-light text-xs uppercase tracking-widest">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-all duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <BsArrowUpRight className="shrink-0 mt-1 text-white/40 group-hover:text-accent group-hover:-rotate-12 transition-all duration-300" />
                      </div>
                      <p className="text-white/60 text-sm">{project.summary}</p>
                      <span className="text-accent text-sm font-semibold tabular-nums">
                        {project.highlights[0].value}{" "}
                        <span className="text-white/50 font-normal">
                          {project.highlights[0].label}
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeAi;
