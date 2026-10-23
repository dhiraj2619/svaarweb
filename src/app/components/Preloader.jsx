"use client";

import { useEffect, useState } from "react";

const MIN_SHOW_MS = 2300;
const EXIT_MS = 1700;

// The three diagonal bands of the SVAAR mark, as ranges of x + y inside a 100×100 box
const bands = [
    [100, 124],
    [138, 162],
    [176, 200],
];

const band = ([a, b]) => `-50,${a + 50} 150,${a - 150} 150,${b - 150} -50,${b + 50}`;

// Wordmark letters traced from /logo/svaarlogo.png (39 units tall, same coordinates as the PNG)
const letters = [
    { key: "S", d: "M79 0H50Q45 0 45 5V17Q45 22 50 22H71V31.5H45V39H74Q79 39 79 34V20Q79 15 74 15H52.5V7.5H79Z" },
    { key: "V", d: "M84 0H93L104 27L117.5 0H126.5L107.5 39H100.5Z" },
    { key: "A1", d: "M140.5 0H145.5L160 39H152L139.5 13L127 39H119Z" },
    { key: "A2", d: "M186.5 0H191.5L206.5 39H198.5L185.5 13L173 39H165Z" },
    { key: "R", d: "M212 0H243Q248.5 0 248.5 5.5V18.5Q248.5 23.5 243 23.5H237L250 39H239L225.5 23.5H220V39H212ZM220 7.5V16.5H240.5V7.5Z" },
];

export default function Preloader() {
    const [phase, setPhase] = useState("loading"); // loading → leaving → done

    useEffect(() => {
        const start = performance.now();
        let exitTimer;
        let doneTimer;

        const finish = () => {
            const wait = Math.max(0, MIN_SHOW_MS - (performance.now() - start));
            exitTimer = setTimeout(() => {
                setPhase("leaving");
                doneTimer = setTimeout(() => setPhase("done"), EXIT_MS);
            }, wait);
        };

        if (document.readyState === "complete") finish();
        else window.addEventListener("load", finish, { once: true });

        return () => {
            window.removeEventListener("load", finish);
            clearTimeout(exitTimer);
            clearTimeout(doneTimer);
        };
    }, []);

    if (phase === "done") return null;

    return (
        <div
            className={`preloader fixed inset-0 z-[200] ${phase === "leaving" ? "preloader-out pointer-events-none" : ""}`}
            role="status"
            aria-label="Loading"
        >
            {/* curtains: red trails behind the white one as both roll up */}
            <div className="preloader-curtain preloader-curtain-red absolute inset-0 bg-brand" />
            <div className="preloader-curtain preloader-curtain-white absolute inset-0 grid place-items-center bg-white">
                <div className="preloader-content flex flex-col items-center">
                    <div className="flex items-end gap-[0.15em] text-[44px] sm:text-[64px]" aria-hidden="true">
                        {/* mark: stripes slide in along their diagonal */}
                        <svg viewBox="0 0 100 100" className="h-[1em] w-[1em]">
                            <defs>
                                <clipPath id="preloader-mark">
                                    <polygon points="0,100 100,0 100,100" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#preloader-mark)">
                                {bands.map((b, i) => (
                                    <polygon
                                        key={i}
                                        points={band(b)}
                                        className="preloader-stripe fill-brand"
                                        style={{ animationDelay: `${0.1 + i * 0.14}s` }}
                                    />
                                ))}
                            </g>
                        </svg>
    
                        {/* wordmark: S, V, A, A, R rise in one after another */}
                        <svg viewBox="45 0 205 39" className="h-[1em] w-[5.26em]">
                            {letters.map((l, i) => (
                                <path
                                    key={l.key}
                                    d={l.d}
                                    fillRule="evenodd"
                                    className="preloader-letter fill-brand"
                                    style={{ animationDelay: `${0.65 + i * 0.13}s` }}
                                />
                            ))}
                        </svg>
                    </div>
                    <span className="mt-7 block h-[2px] w-32 overflow-hidden rounded-full bg-[#eef1f5]">
                    <span className="preloader-bar block h-full w-full bg-brand" />
                </span>
            </div>
            </div>
            <span className="sr-only">Loading SVAAR</span>
        </div>
    );
}
