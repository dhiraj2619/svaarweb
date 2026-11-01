import Image from "next/image";
import Link from "next/link";
import { contact } from "../data/contact";
import { industries } from "../data/industries";
import { technologies } from "../data/technologies";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Contact", href: "#contact" },
];

// Placeholder figure — matches StatsSection, replace with SVAAR's real number
const experienceYears = 25;

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
    // outline glyph: rounded square, lens and flash dot
    stroke: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></>,
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

function Column({ title, children, className = "" }) {
  return (
    <div className={className}>
      <h3 className="border-b border-white/20 pb-4 text-[16px] font-semibold text-white sm:text-[18px]">{title}</h3>
      <ul className="mt-6 space-y-3.5 text-[14px] text-white/70 sm:text-[15px]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a href={href} className="transition-colors hover:text-white">
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-[var(--nav-height)]">
      {/* ---------------- Feature cards: sit half over the page, half over the dark footer ---------------- */}
      <div className="relative bg-[#f7f6f3] px-5 md:px-10 lg:px-16">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#232f3e]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1320px] gap-5 lg:grid-cols-[5fr_7fr] lg:items-start">
          <div className="flex flex-col rounded-[24px] rounded-br-none bg-brand p-9 text-white sm:p-12 lg:min-h-[440px]">
            <p className="max-w-[440px] text-[15px] font-semibold uppercase leading-[1.5] tracking-[0.06em]">
              Process engineering company with more than
            </p>
            <p className="mt-8 text-[96px] font-light leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_white] sm:text-[120px]">
              {experienceYears}
            </p>
            <p className="mt-6 text-[17px] text-white/85">years of experience</p>
            <a
              href="#about"
              className="group mt-auto inline-flex w-fit items-center gap-2 pt-10 text-[16px] font-semibold"
            >
              Learn more
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="rounded-[24px] rounded-br-none bg-[#e9e8e4] p-9 sm:p-12 lg:min-h-[400px]">
            <h2 className="text-[24px] font-semibold text-[#1a1a1a] sm:text-[28px]">Follow SVAAR</h2>
            <ul className="mt-8 grid gap-5 sm:mt-9 sm:grid-cols-2 sm:gap-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="group inline-flex items-center gap-5 text-[17px] font-semibold text-[#1a1a1a]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-[#1a1a1a] transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      {s.stroke ? (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          {s.stroke}
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                          <path d={s.path} />
                        </svg>
                      )}
                    </span>
                    <span className="transition-colors group-hover:text-brand">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- Link columns ---------------- */}
      <div className="bg-[#232f3e] px-5 pb-10 pt-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-10">
          <Column title="Technologies">
            {technologies.map((t) => (
              <FooterLink key={t.title} href="#technologies">{t.title}</FooterLink>
            ))}
          </Column>

          <Column title="Industries">
            {industries.map((ind) => (
              <FooterLink key={ind.title} href="#industries">{ind.title}</FooterLink>
            ))}
          </Column>

          <Column title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
            ))}
          </Column>

          <Column title="Contact" className="col-span-2 lg:col-span-1">
            <li className="leading-relaxed">{contact.address}</li>
            <FooterLink href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</FooterLink>
            <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
          </Column>
        </div>

        {/* ---------------- Bottom bar ---------------- */}
        <div className="mx-auto mt-16 flex max-w-[1320px] flex-col gap-5 border-t border-white/15 pt-8 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="SVAAR home">
            <Image src="/logo/svaarlogo.png" alt="SVAAR" width={250} height={39} className="h-8 w-auto brightness-0 invert" />
          </Link>
          <p>© <CopyrightYear /> SVAAR Process Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="h-3 w-px bg-white/25" />
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
