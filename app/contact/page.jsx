"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import about from "@/components/Utils/About";
import { socials } from "@/components/Pages/Social";

const field = (name) =>
  about.info.find((item) => item.fieldName === name)?.fieldValue;

const email = field("Email");
const phone = field("Telefone");

const channels = [
  {
    icon: <TfiEmail />,
    label: "E-mail",
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: phone,
    href: `https://wa.me/${phone.replace(/\D/g, "")}`,
  },
  ...socials.map((social) => ({
    icon: social.icon,
    label: social.name,
    value: social.path.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""),
    href: social.path,
  })),
];

const Contact = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0 xl:pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
        }}
        className="container mx-auto grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-12 xl:gap-[80px] items-start"
      >
        <div className="flex flex-col gap-6 text-center xl:text-left">
          <span className="text-accent uppercase tracking-widest text-sm">
            Contato
          </span>
          <h2 className="h2 text-balance">Vamos conversar?</h2>
          <p className="max-w-[520px] text-white/60 mx-auto xl:mx-0">
            Estou aberto a projetos, consultorias e novas oportunidades como
            Squad Leader ou Software Engineer. O jeito mais rápido de falar
            comigo é por WhatsApp ou e-mail.
          </p>
          <div className="flex items-center justify-center xl:justify-start gap-3 text-white/60">
            <HiOutlineLocationMarker className="text-accent text-xl" />
            <span>Dourados, MS · trabalho remoto</span>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 w-full max-w-[640px] mx-auto xl:mx-0">
          {channels.map((channel, index) => {
            const isExternal = channel.href.startsWith("http");
            return (
              <li key={index}>
                <a
                  href={channel.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group bg-[#232329] rounded-xl p-6 flex items-center gap-4 hover:bg-[#2a2a31] transition-all duration-300"
                >
                  <span className="w-12 h-12 shrink-0 rounded-full bg-primary flex justify-center items-center text-accent text-xl">
                    {channel.icon}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-white/60 text-sm">
                      {channel.label}
                    </span>
                    <span className="text-white truncate">{channel.value}</span>
                  </span>
                  <BsArrowUpRight className="ml-auto shrink-0 text-white/40 group-hover:text-accent group-hover:-rotate-12 transition-all duration-300" />
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Contact;
