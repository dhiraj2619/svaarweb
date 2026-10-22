import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Process Technologies", href: "#process-technologies" },
  { label: "Industries", href: "#industries" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const technologies = [
  "Evaporation",
  "Spray Drying",
  "Fluid Bed Drying",
  "Spin Flash Drying",
  "Agitated Thin Film Drying",
  "Process Equipment",
  "Zero Liquid Discharge",
];

// Placeholder contact details — replace with SVAAR's real ones
const contact = {
  address: "Plot No. 00, Industrial Area, City, State – 000000, India",
  phone: "+91 00000 00000",
  email: "info@svaar.com",
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M14 8.5V6.8c0-.8.5-1 1-1h2.5V2h-3.3C10.6 2 10 4.6 10 6.3v2.2H7.5V12H10v10h4V12h3l.5-3.5H14Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2ZM17.1 5.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 2c-2.7 0-3 0-4.1.1C4.3 2.2 2.2 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.1 3.6 2.2 5.7 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.1 5.7-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.1-3.6-2.2-5.7-5.8-5.8C15 2 14.7 2 12 2Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15V9l5.2 3-5.2 3Z",
  },
];

// cacheComponents is on, so the current year must be computed inside a cached scope (resolved at build time)
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

function Heading({ children }) {
  return (
    <h3 className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#262d3b]">
      {children}
      <span className="mt-3 block h-[2px] w-8 bg-brand" />
    </h3>
  );
}

function ContactRow({ icon, children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-brand">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <span className="pt-1.5">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#f3f5f8]">
      {/* ---------------- CTA band ---------------- */}
      {/* AOS on the outer wrapper — the inner box already uses a transform to overlap the section above */}
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10" data-aos="zoom-in-up" data-aos-offset="0">
        <div className="relative -translate-y-1/2 overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#ec3a3e_0%,#d9252a_60%,#b81b20_100%)] px-7 py-10 shadow-[0_24px_50px_-18px_rgba(200,30,35,0.55)] md:px-12 md:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(-60deg,#fff_0_1px,transparent_1px_26px)]" />
          <span className="pointer-events-none absolute -right-4 top-0 h-full w-[140px] bg-white/10 [clip-path:polygon(60%_0,100%_0,40%_100%,0_100%)]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">Have a project in mind?</p>
              <h2 className="mt-2 text-[26px] font-bold leading-tight text-white sm:text-[32px] lg:text-[36px]">
                Let&apos;s engineer your next plant.
              </h2>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 self-start rounded-full bg-white py-2 pl-6 pr-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#262d3b] shadow-lg transition-colors hover:text-brand md:self-auto"
            >
              Get in Touch
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- Columns ---------------- */}
      <div className="mx-auto -mt-6 grid max-w-[1320px] gap-12 px-5 pb-14 md:grid-cols-2 md:px-10 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr] lg:gap-10">
        <div data-aos="fade-up">
          <Link href="/" aria-label="SVAAR home">
            <Image src="/logo/svaarlogo.png" alt="SVAAR" width={250} height={39} className="h-9 w-auto" />
          </Link>
          <p className="mt-6 max-w-[340px] text-[14px] leading-[1.75] text-[#555d6d]">
            SVAAR Process Solutions Pvt. Ltd. is an ISO 9001:2015 company delivering evaporation, drying and
            Zero Liquid Discharge solutions — from pilot plants to industrial production.
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3ea] bg-white text-[#4a5263] transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Heading>Quick Links</Heading>
          <ul className="mt-6 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="group inline-flex items-center gap-2 text-[14px] text-[#555d6d] transition-colors hover:text-brand">
                  <span className="h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-3" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Heading>Technologies</Heading>
          <ul className="mt-6 space-y-3">
            {technologies.map((t) => (
              <li key={t}>
                <a href="#process-technologies" className="group inline-flex items-center gap-2 text-[14px] text-[#555d6d] transition-colors hover:text-brand">
                  <span className="h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-3" />
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Heading>Contact Us</Heading>
          <ul className="mt-6 space-y-4 text-[14px] leading-relaxed text-[#555d6d]">
            <ContactRow icon={<><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>}>
              {contact.address}
            </ContactRow>
            <ContactRow icon={<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />}>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-brand">{contact.phone}</a>
            </ContactRow>
            <ContactRow icon={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>}>
              <a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a>
            </ContactRow>
          </ul>
        </div>
      </div>

      {/* ---------------- Bottom bar ---------------- */}
      <div className="border-t border-[#e1e5eb] bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-5 py-5 text-[13px] text-[#6b7383] md:flex-row md:px-10">
          <p>© <CopyrightYear /> SVAAR Process Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-brand">Privacy Policy</a>
            <span className="h-3 w-px bg-[#d9dde5]" />
            <a href="#" className="hover:text-brand">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
