"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = reduceMotion
      ? null
      : new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          autoRaf: true,
          // smooth-scroll in-page links (#about, #projects…) and clear the sticky navbar
          anchors: { offset: -88 },
        });

    // let other components (e.g. the mobile drawer) pause/resume scrolling
    window.lenis = lenis;

    return () => {
      lenis?.destroy();
      window.lenis = undefined;
    };
  }, []);

  return children;
}
