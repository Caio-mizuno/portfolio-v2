import {
  FaFigma,
  FaLaravel,
  FaVuejs,
  FaDocker,
  FaPython,
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
  name: "VUE",
};

const next = {
  icon: <RiNextjsFill />,
  name: "Next",
};

const nest = {
  icon: <SiNestjs />,
  name: "Nest",
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

const skills = {
  icon: "/assets/resume/cap.svg",
  title: "Formação Acadêmica",
  description: "Minhas formações e certificações",
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
    figma,
  ],
};

export default skills;
