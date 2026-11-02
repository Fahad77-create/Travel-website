"use client";

import useGsap from "@/hooks/useGsap";

export default function Counter({ value, suffix = "", className = "" }) {
  const ref = useGsap((gsap, el) => {
    const state = { current: 0 };
    gsap.to(state, {
      current: value,
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(state.current).toLocaleString("en-US")}${suffix}`;
      },
    });
  });

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
