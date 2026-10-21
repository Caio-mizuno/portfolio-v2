import Photo from "@/components/Pages/Photo";
import Social from "@/components/Pages/Social";
import Stats from "@/components/Pages/Stats";
import HomeAi from "@/components/Pages/HomeAi";
import InkHeadline from "@/components/Ui/ink-headline";
import { Button } from "@/components/Ui/button";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { Sparkles } from "lucide-react";
// Variables
import Link from "next/link";
const idiome = process.env.REACT_APP_IDIOME;
const title = idiome === "pt" || !idiome ? "Olá, eu sou" : "Hello, I'm";
const downloadButton =
  idiome === "pt" || !idiome ? " Baixar currículo " : " Download resume ";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:py-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <a
              href="#ia-no-dia-a-dia"
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/15 text-xs text-white/70 hover:border-accent hover:text-accent transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Minha doc de IA e os SaaS que construí com ela
              <FiArrowDown />
            </a>
            <span className="block text-xl">Squad Leader · Software Engineer</span>
            {/* Cada linha entra em tinta separada para manter as duas cores; o atraso espera a transição de página. */}
            <h1 className="h1">
              <InkHeadline as="span" className="block" duration={1200} stagger={160} delay={300}>
                {title}
              </InkHeadline>
              <InkHeadline as="span" className="block text-accent" duration={1200} stagger={160} delay={850}>
                Caio Mizuno
              </InkHeadline>
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
                asChild
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/Resume.pdf" download="Caio_Mizuno_Resume.pdf">
                  <span>{downloadButton}</span>
                  <FiDownload className="text-xl" />
                </a>
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
      <HomeAi />
    </section>
  );
};

export default Home;
