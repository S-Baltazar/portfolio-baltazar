import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ProjectsSection } from "@/components/ProjectsSection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import aiUsage from "@/data/ai-usage.json";
import { PROJECTS } from "@/data/projects";

function formatCompactTokens(tokens: number): string {
  if (tokens >= 1_000_000) {
    return `${(tokens / 1_000_000).toFixed(1)}M`;
  }
  if (tokens >= 1_000) {
    return `${(tokens / 1_000).toFixed(1)}K`;
  }
  return tokens.toString();
}

const SKILL_GROUPS = [
  {
    title: "Frontend",
    dotClass: "bg-sky-400",
    items: ["JavaScript (JS)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    dotClass: "bg-indigo-400",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "AI & Tooling",
    dotClass: "bg-emerald-400",
    items: ["Artificial Intelligence (AI)", "Docker", "Git & GitHub", "Vercel", "CI/CD"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Baltazar Salerno",
      jobTitle: ["Frontend Developer", "Full Stack Developer", "Software Engineer"],
      description:
        "Frontend Developer, Full Stack Developer, and Software Engineer specialized in JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and Artificial Intelligence.",
      email: "mailto:baltazar.salerno@ejemplo.com",
      sameAs: [
        "https://github.com/S-Baltazar",
        "https://linkedin.com/in/baltazarsalerno",
      ],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "Python",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Artificial Intelligence",
      ],
      award: [
        "1st Place (Impact Category) & 3rd Place in Argentina — IonQ & Qollab Quantum Hackathon",
        "1st Place Local Winner (Impact Category) — NASA Space Apps Challenge 2026",
      ],
    },
    {
      "@type": "ItemList",
      name: "Projects by Baltazar Salerno",
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          keywords: project.technologies.join(", "),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#06080f] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient background glow + animated dot grid */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="bg-grid-pattern animate-grid-pan absolute inset-0 opacity-65" />
        <div className="animate-orb-1 absolute -top-36 left-1/5 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[130px]" />
        <div className="animate-orb-2 absolute top-1/3 right-1/6 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-[145px]" />
        <div className="animate-orb-3 absolute bottom-[-6rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-emerald-500/15 blur-[130px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06080f]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-black text-xs font-bold text-white shadow-sm">
              B
            </span>
            <span>Baltazar Salerno</span>
          </a>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-5 text-sm font-medium text-zinc-400">
              <a href="#projects" className="transition-colors hover:text-white">
                Projects
              </a>
              <a
                href="#about"
                className="hidden sm:inline transition-colors hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="hidden md:inline transition-colors hover:text-white"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hidden sm:inline rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-white transition-colors hover:bg-white/15"
              >
                Contact
              </a>
            </nav>

            <div
              className="flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs backdrop-blur-md"
              title={`${aiUsage.totalTokens.toLocaleString("en-US")} tokens across ${aiUsage.sessions} sessions (last ${aiUsage.windowDays} days · updated ${aiUsage.updatedAt})`}
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-zinc-100">
                  AI Usage: {formatCompactTokens(aiUsage.totalTokens)} tokens · {aiUsage.sessions} sessions
                </span>
                <span className="text-[10px] text-emerald-300/80">
                  Last {aiUsage.windowDays} days
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </span>
                  Available for new projects
                </div>

                <h1 className="animate-fade-up-delay-1 animate-gradient mt-6 bg-gradient-to-r from-white via-sky-200 to-indigo-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                  Baltazar Salerno
                </h1>

                <p className="animate-fade-up-delay-1 mt-3 text-xl font-medium text-sky-400 sm:text-2xl">
                  Frontend Developer · Full Stack Developer · Software Engineer
                </p>

                <p className="animate-fade-up-delay-2 mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
                  I design and build fast, accessible, and scalable web applications with
                  JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and Artificial
                  Intelligence. Focused on clean code and clear user experiences.
                </p>

                <div className="animate-fade-up-delay-2 mt-6 flex flex-wrap gap-2.5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200 transition-transform duration-200 hover:-translate-y-0.5 hover:border-amber-300/50">
                    <span aria-hidden="true">🏆</span>
                    <span>1st Place (Impact) &amp; 3rd in Argentina — IonQ &amp; Qollab Hackathon</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200 transition-transform duration-200 hover:-translate-y-0.5 hover:border-amber-300/50">
                    <span aria-hidden="true">🏆</span>
                    <span>Local Winner (Impact) — NASA Space Apps Challenge</span>
                  </div>
                </div>

                <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-200 hover:shadow-[0_0_40px_rgba(56,189,248,0.45)]"
                  >
                    View projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              <div className="animate-float-slow relative shrink-0">
                <div className="absolute -inset-1.5 rounded-[30px] bg-gradient-to-tr from-sky-500/60 via-indigo-500/35 to-emerald-400/50 blur-xl opacity-75 transition-opacity duration-500 hover:opacity-100" />
                <div className="relative h-44 w-44 overflow-hidden rounded-3xl border border-white/20 bg-zinc-900 shadow-2xl sm:h-56 sm:w-56">
                  <Image
                    src="/profile.png"
                    alt="Profile photo of Baltazar Salerno"
                    width={224}
                    height={224}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />

        {/* About & Skills */}
        <section
          id="about"
          className="relative py-24 sm:py-28 border-t border-white/10"
        >
          <RevealOnScroll className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
                  02 // About &amp; Stack
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  Building digital products end to end
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  I am Baltazar Salerno, a Frontend Developer, Full Stack Developer, and Software
                  Engineer passionate about building reliable, maintainable web solutions. I enjoy
                  both crafting clear user interfaces and architecting efficient APIs and databases.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  I work with JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and
                  Artificial Intelligence (AI) integrations—prioritizing performance, accessibility,
                  and solid software engineering practices.
                </p>
              </div>

              <div id="skills">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
                  Tech Stack
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  Core Skills
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {SKILL_GROUPS.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${group.dotClass}`} />
                        <h4 className="text-sm font-semibold text-white">
                          {group.title}
                        </h4>
                      </div>
                      <ul className="mt-3.5 space-y-2 text-sm text-zinc-400">
                        {group.items.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative py-24 sm:py-28 border-t border-white/10"
        >
          <RevealOnScroll className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
                  03 // Get in Touch
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  Have a project in mind?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                  Feel free to reach out using the form or connect with me directly through my
                  channels.
                </p>

                <div className="mt-8 space-y-3 text-sm text-zinc-300">
                  <div>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    <a
                      href="mailto:baltazar.salerno@ejemplo.com"
                      className="text-sky-400 hover:underline"
                    >
                      baltazar.salerno@ejemplo.com
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white">GitHub:</span>{" "}
                    <a
                      href="https://github.com/S-Baltazar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      github.com/S-Baltazar
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white">LinkedIn:</span>{" "}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      linkedin.com/in/baltazarsalerno
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </RevealOnScroll>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Baltazar Salerno. All rights reserved.</p>
          <p>Built with Next.js &amp; TypeScript</p>
        </div>
      </footer>
    </div>
  );
}
