"use client";

import { useEffect, useState } from "react";

const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Contador leve (substitui react-countup): conta de 0 até `end` em `duration` ms.
const CountUp = ({ end, duration = 2000, className }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(end * easeOutExpo(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <span className={`tabular-nums ${className ?? ""}`}>{value}</span>;
};

export default CountUp;
