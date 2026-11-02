"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function useGsap(callback, deps = []) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => callback(gsap, scope.current), scope);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, deps);

  return scope;
}
