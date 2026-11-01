export default function IntroSection() {
  return (
    <section id="about" className="bg-white px-5 py-24 md:px-10 lg:py-36">
      <div className="mx-auto max-w-[870px]" data-aos="fade-up">
        <h2 className="text-[32px] font-normal leading-[1.25] tracking-[-0.01em] text-[#1a1a1a] sm:text-[44px] lg:text-[54px]">
          A process engineering partner that takes chemistry from the lab to industrial scale
        </h2>
        <hr className="my-10 border-t border-[#8a8a8a]" />
        <p className="max-w-[800px] text-[18px] leading-[1.5] text-[#6b6b6b] sm:text-[22px] lg:text-[26px]">
          We design pilot plants, process technologies and turnkey infrastructure that help
          industries scale with confidence
        </p>
        <a
          href="#technologies"
          className="group mt-12 inline-flex items-center gap-3 border border-[#1a1a1a] px-7 py-3.5 text-[16px] font-medium text-[#1a1a1a] transition-colors hover:border-brand hover:bg-brand hover:text-white"
        >
          Know more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
