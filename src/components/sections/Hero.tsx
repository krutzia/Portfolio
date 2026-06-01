import { motion, type Variants } from "framer-motion";
import { Download, Github, Linkedin, ChevronDown } from "lucide-react";
import { profile, socials } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function Hero() {
  const { isMinimal, intensity } = useAnimationMode();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMinimal ? 0 : 0.05 + intensity * 0.06,
        delayChildren: isMinimal ? 0 : 0.05 + intensity * 0.08,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: isMinimal ? 0 : 8 + intensity * 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMinimal ? 0.25 : 0.45 + intensity * 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      {/* Subtle ambient spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.7 0.12 235 / 0.10), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 dot-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-3xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            {!isMinimal && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            )}
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for internships & full-time roles
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 text-sm font-medium tracking-[0.18em] text-muted-foreground uppercase"
        >
          Hi, I'm {profile.name}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.intro} I build production web products with React, Node, and TypeScript —
          with a focus on performance, accessibility, and clean architecture.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:border-[oklch(1_0_0_/_18%)]"
          >
            <Github className="h-4 w-4" />
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:border-[oklch(1_0_0_/_18%)]"
          >
            Contact Me
          </button>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center justify-center gap-5 text-muted-foreground"
        >
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={socials.leetcode} target="_blank" rel="noreferrer" className="text-xs transition-colors hover:text-foreground">
            LeetCode ↗
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={
          isMinimal
            ? { opacity: 0.8 }
            : { opacity: 1, y: [0, 4 + intensity * 4, 0] }
        }
        transition={
          isMinimal
            ? { duration: 0.3 }
            : {
                opacity: { delay: 0.9, duration: 0.6 },
                y: { delay: 0.9, duration: 2.2 - intensity * 0.4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
      >
        <ChevronDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
