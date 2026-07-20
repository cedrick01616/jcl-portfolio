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
        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/40 dark:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30"
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-white/10">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">John Cedric A. Lunnay — Resume</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close resume"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 bg-slate-100 dark:bg-slate-950">
              <iframe src="/resume.pdf" title="John Cedric A. Lunnay resume" className="h-full w-full" />
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4 dark:border-white/10">
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
              >
                Download PDF
              </a>
              <a
                href="mailto:cedricklunnay78@gmail.com"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
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
