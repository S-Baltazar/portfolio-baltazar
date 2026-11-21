import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ProjectsSection } from "@/components/ProjectsSection";
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
    items: ["JavaScript (JS)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "AI & Tooling",
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
        "3rd Place in Argentina — IonQ & Qollab Quantum Hackathon",
        "Local Winner — NASA Space Apps Challenge 2026",
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
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Baltazar Salerno
          </a>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <a
                href="#projects"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                Projects
              </a>
              <a
                href="#about"
                className="hidden sm:inline transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                About
              </a>
              <a
                href="#skills"
                className="hidden md:inline transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hidden sm:inline rounded-full bg-zinc-900 px-4 py-1.5 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Contact
              </a>
            </nav>

            <div
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90"
              title={`${aiUsage.totalTokens.toLocaleString("en-US")} tokens across ${aiUsage.sessions} sessions (last ${aiUsage.windowDays} days · updated ${aiUsage.updatedAt})`}
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  AI Usage: {formatCompactTokens(aiUsage.totalTokens)} tokens · {aiUsage.sessions} sessions
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                  Last {aiUsage.windowDays} days
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Available for new projects
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                  Baltazar Salerno
                </h1>

                <p className="mt-3 text-xl font-medium text-blue-600 dark:text-blue-400 sm:text-2xl">
                  Frontend Developer · Full Stack Developer · Software Engineer
                </p>

                <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                  I design and build fast, accessible, and scalable web applications with
                  JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and Artificial
                  Intelligence. Focused on clean code and clear user experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    View projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              <div className="relative shrink-0">
                <div className="h-40 w-40 overflow-hidden rounded-3xl border-2 border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:h-52 sm:w-52">
                  <Image
                    src="/profile.png"
                    alt="Profile photo of Baltazar Salerno"
                    width={208}
                    height={208}
                    priority
                    className="h-full w-full object-cover"
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
          className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  About Me
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Building digital products end to end
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  I am Baltazar Salerno, a Frontend Developer, Full Stack Developer, and Software
                  Engineer passionate about building reliable, maintainable web solutions. I enjoy
                  both crafting clear user interfaces and architecting efficient APIs and databases.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  I work with JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and
                  Artificial Intelligence (AI) integrations—prioritizing performance, accessibility,
                  and solid software engineering practices.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-200">
                    <span aria-hidden="true">🏆</span>
                    <span>3rd Place in Argentina — IonQ &amp; Qollab Hackathon</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-200">
                    <span aria-hidden="true">🏆</span>
                    <span>Local Winner — NASA Space Apps Challenge</span>
                  </div>
                </div>
              </div>

              <div id="skills">
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Tech Stack
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Core Skills
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {SKILL_GROUPS.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                    >
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {group.title}
                      </h4>
                      <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                        {group.items.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Contact
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Have a project in mind?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Feel free to reach out using the form or connect with me directly through my
                  channels.
                </p>

                <div className="mt-8 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <div>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href="mailto:baltazar.salerno@ejemplo.com"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      baltazar.salerno@ejemplo.com
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">GitHub:</span>{" "}
                    <a
                      href="https://github.com/S-Baltazar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      github.com/S-Baltazar
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">LinkedIn:</span>{" "}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      linkedin.com/in/baltazarsalerno
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <p>© 2026 Baltazar Salerno. All rights reserved.</p>
          <p>Built with Next.js &amp; TypeScript</p>
        </div>
      </footer>
    </div>
  );
}
