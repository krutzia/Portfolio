import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { Award } from "lucide-react";

const certifications = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)" },
  { name: "AWS AI Practitioner Challenge", issuer: "Udacity" },
  { name: "Deloitte — Technology Job Simulation", issuer: "Deloitte × Forage" },
  { name: "IBM — Python 101 for Data Science", issuer: "IBM" },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-10 panel rounded-lg p-6 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  AICTE GenAI &amp; Cloud Computing Intern
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">BharatCares (CSRBOX) × IBM</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                May 2026 – July 2026 · Remote
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              Developed AI-powered applications using Generative AI, LLMs, prompt engineering, and
              cloud technologies, working across multiple real-world use cases.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["Generative AI", "LLMs", "Prompt Engineering", "IBM Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <Reveal key={certification.name} delay={0.06 + index * 0.05}>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(1_0_0_/_14%)]">
                  <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-md border border-border bg-secondary/60">
                    <Award className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug">{certification.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{certification.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
