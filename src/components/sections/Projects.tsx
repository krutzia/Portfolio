import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { projects, type Project } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";
import { ResuMatchMockup, FitTrackMockup, SiloMockup } from "@/components/sections/ProjectMockups";

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

const INDEXED = projects.map((p, i) => ({ p, i }));

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const { isMinimal, intensity } = useAnimationMode();

  const filtered = useMemo(
    () => INDEXED.filter(({ p }) => matches(filter, p.tech)).sort((a, b) => a.i - b.i),
    [filter],
  );

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { All: 0, "Full Stack": 0, Frontend: 0, AI: 0 };
    FILTERS.forEach((f) => {
      c[f] = projects.filter((p) => matches(f, p.tech)).length;
    });
    return c;
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;
  const baseDuration = isMinimal ? 0.2 : 0.35 + intensity * 0.2;

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
          <LayoutGroup id="project-filters">
            <div
              role="tablist"
              aria-label="Project category filter"
              className="mt-10 flex w-fit flex-wrap items-center gap-1 rounded-full border border-border bg-card/60 p-1"
            >
              {FILTERS.map((f) => {
                const isActive = filter === f;
                const count = counts[f];
                return (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setFilter(f)}
                    className={
                      "relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors " +
                      (isActive ? "text-background" : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    {isActive && (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={
                          isMinimal
                            ? { duration: 0.15, ease }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    )}
                    <span className="relative z-10">{f}</span>
                    <span
                      className={
                        "relative z-10 rounded-full px-1.5 text-[10px] tabular-nums " +
                        (isActive
                          ? "bg-background/15 text-background/80"
                          : "bg-secondary/60 text-muted-foreground")
                      }
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <LayoutGroup id="project-grid">
          <motion.div layout className="mt-8 grid gap-5">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map(({ p, i }, displayIndex) => (
                <motion.div
                  key={p.name}
                  layout={!isMinimal}
                  initial={{ opacity: 0, y: isMinimal ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isMinimal ? 0 : -6, scale: isMinimal ? 1 : 0.99 }}
                  transition={{
                    duration: baseDuration,
                    delay: isMinimal ? 0 : displayIndex * 0.04,
                    ease,
                    layout: isMinimal
                      ? { duration: 0.2, ease }
                      : { type: "spring", stiffness: 260, damping: 28 },
                  }}
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
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { isMinimal } = useAnimationMode();
  return (
    <motion.article
      whileHover={isMinimal ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[oklch(1_0_0_/_16%)] hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] sm:p-8"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
        <div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-mono">0{index + 1}</span>
            <span className="h-px w-6 bg-border" />
            <span>{project.tagline}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
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

        <BrowserFrame host={hostOf(project.liveUrl)}>
          {project.mockup === "resumatch" && <ResuMatchMockup />}
          {project.mockup === "fittrack" && <FitTrackMockup />}
          {project.mockup === "silo" && <SiloMockup />}
        </BrowserFrame>
      </div>

      <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </motion.article>
  );
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

function BrowserFrame({ host, children }: { host: string; children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-[oklch(0.13_0.005_260)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-[oklch(0.16_0.005_260)] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 truncate rounded bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {host}
        </span>
      </div>
      <div className="relative h-[calc(100%-29px)] overflow-hidden">{children}</div>
    </motion.div>
  );
}
