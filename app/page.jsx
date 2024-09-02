import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// Variables
const idiome = process.env.REACT_APP_IDIOME;
const title = idiome === "pt" || idiome == "" ? "Olá, eu sou" : "Hello, I'm";
const downloadButton =
  idiome === "pt" || idiome == "" ? " Baixar currículo " : " Download resume ";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:py-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              {title}
              <br />
              <span className="text-accent">Caio Mizuno</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Futuro Techlead com foco em
              desenvolvimento{" "}
              <span className="text-secondary text-xl uppercase">web</span> e{" "}
              <span className="text-secondary text-xl uppercase">mobile</span>,
              com experiência prática com várias tecnologias e linguagens de
              programação.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
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
