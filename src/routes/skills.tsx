import { AnimatePresence, motion } from "framer-motion";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { SkillCardContent } from "@/components/sections/SkillConstellation";
import { skillCategories } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

export const Route = createFileRoute("/skills")({ component: AllSkills });

function AllSkills() {
  const [filter, setFilter] = useState("All");
  const { isMinimal } = useAnimationMode();
  const filterMap: Record<string, string | undefined> = {
    All: undefined,
    Frontend: "Frontend",
    Backend: "Backend",
    Database: "Database",
    DevOps: "DevOps",
    Language: "Language",
    Tools: "Tools",
  };
  const categories = filterMap[filter]
    ? skillCategories.filter(({ name }) => name === filterMap[filter])
    : skillCategories;

  return (
    <PageFrame>
      <Reveal>
        <SectionLabel>All Skills — the complete toolkit</SectionLabel>
        <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            All Skills
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Complete overview of my technical expertise and proficiency levels
          </p>
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink transition-opacity hover:opacity-75"
          >
            Back to Home <span className="ml-2" aria-hidden>↗</span>
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div role="tablist" aria-label="Skill category filter" className="mt-10 flex w-fit flex-wrap gap-1 rounded-full border border-border bg-card/60 p-1">
            {["All", "Frontend", "Backend", "Database", "DevOps", "Language", "Tools"].map((option) => {
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

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: isMinimal ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isMinimal ? 0 : -6 }}
          transition={{ duration: isMinimal ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 space-y-10"
        >
        {categories.map((category) => (
          <section key={category.name}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
              {category.name}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={`${filter}-${skill.name}`}
                  initial={{ opacity: 0, y: isMinimal ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: isMinimal ? 0.2 : 0.55, delay: isMinimal ? 0 : (index % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={isMinimal ? undefined : { y: -5, scale: 1.015 }}
                  className="group relative min-h-48 overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-500 hover:border-brand-pink/50 hover:shadow-[0_18px_45px_-24px_oklch(0.72_0.31_350_/_0.5)] md:min-h-56 md:p-7"
                >
                  <SkillCardContent name={skill.name} category={category.name} index={index} />
                </motion.div>
              ))}
            </div>
          </section>
        ))}
        </motion.div>
      </AnimatePresence>
    </PageFrame>
  );
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background px-6 pb-24 pt-32 text-foreground">
      <main className="mx-auto max-w-6xl">{children}</main>
    </div>
  );
}

