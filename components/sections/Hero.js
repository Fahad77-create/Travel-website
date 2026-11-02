"use client";

import { ShieldCheck, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useGsap from "@/hooks/useGsap";

const lines = ["One booking.", "Every part", "of the trip."];

export default function Hero() {
  const ref = useGsap((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from("[data-bg]", { scale: 1.25, duration: 2.2, ease: "power2.out" }, 0)
      .from("[data-line]", { yPercent: 115, duration: 1.2, stagger: 0.14 }, 0.3)
      .from("[data-fade]", { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.9)
      .from("[data-float]", { scale: 0.8, opacity: 0, duration: 1, stagger: 0.2 }, 1.2);

    gsap.to("[data-float]", {
      y: "+=14",
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.6,
      delay: 2.2,
    });

    gsap.to("[data-plane]", { x: 18, y: -10, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
  });

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-ink pb-40 pt-36 sm:pt-44 lg:pb-52">
      <div
        data-bg
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=70)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {lines.map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <span data-line className="block">{line}</span>
              </span>
            ))}
          </h1>
          <p data-fade className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Get your visa, flights, hotel and car from a single team. Search below, compare options and start planning in minutes.
          </p>
          <div data-fade className="mt-9 flex flex-wrap gap-4">
            <Button href="#book" variant="accent">Search trips</Button>
            <Button href="#destinations" variant="outline">See destinations</Button>
          </div>
        </div>

        <div className="relative hidden h-80 lg:block">
          <div data-float className="absolute right-0 top-4 w-64 rounded-2xl bg-white p-5 shadow-lift">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky/10 text-sky">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Visa approved</p>
                <p className="text-xs text-ink/60">United Arab Emirates, 3 days</p>
              </div>
            </div>
          </div>
          <div data-float className="absolute bottom-2 left-6 w-72 rounded-2xl bg-white p-5 shadow-lift">
            <div className="flex items-center justify-between text-sm font-semibold text-ink">
              <span>Karachi</span>
              <span data-plane className="text-sky"><Plane className="h-5 w-5" /></span>
              <span>Dubai</span>
            </div>
            <p className="mt-3 text-xs text-ink/60">Emirates, 08:15 to 10:00, from $210</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
