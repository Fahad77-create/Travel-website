"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useGsap from "@/hooks/useGsap";
import { brand, navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ref = useGsap((gsap, el) => {
    gsap.from(el, { yPercent: -100, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "bg-ink/95 shadow-lift backdrop-blur" : "bg-transparent"}`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 font-display text-2xl font-bold text-white">
          <Compass className="h-7 w-7 text-amber" />
          {brand}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/80 transition-colors hover:text-amber">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#book" variant="accent">Plan my trip</Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-full p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <Container className="flex flex-col gap-1 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#book" variant="accent" className="mt-3" onClick={() => setOpen(false)}>
            Plan my trip
          </Button>
        </Container>
      )}
    </header>
  );
}
