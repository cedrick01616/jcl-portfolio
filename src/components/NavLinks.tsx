"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { smoothScrollToId } from "@/lib/smoothScroll";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "automations", label: "Automations" },
  { id: "experience", label: "Experience" },
  { id: "reels", label: "Reels" },
  { id: "contact", label: "Contact" },
];

export default function NavLinks() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    smoothScrollToId(id);
  }

  return (
    <nav className="hidden gap-6 text-sm font-semibold text-muted md:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(event) => handleClick(event, link.id)}
          className={`relative pb-1 transition-colors hover:text-foreground ${
            active === link.id ? "text-foreground" : ""
          }`}
        >
          {link.label}
          <span
            className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out ${
              active === link.id ? "scale-x-100" : ""
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
