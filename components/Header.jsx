import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
// components

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="inline-flex justify-between content-center">
          <div className="w-[110px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/images/logo.png"
                alt="Image"
                className="rounded-md object-cover"
                width="350"
                height="350"
              />
            </AspectRatio>
          </div>
          <div className="w-[100px] h-[100px] inline-flex justify-between items-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold ">Mizuno</h1>
              <span className="text-accent">.Tech</span>
            </Link>
          </div>
        </div>

        {/* desktop nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button >Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
