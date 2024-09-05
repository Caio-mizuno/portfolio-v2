"use client";

import Educations from "@/components/Pages/Resume/Educations";
import About from "@/components/Pages/Resume/About";
import Experiences from "@/components/Pages/Resume/Experiences";
import Freelas from "@/components/Pages/Resume/Freelas";
import Skills from "@/components/Pages/Resume/Skills";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Ui/tooltip";

import { ScrollArea } from "@/components/Ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col  xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiências</TabsTrigger>
            <TabsTrigger value="freelas">Freelas</TabsTrigger>
            <TabsTrigger value="educations">Formações Acadêmicas</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full"> <Experiences /></TabsContent>
            <TabsContent value="freelas" className="w-full"> <Freelas /></TabsContent>
            <TabsContent value="educations" className="w-full"> <Educations /></TabsContent>
            <TabsContent value="skills" className="w-full"> <Skills /></TabsContent>
            <TabsContent value="about" className="w-full"> <About /></TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
