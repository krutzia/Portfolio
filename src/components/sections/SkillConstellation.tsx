import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { skillCategories, type Skill } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function SkillConstellation() {
  return (
    <section id="skills" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              The toolkit behind shipped products.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              A curated stack chosen for reliability, developer experience, and shipping speed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((c, i) => (
            <Reveal key={c.name} delay={0.04 * i}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(1_0_0_/_14%)]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    {c.name}
                  </div>
                  <span className="text-[11px] tabular-nums text-muted-foreground/70">
                    {c.skills.length} {c.skills.length === 1 ? "skill" : "skills"}
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {c.skills.map((s) => (
                    <SkillRow key={s.name} skill={s} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillRow({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [inView, setInView] = useState(false);
  const { isMinimal } = useAnimationMode();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-[13px]">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="tabular-nums text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-secondary/60">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{
            duration: isMinimal ? 0.4 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-foreground/85"
        />
      </div>
    </li>
  );
}
