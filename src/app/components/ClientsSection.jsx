"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Logos from svaarprocess.com, stored in /public/clients/
const clients = [
  { name: "Schott Poonawalla", logo: "/clients/schott-poonawalla.jpg" },
  { name: "CUMI", logo: "/clients/cumi.jpg" },
  { name: "UB Group", logo: "/clients/ub-group.jpg" },
  { name: "Roquette Riddhi Siddhi", logo: "/clients/roquette.png" },
  { name: "Honey Sugar Product", logo: "/clients/honey-sugar.png" },
  { name: "DKN Milk Products", logo: "/clients/dkn-milk.png" },
];

export default function ClientsSection() {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  // flip the cards once, when the grid scrolls into view
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="clients" className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-brand" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2a3140]">Our Clients</span>
            </div>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-[#262d3b] sm:text-[42px] xl:text-[48px]">
              Trusted by Industries <span className="text-brand">Worldwide</span>
            </h2>
          </div>
          <p
            className="max-w-[440px] text-[15px] leading-[1.65] text-[#555d6d] md:text-right md:text-[16px]"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            Repeat orders and global projects reflect customer trust.
          </p>
        </div>

        <ul
          ref={gridRef}
          className="mt-12 grid grid-cols-2 border-l border-t border-[#e8ebf0] sm:grid-cols-3 lg:grid-cols-6"
        >
          {clients.map((c, i) => (
            <li key={c.name} className="client-cell h-[130px] border-b border-r border-[#e8ebf0] lg:h-[150px]">
              <div
                className={`client-card ${inView ? "client-card-in" : ""}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="client-face group grid place-items-center bg-white p-5 transition-colors duration-300 hover:bg-[#fafbfc]">
                  <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={160}
                    height={80}
                    className="h-auto max-h-[64px] w-auto max-w-full object-contain mix-blend-multiply grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="client-face client-face-back bg-[#f3f5f8]" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
