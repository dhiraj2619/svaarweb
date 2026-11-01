"use client";

import { useState } from "react";
import Image from "next/image";
import { industries } from "../data/industries";
import { technologies } from "../data/technologies";

const tabs = [
  {
    id: "industries",
    label: "Industries we serve",
    heading: "Solutions for your industry",
    intro: "Integrated process plants for products, by-products and recovery, built around how your material behaves.",
    items: industries,
    href: "#contact",
  },
  {
    id: "technologies",
    label: "Technology finder",
    heading: "Explore our core technologies",
    intro: "Find the evaporation, drying and recovery technology that fits your process.",
    items: technologies,
    href: "#technologies",
  },
];

export default function IndustrySolutions() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="industries" className="relative isolate overflow-hidden py-24 lg:py-32">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image src="/banners/banner3.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#111316]/30" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-16" data-aos="fade-up">
        {/* Tabs */}
        <div role="tablist" aria-label="Explore SVAAR" className="flex">
          {tabs.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`explore-tab-${t.id}`}
                aria-selected={isActive}
                aria-controls="explore-panel"
                onClick={() => setActive(i)}
                className={`px-5 py-4 text-left text-[15px] font-medium text-white transition-colors sm:px-8 sm:py-6 sm:text-[20px] lg:px-14 lg:py-8 lg:text-[24px] ${
                  isActive ? "bg-[#232f3e]" : "bg-brand hover:bg-brand-dark"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="explore-panel"
          role="tabpanel"
          aria-labelledby={`explore-tab-${tab.id}`}
          className="bg-[#232f3e] px-5 py-12 text-white sm:px-8 lg:px-14 lg:py-20"
        >
          <div key={tab.id} className="industry-reveal">
            <h2 className="text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-[48px] lg:text-[64px]">
              {tab.heading}
            </h2>
            <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-white/80 sm:text-[19px]">{tab.intro}</p>

            <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:mt-16 lg:grid-cols-5 lg:gap-x-7 lg:gap-y-14">
              {tab.items.map((item) => (
                <li key={item.title}>
                  <a href={tab.href} className="group block" title={item.text}>
                    <div className="relative aspect-square overflow-hidden bg-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 240px, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold uppercase leading-snug tracking-wide sm:text-[17px]">
                      {item.title}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
