"use client";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

// A rota já trocou quando o pathname muda, então a transição só precisa
// cobrir a página nova na hora e revelá-la. A key remonta os elementos e
// reinicia as animações CSS (.transition-stair e .transition-overlay).
// No primeiro acesso a página já chega pronta do servidor: nada cobre o conteúdo.
const StairTransition = () => {
  const pathname = usePathname();
  const initialPath = useRef(pathname);
  const hasNavigated = useRef(false);
  if (pathname !== initialPath.current) hasNavigated.current = true;
  if (!hasNavigated.current) return null;

  return (
    <div key={pathname}>
      <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
        <Stairs />
      </div>

      <div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30 transition-overlay"></div>
    </div>
  );
};

export default StairTransition;
