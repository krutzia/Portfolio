import { GraduationCap, Code2, Rocket, Brain } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { profile } from "@/config/portfolio";

const cards = [
  {
    Icon: GraduationCap,
    title: "Final-year CSE",
    body: profile.education.school,
    sub: `${profile.education.period} · CGPA ${profile.education.cgpa}`,
  },
  {
    Icon: Code2,
    title: "Full Stack",
    body: "React, Node, and TypeScript across the stack — from idea to deployed product.",
    sub: "Frontend · Backend · Databases",
  },
  {
    Icon: Rocket,
    title: "Ships Products",
    body: "Three live projects in production, focused on AI-augmented tooling and user value.",
    sub: "ResuMatch · FitTrack · Silo Study AI",
  },
  {
    Icon: Brain,
    title: "Problem Solver",
    body: "450+ DSA problems on LeetCode — daily reps in algorithms and data structures.",
    sub: "C++ · Java · Python",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            A student engineer focused on building real, shipped software.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map(({ Icon, title, body, sub }, i) => (
            <Reveal key={title} delay={0.04 * i}>
              <article className="panel panel-hover h-full rounded-lg p-6">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <p className="mt-4 text-xs text-muted-foreground/70">{sub}</p>
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
    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-px w-6 bg-border" />
      {children}
    </div>
  );
}
