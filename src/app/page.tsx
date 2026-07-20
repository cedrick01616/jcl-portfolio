import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import NavLinks from "@/components/NavLinks";
import Reveal from "@/components/Reveal";
import ResumeModal from "@/components/ResumeModal";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-dynamic";

const profile = {
  name: "John Cedric A. Lunnay",
  role: "Executive Assistant • Collections Specialist • Customer Service Advocate",
  location: "Metro Manila, Philippines",
  summary:
    "Results-driven professional with a Computer Science background and cross-functional experience in executive support, collections, customer service, marketing automation, and lead generation. I combine operational discipline with digital tools to improve efficiency, communication, and customer outcomes.",
};

const highlights = [
  "Experienced in executive support, collections, and customer success operations",
  "Built and optimized marketing automation workflows using GoHighLevel",
  "Skilled in lead generation, SEO, chatbot deployment, and campaign support",
];

const skills = [
  "GoHighLevel automation",
  "Lead generation",
  "Customer service support",
  "Collections and account follow-up",
  "Email and social media marketing",
  "SEO and content support",
  "CRM and workflow coordination",
  "Problem solving and stakeholder communication",
];

const experience = [
  {
    title: "Executive Assistant",
    company: "Gym Business Operations",
    period: "Nov 2025 - Jul 2026",
    description:
      "Built and optimized GoHighLevel workflows, launched a new company website with automated lead capture, created chatbots, supported SEO and content, managed social media and marketing campaigns, and helped with collections and accounts receivable.",
  },
  {
    title: "Customer Service Specialist",
    company: "CertainlyCX",
    period: "Aug 2025 - Oct 2025",
    description:
      "Managed calls, chats, and emails, supported sales orders and returns, handled warranty claims, maintained stock accuracy, and verified vehicle compatibility details for customer orders.",
  },
  {
    title: "Lead Generation Specialist",
    company: "Allegis Global Solutions",
    period: "Jun 2025 - Aug 2025",
    description:
      "Qualified inbound leads, researched target accounts and buyer personas, maintained prospect lists, and supported outbound outreach through email, phone, social, and events.",
  },
  {
    title: "Collections Specialist",
    company: "Accenture Inc.",
    period: "Feb 2023 - Apr 2025",
    description:
      "Contacted debtors, negotiated payment arrangements, maintained accurate records, and resolved disputes and discrepancies related to overdue accounts.",
  },
  {
    title: "Subject Matter Expert / Operations Supervisor",
    company: "Sykes Inc.",
    period: "Aug 2021 - Jan 2023",
    description:
      "Resolved escalated customer issues, handled complaints and technical troubleshooting, supported process improvements, and helped turn around difficult customer experiences.",
  },
];

const reels = [
  {
    title: "Reel 1",
    src: "/reels/reel-1.mp4",
    poster: "/reels/reel-1.jpg",
  },
  {
    title: "Reel 2",
    src: "/reels/reel-2.mp4",
    poster: "/reels/reel-2.jpg",
  },
  {
    title: "Reel 3",
    src: "/reels/reel-3.mp4",
    poster: "/reels/reel-3.jpg",
  },
  {
    title: "Reel 4",
    src: "/reels/reel-4.mp4",
    poster: "/reels/reel-4.jpg",
  },
  {
    title: "Reel 5",
    src: "/reels/reel-5.mp4",
    poster: "/reels/reel-5.jpg",
  },
  {
    title: "Reel 6",
    src: "/reels/reel-6.mp4",
    poster: "/reels/reel-6.jpg",
  },
  {
    title: "Ad 1",
    src: "/reels/ad-1.mp4",
    poster: "/reels/ad-1.jpg",
    aspect: "landscape" as const,
  },
  {
    title: "Lifestyle Gym App Walkthrough",
    src: "/reels/lifestyle-gym-app.mp4",
    poster: "/reels/lifestyle-gym-app.jpg",
  },
];

const achievements = [
  "Built and optimized automated lead management workflows using GoHighLevel",
  "Launched a website integrated with automated lead capture and routing",
  "Created chatbots and supported SEO and content initiatives for online visibility",
  "Managed customer support, collections, and retention efforts across multiple business functions",
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
          <a
            href="#top"
            className="text-lg font-extrabold tracking-[0.2em] text-foreground uppercase transition hover:text-accent-text"
          >
            {profile.name}
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
                {profile.name} — building efficient operations and customer-focused solutions with purpose.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
                >
                  Let&apos;s connect
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent-text/50"
                >
                  View experience
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Current focus</p>
                  <p className="mt-1 font-semibold">Executive Support & Automation</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Location</p>
                  <p className="mt-1 font-semibold">{profile.location}</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="scroll-mt-24 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-colors">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Professional profile</p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">A practical and people-focused professional combining operations, support, and digital strategy.</h2>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-colors">
              <p className="text-lg leading-8 text-muted">
                I bring a strong mix of operational discipline, communication, and digital problem-solving to every role. My work is grounded in creating organized, efficient, and customer-centered processes that support growth and results.
              </p>
            </div>
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
          <section id="skills" className="scroll-mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-card-dark p-7 text-white shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Core strengths</p>
              <h2 className="mt-3 text-2xl font-extrabold">Skills and capabilities</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-colors">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Career highlights</p>
              <div className="mt-6 space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="rounded-[1.1rem] border border-border bg-background/50 p-4 text-sm leading-7 text-muted transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="scroll-mt-24 rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-colors lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-text">Contact</p>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground">Let&apos;s discuss your next opportunity or project.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              I’m available for opportunities that value organization, customer focus, problem-solving, and operational support. I’d be glad to connect about roles that align with my background in administration, support, and business operations.
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
