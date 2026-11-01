"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Rendered inside the page (not the layout) so its effect runs only after the
// page content has hydrated — AOS adds classes to those elements.
export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    // recalc positions once images and fonts settle
    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
