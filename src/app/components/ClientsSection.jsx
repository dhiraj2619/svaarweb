import Image from "next/image";

// Logos from svaarprocess.com, stored in /public/clients/
// Each row repeats the list twice so it is wider than large screens
const clients = [
  { name: "Schott Poonawalla", logo: "/clients/schott-poonawalla.jpg" },
  { name: "CUMI", logo: "/clients/cumi.jpg" },
  { name: "UB Group", logo: "/clients/ub-group.jpg" },
  { name: "Roquette Riddhi Siddhi", logo: "/clients/roquette.png" },
  { name: "Honey Sugar Product", logo: "/clients/honey-sugar.png" },
  { name: "DKN Milk Products", logo: "/clients/dkn-milk.png" },
];

function LogoRow({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[...clients, ...clients].map((c, i) => (
        <li key={`${c.name}-${i}`} className="flex h-[110px] w-[200px] shrink-0 items-center justify-center px-8 sm:w-[240px] lg:h-[130px]">
          <Image
            src={c.logo}
            alt={hidden ? "" : c.name}
            loading="eager"
            width={160}
            height={80}
            className="h-auto max-h-[60px] w-auto max-w-full object-contain mix-blend-multiply grayscale transition-all duration-500 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-white py-24 lg:py-32">
      <div data-aos="fade-up" className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-brand">Our Clients</p>
          <h2 className="mt-5 text-[32px] font-normal leading-tight text-[#1a1a1a] sm:text-[40px] lg:text-[46px]">
            Trusted by industries worldwide
          </h2>
        </div>
        <p className="max-w-[420px] text-[16px] leading-[1.65] text-[#555] sm:text-[17px]">
          Repeat orders and global projects reflect customer trust.
        </p>
      </div>

      {/* Two copies of the row scroll left together, so the loop is seamless */}
      <div data-aos="fade-up" data-aos-delay="100" className="clients-marquee mt-14 overflow-hidden border-y border-[#e4e2dc] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="clients-track flex w-max">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
