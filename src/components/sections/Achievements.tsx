import { useEffect, useRef, useState } from "react";
import { Award, Code2, Cloud, Rocket } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { achievements, certifications } from "@/config/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

const ICONS = [Code2, Cloud, Rocket];

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>By the numbers</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Consistency, measured.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] text-muted-foreground">
            Reps, certifications, and shipped products — receipts for the work behind the résumé.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = ICONS[i] ?? Award;
            return (
              <Reveal key={a.label} delay={i * 0.06}>
                <Counter
                  target={a.value}
                  suffix={a.suffix}
                  label={a.label}
                  sub={a.sub}
                  Icon={Icon}
                />
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={0.08 + i * 0.05}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(1_0_0_/_14%)]">
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-border bg-secondary/60">
                  <Award className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  target,
  suffix,
  label,
  sub,
  Icon,
}: {
  target: number;
  suffix?: string;
  label: string;
  sub?: string;
  Icon: typeof Award;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  const value = useCountUp(target, 1600, start);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setStart(true), {
      threshold: 0.4,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(1_0_0_/_14%)]"
    >
      <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60">
        <Icon className="h-4 w-4 text-foreground" />
      </div>
      <div className="text-5xl font-semibold tracking-[-0.02em] tabular-nums text-foreground sm:text-6xl">
        {value.toLocaleString()}
        <span className="text-muted-foreground">{suffix}</span>
      </div>
      <div className="mt-4 text-sm font-medium">{label}</div>
      {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.55 0.08 240 / 0.18), transparent 70%)",
        }}
      />
    </div>
  );
}
