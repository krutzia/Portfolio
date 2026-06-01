import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { projects } from "@/config/portfolio";

const FILTERS = ["All", "Full Stack", "Frontend", "AI"] as const;
type Filter = (typeof FILTERS)[number];

function matches(filter: Filter, tech: string[]) {
  if (filter === "All") return true;
  const s = tech.join(" ").toLowerCase();
  if (filter === "Full Stack") return /node|express|mongo|supabase/.test(s);
  if (filter === "Frontend") return /react|tailwind|next/.test(s);
  if (filter === "AI") return /ai/.test(s);
  return true;
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(() => projects.filter((p) => matches(filter, p.tech)), [filter]);

  return (
    <section id="projects" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Products I've shipped end to end.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Three production projects across AI tooling, full-stack apps, and developer
              experience.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <LayoutGroup>
            <div className="mt-10 flex flex-wrap items-center gap-1 rounded-full border border-border bg-card/60 p-1 w-fit">
              {FILTERS.map((f) => {
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={
                      "relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors " +
                      (isActive ? "text-background" : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    {isActive && (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{f}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <div className="mt-8 grid gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className="rounded-lg border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:border-[oklch(1_0_0_/_14%)] sm:p-8"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-mono">0{index + 1}</span>
            <span className="h-px w-6 bg-border" />
            <span>{project.tagline}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.name}</h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/60" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
          </div>
        </div>

        <ProjectPreview project={project} />
      </div>

      <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </motion.article>
  );
}

function ProjectPreview({ project }: { project: typeof projects[number] }) {
  let host = "";
  try {
    host = new URL(project.liveUrl).hostname;
  } catch {
    host = "";
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-background/60">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/40 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">{host}</span>
      </div>
      <div className="relative h-full grid-bg">
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="space-y-2">
            <div className="h-2.5 w-2/3 rounded bg-muted-foreground/20" />
            <div className="h-2.5 w-1/2 rounded bg-muted-foreground/10" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-14 rounded border border-border bg-card/60" />
            ))}
          </div>
        </div>
        <div className="absolute left-5 top-5 font-mono text-4xl font-semibold text-muted-foreground/25">
          {project.name.slice(0, 1)}
        </div>
      </div>
    </div>
  );
}
