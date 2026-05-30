import { ExternalLink, Flame, Target, BrainCircuit } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { socials } from "@/config/portfolio";

// Deterministic pseudo-random for the contribution-style grid
function seeded(n: number) {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const WEEKS = 26;
const DAYS = 7;

export function LeetCode() {
  return (
    <section id="leetcode" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Coding Journey</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Reps over hype — <span className="gradient-text">450+ problems</span> and counting.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Activity heatmap
                  </div>
                  <div className="mt-1 text-lg font-semibold">Daily problem-solving rhythm</div>
                </div>
                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs hover:bg-white/5"
                >
                  View profile <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: WEEKS }).map((_, w) => (
                  <div key={w} className="flex flex-col gap-1.5">
                    {Array.from({ length: DAYS }).map((_, d) => {
                      const v = seeded(w * 7 + d);
                      const lvl = v < 0.35 ? 0 : v < 0.6 ? 1 : v < 0.8 ? 2 : v < 0.93 ? 3 : 4;
                      const bg = [
                        "oklch(1 0 0 / 0.04)",
                        "oklch(0.45 0.12 295 / 0.6)",
                        "oklch(0.58 0.16 290 / 0.75)",
                        "oklch(0.72 0.2 295 / 0.9)",
                        "oklch(0.85 0.18 220 / 1)",
                      ][lvl];
                      return (
                        <div
                          key={d}
                          className="h-3 w-3 rounded-[3px] transition-transform hover:scale-125"
                          style={{ background: bg }}
                          title={`Week ${w + 1}, Day ${d + 1}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-[10px] text-muted-foreground">
                Less
                {[0, 1, 2, 3, 4].map((lvl) => {
                  const bg = [
                    "oklch(1 0 0 / 0.04)",
                    "oklch(0.45 0.12 295 / 0.6)",
                    "oklch(0.58 0.16 290 / 0.75)",
                    "oklch(0.72 0.2 295 / 0.9)",
                    "oklch(0.85 0.18 220 / 1)",
                  ][lvl];
                  return (
                    <span
                      key={lvl}
                      className="h-3 w-3 rounded-[3px]"
                      style={{ background: bg }}
                    />
                  );
                })}
                More
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <StatCard
                Icon={Target}
                title="Problems Solved"
                value="450+"
                sub="Arrays, DP, Graphs, Trees, System design fundamentals"
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
    <div className="flex gap-4 rounded-2xl glass p-5">
      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/5">
        <Icon className="h-5 w-5 text-[var(--cosmos-cyan)]" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 text-lg font-semibold">{value}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
