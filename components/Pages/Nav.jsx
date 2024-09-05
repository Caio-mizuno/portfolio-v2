"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import links from '@/components/Utils/Links';
// const links = [
//   { name: "home", path: "/" },
//   { name: "atuações", path: "/services" },
//   { name: "currículo", path: "/resume" },
//   { name: "histórico", path: "/work" },
//   { name: "contato", path: "/contact" },
// ];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            }
          capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
