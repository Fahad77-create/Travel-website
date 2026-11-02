"use client";

import useGsap from "@/hooks/useGsap";

export default function Reveal({ as: Tag = "div", stagger = false, y = 40, delay = 0, className = "", children }) {
  const ref = useGsap((gsap, el) => {
    gsap.from(stagger ? el.children : el, {
      y,
      opacity: 0,
      duration: 0.9,
      delay,
      stagger: stagger ? 0.12 : 0,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
