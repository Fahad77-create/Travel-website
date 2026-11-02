"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function HoverCard({ lift = -8, zoom = 1.08, className = "", children }) {
  const ref = useRef(null);

  const animate = (y, scale) => {
    gsap.to(ref.current, { y, duration: 0.4, ease: "power2.out", overwrite: "auto" });
    gsap.to(ref.current.querySelectorAll("[data-zoom]"), { scale, duration: 0.9, ease: "power2.out", overwrite: "auto" });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={() => animate(lift, zoom)}
      onMouseLeave={() => animate(0, 1)}
    >
      {children}
    </div>
  );
}
