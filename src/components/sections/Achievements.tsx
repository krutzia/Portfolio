import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { achievements, certifications } from "@/config/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Numbers & Credentials</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Consistency, measured.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <Counter target={a.value} suffix={a.suffix} label={a.label} sub={a.sub} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={0.08 + i * 0.05}>
              <div className="panel panel-hover flex gap-4 rounded-lg p-5">
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-md border border-border bg-secondary">
                  <Award className="h-4 w-4 text-muted-foreground" />
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
}: {
  target: number;
  suffix?: string;
  label: string;
  sub?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  const value = useCountUp(target, 1400, start);

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
    <div ref={ref} className="panel rounded-lg p-6">
      <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {value.toLocaleString()}
        <span className="text-muted-foreground">{suffix}</span>
      </div>
      <div className="mt-3 text-sm font-medium">{label}</div>
      {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}
