"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ResultCard({ item }) {
  const [chosen, setChosen] = useState(false);

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-shadow hover:shadow-lift sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
        <p className="mt-1 text-sm text-ink/65">{item.subtitle}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.meta.map((entry) => (
            <li key={entry} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/75">
              {entry}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-center">
        <p className="text-right">
          <span className="font-display text-3xl font-bold text-ink">${item.price}</span>
          <span className="block text-xs text-ink/55">{item.unit}</span>
        </p>
        <Button variant={chosen ? "accent" : "dark"} onClick={() => setChosen((value) => !value)}>
          {chosen && <Check className="h-4 w-4" />}
          {chosen ? "Added to trip" : item.action}
        </Button>
      </div>
    </article>
  );
}
