"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent-text focus:ring-2 focus:ring-accent/30 placeholder:text-muted";

const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-muted";

export default function ContactForm({ accessKey }: { accessKey?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  if (!accessKey) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-card/50 p-4 text-sm text-muted">
        The contact form isn&apos;t connected yet — use the links on the left for now.
      </p>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="New message from portfolio site" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input id="contact-name" type="text" name="name" placeholder="Your name" required className={`w-full ${fieldClass}`} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input id="contact-email" type="email" name="email" placeholder="you@company.com" required className={`w-full ${fieldClass}`} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          What do you want to automate?
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me a bit about your workflow, CRM, or project..."
          required
          rows={5}
          className={`w-full ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Sending..." : "Send message"}
        {status !== "loading" && (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M2.5 3.5a.75.75 0 0 1 .97-.716l13.5 4.5a.75.75 0 0 1 0 1.432l-13.5 4.5A.75.75 0 0 1 2.5 12.5v-3.25a.75.75 0 0 1 .649-.743L9.5 8l-6.351-.507A.75.75 0 0 1 2.5 6.75V3.5Z" />
          </svg>
        )}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          Thanks! Your message has been sent — I&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">
          Something went wrong — please try emailing directly instead.
        </p>
      )}
    </form>
  );
}
