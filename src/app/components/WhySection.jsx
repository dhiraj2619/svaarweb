const R = "var(--brand-red)";

const reasons = [
  {
    title: "Quality & Quality Assurance",
    text: "ISO 9001:2015 processes with stage-wise inspection and documentation.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke={R} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="16" r="10" />
        <path d="m20 10.5 1.7 3.4 3.8.6-2.7 2.6.6 3.7-3.4-1.8-3.4 1.8.6-3.7-2.7-2.6 3.8-.6L20 10.5Z" />
        <path d="m13.5 23.5-3.5 9 4.5-1 2.5 4 3-8.5M26.5 23.5l3.5 9-4.5-1-2.5 4-3-8.5" />
      </svg>
    ),
  },
  {
    title: "In-house Manufacturing",
    text: "Design, fabrication and assembly under one roof for tighter control.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke={R} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="14" r="4" />
        <path d="M17 5v3M17 20v3M8 14h3M23 14h3M10.6 7.6l2.1 2.1M21.3 18.3l2.1 2.1M10.6 20.4l2.1-2.1M21.3 9.7l2.1-2.1" />
        <rect x="5" y="28" width="30" height="6" rx="3" />
        <path d="M10 31h.01M15 31h.01M20 31h.01M25 31h.01M30 31h.01" />
        <path d="M27 20h6v8h-6zM29 16h4v4" />
      </svg>
    ),
  },
  {
    title: "Highly Cost-effective",
    text: "Optimised designs that lower capex and long-term operating cost.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke={R} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5h-6l1.5 3.5M22.5 8.5c4 2 6.5 5.5 6.5 9a8 8 0 0 1-16 0c0-3.5 2.5-7 6.5-9h3Z" />
        <path d="M23 14.5c-.6-.9-1.7-1.5-3-1.5-1.7 0-3 .9-3 2.2 0 3 6 1.6 6 4.6 0 1.3-1.3 2.2-3 2.2-1.3 0-2.5-.6-3-1.5M20 11.5v1.5M20 22v1.5" />
        <path d="M4 30l6-3c1.5-.7 3-.5 4.3.3L19 30h5c1 0 1.8.8 1.8 1.8S25 33.5 24 33.5h-6M25 32l7-3.5c1-.5 2.3 0 2.7 1 .3.8 0 1.7-.7 2.1L23 37.5c-1.4.7-3 .8-4.4.2L10 34l-6 2" />
      </svg>
    ),
  },
  {
    title: "Energy-efficient Design",
    text: "MVR & multi-effect systems engineered for minimum steam and power.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke={R} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4 10 22h9l-2 14 13-19h-9l1-13Z" />
      </svg>
    ),
  },
  {
    title: "Turnkey Execution",
    text: "From process design to erection and commissioning — single-point responsibility.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke={R} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="28" height="26" rx="3" />
        <path d="M6 15h28M13 5v6M27 5v6" />
        <path d="m14 24 4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Lifetime Support",
    text: "Responsive after-sales service, spares and performance upgrades.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke={R} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22v-3a12 12 0 0 1 24 0v3" />
        <rect x="5" y="21" width="6" height="10" rx="2" />
        <rect x="29" y="21" width="6" height="10" rx="2" />
        <path d="M32 31c0 3-3 5-8 5h-3" />
      </svg>
    ),
  },
];

const highlights = [
  { value: "25+", label: "Years of Experience" },
  { value: "1,300+", label: "Global Sites" },
  { value: "ISO", label: "9001:2015 Certified" },
];

export default function WhySection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-[50%_50%]">
        {/* ---------------- Left: brief intro ---------------- */}
        <div className="relative px-5 py-20 md:px-10 lg:py-24 lg:pl-[12%] lg:pr-16 xl:pl-[13%]">
          <div className="flex items-center gap-4" data-aos="fade-up">
            <span className="h-[2px] w-12 bg-brand" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2a3140]">Who We Are</span>
          </div>

          <h2
            className="mt-5 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-[#262d3b] sm:text-[42px] xl:text-[48px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A Brief Intro to <span className="text-brand">SVAAR</span>
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#4a5263] md:text-[16px]" data-aos="fade-up" data-aos-delay="200">
            <p>
              What began as a focused engineering venture is today a trusted name in evaporation and drying
              technology. SVAAR Process Solutions Pvt. Ltd. designs, manufactures and commissions process
              plants that help industries recover more, waste less and scale with confidence.
            </p>
            <p>
              From pilot plants to full-scale industrial production, our solutions span evaporators, spray,
              fluid bed and spin flash dryers, ATFDs, process equipment and Zero Liquid Discharge systems —
              serving pharmaceutical, chemical, food, textile and agrochemical sectors.
            </p>
          </div>

          {/* highlights */}
          <div
            className="mt-9 grid grid-cols-3 divide-x divide-[#e3e6ec] rounded-2xl border border-[#e9ecf1] bg-[#f7f8fa]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {highlights.map((h) => (
              <div key={h.label} className="px-3 py-5 text-center sm:px-5">
                <p className="text-[24px] font-bold leading-none text-brand sm:text-[28px]">{h.value}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[#6b7383] sm:text-[12px]">
                  {h.label}
                </p>
              </div>
            ))}
          </div>

          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="#about"
            className="group mt-10 inline-flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-[#262d3b] transition-colors hover:text-brand"
          >
            Know More About Us
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_rgba(229,43,47,0.35)] transition-transform duration-300 group-hover:rotate-45">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>

        {/* ---------------- Right: Why SVAAR (red panel) ---------------- */}
        <div className="relative px-5 py-20 md:px-10 lg:py-24 lg:pl-[14%] lg:pr-[10%]">
          {/* panel background with slanted left edge */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ec3a3e_0%,#d9252a_55%,#b81b20_100%)] lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]" />
          {/* subtle diagonal line texture */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(-60deg,#fff_0_1px,transparent_1px_26px)] lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]" />
          {/* soft light glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-white/15 blur-[90px]" />
          {/* thin parallel accent slash */}
          <span className="pointer-events-none absolute inset-0 hidden bg-brand/80 lg:block [clip-path:polygon(4.2%_0,5.8%_0,2.2%_40%,0.6%_40%)]" />

          <div className="relative">
            <h2 className="text-center text-[32px] font-bold leading-tight text-white sm:text-[40px] xl:text-[44px]" data-aos="zoom-in">
              Why SVAAR?
            </h2>
            <span className="mx-auto mt-4 block h-[2px] w-12 bg-white/80" />

            <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="group flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 90}
                >
                  <span className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white shadow-[0_10px_26px_rgba(90,10,12,0.3)] transition-transform duration-300 group-hover:-translate-y-1.5">
                    <span className="absolute inset-[-7px] rounded-full border border-white/35 transition-all duration-500 group-hover:inset-[-11px] group-hover:border-white/60" />
                    <span className="h-10 w-10 transition-transform duration-300 group-hover:scale-110">{r.icon}</span>
                  </span>
                  <h3 className="mt-6 text-[15px] font-semibold leading-snug text-white md:text-[16.5px]">{r.title}</h3>
                  <p className="mt-2 max-w-[210px] text-[12.5px] leading-[1.6] text-white/80">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
