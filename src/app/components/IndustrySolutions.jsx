"use client";

import { useState } from "react";
import Image from "next/image";
import { industries } from "../data/industries";

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function IndustrySolutions() {
  const [active, setActive] = useState(0);
  const item = industries[active];

  return (
    <section id="industries" className="bg-white px-5 py-24 md:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-[900px]">
          <h2 className="text-[32px] font-normal leading-tight text-[#1a1a1a] sm:text-[40px] lg:text-[46px]">
            Solutions for Your Industry
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[#555] sm:text-[21px]">
            Integrated process plants for products, by-products and recovery. Every process is evaluated for
            material behaviour, energy use, product quality and long-term operating reliability.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Industry list */}
          <ul className="border-t border-[#dcdcdc]" role="tablist" aria-label="Industries">
            {industries.map((ind, i) => {
              const isActive = i === active;
              return (
                <li key={ind.title} className="border-b border-[#dcdcdc]">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="industry-panel"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-6 py-4 pl-5 pr-2 text-left transition-colors ${
                      isActive ? "bg-[#f7f6f3]" : "hover:bg-[#fafafa]"
                    }`}
                  >
                    <span className={`absolute inset-y-0 left-0 w-[3px] ${isActive ? "bg-brand" : "bg-transparent"}`} />
                    <span className={`w-7 text-[13px] tabular-nums ${isActive ? "text-brand" : "text-[#9a9a9a]"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 text-[18px] sm:text-[20px] ${isActive ? "text-[#1a1a1a]" : "text-[#4a4a4a]"}`}>
                      {ind.title}
                    </span>
                    <ArrowRight className={`h-5 w-5 ${isActive ? "text-brand" : "text-[#c4c4c4] group-hover:text-[#1a1a1a]"}`} />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <div id="industry-panel" role="tabpanel" className="lg:sticky lg:top-[calc(var(--nav-height)+24px)] lg:self-start">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e9e9] [clip-path:polygon(0_0,100%_0,100%_calc(100%-36px),calc(100%-36px)_100%,0_100%)]">
              {industries.map((ind, i) => (
                <Image
                  key={ind.title}
                  src={ind.image}
                  alt={i === active ? ind.title : ""}
                  fill
                  sizes="(min-width:1024px) 55vw, 100vw"
                  className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-[26px] text-[#1a1a1a] sm:text-[30px]">{item.title}</h3>
              <p className="mt-3 max-w-[620px] text-[17px] leading-[1.6] text-[#4a4a4a]">{item.text}</p>

              <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
                Technologies used
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li key={t} className="border border-[#d6d6d6] px-3.5 py-1.5 text-[14px] text-[#2a2a2a]">
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2 text-[16px] font-medium text-brand"
              >
                Discuss a {item.title.toLowerCase()} project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
