"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent-text placeholder:text-muted";

export default function ContactForm({ accessKey }: { accessKey?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  if (!accessKey) {
    return (
      <p className="mt-8 max-w-xl rounded-2xl border border-dashed border-border bg-background/50 p-4 text-sm text-muted">
        The contact form isn&apos;t connected yet — use the links above for now.
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
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="New message from portfolio site" />
      <input type="text" name="name" placeholder="Your name" required className={fieldClass} />
      <input type="email" name="email" placeholder="Your email" required className={fieldClass} />
      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={4}
        className={`sm:col-span-2 ${fieldClass}`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:shadow-xl hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 sm:col-span-2">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400 sm:col-span-2">
          Something went wrong — please try emailing directly instead.
        </p>
      )}
    </form>
  );
}
