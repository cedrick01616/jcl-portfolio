import ContactForm from "@/components/ContactForm";
import NavLinks from "@/components/NavLinks";
import Reveal from "@/components/Reveal";
import ResumeModal from "@/components/ResumeModal";
import ThemeToggle from "@/components/ThemeToggle";
import AutomationShowcase, { type AutomationSample } from "@/components/AutomationShowcase";
import AutomationBot from "@/components/AutomationBot";

export const dynamic = "force-dynamic";

const profile = {
  name: "John Cedric A. Lunnay",
  role: "AI Automation Specialist · GoHighLevel (GHL) · Marketing Automation",
  location: "Metro Manila, Philippines",
  summary:
    "Results-driven Automation Specialist with a Computer Science background. I build GoHighLevel (GHL) CRM and AI-assisted automation systems from the ground up — lead routing, opportunity pipelines, chatbots, and win-back campaigns — that turn manual follow-up into a system that runs itself.",
};

const stats = [
  { value: "1", label: "GHL CRM system built from scratch" },
  { value: "3", label: "Business locations automated" },
  { value: "100%", label: "Website leads auto-routed to CRM" },
  { value: "CS", label: "Computer Science background" },
];

const services = [
  {
    title: "GHL Workflow Automation",
    description: "Lead routing, opportunity pipelines, and follow-up sequences built and tuned inside GoHighLevel.",
  },
  {
    title: "Website → CRM Integration",
    description: "Forms and landing pages wired directly into GHL so every submission becomes a tracked, routed lead.",
  },
  {
    title: "AI Chatbots",
    description: "Chatbots that engage website visitors, qualify them, and push hot leads into the pipeline in real time.",
  },
  {
    title: "Win-Back & Retention Campaigns",
    description: "Automated email sequences that re-engage lapsed customers and recover revenue on autopilot.",
  },
  {
    title: "SEO & Content Systems",
    description: "Blog and on-page SEO workflows built to compound organic visibility over time.",
  },
  {
    title: "AR & Collections Ops",
    description: "Aging-account monitoring and recovery processes for 30-, 60-, and 90-day past-due balances.",
  },
];

const highlights = [
  "Built a GoHighLevel CRM and automation system from the ground up",
  "Automated lead routing, opportunity pipelines, and win-back campaigns",
  "Led website development, SEO, and social marketing for a multi-location business",
];

const skillGroups = [
  {
    label: "Automation & CRM",
    skills: ["GoHighLevel (GHL)", "Workflow automation", "Lead routing & pipelines", "Chatbot building", "Website–CRM integration"],
  },
  {
    label: "Marketing",
    skills: ["Email marketing", "SEO & content", "Social media management", "Reels & video content"],
  },
  {
    label: "Operations",
    skills: ["Accounts receivable", "Collections", "Aging account monitoring", "Process improvement"],
  },
];

const experience = [
  {
    title: "Executive Assistant / Automation Specialist",
    company: "Lifestyle Gym (Multi-Location, California)",
    period: "May 2025 – Present",
    description:
      "Built and optimized GoHighLevel workflows for lead management and automated follow-up. Designed and launched a new company website integrated with GHL for automated lead capture and routing, built chatbots for visitor engagement, and optimized SEO and blog content. Led social media marketing across three locations (Auburn, Citrus Heights, Fair Oaks), ran win-back email campaigns, and managed accounts receivable and collections including 30-, 60-, and 90-day aging accounts.",
  },
  {
    title: "Collection Specialist",
    company: "Accenture",
    period: "Feb 2023 – Feb 2025",
    description:
      "Contacted debtors and negotiated realistic payment arrangements, improving recovery rates and customer satisfaction. Monitored 30-, 60-, and 90-day aging account reports to prioritize outreach, identified and corrected mispayments and billing discrepancies, and resolved disputes while maintaining meticulous records.",
  },
  {
    title: "Subject Matter Expert (Operations Supervisor, Tech Support)",
    company: "Sykes Inc.",
    period: "Aug 2021 – Jan 2023",
    description:
      "Handled escalated customer issues and turned around difficult experiences. Supported the definition of processes and policies, troubleshot technical issues, escalated high-risk accounts with clear documentation, reconciled payment records against statements, and recommended workflow improvements that reduced time-to-resolution.",
  },
];

