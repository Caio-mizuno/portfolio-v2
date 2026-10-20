import { FaWhatsapp,FaHammer } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaPerson } from "react-icons/fa6";
import { GiBrazilFlag } from "react-icons/gi";
import { PiUserSoundLight } from "react-icons/pi";

const about = {
  title: "Sobre mim",
  description: "Squad Leader e Software Engineer apaixonado por UX e arquitetura. Lidero equipes, destravo impedimentos do time e hoje uso IA no dia a dia para entregar produtos completos com qualidade e testes. Adoro desafios e novas experiências profissionais.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Caio V. A. Mizuno",
      icon: <FaPerson/>
    },
    {
      fieldName: "Experiência",
      fieldValue: new Date().getFullYear() - 2021 + "+ anos",
      icon: <FaHammer/>
    },
    {
      fieldName: "Telefone",
      fieldValue: "+55 (67) 9 9239-9972",
      icon: <FaWhatsapp/>
    },
    {
      fieldName: "Email",
      fieldValue: "mizuno.caio.va@gmail.com",
      icon: <TfiEmail/>
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
      icon: <GiBrazilFlag/>
    },
    {
      fieldName: "Línguas",
      fieldValue: "Português, Inglês",
      icon: <PiUserSoundLight/>
    },
  ],
};

export default about;
