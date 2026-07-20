"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500";

export default function ContactForm({ accessKey }: { accessKey?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  if (!accessKey) {
    return (
      <p className="mt-8 max-w-xl rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500 dark:border-white/15 dark:bg-white/5 dark:text-slate-400">
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
        className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
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
