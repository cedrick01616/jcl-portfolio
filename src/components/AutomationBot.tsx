"use client";

import { useEffect, useState } from "react";

const AUTOMATIONS = [
  "I auto-route new leads into the right GHL pipeline stage.",
  "I send win-back email sequences to lapsed customers automatically.",
  "I qualify website visitors with an AI chatbot before they reach you.",
  "I sync every website form straight into the CRM in real time.",
  "I trigger seasonal campaigns on a schedule, hands-free.",
  "I monitor 30-, 60-, and 90-day aging accounts so nothing slips through.",
];

export default function AutomationBot() {
  const [index, setIndex] = useState(0);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % AUTOMATIONS.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  function next() {
    setIndex((i) => (i + 1) % AUTOMATIONS.length);
    setBump(true);
    window.setTimeout(() => setBump(false), 250);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-4 left-1/2 w-[min(88vw,20rem)] -translate-x-1/2 -translate-y-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 text-white shadow-lg backdrop-blur-sm lg:w-[min(50vw,26rem)] lg:text-base 2xl:w-[min(34vw,30rem)] 2xl:text-lg"
        >
          {AUTOMATIONS[index]}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-white/10"
          />
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Show another automation I can build"
          className={`relative flex h-24 w-24 items-center justify-center rounded-3xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-200 [animation:float_3.5s_ease-in-out_infinite] hover:-translate-y-1 hover:border-accent/60 lg:h-28 lg:w-28 2xl:h-32 2xl:w-32 ${
            bump ? "scale-90" : "scale-100"
          }`}
        >
          <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20" aria-hidden="true">
            <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="4" r="2.5" fill="currentColor" />
            <rect x="6" y="18" width="4" height="9" rx="2" fill="currentColor" opacity="0.5" />
            <rect x="38" y="18" width="4" height="9" rx="2" fill="currentColor" opacity="0.5" />
            <rect x="10" y="10" width="28" height="24" rx="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="19" cy="22" r="2.6" fill="currentColor" />
            <circle cx="29" cy="22" r="2.6" fill="currentColor" />
            <rect x="18" y="28" width="12" height="3" rx="1.5" fill="currentColor" />
          </svg>
        </button>
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40 sm:tracking-[0.2em] 2xl:text-sm">
        Tap to see what I automate
      </p>
    </div>
  );
}
