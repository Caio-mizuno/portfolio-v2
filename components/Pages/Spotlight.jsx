"use client";

import { useEffect } from "react";

// Brilho que segue o mouse nos cards com a classe .spotlight (estilo em globals.css).
// Um único listener para a página toda, limitado a um update por frame; só escreve
// duas variáveis CSS no card que está sob o cursor.
const Spotlight = () => {
  useEffect(() => {
    let frame = 0;
    let lastEvent = null;

    const update = () => {
      frame = 0;
      const target = lastEvent?.target;
      const card = target instanceof Element ? target.closest(".spotlight") : null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${lastEvent.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${lastEvent.clientY - rect.top}px`);
    };

    const onPointerMove = (event) => {
      if (event.pointerType !== "mouse") return;
      lastEvent = event;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
};

export default Spotlight;
