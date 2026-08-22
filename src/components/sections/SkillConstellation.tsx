import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPostman,
  SiClaude,
  SiHuggingface,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGithub,
  SiDocker,
  SiLinux,
  SiVercel,
  SiCplusplus,
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaAws, FaDatabase, FaCode } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { skillCategories } from "@/config/portfolio";

type Brand = { icon: IconType; color: string };

const SKILL_ICON: Record<string, Brand> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  AngularJS: { icon: SiAngular, color: "#DD0031" },
  Figma: { icon: SiFigma, color: "#F24E1E" },

  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#EDEDED" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  "REST APIs": { icon: SiPostman, color: "#FF6C37" },

  "OpenAI API": { icon: TbBrandOpenai, color: "#FFFFFF" },
  "Claude API": { icon: SiClaude, color: "#D97757" },
  "Prompt Engineering": { icon: TbBrandOpenai, color: "#A78BFA" },
  Embeddings: { icon: SiHuggingface, color: "#FFD21E" },

  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#00758F" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },

  "Git / GitHub": { icon: SiGithub, color: "#FFFFFF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },

  "C / C++": { icon: SiCplusplus, color: "#00599C" },
  Java: { icon: SiOpenjdk, color: "#F89820" },
  Python: { icon: SiPython, color: "#3776AB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  SQL: { icon: FaDatabase, color: "#9CA3AF" },
  "HTML / CSS": { icon: SiHtml5, color: "#E34F26" },
};

export function SkillConstellation() {
  return (
    <section id="skills" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel number="01">Tech Stack — tools I ship with</SectionLabel>
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
          {skillCategories.map((c, ci) => (
            <Reveal key={c.name} delay={0.03 * ci}>
              <div>
                <div className="mb-4 flex items-baseline justify-between">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
                    {c.name}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {c.skills.map((s) => {
                    const brand = SKILL_ICON[s.name] ?? { icon: FaCode, color: "#9CA3AF" };
                    const Icon = brand.icon;
                    return (
                      <div
                        key={s.name}
                        className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-pink/50 hover:shadow-[0_10px_30px_-15px_oklch(0.72_0.31_350_/_0.35)]"
                      >
                        <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/60 transition-colors group-hover:border-brand-pink/40">
                          <Icon
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: brand.color }}
                            aria-hidden
                          />
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
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
