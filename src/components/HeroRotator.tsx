"use client";

import { useEffect, useState } from "react";

const words = [
  "POS...",
  "inventory...",
  "sales...",
  "payroll...",
  "compliance...",
  "every store...",
];

export function HeroRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const preferReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (preferReduced) return;

    const id = setInterval(() => {
      setVisible(false);

      window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 220);
    }, 2400);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block w-[11ch] text-left">
      <span
        className={`text-nova-gradient font-semibold transition-all duration-200 ease-out ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
}