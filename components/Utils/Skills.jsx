import {
  FaFigma,
  FaLaravel,
  FaVuejs,
  FaDocker,
  FaPython,
  FaWordpress,
  FaJs,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNestjs,
  SiPhp,
  SiUipath,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrOracle } from "react-icons/gr";
import { MdCss } from "react-icons/md";
import { FaJ } from "react-icons/fa6";


const docker = {
  icon: <FaDocker />,
  name: "Docker",
};

const laravel = {
  icon: <FaLaravel />,
  name: "Laravel",
};

const vue = {
  icon: <FaVuejs />,
  name: "Vue.js",
};

const next = {
  icon: <RiNextjsFill />,
  name: "Next.js",
};

const nest = {
  icon: <SiNestjs />,
  name: "Nest.js",
};

const php = {
  icon: <SiPhp />,
  name: "PHP",
};

const python = {
  icon: <FaPython />,
  name: "Python",
};

const uipath = {
  icon: <SiUipath />,
  name: "UIPath",
};

const oracle = {
  icon: <GrOracle />,
  name: "OracleDB",
};

const mysql = {
  icon: <SiMysql />,
  name: "MySQL",
};

const postgresql = {
  icon: <SiPostgresql />,
  name: "PostgreSQL",
};

const figma = {
  icon: <FaFigma />,
  name: "Figma",
};

const wordpress = {
  icon: <FaWordpress />,
  name: "Wordpress",
};

const js = {
  icon: <FaJs />,
  name: "JavaScript",
};

const html = {
  icon: <FaHtml5 />,
  name: "Html",
};

const css = {
  icon: <MdCss />,
  name: "Css",
};

const skills = {
  icon: "/assets/resume/cap.svg",
  title: "Habilidades técnicas",
  description: "Minhas habilidades técnicas e a experiência prática adquirida ao longo da minha carreira. Abordarei as ferramentas, linguagens de programação e metodologias que domino, demonstrando como essas competências contribuem para a entrega de projetos de alta qualidade.",
  items: [
    docker,
    laravel,
    vue,
    next,
    nest,
    php,
    python,
    uipath,
    oracle,
    mysql,
    postgresql,
    wordpress,
    figma,
  ],
};

export default skills;
