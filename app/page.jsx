"use client";

import Photo from "@/components/Pages/Photo";
import Social from "@/components/Pages/Social";
import Stats from "@/components/Pages/Stats";
import { Button } from "@/components/Ui/button";
import { FiDownload } from "react-icons/fi";
// Variables
import Link from "next/link";
const idiome = process.env.REACT_APP_IDIOME;
const title = idiome === "pt" || !idiome ? "Olá, eu sou" : "Hello, I'm";
const downloadButton =
  idiome === "pt" || !idiome ? " Baixar currículo " : " Download resume ";

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Caio_Mizuno_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:py-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Squad Leader · Software Engineer</span>
            <h1 className="h1">
              {title}
              <br />
              <span className="text-accent">Caio Mizuno</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lidero squads e arquiteto aplicações{" "}
              <span className="text-secondary-light text-xl uppercase">web</span>{" "}
              em PHP e Node, com foco em pagamentos, segurança e sistemas
              escaláveis. Hoje construo SaaS de ponta a ponta com um fluxo de
              desenvolvimento assistido por{" "}
              <Link
                href="/ia"
                className="text-secondary-light text-xl uppercase hover:text-accent transition-all"
              >
                IA
              </Link>
              .
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadResume}
              >
                <span>{downloadButton}</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
