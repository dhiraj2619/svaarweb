"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import NetworkGrid from "./NetworkGrid";

const slides = [
    {
        image: "/banners/banner1.jpg",
        eyebrow: "Process Engineering • Pilot Plants • Scale-Up",
        title: ["Engineering Processes.", "Enabling Scale."],
        subtitle: "From Pilot Plants to Industrial Production",
    },
    {
        image: "/banners/banner2.jpg",
        eyebrow: "Process Technologies",
        title: ["Proven Technologies.", "Precise Execution."],
        subtitle: "Reaction, Distillation, Extraction & Separation Systems",
    },
    {
        image: "/banners/banner3.jpg",
        eyebrow: "Infrastructure • Fabrication",
        title: ["Built for Performance.", "Designed to Last."],
        subtitle: "Modular Skids, Plants & Turnkey Infrastructure",
    },
    {
        image: "/banners/banner4.jpg",
        eyebrow: "Projects • Execution",
        title: ["Delivering Projects.", "Driving Growth."],
        subtitle: "End-to-End Engineering for Process Industries",
    },
];

const AUTOPLAY_MS = 6500;
const TURN_MS = 1300;

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    // the slide currently being "turned away" like a page
    const [turning, setTurning] = useState(null);
    const [paused, setPaused] = useState(false);
    const turnTimer = useRef(null);

    const goTo = useCallback(
        (index) => {
            if (index === current || turning !== null) return;
            setTurning(current);
            setCurrent(index);
            clearTimeout(turnTimer.current);
            turnTimer.current = setTimeout(() => setTurning(null), TURN_MS);
        },
        [current, turning]
    );

    useEffect(() => {
        if (paused) return;
        const id = setTimeout(() => goTo((current + 1) % slides.length), AUTOPLAY_MS);
        return () => clearTimeout(id);
    }, [current, paused, goTo]);

    useEffect(() => () => clearTimeout(turnTimer.current), []);

    const slide = slides[current];

    return (
        <section
            className="relative h-[calc(100svh-var(--nav-height))] min-h-[560px] w-full overflow-hidden bg-[#eef1f5]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Highlights"
        >
            {/* ---------- Image stage with page-turn ---------- */}
            <div className="hero-stage absolute inset-0">
                {/* active slide (underneath) */}
                <div key={`active-${current}`} className="absolute inset-0 overflow-hidden">
                    <div className="hero-zoom absolute inset-0">
                        <Image
                            src={slide.image}
                            alt=""
                            fill
                            priority={current === 0}
                            sizes="100vw"
                            quality={80}
                            className="object-cover object-[65%_center]"
                        />
                    </div>
                    {turning !== null && <div className="page-under-shadow absolute inset-0" />}
                </div>

                {/* outgoing slide flipping away like a page */}
                {turning !== null && (
                    <div key={`turn-${turning}`} className="page-turn absolute inset-0 z-10 overflow-hidden">
                        <Image
                            src={slides[turning].image}
                            alt=""
                            fill
                            sizes="100vw"
                            quality={80}
                            className="object-cover object-[65%_center]"
                        />
                    </div>
                )}

                {/* preload the rest so turns never show a blank page */}
                <div className="hidden">
                    {slides.map((s, i) =>
                        i !== current && i !== turning ? (
                            <Image key={s.image} src={s.image} alt="" width={16} height={9} sizes="100vw" />
                        ) : null
                    )}
                </div>
            </div>

            {/* ---------- White diagonal panel with grid ---------- */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-full overflow-hidden bg-[#f2f4f7]/95 md:w-[42%] md:[clip-path:polygon(0_0,100%_0,58%_100%,0_100%)] max-md:bg-[#f2f4f7]/60">
                <NetworkGrid className="absolute inset-0 h-full w-full" />
            </div>

            {/* ---------- Caption ---------- */}
            <div className="relative z-30 flex h-full flex-col justify-center">
                <div key={`caption-${current}`} className="caption-in relative w-full md:w-[56%] lg:w-[53%]">
                    {/* thin accent stripe — runs parallel to the box's slanted edge (100% → 82%), extending below it */}
                    <span className="absolute left-0 top-0 hidden h-[125%] w-full bg-brand/85 [clip-path:polygon(97.1%_24%,98.9%_24%,81.8%_100%,80%_100%)] md:block" />
                    <div className="relative bg-brand py-9 pl-5 pr-12 sm:py-10 md:py-11 md:pl-10 md:pr-24 lg:pl-[9%] md:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]">
                        <p
                            className="caption-line text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-[11px]"
                            style={{ animationDelay: "0.55s" }}
                        >
                            {slide.eyebrow}
                        </p>
                        <span
                            className="caption-line mt-4 block h-[2px] w-8 bg-white/85"
                            style={{ animationDelay: "0.6s" }}
                        />
                        <h1 className="mt-5 text-[30px] font-semibold leading-[1.18] tracking-[-0.01em] text-white sm:text-[38px] lg:text-[44px] xl:text-[48px]">
                            {slide.title.map((line, i) => (
                                <span
                                    key={line}
                                    className="caption-line block"
                                    style={{ animationDelay: `${0.65 + i * 0.12}s` }}
                                >
                                    {line}
                                </span>
                            ))}
                        </h1>
                        <p
                            className="caption-line mt-4 text-[15px] font-normal text-white sm:text-[17px] lg:text-[19px]"
                            style={{ animationDelay: "0.9s" }}
                        >
                            {slide.subtitle}
                        </p>
                    </div>
                </div>

                {/* ---------- Pagination ---------- */}
                <div className="mt-8 flex items-center gap-2.5 pl-5 md:pl-10 lg:pl-[4.8%]">
                    {slides.map((_, i) => {
                        const isActive = i === current;
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={isActive}
                                className="group flex h-6 items-center"
                            >
                                <span
                                    className={`block h-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                                        ? "w-9 bg-brand shadow-[0_3px_10px_rgba(229,43,47,0.4)]"
                                        : "w-2.5 bg-[#c3cad6] group-hover:bg-brand/60"
                                        }`}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
