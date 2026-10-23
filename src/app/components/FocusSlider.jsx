"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

// Placeholder stock photos (Pexels, free license) — swap for your own in /public/focus/
const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

const Icon = ({ children }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        {children}
    </svg>
);

const icons = {
    drop: <Icon><path d="M12 3.5s-5.5 6-5.5 10a5.5 5.5 0 0 0 11 0c0-4-5.5-10-5.5-10Z" /><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" /></Icon>,
    coin: <Icon><circle cx="12" cy="12" r="7.5" /><path d="M14.5 9.5c-.4-.9-1.4-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1.1 0-2.1-.6-2.5-1.5M12 6.5V8m0 8v1.5" /></Icon>,
    bolt: <Icon><path d="M13 3 6 13.5h5.5L10.5 21 18 10.5h-5.5L13 3Z" /></Icon>,
    flask: <Icon><path d="M9.5 3.5h5M10.5 3.5v5.2L5.6 17.6A2 2 0 0 0 7.4 20.5h9.2a2 2 0 0 0 1.8-2.9l-4.9-8.9V3.5" /><path d="M8 14.5h8" /></Icon>,
    trend: <Icon><path d="M4 17l5-5 4 4 7-8" /><path d="M15 8h5v5" /></Icon>,
    clock: <Icon><circle cx="12" cy="12" r="8" /><path d="M12 7.5V12l3 2" /></Icon>,
    sliders: <Icon><path d="M5 20v-6M5 10V4M12 20v-8M12 8V4M19 20v-4M19 12V4M3 14h4M10 8h4M17 16h4" /></Icon>,
    target: <Icon><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></Icon>,
    pilot: <Icon><rect x="4" y="9" width="6" height="11" rx="1" /><rect x="14" y="5" width="6" height="15" rx="1" /><path d="M10 14h4M7 9V6M17 5V3" /></Icon>,
    chart: <Icon><path d="M4 20h16M6 16l4-5 3 3 5-7" /><circle cx="18" cy="7" r="1.2" /></Icon>,
    rocket: <Icon><path d="M12 15l-3-3c1.5-4.5 4.5-7.5 10-8-.5 5.5-3.5 8.5-8 10Z" /><path d="M9 12H5.5L8 9h3.5M12 15v3.5L15 16v-3.5M7 17c-1.5.5-2 2-2 3 1 0 2.5-.5 3-2" /></Icon>,
    loop: <Icon><path d="M19 12a7 7 0 0 1-12 5M5 12a7 7 0 0 1 12-5" /><path d="M17 3.5V7h-3.5M7 20.5V17h3.5" /></Icon>,
    key: <Icon><circle cx="8" cy="15" r="4" /><path d="M11 12l8-8M16 7l2 2M14 9l1.5 1.5" /></Icon>,
    calendar: <Icon><rect x="4" y="5.5" width="16" height="14" rx="1.5" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M9 14.5l2 2 4-4" /></Icon>,
    badge: <Icon><circle cx="12" cy="10" r="6" /><path d="M9.5 10l1.8 1.8 3.2-3.3M8.5 15l-1.5 5.5 5-2 5 2-1.5-5.5" /></Icon>,
    play: <Icon><circle cx="12" cy="12" r="8" /><path d="M10.5 9v6l4.5-3-4.5-3Z" /></Icon>,
    weld: <Icon><path d="M4 20l7-7M9.5 8.5l6 6M13 5l6 6-3 3-6-6 3-3Z" /></Icon>,
    gear: <Icon><circle cx="12" cy="12" r="3" /><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" /></Icon>,
    shield: <Icon><path d="M12 3.5l7 2.5v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-2.5Z" /><path d="M9 12l2 2 4-4" /></Icon>,
    headset: <Icon><path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" /><rect x="3.5" y="13" width="4" height="6" rx="1.2" /><rect x="16.5" y="13" width="4" height="6" rx="1.2" /><path d="M18.5 19c0 1.5-2 2-4.5 2" /></Icon>,
};

