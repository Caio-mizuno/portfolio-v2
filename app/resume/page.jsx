"use client";

import Educations from "@/components/Pages/Resume/Educations";
import About from "@/components/Pages/Resume/About";
import Experiences from "@/components/Pages/Resume/Experiences";
import Freelas from "@/components/Pages/Resume/Freelas";
import Skills from "@/components/Pages/Resume/Skills";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";

import { ScrollArea } from "@/components/Ui/scroll-area";

const Resume = () => {
  return (
    <div className="page-enter min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col  xl:flex-row gap-[60px]"
        >
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 xl:flex xl:flex-col w-full max-w-[380px] sm:max-w-none xl:max-w-[380px] mx-auto xl:mx-0 gap-3 xl:gap-6">
            <TabsTrigger value="experience">Experiências</TabsTrigger>
            <TabsTrigger value="freelas">Freelas</TabsTrigger>
            <TabsTrigger value="educations">Formação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                {" "}
                <Experiences />
              </TabsContent>
              <TabsContent value="freelas" className="w-full">
                {" "}
                <Freelas />
              </TabsContent>
              <TabsContent value="educations" className="w-full">
                {" "}
                <Educations />
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                {" "}
                <Skills />
              </TabsContent>
              <TabsContent value="about" className="w-full">
                {" "}
                <About />
              </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
