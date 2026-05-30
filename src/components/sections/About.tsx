import { GraduationCap, Code2, Rocket, Brain } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { profile } from "@/config/portfolio";

const cards = [
  {
    Icon: GraduationCap,
    title: "Final-year CSE",
    body: profile.education.school,
    sub: `${profile.education.period} · CGPA ${profile.education.cgpa}`,
    accent: "var(--cosmos-violet)",
  },
  {
    Icon: Code2,
    title: "Full Stack Builder",
    body: "React, Node, and modern TypeScript across the stack — from idea to deployed product.",
    sub: "Frontend · Backend · Databases",
    accent: "var(--cosmos-cyan)",
  },
  {
    Icon: Rocket,
    title: "Ships Real Products",
    body: "Three live projects in production, focused on AI-augmented tooling and user value.",
    sub: "ResuMatch · FitTrack · Silo Study AI",
    accent: "var(--cosmos-pink)",
  },
  {
    Icon: Brain,
    title: "Problem-solving Mindset",
    body: "450+ DSA problems on LeetCode — daily reps in algorithms, data structures, and system thinking.",
    sub: "C++ · Java · Python",
    accent: "var(--cosmos-emerald)",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            A student engineer wired to{" "}
            <span className="gradient-text">build, break, and ship</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cards.map(({ Icon, title, body, sub, accent }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-transform duration-500 hover:-translate-y-1"
                style={{
                  boxShadow: `0 30px 60px -40px ${accent}`,
                }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: accent }}
                />
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                  style={{ background: `${accent.replace(")", " / 0.15)")}` }}
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground/70">
                  {sub}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="h-px w-8 bg-gradient-to-r from-[var(--cosmos-violet)] to-transparent" />
      {children}
    </div>
  );
}