const slides = [
    {
        image: px(1666021),
        title: "Sustainability",
        text: "SVAAR integrates resource recovery, water reuse and energy efficiency.",
        items: [
            { icon: "drop", title: "Zero Liquid Discharge", text: "Turning wastewater into reusable water and solids." },
            { icon: "coin", title: "Waste-To-Wealth Systems", text: "Recovering value from sludge, ash, brine and residues." },
            { icon: "bolt", title: "Energy-Efficient Thermal Systems", text: "Reducing steam and utility use through integrated design." },
            { icon: "flask", title: "By-Product Valorisation", text: "Turning streams into usable salts, minerals, powders and fuels." },
        ],
    },
    {
        image: px(257700),
        title: "Value",
        text: "We engineer for measurable returns across the entire plant lifecycle.",
        items: [
            { icon: "trend", title: "Lower Lifecycle Cost", text: "Optimised CAPEX and OPEX from concept to commissioning." },
            { icon: "clock", title: "Faster Payback", text: "Energy and recovery gains that pay for themselves sooner." },
            { icon: "sliders", title: "Right-Sized Design", text: "Equipment matched to real capacity, not guesswork." },
            { icon: "target", title: "Maximum Yield", text: "Higher product recovery from every tonne of feed." },
        ],
    },
    {
        image: px(1287145),
        title: "Aspire",
        text: "We push process technology forward, from lab bench to pilot to plant.",
        items: [
            { icon: "pilot", title: "Pilot Plant Trials", text: "Validating processes on real feed before full investment." },
            { icon: "chart", title: "Process Simulation", text: "Modelling heat and mass balances to optimise every stage." },
            { icon: "rocket", title: "New Technology Adoption", text: "Bringing advanced evaporation and drying methods to industry." },
            { icon: "loop", title: "Continuous Improvement", text: "Learning from every project to build better plants." },
        ],
    },
    {
        image: px(2760241),
        title: "Achieve",
        text: "We deliver projects on time, on specification and ready to run.",
        items: [
            { icon: "key", title: "Turnkey Execution", text: "Design, fabrication, erection and commissioning under one roof." },
            { icon: "calendar", title: "On-Time Delivery", text: "Disciplined project management with clear milestones." },
            { icon: "badge", title: "Performance Guarantees", text: "Plants that meet the numbers we commit to." },
            { icon: "play", title: "Smooth Start-Up", text: "Commissioning support and hands-on operator training." },
        ],
    },
    {
        image: px(2569842),
        title: "Reliability",
        text: "We build systems that run continuously, safely and predictably.",
        items: [
            { icon: "weld", title: "Robust Fabrication", text: "Quality materials and certified welding for long service life." },
            { icon: "gear", title: "Automation & Controls", text: "PLC and SCADA integration for stable, repeatable operation." },
            { icon: "shield", title: "Safety By Design", text: "HAZOP-led engineering that protects people and plant." },
            { icon: "headset", title: "Lifetime Support", text: "Spares, service and upgrades long after handover." },
        ],
    },
];

const STRIPS = 6;
const AUTOPLAY_MS = 7000;
const TEXT_OUT_MS = 450;

