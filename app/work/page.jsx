"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import projects from "@/components/Utils/Projects";

import { BsArrowUpRight } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Ui/button";

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleInitSwiper = (swiperHook) => {
    swiperRef.current = swiperHook;
    setIsBeginning(swiperHook.isBeginning);
    setIsEnd(swiperHook.isEnd);
  };

  const swiperRef = React.useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[50vh] flex flex-col  justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto swiper">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-[50%] min-h-[438px] flex flex-col gap-6 xl:justify-between order-2 xl:order-none ">
            {/* content */}
            <div className="flex flex-col gap-6 h-[300px] lg:text-justify text-center justify-center mt-20">
              {/* outline num */}
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline xl:w-[90%]">
                {project.title}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
                <br />
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
                        <TooltipTrigger className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]  rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white xl:text-3xl md:text-5xl text-4xl  group-hover:text-accent" />
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
                            <div className=" xl:text-6xl md:text-5xl text-4xl  group-hover:text-accent transition-all duration-300 filter-shadow">
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
          {/* Swipper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 z-0"
              onBeforeInit={handleInitSwiper}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={handleSlideChange}
              onAutoplay={delay(5000)}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
            >
              {/* PREV */}

              {!isBeginning && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => swiperRef.current.slidePrev()}
                  className="moving-div-left uppercase flex items-center gap-2 bg-accent md:h-[80px] h-[40px] p-[5px] md:p-[20px]  rounded-sm absolute md:top-[41%] top-[43%]  z-[2] md:left-[-3%] left-[-1%] "
                >
                  <span>
                    <GoChevronLeft
                      className="text-white
                      bg-accent lg:text-3xl text-xl"
                    />
                  </span>
                </Button>
              )}
              {/* NEXT */}
              {!isEnd && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => swiperRef.current.slideNext()}
                  className="moving-div-right uppercase flex items-center gap-2 bg-accent md:h-[80px] h-[40px] p-[5px] md:p-[20px]  rounded-sm absolute md:top-[41%] top-[43%] z-[2] md:right-[-3%] right-[-1%] "
                >
                  <span>
                    <GoChevronRight
                      className="text-white
                    bg-accent lg:text-3xl text-xl"
                    />
                  </span>
                </Button>
              )}
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full lg:h-[460px] h-[260px]  relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          alt="projeto"
                          src={project.image}
                          fill
                          className="lg:object-fill object-contain"
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
