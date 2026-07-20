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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_24%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-900 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),_transparent_24%),linear-gradient(135deg,_#020617_0%,_#0b1120_100%)] dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-lg font-semibold tracking-[0.2em] text-slate-700 uppercase transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
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
          <section className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-colors lg:grid-cols-[1.1fr_0.9fr] lg:p-12 dark:border-white/10 dark:bg-white/5">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                Open to freelance, contract, and full-time opportunities
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                {profile.name} — building efficient operations and customer-focused solutions with purpose.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:-translate-y-0.5 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  Let&apos;s connect
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  View experience
                </a>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl dark:border-white/10">
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
                  <p className="text-sm text-slate-300">Current focus</p>
                  <p className="mt-1 font-semibold">Executive Support & Automation</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Location</p>
                  <p className="mt-1 font-semibold">{profile.location}</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="scroll-mt-24 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-7 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Professional profile</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">A practical and people-focused professional combining operations, support, and digital strategy.</h2>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-7 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5">
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                I bring a strong mix of operational discipline, communication, and digital problem-solving to every role. My work is grounded in creating organized, efficient, and customer-centered processes that support growth and results.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white/80 p-7 shadow-sm transition-colors lg:p-8 dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Experience</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Professional experience and career highlights</h2>
              </div>
              <ResumeModal />
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {experience.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="skills" className="scroll-mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-sm dark:border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Core strengths</p>
              <h2 className="mt-3 text-2xl font-semibold">Skills and capabilities</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-7 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Career highlights</p>
              <div className="mt-6 space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="rounded-[1.1rem] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white/80 p-7 shadow-sm transition-colors lg:p-8 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Let&apos;s discuss your next opportunity or project.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I’m available for opportunities that value organization, customer focus, problem-solving, and operational support. I’d be glad to connect about roles that align with my background in administration, support, and business operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:cedricklunnay78@gmail.com" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:-translate-y-0.5 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                cedricklunnay78@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/johnlunnay" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10">
                LinkedIn
              </a>
              <a href="https://wa.me/639267483422" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10">
                WhatsApp
              </a>
            </div>
            <ContactForm accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
          </section>
        </Reveal>
      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-xs text-slate-400 dark:text-slate-500">
        <p>Page rendered live at {renderedAt} (Asia/Manila)</p>
      </footer>
    </div>
  );
}