// Background split into vertical strips; each strip is a two-faced card that flips 180°.
// Before every flip the face currently turned away is loaded with the next slide.
function FlipStage({ flips, faces }) {
    return (
        <div className="focus-stage absolute inset-0">
            {Array.from({ length: STRIPS }, (_, i) => (
                <div
                    key={i}
                    className="focus-strip absolute inset-y-0"
                    style={{
                        left: `${(i * 100) / STRIPS}%`,
                        width: `calc(${100 / STRIPS}% + 1px)`,
                        transform: `rotateY(${flips * 180}deg)`,
                        transitionDelay: `${i * 90}ms`,
                    }}
                >
                    {faces.map((slideIndex, face) => (
                        <div key={face} className={`focus-face ${face === 1 ? "focus-face-back" : ""}`}>
                            <div className="absolute inset-y-0" style={{ width: `${STRIPS * 100}%`, left: `${-i * 100}%` }}>
                                <Image src={slides[slideIndex].image} alt="" fill sizes="100vw" quality={80} className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* preload every slide so a flip never reveals a blank face */}
            <div className="hidden">
                {slides.map((s) => (
                    <Image key={s.image} src={s.image} alt="" width={16} height={9} sizes="100vw" quality={80} />
                ))}
            </div>
        </div>
    );
}

export default function FocusSlider() {
    const [flips, setFlips] = useState(0);
    const [faces, setFaces] = useState([0, 1]); // [front, back]
    const [current, setCurrent] = useState(0);
    const [shown, setShown] = useState(0); // slide whose text is on screen
    const [leaving, setLeaving] = useState(false);
    const [paused, setPaused] = useState(false);
    const textTimer = useRef(null);

    const goTo = useCallback(
        (index) => {
            if (index === current || leaving) return;
            const hidden = flips % 2 === 0 ? 1 : 0;
            setFaces((f) => (hidden === 1 ? [f[0], index] : [index, f[1]]));
            setFlips((f) => f + 1);
            setCurrent(index);
            setLeaving(true);
            clearTimeout(textTimer.current);
            textTimer.current = setTimeout(() => {
                setShown(index);
                setLeaving(false);
            }, TEXT_OUT_MS);
        },
        [current, leaving, flips]
    );

    useEffect(() => {
        if (paused) return;
        const id = setTimeout(() => goTo((current + 1) % slides.length), AUTOPLAY_MS);
        return () => clearTimeout(id);
    }, [current, paused, goTo]);

    useEffect(() => () => clearTimeout(textTimer.current), []);

    const slide = slides[shown];

    return (
        <section
            id="values"
            className="relative w-full overflow-hidden bg-[#0b0f14]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="What SVAAR stands for"
        >
            <FlipStage flips={flips} faces={faces} />

            {/* darkening overlays so white text always reads */}
            <div className="pointer-events-none absolute inset-0 bg-[#05080c]/55" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,12,0.75)_0%,rgba(5,8,12,0.25)_50%,rgba(5,8,12,0.7)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,12,0.7)_0%,transparent_30%,transparent_70%,rgba(5,8,12,0.6)_100%)]" />

            <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
                {/* ---------- Header: We at SVAAR stand for ---------- */}
                <div className="flex flex-col gap-6 border-b border-white/15 pb-6 pt-16 lg:flex-row lg:items-end lg:justify-between lg:pt-20">
                    <div data-aos="fade-up">
                        <div className="flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-brand" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80">Our Values</span>
                        </div>
                        <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-[-0.01em] text-white sm:text-[34px] xl:text-[38px]">
                            We at <span className="text-brand">SVAAR</span> Stand For
                        </h2>
                    </div>

                    {/* acronym tabs */}
                    <nav className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] lg:mx-0 lg:px-0" aria-label="Values">
                        <ul className="flex w-max items-center">
                            {slides.map((s, i) => {
                                const active = i === current;
                                return (
                                    <li key={s.title} className="flex items-center">
                                        {i > 0 && <span className="mx-3 h-4 w-px bg-white/25 sm:mx-4" aria-hidden="true" />}
                                        <button
                                            type="button"
                                            onClick={() => goTo(i)}
                                            aria-current={active}
                                            className={`group relative pb-2 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 sm:text-[14px] ${active ? "text-white" : "text-white/55 hover:text-white"}`}
                                        >
                                            <span className={`mr-0.5 text-[18px] font-bold transition-colors duration-300 sm:text-[20px] ${active ? "text-brand" : "text-white/80 group-hover:text-brand"}`}>
                                                {s.title[0]}
                                            </span>
                                            {s.title.slice(1)}
                                            <span className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-white/10">
                                                {active && (
                                                    <span
                                                        key={`${current}-${paused}`}
                                                        className={`focus-progress block h-full bg-brand ${paused ? "focus-progress-paused" : ""}`}
                                                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                                                    />
                                                )}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                <div
                    key={shown}
                    className={`grid grid-cols-1 gap-4 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-10 ${leaving ? "focus-text-out" : ""}`}
                >
                    {/* ---------- Left: heading ---------- */}
                    <div className="relative flex flex-col justify-center pb-6 pt-12 lg:py-16">
                        {/* giant outlined initial */}
                        <span
                            className="focus-letter pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 select-none text-[220px] font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.14)] sm:text-[300px] xl:text-[380px]"
                            aria-hidden="true"
                        >
                            {slide.title[0]}
                        </span>

                        <p className="focus-fade relative text-[13px] font-semibold tracking-[0.2em] text-white/70" style={{ animationDelay: "0.3s" }}>
                            <span className="text-brand">0{shown + 1}</span> / 0{slides.length}
                        </p>
                        <h3 className="relative mt-3 overflow-hidden pb-1 text-[42px] font-semibold leading-[1.1] tracking-[-0.015em] text-white sm:text-[54px] xl:text-[64px]">
                            <span className="focus-reveal block" style={{ animationDelay: "0.35s" }}>
                                <span className="text-brand">{slide.title[0]}</span>
                                {slide.title.slice(1)}
                            </span>
                        </h3>
                        <p className="relative mt-5 max-w-[500px] text-[18px] font-light leading-[1.6] text-white/90 sm:text-[21px] xl:text-[24px]">
                            {slide.text.split(" ").map((word, i) => (
                                <span key={i} className="inline-block overflow-hidden align-bottom">
                                    <span className="focus-reveal inline-block" style={{ animationDelay: `${0.5 + i * 0.035}s` }}>
                                        {word}&nbsp;
                                    </span>
                                </span>
                            ))}
                        </p>

                        {/* ---------- Arrows ---------- */}
                        <div className="focus-fade relative mt-9 flex items-center gap-3" style={{ animationDelay: "0.9s" }}>
                            {[
                                { label: "Previous value", step: -1, d: "M19 12H5M11 6l-6 6 6 6" },
                                { label: "Next value", step: 1, d: "M5 12h14M13 6l6 6-6 6" },
                            ].map((b) => (
                                <button
                                    key={b.label}
                                    type="button"
                                    onClick={() => goTo((current + b.step + slides.length) % slides.length)}
                                    aria-label={b.label}
                                    className="grid h-12 w-12 place-items-center rounded-full border border-white/40 text-white transition-colors duration-300 hover:border-brand hover:bg-brand"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                                        <path d={b.d} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ---------- Right: feature list ---------- */}
                    <ul className="relative flex flex-col justify-center pb-14 lg:py-10">
                        <span
                            className="focus-line pointer-events-none absolute bottom-0 left-[19px] top-0 w-px bg-white/35"
                            style={{ animationDelay: "0.3s" }}
                        />
                        {slide.items.map((item, i) => (
                            <li key={item.title} className="group relative py-5 pl-16 lg:py-6 lg:pr-6">
                                {i > 0 && (
                                    <span
                                        className="focus-divider absolute left-5 right-0 top-0 h-px bg-white/20"
                                        style={{ animationDelay: `${0.45 + i * 0.12}s` }}
                                    />
                                )}
                                <span
                                    className="focus-icon absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-[#05080c]/50 text-white backdrop-blur-[2px] transition-colors duration-300 group-hover:border-brand group-hover:bg-brand lg:top-6"
                                    style={{ animationDelay: `${0.5 + i * 0.12}s` }}
                                >
                                    {icons[item.icon]}
                                </span>
                                <h4 className="overflow-hidden text-[18px] font-semibold text-white sm:text-[20px]">
                                    <span className="focus-reveal block" style={{ animationDelay: `${0.55 + i * 0.12}s` }}>
                                        {item.title}
                                    </span>
                                </h4>
                                <p className="mt-2 overflow-hidden text-[14px] leading-[1.6] text-white/75 sm:text-[15px]">
                                    <span className="focus-reveal block max-w-[380px]" style={{ animationDelay: `${0.65 + i * 0.12}s` }}>
                                        {item.text}
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
