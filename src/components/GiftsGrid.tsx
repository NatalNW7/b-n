"use client";

import { useEffect, useRef } from "react";

interface GiftsGridProps {
  children: React.ReactNode;
}

export default function GiftsGrid({ children }: GiftsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(".gift-card");

    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gifts-grid" id="gifts-grid" ref={gridRef}>
      {children}
    </div>
  );
}
