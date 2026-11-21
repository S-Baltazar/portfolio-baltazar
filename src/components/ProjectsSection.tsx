"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS, type Project, type ProjectCategory } from "@/data/projects";

const CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  ...Array.from(new Set(PROJECTS.map((project) => project.category))),
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
              01 // Selected Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-400">
              Real-world projects I have worked on, explained clearly from the problem they solve to the technology behind them.
            </p>
          </div>

          {CATEGORIES.length > 2 && (
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        : "border border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/25 hover:bg-white/[0.08]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.2)]"
            >
              <div>
                <div
                  className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.accentClass} border-b border-white/10`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/25 to-black/35" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-medium text-zinc-100 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300 backdrop-blur-md">
                        0{index + 1} · {project.year}
                      </span>
                    </div>
                    {project.award && (
                      <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-400/95 px-3 py-1 text-[11px] font-semibold text-zinc-950 shadow-lg">
                        <span aria-hidden="true">🏆</span>
                        <span>{project.award}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-medium text-sky-400 transition-colors hover:text-sky-300 cursor-pointer"
                  >
                    View details →
                  </button>
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1 text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/10"
                    >
                      GitHub ↗
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white px-2.5 py-1 text-zinc-950 transition-colors hover:bg-sky-200"
                      >
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#0b101d] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-sky-400">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h3
                  id="project-modal-title"
                  className="mt-1 text-2xl font-bold text-white"
                >
                  {selectedProject.title}
                </h3>
                {selectedProject.award && (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                    <span aria-hidden="true">🏆</span>
                    <span>{selectedProject.award}</span>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {selectedProject.description}
            </p>

            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Key Highlights
              </h4>
              <ul className="mt-2.5 space-y-2 text-sm text-zinc-300">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-sky-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Technologies
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/10"
                >
                  GitHub Repository ↗
                </a>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-sky-500 px-3.5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-sky-400"
                  >
                    Live / Video Demo ↗
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
