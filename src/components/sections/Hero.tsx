import { motion, type Variants } from "framer-motion";
import { Download, Github, Linkedin, ArrowDown, MapPin } from "lucide-react";
import { profile, socials } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function Hero() {
  const { isMinimal, intensity } = useAnimationMode();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMinimal ? 0 : 0.05 + intensity * 0.05,
        delayChildren: isMinimal ? 0 : 0.05 + intensity * 0.06,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: isMinimal ? 0 : 10 + intensity * 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMinimal ? 0.25 : 0.5 + intensity * 0.25,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 50% at 30% 0%, oklch(0.55 0.08 240 / 0.10), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 dot-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16"
      >
        {/* LEFT — Text */}
        <div className="order-2 text-left lg:order-1">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
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
            className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-[clamp(4rem,12vw,9rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground"
          >
            Kashish
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <span className="text-foreground">Full Stack Developer</span>
            <span className="mx-3 text-border">·</span>
            Problem Solver
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            Final-year CS student crafting production-grade web products with React, Node, and
            TypeScript. Focused on performance, accessibility, and clean architecture.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <MapPin className="h-3 w-3" />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:border-[oklch(1_0_0_/_18%)]"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Get in touch →
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-5 text-muted-foreground"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-xs transition-colors hover:text-foreground"
            >
              LeetCode ↗
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Portrait */}
        <motion.div
          variants={item}
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 40%, oklch(0.55 0.08 240 / 0.18), transparent 70%)",
              }}
            />
            <motion.div
              whileHover={isMinimal ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
            >
              <img
                src={profile.portraitUrl}
                alt="Portrait of Kashish — Full Stack Developer"
                className="aspect-[3/4] w-full object-cover"
                loading="eager"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-md border border-border/60 bg-background/70 px-3 py-2 text-[11px] text-muted-foreground backdrop-blur-md">
                <span className="font-mono">@krutzia</span>
                <span>Noida · India</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={
          isMinimal
            ? { opacity: 0.7 }
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground md:inline-flex"
      >
        <ArrowDown className="h-3 w-3" />
        Scroll
      </motion.button>
    </section>
  );
}
