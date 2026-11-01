import Image from "next/image";
import { technologies } from "../data/technologies";

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CoreTechnologies() {
  return (
    <section id="technologies" className="bg-[#f7f6f3] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
          <div>
            <h2 className="text-[32px] font-normal leading-tight text-[#1a1a1a] sm:text-[40px] lg:text-[46px]">
              Our Core Technologies
            </h2>
            <p className="mt-4 text-[18px] text-[#555] sm:text-[22px]">Engineered for process performance</p>
          </div>
          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-[16px] font-medium text-[#1a1a1a] hover:text-brand"
          >
            Discuss your process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((t, i) => (
            <li key={t.title} data-aos="fade-up" data-aos-delay={(i % 4) * 100} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <a
                href="#contact"
                className="group flex h-full flex-col border border-[#e4e2dc] bg-white transition-colors hover:border-[#c9c6be]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e9e9]">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 80vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[17px] font-semibold text-[#1a1a1a] transition-colors group-hover:text-brand">
                    {t.title}
                  </h3>
                  <p className="mt-2.5 text-[16px] leading-[1.55] text-[#4a4a4a]">{t.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-brand">
                    Know more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </li>
          ))}

          {/* closing tile fills the last grid slot */}
          <li data-aos="fade-up" data-aos-delay="300" className="w-[80%] shrink-0 snap-start sm:w-auto">
            <a
              href="#contact"
              className="group flex h-full min-h-[300px] flex-col justify-between bg-[#232f3e] p-8 text-white transition-colors hover:bg-brand"
            >
              <span className="text-[13px] uppercase tracking-[0.16em] text-white/70">Custom solutions</span>
              <span>
                <span className="block text-[22px] leading-snug">Need a process we haven&apos;t listed?</span>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium">
                  Talk to our engineers
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
