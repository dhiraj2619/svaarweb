// Figures mirror StatsSection placeholders — replace with SVAAR's real numbers
const highlights = [
  {
    label: "Comprehensive Portfolio",
    text: "Evaporation, drying, zero liquid discharge and process equipment, engineered under one roof",
  },
  {
    label: "Global Presence",
    text: "1,300+ installations and 500+ turnkey projects across 40+ countries",
  },
  {
    label: "Sustainable Technologies",
    text: "Energy-efficient plants that recover water and turn waste streams into value",
  },
];

export default function HighlightsSection() {
  return (
    <section className="bg-[#f7f6f3] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      <ul className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-3 md:gap-0">
        {highlights.map((h, i) => (
          <li
            key={h.label}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`md:px-10 ${i === 0 ? "md:pl-0" : "md:border-l md:border-[#d6d3cc]"} ${
              i === highlights.length - 1 ? "md:pr-0" : ""
            }`}
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-brand">{h.label}</p>
            <p className="mt-6 text-[22px] leading-[1.45] text-[#1a1a1a] sm:text-[26px] lg:text-[30px]">{h.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
