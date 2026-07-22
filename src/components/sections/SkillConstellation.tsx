import {
  Atom,
  Server,
  Sparkles,
  Database,
  Wrench,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { skillCategories } from "@/config/portfolio";

const CATEGORY_ICON: Record<string, LucideIcon> = {
  Frontend: Atom,
  Backend: Server,
  "AI & LLM": Sparkles,
  Databases: Database,
  "Developer Tools": Wrench,
  Languages: Code2,
};

export function SkillConstellation() {
  return (
    <section id="skills" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel number="02">Tech Stack — tools I ship with</SectionLabel>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              The toolkit behind shipped products.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              A curated stack chosen for reliability, developer experience, and shipping speed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {skillCategories.map((c, ci) => {
            const Icon = CATEGORY_ICON[c.name] ?? Code2;
            return (
              <Reveal key={c.name} delay={0.03 * ci}>
                <div>
                  <div className="mb-4 flex items-baseline justify-between">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
                      {c.name}
                    </div>
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground/70">
                      {String(c.skills.length).padStart(2, "0")} skills
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {c.skills.map((s) => (
                      <div
                        key={s.name}
                        className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-pink/50 hover:shadow-[0_10px_30px_-15px_oklch(0.72_0.31_350_/_0.35)]"
                      >
                        <div
                          className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/60 transition-colors group-hover:border-brand-pink/40"
                          style={{ color: c.accent }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-center text-[13px] font-medium text-foreground">
                          {s.name}
                        </div>
                        <div className="h-0.5 w-8 overflow-hidden rounded-full bg-secondary/60">
                          <div
                            className="h-full rounded-full bg-brand-pink/80"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
