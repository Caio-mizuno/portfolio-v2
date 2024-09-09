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
import { DiCodeigniter } from "react-icons/di";


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
const codeigniter = {
  icon: <DiCodeigniter />,
  name: "Codeigniter",
};
const projects = [
  {
    title: "Libercard",
    category: "Backend",
    image: "/assets/work/libercard.png",
    position: "Squad Leader",
    href: "https://play.google.com/store/apps/details?id=br.com.libercard.libercard&hl=pt",
    description:
      "Aplicativo para os usuários dos cartões Libercard realizarem transações financeira, como pagamento de contas, recarga de celular e muito mais.",
    stack: [docker, laravel, oracle],
  },
  {
    category: "Backend",
    title: "Recarga Online",
    image: "/assets/work/recarga.png",
    href: "https://play.google.com/store/apps/details?id=br.com.libercard.vt&hl=pt",
    position: "Squad Leader",
    description:
      "Aplicativo destinado à compra de créditos de transporte para os usuários de Fortaleza/CE e região metropolitana. ",
    stack: [docker, laravel, oracle],
  },
  {
    category: "Fullstack",
    title: "Samulife",
    image: "/assets/work/samulife.png",
    href: "https://play.google.com/store/apps/details?id=br.com.libercard.vt&hl=pt",
    position: "Software Engineer Sr.",
    description:
      "Sistema de gestão na área da saúde com o foco no auxílio do controle de pacientes nos ambientes hospitalares. O sistema tem módulo de atendimento, prontuário, prescrição, evolução, exames, agendamento, relatórios e controle de estoque.",
    stack: [laravel, vue, mysql],
  },
  {
    category: "Fullstack",
    title: "Swing360",
    image: "/assets/work/swing360.png",
    href: "https://www.swing360.com.br/",
    position: "Software Developer Jr.",
    description:
      "Sistema de redes social focado na interação de casais liberais. O foco era auxiliar na comunicação e encontros entre casais, tendo um sistema de pontos e moedas virtuais que permitiam acessar funcionalidades premium.",
    stack: [laravel, vue, mysql],
  },
  {
    category: "Fullstack",
    title: "Moove app",
    image: "/assets/work/moove.png",
    href: "https://play.google.com/store/apps/details?id=com.innyx.moovecoin.driver&hl=pt",
    position: "Software Developer Jr.",
    description:
      "Sistema de mobilidade urbana, realizado para a empresa Moove. O sistema foi desenvolvido para auxiliar na gestão de motoristas e passageiros, com o intuito de facilitar a comunicação e segurança entre eles.",
    stack: [laravel, codeigniter, mysql],
  },
  {
    category: "Fullstack",
    title: "Magazine Brindes",
    image: "/assets/work/magazine_brindes.png",
    href: "https://magazinebrindes.com.br/",
    position: "Software Developer Jr.",
    description:
      "Sistema de E-commerce feito para a empresa Magazine Brindes para auxiliar nas vendas e gestão de emissões de notas fiscais. Observação: O site desenvolvido por mim na época não foi ao ar.",
    stack: [laravel, vue, mysql],
  },
  {
    category: "Frontend",
    title: "Festival Gastronômico",
    image: "/assets/work/festival_gastronomico.jpg",
    href: "https://festival.dourados.ms.gov.br/",
    position: "Estagiário",
    description:
      "Website feito em wordpress com o intuito de divulgar o festival gastronômico da cidade de Dourados, MS. Site feito para ajudar a prefeitura de Dourados na época que era um estagiário",
    stack: [wordpress, php],
  },
  {
    category: "Frontend",
    title: "Site da prefeitura de Dourados",
    image: "/assets/work/prefeitura.png",
    href: "https://cultura.dourados.ms.gov.br/index.php?class=CulturaViewNew",
    position: "Estagiário",
    description:
      "Site construido em prol de ajudar a prefeitura de Dourados, MS a divulgar informações sobre a cidade e seus serviços",
    stack: [js, html, css],
  },
  {
    category: "Frontend",
    image: "/assets/work/salvatempo.png",
    href: "https://caio-mizuno.github.io/salvatempo.github.io/",
    position: "",
    title: "SalvaTempo",
    description:
      "Site construido para colocar em prática os conceitos de html, css e js. Um projeto pessoal para ajudar a população a se organizar e economizar tempo.",
    stack: [js, html, css],
  },
  {
    category: "Frontend",
    image: "/assets/work/v1.png",
    href: "https://caio-mizuno.github.io/Portifolio.io/",
    position: "",
    title: "Portfólio - v1",
    description:
      "Site construido para fazer meu marketing pessoal e colocar em prática os conceitos de html, css e js.",
    stack: [js, html, css],
  },
];

export default projects;
