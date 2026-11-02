"use client";

import ResultCard from "@/components/search/ResultCard";
import useGsap from "@/hooks/useGsap";

export default function ResultsList({ items }) {
  const ref = useGsap(
    (gsap, el) => {
      if (el?.children.length) {
        gsap.from(el.children, { y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" });
      }
    },
    [items]
  );

  const message = !items
    ? "Choose your details and press Search to see available options."
    : !items.length
      ? "Nothing matches those details. Set a filter to Any or try a different city."
      : null;

  if (message) {
    return <p className="mt-8 rounded-2xl bg-paper px-5 py-6 text-center text-sm text-ink/65">{message}</p>;
  }

  return (
    <div ref={ref} className="mt-8 grid gap-4">
      {items.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
}
