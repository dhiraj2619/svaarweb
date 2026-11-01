"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";

const AUTOPLAY_MS = 6000;
const pad = (n) => String(n).padStart(2, "0");
const categories = ["All", ...new Set(projects.map((p) => p.category))];

function Arrow({ dir = "right", className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "right" ? <path d="M5 12h14M13 6l6 6-6 6" /> : <path d="M19 12H5M11 6l-6 6 6 6" />}
    </svg>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border-t border-white/15 pt-3">
      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">{label}</dt>
      <dd className="mt-1 text-[16px] font-semibold text-white">{value}</dd>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const current = list[active] ?? list[0];

  const go = (i) => setActive((i + list.length) % list.length);
  const pickFilter = (c) => {
    setFilter(c);
    setActive(0);
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-brand" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2a3140]">Our Portfolio</span>
            </div>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.015em] text-[#232f3e] sm:text-[44px] xl:text-[52px]">
              Recent <span className="text-brand">projects</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#555d6d] md:text-[17px]">
              Turnkey evaporation, drying and ZLD plants we have engineered, fabricated and commissioned for leading
              process industries.
            </p>
          </div>

          {/* Filters */}
          <div
            role="group"
            aria-label="Filter projects by technology"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:max-w-[560px] lg:flex-wrap lg:justify-end lg:overflow-visible lg:px-0"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => pickFilter(c)}
                className={`shrink-0 border px-4 py-2 text-[13px] font-medium transition-colors ${
                  filter === c
                    ? "border-[#232f3e] bg-[#232f3e] text-white"
                    : "border-[#d9dde5] text-[#3a4150] hover:border-brand hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured project */}
        <div
          className="mt-12 grid overflow-hidden bg-[#232f3e] lg:mt-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
         
        >
          {/* Image stack crossfades between projects */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            {list.map((p) => (
              <Image
                key={p.title}
                src={p.image}
                alt={p === current ? p.title : ""}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={`object-cover transition-[opacity,transform] duration-[1200ms] ease-out ${
                  p === current ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#232f3e]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#232f3e]/40" />

            <span className="absolute left-0 top-0 bg-brand px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
              {current.category}
            </span>
            <span className="absolute bottom-5 left-5 text-[64px] font-bold leading-none text-white/90 tabular-nums lg:bottom-8 lg:left-8 lg:text-[96px]">
              {pad(active + 1)}
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 text-white sm:p-10 lg:p-12">
            <div key={current.title} className="industry-reveal flex-1">
              <p className="flex items-center gap-2 text-[13px] text-white/60">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {current.location}
              </p>
              <h3 className="mt-4 text-[26px] font-semibold leading-[1.2] sm:text-[32px]">{current.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-white/70 sm:text-[16px]">{current.text}</p>

              <dl className="mt-8 grid grid-cols-3 gap-5">
                <Spec label="Capacity" value={current.capacity} />
                <Spec label="Industry" value={current.industry} />
                <Spec label="Year" value={current.year} />
              </dl>
            </div>

            {/* Controls */}
            <div className="mt-10">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-white/50">
                  <span className="text-white">{pad(active + 1)}</span> / {pad(list.length)}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(active - 1)}
                    disabled={list.length < 2}
                    aria-label="Previous project"
                    className="flex h-12 w-12 items-center justify-center border border-white/25 transition-colors hover:border-brand hover:bg-brand disabled:opacity-30"
                  >
                    <Arrow dir="left" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(active + 1)}
                    disabled={list.length < 2}
                    aria-label="Next project"
                    className="flex h-12 w-12 items-center justify-center bg-brand transition-colors hover:bg-brand-dark disabled:opacity-30"
                  >
                    <Arrow />
                  </button>
                </div>
              </div>

              {/* Autoplay progress — advancing is driven by the bar's animation ending */}
              <div className="mt-5 h-[2px] bg-white/15">
                {list.length > 1 && (
                  <span
                    key={`${filter}-${active}`}
                    onAnimationEnd={() => go(active + 1)}
                    className="project-progress block h-full origin-left bg-brand"
                    style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                  />
                )}
              </div>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:text-brand"
              >
                Discuss a similar project
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <ul className="-mx-5 mt-4 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6">
          {list.map((p, i) => {
            const isActive = p === current;
            return (
              <li key={p.title} className="w-[44%] shrink-0 sm:w-[30%] md:w-auto">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${p.title}`}
                  aria-current={isActive}
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eef0f3]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 200px, (min-width: 768px) 33vw, 44vw"
                      className={`object-cover transition-[transform,filter] duration-500 group-hover:scale-105 ${
                        isActive ? "" : "grayscale-[60%]"
                      }`}
                    />
                    <span
                      className={`absolute inset-x-0 bottom-0 h-1 origin-left bg-brand transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </div>
                  <p className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] ${isActive ? "text-brand" : "text-[#8a91a0]"}`}>
                    {pad(i + 1)} · {p.industry}
                  </p>
                  <p className={`mt-1 line-clamp-2 text-[14px] font-medium leading-snug ${isActive ? "text-[#232f3e]" : "text-[#555d6d]"}`}>
                    {p.title}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
