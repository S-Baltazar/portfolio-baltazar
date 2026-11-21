import { ContactForm } from "@/components/ContactForm";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PROJECTS } from "@/data/projects";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["JavaScript (JS)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Datos",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "APIs REST"],
  },
  {
    title: "IA & Herramientas",
    items: ["Inteligencia Artificial (IA)", "Docker", "Git & GitHub", "Vercel", "CI/CD"],
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
        "Frontend Developer, Full Stack Developer y Software Engineer especializado en JavaScript, Python, React, Node.js, MongoDB, PostgreSQL e Inteligencia Artificial.",
      email: "mailto:baltazar.salerno@ejemplo.com",
      sameAs: [
        "https://github.com/baltazarsalerno",
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
        "Inteligencia Artificial",
      ],
    },
    {
      "@type": "ItemList",
      name: "Proyectos de Baltazar Salerno",
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

          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#proyectos"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Sobre mí
            </a>
            <a
              href="#habilidades"
              className="hidden sm:inline transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-zinc-900 px-4 py-1.5 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Disponible para nuevos proyectos
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                Baltazar Salerno
              </h1>

              <p className="mt-3 text-xl font-medium text-blue-600 dark:text-blue-400 sm:text-2xl">
                Frontend Developer · Full Stack Developer · Software Engineer
              </p>

              <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                Diseño y construyo aplicaciones web rápidas, accesibles y escalables con
                JavaScript, Python, React, Node.js, MongoDB, PostgreSQL e Inteligencia Artificial.
                Enfocado en código limpio y experiencias de usuario claras.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  Contactarme
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Mock Projects */}
        <ProjectsSection />

        {/* Sobre mí & Habilidades */}
        <section
          id="sobre-mi"
          className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Sobre mí
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Construyendo productos digitales de principio a fin
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Soy Baltazar Salerno, Frontend Developer, Full Stack Developer y Software Engineer
                  apasionado por crear soluciones web sólidas y fáciles de mantener. Disfruto tanto
                  del diseño de interfaces claras como de la arquitectura de APIs y bases de datos
                  eficientes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Trabajo con JavaScript, Python, React, Node.js, MongoDB, PostgreSQL e integración
                  de Inteligencia Artificial (IA), priorizando el rendimiento, la accesibilidad y
                  las buenas prácticas de ingeniería de software.
                </p>
              </div>

              <div id="habilidades">
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Stack Tecnológico
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Habilidades principales
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

        {/* Contacto */}
        <section
          id="contacto"
          className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Contacto
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  ¿Tenés un proyecto en mente?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Podés escribirme mediante el formulario o contactarme directamente por mis canales
                  habituales.
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
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      github.com/baltazarsalerno
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
          <p>© 2026 Baltazar Salerno. Todos los derechos reservados.</p>
          <p>Hecho con Next.js &amp; TypeScript</p>
        </div>
      </footer>
    </div>
  );
}
