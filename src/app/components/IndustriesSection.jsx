import Image from "next/image";

// Placeholder stock photos (Pexels, free license) — swap for your own in /public/industries/
const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const industries = [
  { title: "Dairy", tag: "Food Processing", uses: "Evaporation · Spray Drying", image: px(5946717) },
  { title: "Food & Beverage", tag: "Food Processing", uses: "Concentration · Drying", image: px(3025236) },
  { title: "Starch", tag: "Agro Processing", uses: "Flash Drying · Evaporation", image: px(7543105) },
  { title: "Sugar", tag: "Agro Processing", uses: "Evaporation · Crystallisation", image: px(11477544) },
  { title: "Effluent / Waste Water", tag: "Environment", uses: "ZLD · MEE · ATFD", image: px(5712211) },
  { title: "Distillery", tag: "Bio-based", uses: "Spent Wash Evaporation", image: px(10040004) },
  { title: "Pulp & Paper", tag: "Industrial", uses: "Black Liquor Evaporation", image: px(1037775) },
  { title: "Chemical", tag: "Industrial", uses: "Spray · Fluid Bed Drying", image: px(3735763) },
  { title: "Pharmaceutical", tag: "Life Sciences", uses: "Solvent Recovery · Drying", image: px(3683045) },
  { title: "Textile", tag: "Industrial", uses: "ZLD · Brine Recovery", image: px(6717035) },
];

function IndustryCard({ item, hidden }) {
  return (
    <article
      aria-hidden={hidden || undefined}
      className="group relative h-[400px] w-[280px] shrink-0 overflow-hidden rounded-[18px] bg-[#1b2029] shadow-[0_12px_30px_rgba(20,28,45,0.12)] sm:h-[440px] sm:w-[310px]"
    >
      <Image
        src={item.image}
        alt={hidden ? "" : item.title}
        fill
        sizes="310px"
        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,20,28,0.92)_0%,rgba(16,20,28,0.45)_38%,rgba(16,20,28,0)_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(229,43,47,0.85)_0%,rgba(229,43,47,0)_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff6b6e] transition-colors duration-500 group-hover:text-white/90">
          {item.tag}
        </p>
        <h3 className="mt-2 text-[22px] font-bold uppercase leading-tight tracking-[-0.01em] text-white">{item.title}</h3>
        <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.1em] text-white/65">{item.uses}</p>
      </div>

      <span className="pointer-events-none absolute right-0 top-0 h-full w-full bg-brand [clip-path:polygon(90%_0,100%_0,100%_7%)] transition-all duration-500 group-hover:[clip-path:polygon(82%_0,100%_0,100%_13%)]" />
    </article>
  );
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-white pb-36 pt-20 lg:pb-40 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#eef1f5_1px,transparent_1px),linear-gradient(90deg,#eef1f5_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10">
        <div data-aos="fade-up">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-brand" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2a3140]">Sectors</span>
          </div>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-[#262d3b] sm:text-[42px] xl:text-[48px]">
            Industries We <span className="text-brand">Serve</span>
          </h2>
        </div>
        <p
          className="max-w-[440px] text-[15px] leading-[1.65] text-[#555d6d] md:text-right md:text-[16px]"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          Evaporation, drying and ZLD solutions engineered around the process needs of each sector.
        </p>
      </div>

      {/* marquee */}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="marquee group/marquee relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track flex w-max gap-6 py-4 group-hover/marquee:[animation-play-state:paused]">
          {industries.map((item) => (
            <IndustryCard key={item.title} item={item} />
          ))}
          {industries.map((item) => (
            <IndustryCard key={`dup-${item.title}`} item={item} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
