"use client";

import { useEffect, useState } from "react";

// Grid geometry (in the rotated group's own coordinate space)
const SPACING = 135;
const RANGE = 7; // lines from -RANGE..RANGE in each direction
const EXTENT = SPACING * RANGE;
const LINE_COLOR = "rgba(140, 158, 186, 0.28)";
const NODE_COLOR = "rgba(120, 142, 178, 0.55)";

const lines = [];
for (let k = -RANGE; k <= RANGE; k++) {
  const p = k * SPACING;
  lines.push({ x1: p, y1: -EXTENT, x2: p, y2: EXTENT });
  lines.push({ x1: -EXTENT, y1: p, x2: EXTENT, y2: p });
}

// Deterministic subset of intersections get a node (no Math.random → no hydration mismatch)
const nodes = [];
for (let i = -RANGE + 1; i < RANGE; i++) {
  for (let j = -RANGE + 1; j < RANGE; j++) {
    if (((i * 7 + j * 3) % 4 + 4) % 4 === 0) {
      nodes.push({ x: i * SPACING, y: j * SPACING, delay: (((i * 5 + j * 11) % 9) + 9) % 9 });
    }
  }
}

// Dots that travel along grid lines
const travellers = [
  { path: `M ${-SPACING * 2} ${-EXTENT} V ${EXTENT}`, dur: 16, begin: 0, red: true },
  { path: `M ${-EXTENT} ${SPACING} H ${EXTENT}`, dur: 19, begin: 3 },
  { path: `M ${SPACING} ${EXTENT} V ${-EXTENT}`, dur: 21, begin: 6 },
  { path: `M ${EXTENT} ${-SPACING * 3} H ${-EXTENT}`, dur: 18, begin: 1.5, red: true },
  { path: `M ${-SPACING * 4} ${EXTENT} V ${-EXTENT}`, dur: 23, begin: 8 },
];

export default function NetworkGrid({ className = "" }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
    >
      <g transform="translate(320 480) rotate(38)">
        {lines.map((l, i) => (
          <line key={i} {...l} stroke={LINE_COLOR} strokeWidth="1.1" />
        ))}

        {nodes.map((n, i) => (
          <g key={i}>
            {animate && (
              <circle cx={n.x} cy={n.y} r="5" fill="none" stroke={NODE_COLOR} strokeWidth="1.2" opacity="0">
                <animate
                  attributeName="r"
                  values="5;22"
                  dur="3.6s"
                  begin={`${n.delay * 0.6}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;0"
                  dur="3.6s"
                  begin={`${n.delay * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <circle cx={n.x} cy={n.y} r="5" fill={NODE_COLOR}>
              {animate && (
                <animate
                  attributeName="r"
                  values="4.5;6.5;4.5"
                  dur="3.6s"
                  begin={`${n.delay * 0.6}s`}
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </g>
        ))}

        {animate &&
          travellers.map((t, i) => (
            <g key={i} opacity="0">
              <circle r="9" fill={t.red ? "rgba(229,43,47,0.15)" : "rgba(120,142,178,0.18)"} />
              <circle r="3.8" fill={t.red ? "rgba(229,43,47,0.8)" : "rgba(110,132,170,0.8)"} />
              <animateMotion path={t.path} dur={`${t.dur}s`} begin={`${t.begin}s`} repeatCount="indefinite" />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur={`${t.dur}s`}
                begin={`${t.begin}s`}
                repeatCount="indefinite"
              />
            </g>
          ))}
      </g>
    </svg>
  );
}
