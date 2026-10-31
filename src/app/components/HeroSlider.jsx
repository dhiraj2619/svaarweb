"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        image: "/banners/banner1.jpg",
        eyebrow: "Process Engineering • Pilot Plants • Scale-Up",
        title: ["Engineering Processes.", "Enabling Scale."],
        cta: { label: "Read more", href: "#about" },
    },
    {
        image: "/banners/banner2.jpg",
        eyebrow: "Process Technologies",
        title: ["Proven Technologies.", "Precise Execution."],
        cta: { label: "Read more", href: "#technologies" },
    },
    {
        image: "/banners/banner3.jpg",
        eyebrow: "Infrastructure • Fabrication",
        title: ["Built for Performance.", "Designed to Last."],
        cta: { label: "Read more", href: "#industries" },
    },
    {
        image: "/banners/banner4.jpg",
        eyebrow: "Projects • Execution",
        title: ["Delivering Projects.", "Driving Growth."],
        cta: { label: "Read more", href: "#projects" },
    },
];

const AUTOPLAY_MS = 6000;

function Arrow({ dir }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6" aria-hidden="true">
            <path d={dir === "prev" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = useCallback((index) => {
        setCurrent((index + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        if (paused) return;
        const id = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
        return () => clearTimeout(id);
    }, [current, paused, goTo]);

    return (
        <section
            className="relative h-[calc(100svh-var(--nav-height)-var(--topbar-height))] min-h-[520px] w-full overflow-hidden bg-[#1a1d22]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Highlights"
        >
            {/* Slides stacked; the active one fades in over the rest */}
            {slides.map((s, i) => {
                const isActive = i === current;
                const Heading = i === 0 ? "h1" : "h2";
                return (
                    <div
                        key={s.image}
                        className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                            isActive ? "z-10 opacity-100" : "z-0 opacity-0"
                        }`}
                        aria-hidden={!isActive}
                    >
                        <Image
                            src={s.image}
                            alt=""
                            fill
                            priority={i === 0}
                            sizes="100vw"
                            quality={80}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

                        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 md:px-10 lg:px-16">
                            <a
                                href={s.cta.href}
                                tabIndex={isActive ? 0 : -1}
                                className="w-fit text-[14px] text-white underline underline-offset-4 sm:text-[17px]"
                            >
                                {s.eyebrow}
                            </a>
                            <Heading className="mt-6 max-w-[820px] text-[32px] font-bold uppercase leading-[1.12] tracking-[0.01em] text-white sm:text-[44px] lg:text-[58px]">
                                {s.title.map((line) => (
                                    <span key={line} className="block">
                                        {line}
                                    </span>
                                ))}
                            </Heading>
                            <a
                                href={s.cta.href}
                                tabIndex={isActive ? 0 : -1}
                                className="mt-10 w-fit rounded-full bg-brand px-7 py-3 text-[16px] font-medium text-white transition-colors hover:bg-brand-dark"
                            >
                                {s.cta.label}
                            </a>
                        </div>
                    </div>
                );
            })}

            {/* Prev / next */}
            <div className="absolute bottom-20 right-5 z-20 flex gap-1.5 md:right-10 lg:right-16">
                <button
                    type="button"
                    onClick={() => goTo(current - 1)}
                    aria-label="Previous slide"
                    className="grid h-14 w-14 place-items-center bg-white/95 text-[#1a1a1a] transition-colors hover:bg-white hover:text-brand"
                >
                    <Arrow dir="prev" />
                </button>
                <button
                    type="button"
                    onClick={() => goTo(current + 1)}
                    aria-label="Next slide"
                    className="grid h-14 w-14 place-items-center bg-white/95 text-[#1a1a1a] transition-colors hover:bg-white hover:text-brand"
                >
                    <Arrow dir="next" />
                </button>
            </div>

            {/* Pagination: slide number + progress bars */}
            <div className="absolute bottom-8 left-0 right-0 z-20">
                <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 md:px-10 lg:px-16">
                    <span className="w-6 text-[14px] font-semibold text-white">
                        {String(current + 1).padStart(2, "0")}
                    </span>
                    <div className="flex gap-1.5">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={i === current}
                                className="flex h-5 items-center"
                            >
                                <span className="relative block h-[3px] w-14 overflow-hidden bg-white/40 sm:w-20">
                                    {i < current && <span className="absolute inset-0 bg-white" />}
                                    {i === current && (
                                        <span
                                            key={current}
                                            className="hero-progress absolute inset-0 bg-brand"
                                            style={{
                                                animationDuration: `${AUTOPLAY_MS}ms`,
                                                animationPlayState: paused ? "paused" : "running",
                                            }}
                                        />
                                    )}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
