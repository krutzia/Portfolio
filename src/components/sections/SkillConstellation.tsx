import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { skillCategories } from "@/config/portfolio";

export function SkillConstellation() {
  return (
    <section id="skills" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              The tools I use to turn ideas into products.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              A curated stack — chosen for reliability, developer experience, and shipping speed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((c) => (
              <div key={c.name} className="panel panel-hover rounded-lg p-5">
                <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                  {c.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-secondary/40 px-2 py-1 text-xs text-foreground/85 transition-colors hover:bg-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
