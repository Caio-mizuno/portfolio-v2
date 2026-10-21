"use client";

import { useState } from "react";
import projects from "@/components/Utils/Projects";

import { BsArrowUpRight } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const ALL = "Todos";
const categories = [ALL, ...new Set(projects.map((item) => item.category))];

const Work = () => {
  const [category, setCategory] = useState(ALL);

  const visibleProjects = projects
    .map((project, index) => ({ ...project, num: index + 1 }))
    .filter((project) => category === ALL || project.category === category);

  const countFor = (name) =>
    name === ALL
      ? projects.length
      : projects.filter((project) => project.category === name).length;

  return (
    <div className="page-enter py-12 xl:py-0 xl:pb-24">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 text-center xl:text-left">
            <span className="text-accent uppercase tracking-widest text-sm">
              Histórico
            </span>
            <h2 className="h2">Projetos que entreguei</h2>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Aplicativos, sistemas e sites em que atuei, de squads em fintechs
              aos primeiros projetos como estagiário.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar por categoria"
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((name) => {
              const isActive = name === category;
              return (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(name)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-primary font-semibold"
                      : "bg-[#232329] text-white/70 hover:text-white hover:bg-[#2a2a31]"
                  }`}
                >
                  {name}
                  <span
                    className={`ml-2 tabular-nums ${
                      isActive ? "text-black/50" : "text-white/40"
                    }`}
                  >
                    {countFor(name)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <TooltipProvider delayDuration={100}>
          {/* A key troca a cada filtro e remonta a lista, reiniciando a entrada em CSS. */}
          <ul
            key={category}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]"
          >
            {visibleProjects.map((project, index) => {
              return (
                <li
                  key={project.title}
                  style={{ "--enter-delay": `${index * 0.04}s` }}
                  className="card-enter group bg-[#232329] rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                    <Image
                      alt={`Captura de tela do projeto ${project.title}`}
                      src={project.image}
                      fill
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur text-accent text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-white/30 text-sm tabular-nums">
                          {String(project.num).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-all duration-300">
                          {project.title}
                        </h3>
                        {project.position && (
                          <span className="text-secondary-light text-sm">
                            {project.position}
                          </span>
                        )}
                      </div>
                      {project.href && (
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visitar ${project.title}`}
                          title="Visitar"
                          className="w-11 h-11 shrink-0 rounded-full bg-white/5 flex justify-center items-center hover:bg-accent hover:text-primary transition-all duration-300"
                        >
                          <BsArrowUpRight className="text-lg" />
                        </Link>
                      )}
                    </div>

                    <p className="text-white/60 text-sm">
                      {project.description}
                    </p>

                    {project.stack.length > 0 && (
                      <ul className="mt-auto pt-2 flex flex-wrap gap-2">
                        {project.stack.map((item, index) => {
                          return (
                            <li key={index}>
                              <Tooltip>
                                <TooltipTrigger
                                  aria-label={item.name}
                                  className="w-10 h-10 bg-primary rounded-lg flex justify-center items-center text-xl text-white/80 hover:text-accent transition-all duration-300"
                                >
                                  {item.icon}
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>

        <Link
          href="/ia"
          className="group bg-[#232329] rounded-xl p-6 xl:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#2a2a31] transition-all duration-300"
        >
          <div className="flex flex-col gap-1">
            <span className="text-accent uppercase tracking-widest text-xs">
              Desenvolvimento com IA
            </span>
            <span className="text-xl xl:text-2xl font-bold">
              Veja também os SaaS que construí com agentes de IA
            </span>
            <span className="text-white/60 text-sm">
              EtiqNova, PropenCash e PostAuto, com prints das telas.
            </span>
          </div>
          <span className="w-14 h-14 shrink-0 rounded-full bg-accent text-primary flex justify-center items-center text-2xl group-hover:-rotate-45 transition-all duration-500">
            <BsArrowUpRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Work;
