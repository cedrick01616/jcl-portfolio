"use client";

import Image from "next/image";
import { useState } from "react";

export type AutomationSample = {
  category: string;
  title: string;
  description: string;
  tag: string;
  /** Drop a screenshot/GIF in /public/automations and point this at it — the placeholder disappears automatically. */
  image?: string;
};

function FlowIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-10 w-10 text-accent/70" aria-hidden="true">
      <rect x="4" y="8" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <rect x="42" y="8" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <rect x="23" y="42" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M13 22v8a6 6 0 0 0 6 6h6M51 22v8a6 6 0 0 1-6 6h-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="36" r="2" fill="currentColor" />
    </svg>
  );
}

export default function AutomationShowcase({ samples }: { samples: AutomationSample[] }) {
  const categories = ["All", ...Array.from(new Set(samples.map((s) => s.category)))];
  const [active, setActive] = useState("All");

  const visible = active === "All" ? samples : samples.filter((s) => s.category === active);

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === category
                ? "border-accent bg-accent text-accent-ink"
                : "border-border text-muted hover:border-accent-text/50 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((sample) => (
          <article
            key={sample.title}
            className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-background/50 transition hover:-translate-y-1 hover:shadow-lg"
          >
            {sample.image ? (
              <div className="relative aspect-video w-full overflow-hidden bg-card-dark">
                <Image src={sample.image} alt={sample.title} fill className="object-cover" />
              </div>
            ) : (
              <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-2 border-b border-dashed border-border bg-card-dark/40 text-center">
                <FlowIcon />
                <p className="text-xs font-semibold text-muted">Workflow preview coming soon</p>
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent-text">
                {sample.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{sample.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{sample.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
