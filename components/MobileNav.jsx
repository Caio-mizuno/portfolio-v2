"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="w-full flex  mt-20">
          <div className="w-[100px] h-[100px] inline-flex justify-between items-center">
            <div className="mr-2 ml-20">
              <Link href="/">
                <h1 className="text-4xl font-semibold text-secondary -3">
                  Mizuno
                </h1>
              </Link>
            </div>
            <div className="text-accent">.Tech</div>
          </div>
        </div>
        <hr />
        <nav className="flex flex-col">
          {/* {Logo} */}
          {links.map((link, index) => {
            return (
              <div key={index} className="my-10 text-center text-2xl">
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  }
              capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
