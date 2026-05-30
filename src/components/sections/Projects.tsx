import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { projects } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="mt-3 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Products I've shipped <span className="gradient-text">end to end</span>.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Three production projects spanning AI tooling, full-stack apps, and developer
              experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const { isMinimal } = useAnimationMode();

  return (
    <motion.article
      whileHover={isMinimal ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-10"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
        style={{ background: project.accent }}
      />
      {/* Subtle grid */}
      <div className="noise-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>0{index + 1}</span>
            <span className="h-px w-8 bg-white/20" />
            <span style={{ color: project.accent }}>{project.tagline}</span>
          </div>
          <h3 className="mt-4 text-3xl font-bold sm:text-4xl">{project.name}</h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                <span
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: project.accent }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Preview */}
        <ProjectPreview project={project} />
      </div>

      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
    </motion.article>
  );
}

function ProjectPreview({ project }: { project: typeof projects[number] }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 truncate text-[10px] text-muted-foreground">
          {new URL(project.liveUrl).hostname}
        </span>
      </div>
      <div
        className="relative h-full"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${cm(project.accent, 0.35)}, transparent 60%), radial-gradient(ellipse at 80% 80%, ${cm(project.accent, 0.2)}, transparent 55%)`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="space-y-2">
            <div className="h-3 w-2/3 rounded-full bg-white/20" />
            <div className="h-3 w-1/2 rounded-full bg-white/10" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-16 rounded-lg border border-white/10 bg-white/5 backdrop-blur"
              />
            ))}
          </div>
        </div>
        <div
          className="absolute left-5 top-5 text-5xl font-bold opacity-30"
          style={{ color: project.accent }}
        >
          {project.name.slice(0, 1)}
        </div>
      </div>
    </div>
  );
}

function cm(color: string, a: number) {
  return `color-mix(in oklch, ${color} ${Math.round(a * 100)}%, transparent)`;
}
