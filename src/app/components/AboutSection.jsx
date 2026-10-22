// Placeholder stock clip — "Aerial view of industrial facility with pipes" (Pexels, free license).
// Swap for your own, e.g. "/videos/intro.mp4" in /public.
const INTRO_VIDEO = "https://videos.pexels.com/video-files/33649978/14299421_1280_720_60fps.mp4";

/* ---------------- Icons (stroke icons, red accents) ---------------- */
const R = "var(--brand-red)";
const D = "#2a3140";

const icons = {
  vision: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24s7.5-12 20-12 20 12 20 12-7.5 12-20 12S4 24 4 24Z" stroke={D} />
      <circle cx="24" cy="24" r="6.5" stroke={R} />
      <circle cx="24" cy="24" r="2" fill={R} stroke="none" />
      <path d="M24 6v3M12 9l2 2.5M36 9l-2 2.5" stroke={D} />
    </svg>
  ),
  mission: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="26" r="16" stroke={D} />
      <circle cx="22" cy="26" r="10" stroke={R} />
      <circle cx="22" cy="26" r="4" stroke={D} />
      <path d="M22 26 38 10M33 9h6v6" stroke={R} />
    </svg>
  ),
  global: (
    <svg viewBox="0 0 32 32" fill="none" stroke={R} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 3v3.5M16 25.5V29M3 16h3.5M25.5 16H29M6.8 6.8l2.5 2.5M22.7 22.7l2.5 2.5M6.8 25.2l2.5-2.5M22.7 9.3l2.5-2.5" />
      <circle cx="16" cy="16" r="9.5" />
    </svg>
  ),
  force: (
    <svg viewBox="0 0 32 32" fill="none" stroke={R} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12l5-4 5 2 4-2 4 2 5-2 5 4" />
      <path d="M7 8v12l6 5c1 .8 2.4.8 3.2-.2l5.8-6.8V8" />
      <path d="m12 15 4 3M14 13l4 3" />
    </svg>
  ),
  partners: (
    <svg viewBox="0 0 32 32" fill="none" stroke={R} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3 5 7v8c0 7 5 12 11 14 6-2 11-7 11-14V7L16 3Z" />
      <path d="m11 16 3.5 3.5L21 13" />
    </svg>
  ),
  evaporation: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 4c-2 2.5 2 4 0 7M24 4c-2 2.5 2 4 0 7M31 4c-2 2.5 2 4 0 7" stroke={R} />
      <rect x="9" y="16" width="30" height="24" rx="3" stroke={D} />
      <path d="M5 20h4M39 20h4M14 44v-4M34 44v-4" stroke={D} />
      <path d="M14 28h20M14 33h20" stroke={R} />
    </svg>
  ),
  spray: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8h32L28 22v6h-8v-6L8 8Z" stroke={D} />
      <path d="M24 4v4" stroke={D} />
      <g fill={R} stroke="none">
        <circle cx="24" cy="33" r="1.6" /><circle cx="18" cy="35" r="1.6" /><circle cx="30" cy="35" r="1.6" />
        <circle cx="13" cy="39" r="1.6" /><circle cx="21" cy="40" r="1.6" /><circle cx="27" cy="40" r="1.6" />
        <circle cx="35" cy="39" r="1.6" /><circle cx="17" cy="44" r="1.6" /><circle cx="31" cy="44" r="1.6" />
        <circle cx="24" cy="45" r="1.6" />
      </g>
    </svg>
  ),
  fluidBed: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h20M16 4v4h16V4" stroke={D} />
      <path d="M12 8h24v22l-6 6H18l-6-6V8Z" stroke={D} />
      <path d="M18 36l-4 8M30 36l4 8" stroke={D} />
      <g fill={R} stroke="none">
        <circle cx="19" cy="17" r="1.8" /><circle cx="27" cy="15" r="1.8" /><circle cx="23" cy="22" r="1.8" />
        <circle cx="30" cy="23" r="1.8" /><circle cx="17" cy="26" r="1.8" /><circle cx="25" cy="29" r="1.8" />
      </g>
    </svg>
  ),
  spinFlash: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6h24v4H12zM14 10h20v14l-7 10h-6l-7-10V10Z" stroke={D} />
      <path d="M21 34v4h6v-4M18 26l-6 18M30 26l6 18" stroke={D} />
      <g fill={R} stroke="none">
        <circle cx="19" cy="15" r="1.8" /><circle cx="27" cy="16" r="1.8" /><circle cx="23" cy="20" r="1.8" />
        <circle cx="21" cy="26" r="1.8" /><circle cx="27" cy="24" r="1.8" />
      </g>
    </svg>
  ),
  atfd: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="10" stroke={D} />
      <circle cx="24" cy="24" r="4" stroke={R} />
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke={D} />
      <path d="M38 12a19 19 0 0 0-11-7M10 36a19 19 0 0 0 11 7" stroke={R} />
      <path d="m36 6 2 6-6 1M12 42l-2-6 6-1" stroke={R} />
    </svg>
  ),
  equipment: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="34" height="12" rx="6" stroke={D} />
      <rect x="8" y="26" width="34" height="12" rx="6" stroke={D} />
      <path d="M34 8v12M36 26v12" stroke={R} />
      <path d="M14 20v6M30 20v6" stroke={D} />
      <path d="M12 44h28" stroke={R} />
    </svg>
  ),
  zld: (
    <svg viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 13c4.5 5.5 7 9 7 12.5a7 7 0 0 1-14 0C17 22 19.5 18.5 24 13Z" stroke={D} />
      <path d="M21 27a3 3 0 0 0 3 3" stroke={R} />
      <path d="M40 18A17 17 0 0 0 15 8.5M8 30a17 17 0 0 0 25 9.5" stroke={R} />
      <path d="m15 4 0 5 5 1M33 44l0-5-5-1" stroke={R} />
    </svg>
  ),
};

