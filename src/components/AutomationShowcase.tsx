"use client";

import Image from "next/image";
import { useState } from "react";

export type AutomationSample = {
  category: string;
  title: string;
  description: string;
  tag: string;
  /** Drop screenshots/GIFs in /public/automations and list them here — the placeholder disappears automatically. */
  images?: string[];
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
  const [lightbox, setLightbox] = useState<AutomationSample | null>(null);

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
        {visible.map((sample) => {
          const hasImages = !!sample.images?.length;
          return (
            <article
              key={sample.title}
              onClick={() => hasImages && setLightbox(sample)}
              className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-background/50 transition hover:-translate-y-1 hover:shadow-lg ${
                hasImages ? "cursor-pointer" : ""
              }`}
            >
              {hasImages ? (
                <div className="relative aspect-video w-full overflow-hidden bg-card-dark">
                  <Image
                    src={sample.images![0]}
                    alt={sample.title}
                    fill
                    className="object-cover object-top"
                  />
                  {sample.images!.length > 1 && (
                    <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                      +{sample.images!.length - 1} more
                    </span>
                  )}
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
          );
        })}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} screenshots`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-bold text-foreground">{lightbox.title}</h2>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-card hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto bg-card-dark p-4">
              {lightbox.images!.map((src) => (
                <div key={src} className="relative w-full overflow-hidden rounded-xl border border-border">
                  <Image src={src} alt={lightbox.title} width={1600} height={900} className="h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
