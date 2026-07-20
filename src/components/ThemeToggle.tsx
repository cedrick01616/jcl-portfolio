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
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-base text-muted transition hover:border-accent-text/50 hover:text-foreground"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
