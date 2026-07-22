import { Code2, Lightbulb, Layers, Globe2, BookOpen } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { profile } from "@/config/portfolio";

const cards = [
  {
    Icon: Code2,
    title: "Full Stack Development",
    body: "React, Node, and TypeScript across the stack — from idea to shipped product, with thoughtful architecture at every layer.",
  },
  {
    Icon: Lightbulb,
    title: "Problem Solving",
    body: "500+ DSA problems on LeetCode. Daily reps in algorithms, data structures, and system design — built for real engineering bars.",
  },
  {
    Icon: Layers,
    title: "Product Thinking",
    body: "I design for the user before the framework. Every feature is weighed against utility, simplicity, and shipping speed.",
  },
  {
    Icon: Globe2,
    title: "Real-World Applications",
    body: "Three production projects in live use — AI-augmented tools that solve concrete problems for real people.",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    body: "AWS-certified, always shipping. I treat learning as a daily practice — new tools, deeper fundamentals, sharper craft.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel number="01">About — the operator behind the code</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
            Building products, solving problems, and creating software people actually use.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Final-year Computer Science engineer at {profile.education.school.split(",")[0]}.
            I focus on shipping production-grade software — not demos — and care equally about
            clean code, fast iteration, and the people on the other side of the screen.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={0.04 * i}>
              <article className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(1_0_0_/_14%)]">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 transition-colors group-hover:bg-secondary">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
      {number && (
        <span className="inline-flex h-5 items-center rounded-sm border border-brand-pink/70 px-1.5 text-brand-pink">
          {number}
        </span>
      )}
      <span className="h-px w-6 bg-border" />
      {children}
    </div>
  );
}
