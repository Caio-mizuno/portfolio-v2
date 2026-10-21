"use client";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

// A rota já trocou quando o pathname muda, então a transição só precisa
// cobrir a página nova na hora e revelá-la. A key remonta os elementos e
// reinicia as animações CSS (.transition-stair e .transition-overlay).
const StairTransition = () => {
  const pathname = usePathname();
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
