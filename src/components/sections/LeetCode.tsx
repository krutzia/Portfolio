import { ExternalLink, Flame, Target, BrainCircuit } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { socials } from "@/config/portfolio";

function seeded(n: number) {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const WEEKS = 26;
const DAYS = 7;

const HEAT = [
  "oklch(1 0 0 / 0.05)",
  "oklch(0.42 0.08 160 / 0.55)",
  "oklch(0.55 0.11 160 / 0.75)",
  "oklch(0.68 0.13 160 / 0.9)",
  "oklch(0.78 0.14 160 / 1)",
];

export function LeetCode() {
  return (
    <section id="leetcode" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Coding Journey</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Reps over hype — 500+ problems and counting.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="panel h-full rounded-lg p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Activity heatmap</div>
                  <div className="mt-1 text-base font-semibold">Daily problem-solving rhythm</div>
                </div>
                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary"
                >
                  Profile <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: WEEKS }).map((_, w) => (
                  <div key={w} className="flex flex-col gap-1">
                    {Array.from({ length: DAYS }).map((_, d) => {
                      const v = seeded(w * 7 + d);
                      const lvl = v < 0.35 ? 0 : v < 0.6 ? 1 : v < 0.8 ? 2 : v < 0.93 ? 3 : 4;
                      return (
                        <div
                          key={d}
                          className="h-2.5 w-2.5 rounded-[2px]"
                          style={{ background: HEAT[lvl] }}
                          title={`Week ${w + 1}, Day ${d + 1}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                Less
                {HEAT.map((bg, i) => (
                  <span key={i} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: bg }} />
                ))}
                More
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              <StatCard
                Icon={Target}
                title="Problems Solved"
                value="500+"
                sub="Arrays, DP, Graphs, Trees, system design fundamentals"
              />
              <StatCard
                Icon={Flame}
                title="Consistency"
                value="Daily reps"
                sub="Focused practice across difficulty tiers"
              />
              <StatCard
                Icon={BrainCircuit}
                title="Languages"
                value="C++ · Java · Python"
                sub="Comfort across paradigms"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  Icon,
  title,
  value,
  sub,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="panel panel-hover flex gap-4 rounded-lg p-5">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-md border border-border bg-secondary">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm font-semibold">{value}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
