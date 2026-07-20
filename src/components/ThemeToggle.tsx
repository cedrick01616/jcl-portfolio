"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-base text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:text-slate-300 dark:hover:bg-white/10"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
