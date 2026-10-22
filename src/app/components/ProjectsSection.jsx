"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

// Placeholder data — replace images with real project photos (e.g. /projects/mee-gujarat.jpg in /public)
const projects = [
  {
    image: "/banners/banner1.jpg",
    category: "Evaporation",
    title: "Multiple Effect Evaporator Plant",
    location: "Ankleshwar, Gujarat",
    capacity: "50 KLD",
    industry: "Pharmaceutical",
  },
  {
    image: "/banners/banner2.jpg",
    category: "Spray Drying",
    title: "Spray Dryer for Specialty Chemicals",
    location: "Tarapur, Maharashtra",
    capacity: "500 kg/hr",
    industry: "Chemical",
  },
  {
    image: "/banners/banner3.jpg",
    category: "Zero Liquid Discharge",
    title: "ZLD System with MVR Evaporator",
    location: "Tiruppur, Tamil Nadu",
    capacity: "120 KLD",
    industry: "Textile",
  },
  {
    image: "/banners/banner4.jpg",
    category: "ATFD",
    title: "Agitated Thin Film Dryer Unit",
    location: "Vapi, Gujarat",
    capacity: "8 m² HTA",
    industry: "Agrochemical",
  },
  {
    image: "/banners/banner1.jpg",
    category: "Fluid Bed Drying",
    title: "Fluid Bed Dryer & Cooler Line",
    location: "Hyderabad, Telangana",
    capacity: "1.2 TPH",
    industry: "Food & Nutrition",
  },
];

function Arrow({ dir = "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "right" ? <path d="M5 12h14M13 6l6 6-6 6" /> : <path d="M19 12H5M11 6l-6 6 6 6" />}
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="group relative h-[440px] w-[85%] shrink-0 snap-start overflow-hidden rounded-[20px] bg-[#1b2029] shadow-[0_14px_34px_rgba(20,28,45,0.14)] transition-shadow duration-500 hover:shadow-[0_22px_48px_rgba(20,28,45,0.22)] sm:w-[calc((100%-24px)/2)] lg:h-[500px] lg:w-[calc((100%-48px)/3)]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />

      {/* base gradient for legibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,22,30,0.95)_0%,rgba(18,22,30,0.55)_40%,rgba(18,22,30,0)_70%)]" />
      {/* red wash on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(229,43,47,0.9)_0%,rgba(229,43,47,0.35)_45%,rgba(229,43,47,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* index + category */}
      <div className="absolute left-6 top-6 flex items-center overflow-hidden rounded-full bg-white/95 text-[11px] font-semibold uppercase tracking-[0.12em] shadow-[0_4px_14px_rgba(20,28,45,0.15)] backdrop-blur">
        <span className="bg-brand px-3 py-1.5 text-white">{String(index + 1).padStart(2, "0")}</span>
        <span className="px-3.5 py-1.5 text-[#262d3b]">{project.category}</span>
      </div>

      {/* content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
        <p className="flex items-center gap-2 text-[12.5px] text-white/75">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand transition-colors group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {project.location}
        </p>
        <h3 className="mt-2 text-[21px] font-semibold leading-snug text-white lg:text-[23px]">{project.title}</h3>

        {/* specs slide up on hover (always visible on touch) */}
        <div className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="mt-4 flex gap-6 border-t border-white/20 pt-4">
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/60">Capacity</p>
                <p className="mt-1 text-[15px] font-semibold text-white">{project.capacity}</p>
              </div>
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/60">Industry</p>
                <p className="mt-1 text-[15px] font-semibold text-white">{project.industry}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* view button */}
      <a
        href="#projects"
        aria-label={`View ${project.title}`}
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-white group-hover:text-brand lg:bottom-7 lg:right-7"
      >
        <Arrow />
      </a>

      {/* red corner slash */}
      <span className="pointer-events-none absolute right-0 top-0 h-full w-full bg-brand [clip-path:polygon(92%_0,100%_0,100%_7%)] transition-all duration-500 group-hover:[clip-path:polygon(84%_0,100%_0,100%_14%)]" />
    </article>
  );
}

export default function ProjectsSection() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* soft backdrop: warm glow top-left, cool tint bottom-right, faint blueprint grid */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-[#9fb3d1]/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#eef1f5_1px,transparent_1px),linear-gradient(90deg,#eef1f5_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      {/* light-grey band behind the lower half of the cards */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[#f3f5f8]" />
      <span className="pointer-events-none absolute right-0 top-0 h-[120px] w-[160px] bg-brand [clip-path:polygon(55%_0,100%_0,100%_45%,30%_100%,0_100%)]" />
      {/* outlined watermark word */}
      <span className="pointer-events-none absolute right-[4%] top-[70px] hidden select-none text-[150px] font-extrabold uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_#e9ecf1] xl:block">
        Projects
      </span>

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        {/* header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-brand" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2a3140]">Our Portfolio</span>
            </div>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-[#262d3b] sm:text-[42px] xl:text-[48px]">
              Our Recent <span className="text-brand">Projects</span>
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.65] text-[#555d6d] md:text-[16px]">
              Turnkey evaporation, drying and ZLD installations engineered, fabricated and commissioned
              for leading process industries.
            </p>
          </div>

          <div className="flex items-center gap-3" data-aos="fade-left" data-aos-delay="150">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="Previous projects"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#d9dde5] bg-white text-[#262d3b] shadow-[0_4px_14px_rgba(20,28,45,0.06)] transition-all hover:border-brand hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-40"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="Next projects"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_rgba(229,43,47,0.35)] transition-all hover:bg-brand-dark disabled:pointer-events-none disabled:opacity-35"
            >
              <Arrow />
            </button>
          </div>
        </div>

        {/* track */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          ref={trackRef}
          onScroll={update}
          className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto scroll-smooth px-4 pb-8 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* progress + CTA */}
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" data-aos="fade-up">
          <div className="flex flex-1 items-center gap-5">
            <div className="relative h-[3px] w-full max-w-[420px] overflow-hidden rounded-full bg-[#dfe3ea]">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-brand transition-[width] duration-300"
                style={{ width: `${Math.max(progress, 0.08) * 100}%` }}
              />
            </div>
            <span className="text-[13px] font-semibold tabular-nums text-[#6b7383]">
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 self-start text-[14px] font-semibold uppercase tracking-[0.1em] text-[#262d3b] transition-colors hover:text-brand sm:self-auto"
          >
            View All Projects
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dde5] bg-white transition-all group-hover:translate-x-1 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
