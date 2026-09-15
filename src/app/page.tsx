import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import NavLinks from "@/components/NavLinks";
import Reveal from "@/components/Reveal";
import ResumeModal from "@/components/ResumeModal";
import ThemeToggle from "@/components/ThemeToggle";
import AutomationShowcase, { type AutomationSample } from "@/components/AutomationShowcase";

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
    // image: "/automations/lead-routing.png",
  },
  {
    category: "Lead Routing & Pipelines",
    tag: "GHL Pipeline",
    title: "Opportunity Pipeline Build",
    description:
      "Custom pipeline stages mapped to the full sales journey — new lead to closed-won — with automated triggers on every stage change.",
    // image: "/automations/pipeline-build.png",
  },
  {
    category: "Win-Back & Retention",
    tag: "Email Automation",
    title: "Win-Back Email Sequence",
    description:
      "A multi-step email sequence that automatically re-engages former customers with personalized offers to recover lost revenue.",
    // image: "/automations/win-back.png",
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
    // image: "/automations/website-crm.png",
  },
];

const reels = [
  { title: "Reel 1", src: "/reels/reel-1.mp4", poster: "/reels/reel-1.jpg" },
  { title: "Reel 2", src: "/reels/reel-2.mp4", poster: "/reels/reel-2.jpg" },
  { title: "Reel 3", src: "/reels/reel-3.mp4", poster: "/reels/reel-3.jpg" },
  { title: "Reel 4", src: "/reels/reel-4.mp4", poster: "/reels/reel-4.jpg" },
  { title: "Reel 5", src: "/reels/reel-5.mp4", poster: "/reels/reel-5.jpg" },
  { title: "Reel 6", src: "/reels/reel-6.mp4", poster: "/reels/reel-6.jpg" },
  { title: "Ad 1", src: "/reels/ad-1.mp4", poster: "/reels/ad-1.jpg", aspect: "landscape" as const },
  { title: "Lifestyle Gym App Walkthrough", src: "/reels/lifestyle-gym-app.mp4", poster: "/reels/lifestyle-gym-app.jpg" },
];

export default function Home() {
  const renderedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Asia/Manila",
  });

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
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

      <main id="top" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 lg:px-8">
        <Reveal>
          <section className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card/60 p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-ink">
                Open to freelance, contract, and full-time opportunities
              </div>
              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                I build AI-powered GoHighLevel automations that turn leads into revenue.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#automations"
                  className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
                >
                  View automation work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent-text/50"
                >
                  Let&apos;s connect
                </a>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-muted">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-[1.75rem] border border-white/10 bg-card-dark p-5 text-white shadow-2xl">
              <Image
                src="/ced-photo.jpg"
                alt="John Cedric A. Lunnay"
                width={720}
                height={720}
                priority
                className="rounded-[1.25rem] object-cover"
              />
              <div className="mt-5 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-2xl font-black text-accent">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="scroll-mt-24 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-colors">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">About</p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">
                A Computer Science grad who turns manual operations into automated systems.
              </h2>
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
          <section id="reels" className="scroll-mt-24 rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-colors lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Content creation</p>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground">Reels and video content</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              A selection of reels and promotional videos I created and edited for marketing campaigns.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {reels.map((reel) => (
                <div
                  key={reel.src}
                  className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-card-dark transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <video
                    src={reel.src}
                    poster={reel.poster}
                    controls
                    preload="none"
                    playsInline
                    className={`w-full bg-black object-contain ${reel.aspect === "landscape" ? "aspect-video" : "aspect-9/16"}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <p className="px-4 py-3 text-sm font-medium text-white/90">{reel.title}</p>
                </div>
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
            <h2 className="mt-2 text-2xl font-extrabold text-foreground">Let&apos;s automate your next lead pipeline.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Available for GoHighLevel builds, AI chatbot setups, and marketing automation projects — as well as
              executive support and operations roles. I&apos;d be glad to talk through what you&apos;re trying to
              automate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:cedricklunnay78@gmail.com" className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40">
                cedricklunnay78@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/johnlunnay" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent-text/50">
                LinkedIn
              </a>
              <a href="https://wa.me/639267483422" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent-text/50">
                WhatsApp
              </a>
            </div>
            <ContactForm accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
          </section>
        </Reveal>
      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-xs text-muted">
        <p>Page rendered live at {renderedAt} (Asia/Manila)</p>
      </footer>
    </div>
  );
}
