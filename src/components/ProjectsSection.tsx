"use client";

import { useState } from "react";
import { PROJECTS, type Project, type ProjectCategory } from "@/data/projects";

const CATEGORIES: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Full Stack",
  "Frontend",
  "Backend",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"Todos" | ProjectCategory>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Proyectos Destacados
            </h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Una selección de seis proyectos de ejemplo que muestran arquitectura, diseño de interfaces y desarrollo de APIs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar proyectos por categoría">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <div>
                <div
                  className={`relative h-36 w-full bg-gradient-to-br ${project.accentClass} border-b border-zinc-200/80 p-5 dark:border-zinc-800`}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur-sm dark:bg-zinc-950/70 dark:text-zinc-200">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      0{index + 1} · {project.year}
                    </span>
                  </div>
                  <div className="mt-6 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    /{project.id}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
                  >
                    Ver detalles →
                  </button>
                  <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    <a
                      href={project.repoUrl}
                      className="hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      Código
                    </a>
                    <a
                      href={project.demoUrl}
                      className="hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h3
                  id="project-modal-title"
                  className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar modal"
                className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {selectedProject.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Puntos clave
              </h4>
              <ul className="mt-2.5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Tecnologías
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