const automationSamples: AutomationSample[] = [
  {
    category: "Lead Routing & Pipelines",
    tag: "GHL Workflow",
    title: "Automated Lead Routing",
    description:
      "Website form submissions flow straight into GHL, get scored, and route to the right pipeline stage with a follow-up sequence triggered automatically.",
    images: ["/automations/lead-routing-1.png", "/automations/lead-routing-2.png"],
  },
  {
    category: "Lead Routing & Pipelines",
    tag: "GHL Pipeline",
    title: "Opportunity Pipeline Build",
    description:
      "Custom pipeline stages mapped to the full sales journey — new lead to closed-won — with automated triggers on every stage change.",
    images: ["/automations/pipeline-build-1.png"],
  },
  {
    category: "Win-Back & Retention",
    tag: "Email Automation",
    title: "Win-Back Email Sequence",
    description:
      "A multi-step email sequence that automatically re-engages former customers with personalized offers to recover lost revenue.",
    images: ["/automations/win-back-1.png", "/automations/win-back-2.png"],
  },
  {
    category: "Win-Back & Retention",
    tag: "Campaign Automation",
    title: "Seasonal Promotion Automation",
    description:
      "Monthly and seasonal campaign sequences tied to membership cycles, scheduled and sent without manual work.",
    // image: "/automations/seasonal-promo.png",
  },
  {
    category: "Chatbots & Lead Gen",
    tag: "AI Chatbot",
    title: "Website Chatbot",
    description:
      "A chatbot that qualifies website visitors and routes hot leads directly into the CRM the moment they convert.",
    // image: "/automations/chatbot.png",
  },
  {
    category: "Website & SEO",
    tag: "Integration",
    title: "Website → CRM Integration",
    description:
      "Rebuilt company website wired directly into GHL, so every form submission becomes a tracked, automatically routed lead.",
    images: [
      "/automations/website-part-1.png",
      "/automations/website-part-2.png",
      "/automations/website-part-3.png",
      "/automations/website-part-4.png",
      "/automations/website-part-5.png",
      "/automations/website-part-6.png",
      "/automations/website-part-7.png",
    ],
  },
];

const contactMethods = [
  {
    label: "Email",
    value: "cedricklunnay78@gmail.com",
    href: "mailto:cedricklunnay78@gmail.com",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/johnlunnay",
    href: "https://www.linkedin.com/in/johnlunnay",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="9" width="4" height="12" rx="0.5" />
        <circle cx="5" cy="4.5" r="2.2" />
        <path d="M10 9h3.6v1.9h.05c.5-.9 1.75-1.9 3.6-1.9 3.85 0 4.75 2.4 4.75 5.6V21h-4v-5.7c0-1.35-.03-3.1-2-3.1-2 0-2.3 1.5-2.3 3v5.8h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+63 926 748 3422",
    href: "https://wa.me/639267483422",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.4.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
      </svg>
    ),
  },
];

const bookingUrl = "https://calendly.com/cedricklunnay78/30min";

const bookingIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="8" cy="14.5" r="1.3" fill="currentColor" />
    <circle cx="12" cy="14.5" r="1.3" fill="currentColor" />
    <circle cx="16" cy="14.5" r="1.3" fill="currentColor" />
  </svg>
);

