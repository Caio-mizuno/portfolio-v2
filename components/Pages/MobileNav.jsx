"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/Ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import links from '@/components/Utils/Links';


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Abrir menu"
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navegação principal do portfólio
        </SheetDescription>
        <div className="mt-16 mb-10 text-center">
          <SheetClose asChild>
            <Link href="/" aria-label="Mizuno.Tech, página inicial">
              <span className="text-4xl font-semibold">Mizuno</span>
              <span className="text-accent">.Tech</span>
            </Link>
          </SheetClose>
        </div>
        <hr className="border-white/10" />
        <nav className="flex flex-col">
          {/* {Logo} */}
          {links.map((link, index) => {
            return (
              <div key={index} className="my-4 text-center text-2xl">
                <SheetClose asChild>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  }
              capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
                </SheetClose>
              </div>
            );
          })}
          <div className="my-4 text-center text-2xl">
            <SheetClose asChild>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" &&
                  "text-accent border-b-2 border-accent"
                }
              font-medium hover:text-accent transition-all`}
              >
                Contato
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
