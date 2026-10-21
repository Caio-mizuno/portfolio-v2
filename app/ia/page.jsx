"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aiWorkflow from "@/components/Utils/AiWorkflow";
import aiProjects from "@/components/Utils/AiProjects";
import aiRag from "@/components/Utils/AiRag";

const Ia = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-12 xl:py-0 xl:pb-24"
    >
      <div className="container mx-auto flex flex-col gap-[80px]">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-[860px] text-center xl:text-left mx-auto xl:mx-0">
            <span className="text-accent uppercase tracking-widest text-sm">
              {aiWorkflow.eyebrow}
            </span>
            <h2 className="h2 text-balance">{aiWorkflow.title}</h2>
            <p className="text-white/60 text-pretty">{aiWorkflow.description}</p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {aiWorkflow.steps.map((step, index) => {
              return (
                <li
                  key={index}
                  className="group bg-[#232329] rounded-xl p-8 flex flex-col gap-4 hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {step.num}
                    </span>
                    <span className="text-accent [&>svg]:w-8 [&>svg]:h-8">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="h3 group-hover:text-accent transition-all duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          id="motor-rag"
          className="scroll-mt-8 bg-[#232329] rounded-2xl p-6 md:p-8 xl:p-12 grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-10 xl:gap-16"
        >
          <div className="flex flex-col gap-6 text-center xl:text-left">
            <span className="text-accent uppercase tracking-widest text-sm">
              {aiRag.eyebrow}
            </span>
            <h2 className="h2 text-balance">{aiRag.title}</h2>
            <p className="text-white/60 text-pretty">{aiRag.description}</p>
            <ul className="flex flex-col gap-3 text-left">
              {aiRag.notes.map((note, index) => {
                return (
                  <li
                    key={index}
                    className="text-white/70 text-sm grid grid-cols-[20px_1fr]"
                  >
                    <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[10px]"></span>
                    <span>{note}</span>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-wrap justify-center xl:justify-start gap-2">
              {aiRag.stack.map((tech) => {
                return (
                  <li
                    key={tech}
                    className="px-3 py-1 rounded-md bg-primary text-white/80 text-xs"
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>

          <ol
            aria-label="Como o motor responde"
            className="flex flex-col gap-4 self-center"
          >
            {aiRag.steps.map((step, index) => {
              const isLast = index === aiRag.steps.length - 1;
              return (
                <li
                  key={index}
                  className="relative grid grid-cols-[56px_1fr] gap-4 items-start"
                >
                  {!isLast && (
                    <span className="absolute left-[27px] top-14 -bottom-4 w-px bg-white/15"></span>
                  )}
                  <span className="relative w-14 h-14 rounded-full bg-primary border border-white/10 text-accent flex justify-center items-center [&>svg]:w-6 [&>svg]:h-6">
                    {step.icon}
                  </span>
                  <div className="bg-primary rounded-xl p-5 flex flex-col gap-1">
                    <span className="text-white/30 text-xs tabular-nums">
                      Etapa {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center xl:text-left">
            <h2 className="h2">Projetos SaaS</h2>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Produtos que construí de ponta a ponta com esse fluxo, do
              brainstorming ao MVP.
            </p>
          </div>

          <ul className="flex flex-col gap-[30px]">
            {aiProjects.map((project, index) => {
              return (
                <li
                  key={index}
                  id={project.slug}
                  className="scroll-mt-8 bg-[#232329] rounded-2xl p-6 md:p-8 xl:p-12 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-center"
                >
                  <div
                    className={`flex flex-col gap-6 ${
                      index % 2 === 1 ? "xl:order-2" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="w-14 h-14 rounded-full bg-primary flex justify-center items-center text-accent [&>svg]:w-7 [&>svg]:h-7">
                        {project.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-secondary-light text-sm uppercase tracking-widest">
                          {project.category}
                        </span>
                        <h3 className="text-4xl xl:text-5xl font-extrabold leading-none">
                          {project.title}
                        </h3>
                      </div>
                      <span className="xl:ml-auto px-3 py-1 rounded-full border border-accent text-accent text-xs uppercase">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-white/80">{project.description}</p>

                    <ul className="flex flex-col gap-3">
                      {project.features.map((feature, featureIndex) => {
                        return (
                          <li
                            key={featureIndex}
                            className="text-white/60 text-sm grid grid-cols-[20px_1fr]"
                          >
                            <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[10px]"></span>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <ul className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
                      {project.highlights.map((highlight, highlightIndex) => {
                        return (
                          <li key={highlightIndex} className="flex flex-col">
                            <span className="text-3xl xl:text-4xl font-extrabold text-accent leading-none tabular-nums">
                              {highlight.value}
                            </span>
                            <span className="text-white/60 text-xs leading-snug mt-2">
                              {highlight.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => {
                        return (
                          <li
                            key={techIndex}
                            className="px-3 py-1 rounded-md bg-primary text-white/80 text-xs"
                          >
                            {tech}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <figure className="w-full">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-primary shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] group">
                      <div className="flex items-center gap-2 px-4 h-9 border-b border-white/10 bg-black/30">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                        <span className="ml-3 text-xs text-white/40 truncate">
                          {project.preview.label}
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.preview.image}
                          alt={`Tela do ${project.title}`}
                          fill
                          sizes="(max-width: 1200px) 100vw, 640px"
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Ia;
