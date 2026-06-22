"use client";

import { useEffect, useRef } from "react";

export default function FrontierChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = chartRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (!chart || reduceMotion || coarsePointer) return;

    let frame = 0;
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX - window.innerWidth / 2) * 0.02;
        const y = (event.clientY - window.innerHeight / 2) * 0.02;
        chart.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ transition: "transform 0.2s ease-out" }}
      className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-lg border border-border-muted bg-surface-slate/40 p-6 gold-glow md:h-[450px]"
    >
      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2e35_1px,transparent_1px),linear-gradient(to_bottom,#2a2e35_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />

      {/* SVG Canvas */}
      <svg className="h-full w-full" viewBox="0 0 500 400" fill="none" role="img" aria-labelledby="frontier-chart-title frontier-chart-description">
        <title id="frontier-chart-title">Efficient frontier illustration</title>
        <desc id="frontier-chart-description">A conceptual chart comparing expected return and volatility, highlighting minimum variance and risk-adjusted portfolios.</desc>
        {/* Y Axis (Expected Return) */}
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="350"
          stroke="#2A2E35"
          strokeWidth="1.5"
        />
        {/* X Axis (Volatility / Risk) */}
        <line
          x1="50"
          y1="350"
          x2="480"
          y2="350"
          stroke="#2A2E35"
          strokeWidth="1.5"
        />

        {/* Labels */}
        <text
          x="30"
          y="25"
          fill="#B8B8B2"
          className="font-mono text-[9px] uppercase tracking-widest"
          textAnchor="middle"
          transform="rotate(-90 30 25)"
        >
          Return (%)
        </text>
        <text
          x="265"
          y="375"
          fill="#B8B8B2"
          className="font-mono text-[9px] uppercase tracking-widest"
          textAnchor="middle"
        >
          Risk / Volatility (σ)
        </text>

        {/* Efficient Frontier Hyperbolic Curve */}
        <path
          d="M 120 320 C 100 190, 180 80, 420 50"
          stroke="#9C6B21"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Highlighted Gold Arrow Path (The Efficient Frontier upper section) */}
        <path
          d="M 150 160 Q 220 90, 420 50"
          stroke="#D6A84F"
          strokeWidth="3.5"
          className="drop-shadow-[0_0_12px_rgba(214,168,79,0.4)]"
        />

        {/* Tangency Capital Allocation Line (CAL) */}
        <line
          x1="50"
          y1="350"
          x2="450"
          y2="40"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
        />

        {/* Capital Allocation Line labels */}
        <text
          x="420"
          y="28"
          fill="#38BDF8"
          className="font-mono text-[7px] uppercase tracking-wider opacity-60"
        >
          CAL Line
        </text>

        {/* Plotting Portfolio Nodes */}
        {/* Minimum Variance Portfolio */}
        <g className="cursor-pointer group/node">
          <circle
            cx="150"
            cy="160"
            r="6"
            fill="#B8B8B2"
            className="group-hover/node:fill-primary transition-colors"
          />
          <circle
            cx="150"
            cy="160"
            r="12"
            stroke="#B8B8B2"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="animate-slow-ping"
          />
          <text
            x="140"
            y="145"
            fill="#B8B8B2"
            className="font-mono text-[8px] uppercase tracking-widest font-semibold"
          >
            Min Variance
          </text>
        </g>

        {/* Optimal/Tangency Sharpe-Sortino Portfolio */}
        <g className="cursor-pointer group/node">
          <circle
            cx="300"
            cy="80"
            r="8"
            fill="#F6D27A"
            className="drop-shadow-[0_0_8px_#F6D27A]"
          />
          <circle
            cx="300"
            cy="80"
            r="16"
            stroke="#D6A84F"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            className="animate-slow-pulse"
          />
          <text
            x="315"
            y="75"
            fill="#F6D27A"
            className="font-mono text-[9px] uppercase tracking-widest font-bold"
          >
            Sortino Optimal
          </text>
          <text
            x="315"
            y="90"
            fill="#B8B8B2"
            className="font-sans text-[8px] tracking-wide"
          >
            Max Risk-Adjusted Alpha
          </text>
        </g>

        {/* Risk-free asset node */}
        <circle cx="50" cy="350" r="4" fill="#38BDF8" />
        <text
          x="20"
          y="354"
          fill="#38BDF8"
          className="font-mono text-[8px] uppercase tracking-widest"
        >
          Rf
        </text>
      </svg>

      {/* Floating data window */}
      <div className="absolute bottom-6 left-6 bg-background/95 border border-border-muted px-4 py-2.5 rounded-sm flex flex-col gap-0.5 pointer-events-none">
        <span className="font-mono text-[8px] text-text-secondary uppercase tracking-widest">
          Efficient frontier plot
        </span>
        <span className="font-mono text-xs text-primary font-bold">
          Sortino Ratio: 2.82
        </span>
      </div>
    </div>
  );
}
