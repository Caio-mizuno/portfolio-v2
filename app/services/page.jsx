"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import services from "@/components/Utils/Services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0 xl:pb-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col gap-16"
        >
          <div className="flex flex-col gap-4 text-center xl:text-left">
            <span className="text-accent uppercase tracking-widest text-sm">
              O que eu faço
            </span>
            <h2 className="h2">Atuações</h2>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Áreas em que já entreguei projetos em produção, do back-end à
              experiência do usuário.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-14">
            {services.map((service, index) => {
              const isExternal = service.href.startsWith("http");
              return (
                <li key={index} className="flex flex-col gap-5 group">
                  <div className="w-full flex justify-between items-center">
                    <div
                      className="text-5xl font-extrabold text-outline text-transparent
                    group-hover:text-outline-hover transition-all duration-500"
                    >
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      aria-label={`${service.cta}: ${service.title}`}
                      title={service.cta}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="w-[70px] h-[70px] shrink-0 rounded-full bg-white group-hover:bg-accent
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h3
                    className="text-[32px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent
                  transition-all duration-500"
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/60">{service.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => {
                      return (
                        <li
                          key={tagIndex}
                          className="px-3 py-1 rounded-md bg-[#232329] text-white/80 text-xs"
                        >
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-auto border-b border-white/20 w-full"></div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
