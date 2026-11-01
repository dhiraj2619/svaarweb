import Image from "next/image";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeatureStory() {
  return (
    <section className="bg-[#f7f6f3] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div data-aos="fade-up">
          <h2 className="text-[28px] font-semibold leading-[1.25] text-[#1a1a1a] sm:text-[34px]">
            Zero Liquid Discharge: turning effluent into a resource
          </h2>
          <p className="mt-7 text-[18px] leading-[1.6] text-[#4a4a4a] sm:text-[21px]">
            We help plants recover clean water and saleable solids from their waste streams, so nothing leaves the site
            as effluent and every tonne of feed works harder.
          </p>
          <a
            href="#technologies"
            className="group mt-10 inline-flex items-center gap-3 border-[1.5px] border-[#1a1a1a] px-8 py-4 text-[16px] font-semibold text-[#1a1a1a] transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            Read More
            <Chevron />
          </a>
          {/* Placeholder link — point to SVAAR's brochure PDF once available */}
          <a href="#" className="group mt-9 flex w-fit items-center gap-3 text-[16px] font-semibold text-[#1a1a1a] hover:text-brand">
            Download our company brochure
            <Chevron />
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="relative aspect-[3/2] overflow-hidden rounded-[24px] rounded-tl-none bg-[#e9e9e9]">
          {/* Placeholder photo — swap for an SVAAR ZLD plant image */}
          <Image
            src="/technologies/zero-liquid-discharge.jpg"
            alt="Zero liquid discharge plant"
            fill
            sizes="(min-width:1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