const stats = [
  { icon: icons.global, label: "Global Projects" },
  { icon: icons.force, label: "Expert Force" },
  { icon: icons.partners, label: "Strategic Partners" },
];

const pillars = [
  {
    icon: icons.vision,
    title: "Our Vision",
    text: "To be the global benchmark in sustainable HVAC engineering by integrating cutting-edge technology with precision execution.",
  },
  {
    icon: icons.mission,
    title: "Our Mission",
    text: "Delivering energy-efficient climate solutions that optimize industrial productivity and human comfort across 1,300+ global sites.",
  },
];

const techRow1 = [
  { icon: icons.evaporation, label: "Evaporation" },
  { icon: icons.spray, label: "Spray Drying" },
  { icon: icons.fluidBed, label: "Fluid Bed Drying" },
  { icon: icons.spinFlash, label: "Spin Flash Drying" },
];

const techRow2 = [
  { icon: icons.atfd, label: "Agitated Thin Film Drying" },
  { icon: icons.equipment, label: "Process Equipment" },
  { icon: icons.zld, label: "Zero Liquid Discharge" },
];

function TechCard({ icon, label }) {
  return (
    <a
      href="#process-technologies"
      className="group relative flex min-h-[86px] items-center gap-5 overflow-hidden rounded-[22px] bg-white/90 py-3.5 pl-4 pr-10 shadow-[0_6px_22px_rgba(30,40,60,0.07)] ring-1 ring-[#e9ecf1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(30,40,60,0.12)] md:min-h-[96px] md:pl-5"
    >
      <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#fdecec] transition-colors duration-300 group-hover:bg-[#fbdcdc] md:h-[64px] md:w-[64px]">
        <span className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 md:h-9 md:w-9">{icon}</span>
      </span>
      <span className="h-10 w-px shrink-0 bg-[#d9dde5]" />
      <span className="text-[15px] font-medium leading-snug text-[#232a38] md:text-[16px]">{label}</span>
      {/* red corner slash */}
      <span className="absolute bottom-[-6px] right-4 h-12 w-[9px] skew-x-[-32deg] bg-brand transition-all duration-300 group-hover:h-16" />
    </a>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f5f6f9]">
      {/* thin divider between hero and this section */}
      <span className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d9dde5] to-transparent" />

      {/* ---------------- Top: intro + dark stats panel ---------------- */}
      <div className="relative grid lg:grid-cols-[54%_46%] lg:pt-20 xl:pt-24">
        {/* Left copy */}
        <div className="relative z-10 self-center px-5 pb-12 pt-16 md:px-10 lg:pb-6 lg:pl-[12%] lg:pr-6 lg:pt-0 xl:pl-[13%]">
          <div className="flex items-center gap-4" data-aos="fade-up">
            <span className="h-[2px] w-12 bg-brand" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2a3140]">
              About SVAAR
            </span>
          </div>

          <h2
            className="mt-5 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] sm:text-[42px] xl:text-[48px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="block text-[#262d3b]">Engineering Progress.</span>
            <span className="block text-brand">Enabling Scale.</span>
          </h2>

          <p
            className="mt-5 max-w-[540px] text-[15px] leading-[1.65] text-[#3a4252] md:text-[16px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SVAAR Process Solutions Pvt. Ltd., is ISO 9001:2015 company who delivers best solutions at
            optimum cost within Evaporation and Drying Technology.
          </p>

          <div className="mt-9 grid gap-8 sm:grid-cols-2 sm:gap-0">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`flex gap-4 ${i === 1 ? "sm:border-l sm:border-[#d9dde5] sm:pl-6" : "sm:pr-6"}`}
                data-aos="fade-up"
                data-aos-delay={300 + i * 120}
              >
                <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#fdecec]">
                  <span className="h-8 w-8">{p.icon}</span>
                </span>
                <div className="border-l border-[#d9dde5] pl-4">
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.02em] text-[#262d3b]">{p.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-[#555d6d]">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right dark panel */}
        <div
          className="relative min-h-[440px] lg:min-h-[480px] lg:drop-shadow-[0_24px_40px_rgba(20,28,45,0.22)]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="absolute inset-0 overflow-hidden bg-[#232831] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
            <video
              className="absolute inset-0 h-full w-full object-cover object-[75%_center] saturate-[0.9]"
              src={INTRO_VIDEO}
              poster="/banners/banner1.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#232831_0%,#232831_38%,rgba(35,40,49,0.75)_58%,rgba(35,40,49,0.15)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#232831]/60 via-transparent to-[#232831]/30" />
          </div>

          {/* red slashes */}
          {/* parallel to the panel's diagonal edge (18% → 0%) */}
          <span className="pointer-events-none absolute inset-0 hidden bg-brand lg:block [clip-path:polygon(11.5%_8%,14.5%_8%,5.5%_58%,2.5%_58%)]" />
          <span className="pointer-events-none absolute right-0 top-0 h-[70px] w-[90px] bg-brand [clip-path:polygon(45%_0,100%_0,100%_40%,20%_100%,0_100%)] md:h-[90px] md:w-[120px]" />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 md:px-10 lg:pl-[20%] lg:pr-8">
            <p className="text-[64px] font-bold leading-none text-white md:text-[76px]" data-aos="zoom-in" data-aos-delay="350">
              25+
            </p>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90">
              Years of Industry Experience
            </p>
            <span className="mt-4 block h-[2px] w-12 bg-brand" />

            <ul className="mt-7 space-y-4">
              {stats.map((s, i) => (
                <li
                  key={s.label}
                  className="flex items-center gap-4 text-[14px] text-white/90"
                  data-aos="fade-left"
                  data-aos-delay={450 + i * 100}
                >
                  <span className="h-6 w-6 shrink-0">{s.icon}</span>
                  {s.label}
                </li>
              ))}
            </ul>

            <span className="mt-8 block h-px w-[60%] max-w-[260px] bg-white/20" />
            <p className="mt-5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-white">
              With Major HVAC Brands
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- Bottom: core technologies ---------------- */}
      <div id="process-technologies" className="relative mx-auto max-w-[1320px] px-5 pb-20 pt-14 md:px-10 lg:pt-16">
        <div className="flex items-center gap-5 md:gap-8" data-aos="fade-up">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand" />
          <h2 className="text-center text-[22px] font-bold uppercase tracking-[0.01em] text-[#262d3b] md:text-[28px]">
            Our <span className="text-brand">Core</span> Technologies
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* AOS sits on a wrapper so it doesn't fight the card's hover transform */}
          {techRow1.map((t, i) => (
            <div key={t.label} data-aos="fade-up" data-aos-delay={i * 100}>
              <TechCard {...t} />
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-6 lg:gap-10">
          {techRow2.map((t, i) => (
            <div key={t.label} data-aos="fade-up" data-aos-delay={i * 100}>
              <TechCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
