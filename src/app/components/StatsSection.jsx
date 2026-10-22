"use client";

import { useEffect, useRef, useState } from "react";

// Placeholder figures — replace with SVAAR's real numbers
const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1300, suffix: "+", label: "Global Installations" },
  { value: 500, suffix: "+", label: "Turnkey Projects" },
  { value: 40, suffix: "+", label: "Countries Served" },
];

const DURATION = 2000;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function Counter({ value, start }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min((now - t0) / DURATION, 1);
      setN(Math.round(easeOutCubic(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return <span className="tabular-nums">{n.toLocaleString("en-US")}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#5a6270]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:px-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center px-4 py-12 text-center lg:py-14 ${
              i % 2 === 1 ? "border-l border-white/15" : ""
            } ${i === 2 ? "lg:border-l lg:border-white/15" : ""} ${i > 1 ? "border-t border-white/15 lg:border-t-0" : ""}`}
          >
            <p className="flex items-start text-[40px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[48px] lg:text-[54px]">
              <Counter value={s.value} start={inView} />
              <span className="ml-0.5 text-brand">{s.suffix}</span>
            </p>
            <span className="mt-4 block h-[2px] w-8 bg-brand" />
            <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.14em] text-white/75 sm:text-[13px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
