"use client";

import { useEffect, useState } from "react";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7.414A2 2 0 0 0 14.414 6L10 1.586A2 2 0 0 0 8.586 1H4Zm5 0.5V6a1 1 0 0 0 1 1h3.5L9 2.5Z" />
        </svg>
        View full resume
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full resume"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-bold text-foreground">John Cedric A. Lunnay — Resume</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close resume"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-card hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 bg-card-dark">
              <iframe src="/resume.pdf" title="John Cedric A. Lunnay resume" className="h-full w-full" />
            </div>

            <div className="flex justify-end gap-3 border-t border-border px-6 py-4">
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent-text/50"
              >
                Download PDF
              </a>
              <a
                href="mailto:cedricklunnay78@gmail.com"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:shadow-xl hover:shadow-accent/40"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
