"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "lenis/dist/lenis.css";
import "aos/dist/aos.css";

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
          anchors: { offset: -68 },
        });

    // let other components (e.g. the mobile drawer) pause/resume scrolling
    window.lenis = lenis;

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: reduceMotion,
    });

    // recalc AOS positions once images/fonts settle
    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      lenis?.destroy();
      window.lenis = undefined;
    };
  }, []);

  return children;
}