export default function Home() {
  const renderedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Asia/Manila",
  });

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 transition hover:opacity-80">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-black text-accent-ink">
              JL
            </span>
            <span className="text-sm font-extrabold tracking-[0.2em] text-foreground uppercase sm:text-base">
              {profile.name}
            </span>
          </a>
          <div className="flex items-center gap-6">
            <NavLinks />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Reveal className="flex flex-1 flex-col">
        <section
          id="top"
          className="relative flex flex-1 flex-col justify-center overflow-hidden border-b border-white/10 bg-card-dark py-12 text-white sm:py-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[44px_44px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/25 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-[110px]"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:max-w-4xl lg:px-8 xl:max-w-5xl">
            <div className="mb-6">
              <AutomationBot />
            </div>
            <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Open to freelance, contract, and full-time opportunities
            </div>
            <h1 className="text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              AI automation systems, built in GoHighLevel, that turn leads into revenue.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 lg:text-lg lg:leading-8">
              {profile.summary}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
              <a
                href="#automations"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
              >
                View automation work
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition hover:text-accent"
              >
                Let&apos;s connect
                <span aria-hidden="true" className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-9 grid max-w-4xl grid-cols-2 gap-y-6 border-t border-white/10 px-6 pt-6 sm:grid-cols-4 sm:gap-x-6 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-black text-accent sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      </div>

      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-10 lg:px-8">
        <Reveal>
          <section id="about" className="scroll-mt-24 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-colors">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">About</p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">
                I build automation systems that replace manual operations.
              </h2>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-colors">
              <p className="text-lg leading-8 text-muted">
                I combine a Computer Science foundation with hands-on operations experience to design automation that
                actually gets used. From GoHighLevel workflows and AI chatbots to website–CRM integrations and win-back
                campaigns, I build systems that replace repetitive manual work — backed by real experience in accounts
                receivable, collections, and customer operations.
              </p>
              <p className="mt-4 text-sm font-semibold text-accent-text">
                Bachelor of Science in Computer Science — Immaculada Concepcion College
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="scroll-mt-24 rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-colors lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Services</p>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground">What I automate</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.25rem] border border-border bg-background/50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="automations" className="scroll-mt-24 rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-colors lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Portfolio</p>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground">Automation work samples</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              A look at the GoHighLevel workflows, chatbots, and campaigns I&apos;ve built. Screenshots and walkthroughs
              are being added — reach out for a live demo of any workflow below in the meantime.
            </p>
            <AutomationShowcase samples={automationSamples} />
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="scroll-mt-24 rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-colors lg:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Experience</p>
                <h2 className="mt-2 text-2xl font-extrabold text-foreground">Professional experience and career highlights</h2>
              </div>
              <ResumeModal />
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {experience.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.25rem] border border-border bg-background/50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-bold text-accent-text">{item.period}</p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.company}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="skills" className="scroll-mt-24 rounded-[1.75rem] border border-white/10 bg-card-dark p-7 text-white shadow-sm lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Core strengths</p>
            <h2 className="mt-3 text-2xl font-extrabold">Skills and capabilities</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="scroll-mt-24 rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-colors lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Contact</p>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
              Let&apos;s automate your next lead pipeline.
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <p className="max-w-md text-base leading-7 text-muted">
                  Available for GoHighLevel builds, AI chatbot setups, and marketing automation projects — as well as
                  executive support and operations roles. I&apos;d be glad to talk through what you&apos;re trying to
                  automate.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noreferrer" : undefined}
                      title={`${method.label} — ${method.value}`}
                      aria-label={`${method.label} — ${method.value}`}
                      className="group flex flex-col items-center gap-2"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/60 text-foreground transition group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink group-hover:shadow-lg group-hover:shadow-accent/30">
                        {method.icon}
                      </span>
                      <span className="text-[11px] font-semibold text-muted transition group-hover:text-accent-text">
                        {method.label}
                      </span>
                    </a>
                  ))}

                  {bookingUrl ? (
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Book a call"
                      aria-label="Book a call"
                      className="group flex flex-col items-center gap-2"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/60 text-foreground transition group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink group-hover:shadow-lg group-hover:shadow-accent/30">
                        {bookingIcon}
                      </span>
                      <span className="text-[11px] font-semibold text-muted transition group-hover:text-accent-text">
                        Book a call
                      </span>
                    </a>
                  ) : (
                    <span
                      title="Booking link coming soon"
                      aria-label="Booking link coming soon"
                      className="flex cursor-not-allowed flex-col items-center gap-2 opacity-50"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-border text-muted">
                        {bookingIcon}
                      </span>
                      <span className="text-[11px] font-semibold text-muted">Coming soon</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border bg-background/40 p-6 lg:p-7">
                <ContactForm accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-xs text-muted">
        <p>Page rendered live at {renderedAt} (Asia/Manila)</p>
      </footer>
    </div>
  );
}
