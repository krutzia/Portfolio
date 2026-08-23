import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { projects, type Project } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

const FILTERS = ["All", "Full Stack", "Frontend", "AI/Backend"] as const;
type Filter = (typeof FILTERS)[number];

export const Route = createFileRoute("/projects")({ component: AllProjects });

function AllProjects() {
  const [filter, setFilter] = useState<Filter>("All");
  const { isMinimal } = useAnimationMode();
  const filtered = useMemo(
    () => projects.filter((project) => filter === "All" || project.filterCategory === filter),
    [filter],
  );

  return (
    <div className="relative min-h-screen bg-background px-6 pb-24 pt-32 text-foreground">
      <main className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>All Projects — shipped work</SectionLabel>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Everything I&apos;ve shipped.
            </h1>
            <Link
              to="/"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink transition-opacity hover:opacity-75"
            >
              Back to Home <span className="ml-2" aria-hidden>↗</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div role="tablist" aria-label="Project category filter" className="mt-10 flex w-fit flex-wrap gap-1 rounded-full border border-border bg-card/60 p-1">
            {FILTERS.map((option) => {
              const active = option === filter;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: isMinimal ? 0 : 0.06 } },
          }}
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { isMinimal } = useAnimationMode();
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: isMinimal ? 0 : 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: isMinimal ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-pink/50"
    >
      <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>{project.category}</span>
        <span className="text-brand-pink">{project.filterCategory}</span>
      </div>
      <h2 className="mt-5 text-3xl font-extrabold uppercase leading-none">{project.name}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((technology) => (
          <span key={technology} className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-background transition-opacity hover:opacity-90">
          View Live <ExternalLink className="h-3.5 w-3.5" />
        </a>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-brand-pink/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-pink transition-colors hover:bg-brand-pink/10">
            <Github className="h-3.5 w-3.5" /> Source
          </a>
        )}
      </div>
    </motion.article>
  );
}
