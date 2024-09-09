"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "@/components/Utils/Projects";
import {
  docker,
  laravel,
  vue,
  php,
  oracle,
  mysql,
  js,
  html,
  css,
  wordpress,
} from "@/components/Utils/Skills";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col  justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col gap-6 xl:justify-between order-2 xl:order-none">
            {/* content */}
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.title}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
                {"  "}
                <span className="text-[18px] font-bold leading-none text-secondary group-hover:text-accent transition-all duration-500 capitalize">
                  {project.position}
                </span>
              </h2>

              <p className="text-white/60 xl:w-[98%]">{project.description}</p>
              <div className="border border-white/20"></div>

              <ul className="w-full flex flex-row gap-2 max-w-[300px]">
                <div className="w-full flex justify-end">
                  <Link href={project.href}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visitar</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="w-full">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="px-4 py-2 bg-[#232329] rounded-xl justify-center items-center group text-accent">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 filter-shadow">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          alt="projeto"
                          src={project.image}
                          fill
                          className=""
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
