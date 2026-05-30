import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { achievements, certifications } from "@/config/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Numbers & Credentials</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Consistency, <span className="gradient-text">measured</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <Counter target={a.value} suffix={a.suffix} label={a.label} sub={a.sub} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={0.1 + i * 0.05}>
              <div className="flex gap-4 rounded-2xl glass p-5">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--cosmos-amber)] to-[var(--cosmos-pink)] text-background">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{c.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.issuer}
                  </p>
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
}: {
  target: number;
  suffix?: string;
  label: string;
  sub?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  const value = useCountUp(target, 1600, start);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl glass p-7 transition-transform hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--cosmos-violet)] opacity-20 blur-3xl" />
      <div className="text-5xl font-bold tracking-tight sm:text-6xl">
        <span className="gradient-text">{value.toLocaleString()}</span>
        <span className="text-foreground">{suffix}</span>
      </div>
      <div className="mt-3 text-sm font-medium">{label}</div>
      {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}
