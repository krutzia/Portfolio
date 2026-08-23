import type { IconType } from "react-icons";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
import { useAnimationMode } from "@/context/AnimationModeContext";

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

const FEATURED_SKILLS = ["React.js", "Next.js", "TypeScript"];

const FEATURED_DETAILS: Record<string, string> = {
  "React.js": "Interfaces with momentum",
  TypeScript: "Reliable systems by default",
  "Next.js": "Fast, considered web experiences",
};

const SKILL_DESCRIPTIONS: Record<string, string> = {
  "React.js": "Component-driven interfaces",
  "Next.js": "Full-stack React applications",
  TypeScript: "Typed, dependable JavaScript",
  "Tailwind CSS": "Utility-first responsive styling",
  AngularJS: "Structured web application framework",
  Figma: "Collaborative interface design",
  "HTML / CSS": "Semantic structure and styling",
  "Node.js": "JavaScript runtime for services",
  "Express.js": "Minimal APIs and web services",
  PHP: "Server-side web development",
  "REST APIs": "Clear resource-based integrations",
  Supabase: "Backend services and data storage",
  "OpenAI API": "Production-ready AI capabilities",
  "Claude API": "Helpful language model workflows",
  "Prompt Engineering": "Precise instructions for AI systems",
  Embeddings: "Meaning-aware search representations",
  MongoDB: "Flexible document-oriented database",
  PostgreSQL: "Reliable relational data platform",
  MySQL: "Widely used relational database",
  SQL: "Querying and shaping structured data",
  "Git / GitHub": "Version control and collaboration",
  Docker: "Portable application environments",
  Linux: "Reliable open-source operating system",
  AWS: "Cloud infrastructure and services",
  Vercel: "Fast frontend deployment platform",
  "C / C++": "Performance-focused programming",
  Java: "Portable object-oriented applications",
  Python: "Readable general-purpose programming",
  JavaScript: "The language of the web",
};

const FEATURED_SKILL_DATA = FEATURED_SKILLS.map((name) => {
  const category = skillCategories.find((item) => item.skills.some((skill) => skill.name === name));
  const skill = category?.skills.find((item) => item.name === name);
  return { name, level: skill?.level ?? 0, category: category?.name ?? "Toolkit" };
});

export function SkillConstellation() {
  const { isMinimal } = useAnimationMode();

  return (
    <section id="skills" className="relative flex min-h-[100svh] items-center overflow-hidden border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] md:gap-16">
          <div>
            <Reveal>
              <SectionLabel number="01">Tech Stack — tools I ship with</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: isMinimal ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: isMinimal ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl"
              >
                The toolkit behind my shipped products.
              </motion.h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} y={16}>
            <div className="flex flex-col justify-center md:pt-8">
              <p className="max-w-sm text-sm text-muted-foreground">
                A curated stack chosen for reliability, developer experience, and shipping speed.
              </p>
              <Link
                to="/skills"
                className="group mt-7 inline-flex w-fit items-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink transition-all duration-500 hover:translate-x-1 hover:opacity-75"
              >
                View All Skills <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: isMinimal ? 0 : 0.1, delayChildren: isMinimal ? 0 : 0.2 } },
          }}
          className="mt-20 grid gap-3 sm:grid-cols-2 md:mt-28 lg:grid-cols-3"
        >
          {FEATURED_SKILL_DATA.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: isMinimal ? 0 : 26 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: isMinimal ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={isMinimal ? undefined : { y: -5, scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-48 overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-500 hover:border-brand-pink/50 hover:shadow-[0_18px_45px_-24px_oklch(0.72_0.31_350_/_0.5)] md:min-h-56 md:p-7"
              >
                <SkillCardContent name={skill.name} category={skill.category} index={index} detail={FEATURED_DETAILS[skill.name]} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function SkillCardContent({
  name,
  category,
  index,
  detail,
}: {
  name: string;
  category: string;
  index: number;
  detail?: string;
}) {
  const brand = SKILL_ICON[name] ?? { icon: FaCode, color: "#9CA3AF" };
  const Icon = brand.icon;

  return (
    <>
      <div className="flex items-start justify-between gap-4">
      <div className="grid h-14 w-14 place-items-center rounded-lg border border-border bg-background/60 transition-all duration-500 group-hover:scale-105 group-hover:border-brand-pink/40">
        <Icon className="h-7 w-7" style={{ color: brand.color }} aria-hidden />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          0{index + 1} / {category}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand-pink transition-transform duration-500 group-hover:scale-x-100" />
      <div className="mt-12">
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {detail ?? SKILL_DESCRIPTIONS[name]}
        </p>
      </div>
    </>
  );
}
