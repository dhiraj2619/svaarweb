"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Process Technologies", href: "#process-technologies" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Projects");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.lenis?.stop();
    else window.lenis?.start();
    return () => {
      document.body.style.overflow = "";
      window.lenis?.start();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[var(--nav-height)] bg-white shadow-[0_1px_12px_rgba(20,30,50,0.06)]">
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 md:px-10 lg:px-16">
        <Link href="/" aria-label="SVAAR home" className="shrink-0">
          <Image
            src="/logo/svaarlogo.png"
            alt="SVAAR"
            width={250}
            height={39}
            priority
            className="h-7 w-auto md:h-[34px]"
          />
        </Link>

        <div className="flex items-center gap-8 lg:gap-9">
          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((link) => {
              const isActive = active === link.label;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.label)}
                    className={`relative py-2 text-[15.5px] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 ${
                      isActive
                        ? "font-medium text-[#1b2333] after:w-full"
                        : "text-[#4a5263] after:w-0 hover:text-[#1b2333] hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="group flex h-10 w-10 flex-col items-end justify-center gap-[6px]"
          >
            <span className="h-[2px] w-[23px] bg-[#1b2333] transition-all group-hover:bg-brand" />
            <span className="h-[2px] w-[23px] bg-[#1b2333] transition-all group-hover:w-4 group-hover:bg-brand" />
            <span className="h-[2px] w-[23px] bg-[#1b2333] transition-all group-hover:bg-brand" />
          </button>
        </div>
      </nav>

      {/* Slide-in drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#0f1520]/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-sm flex-col bg-white px-8 py-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Image src="/logo/svaarlogo.png" alt="SVAAR" width={250} height={39} className="h-7 w-auto" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="relative h-10 w-10"
          >
            <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#1b2333]" />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#1b2333]" />
          </button>
        </div>

        <ul className="mt-12 flex flex-col">
          {links.map((link, i) => (
            <li key={link.label} className="border-b border-[#eef0f4]">
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className={`flex items-center gap-4 py-4 text-[17px] font-medium transition-colors hover:text-brand ${
                  active === link.label ? "text-brand" : "text-[#1b2333]"
                }`}
              >
                <span className="text-xs font-semibold text-[#9aa2b1]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto skew-x-[-12deg] bg-brand px-6 py-5 text-white">
          <div className="skew-x-[12deg]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
              Get in touch
            </p>
            <p className="mt-1 text-lg font-semibold">Let&apos;s engineer your scale-up.</p>
          </div>
        </div>
      </aside>
    </header>
  );
}
