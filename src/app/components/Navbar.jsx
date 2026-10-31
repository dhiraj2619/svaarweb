"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EMAIL = "info@svaarprocess.com";
const PHONE = "+91 253 2469032";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Industries We Serve", href: "#industries" },
  { label: "Product", href: "#technologies" },
  { label: "Downloads", href: "#" },
  { label: "Our Clients", href: "#clients" },
  { label: "News", href: "#" },
  { label: "Career", href: "#" },
  { label: "Contact", href: "#contact" },
];

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
      <path d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 6 6l1.5-2 4.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
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
    <>
      {/* Utility bar: scrolls away, main bar stays */}
      <div className="h-[var(--topbar-height)] bg-[#ebebeb] text-[#4b4b4b]">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-end gap-6 px-5 text-[13px] md:gap-8 md:px-10 md:text-[15px] lg:px-16">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[#111]">
            <MailIcon className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">{EMAIL}</span>
          </a>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-[#111]">
            <PhoneIcon className="h-[18px] w-[18px]" />
            <span>{PHONE}</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 h-[var(--nav-height)] border-b border-[#e6e6e6] bg-white">
        <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-10 px-5 md:px-10 lg:px-16">
          <Link href="/" aria-label="SVAAR home" className="shrink-0">
            <Image
              src="/logo/svaarlogo.png"
              alt="SVAAR"
              width={250}
              height={39}
              priority
              className="h-7 w-auto md:h-9"
            />
          </Link>

          <ul className="hidden items-center gap-6 xl:flex 2xl:gap-9">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`whitespace-nowrap text-[16px] transition-colors 2xl:text-[17px] ${
                    active === link.label ? "text-brand" : "text-[#1a1a1a] hover:text-brand"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-end justify-center gap-[6px] xl:hidden"
          >
            <span className="h-[2px] w-6 bg-[#1a1a1a]" />
            <span className="h-[2px] w-6 bg-[#1a1a1a]" />
            <span className="h-[2px] w-6 bg-[#1a1a1a]" />
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 xl:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-sm flex-col bg-white px-8 py-6 transition-transform duration-300 xl:hidden ${
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
              <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#1a1a1a]" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#1a1a1a]" />
            </button>
          </div>

          <ul className="mt-10 flex flex-col">
            {links.map((link) => (
              <li key={link.label} className="border-b border-[#ececec]">
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setOpen(false);
                  }}
                  className={`block py-3.5 text-[17px] ${
                    active === link.label ? "text-brand" : "text-[#1a1a1a] hover:text-brand"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 pt-8 text-[15px] text-[#4b4b4b]">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3">
              <MailIcon className="h-5 w-5" />
              {EMAIL}
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5" />
              {PHONE}
            </a>
          </div>
        </aside>
      </header>
    </>
  );
}
