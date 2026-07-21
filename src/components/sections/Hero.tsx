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
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-pink"
          >
            [ initializing — portfolio_2026 // kashish online ]
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-10 text-[clamp(4rem,13vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-foreground"
          >
            STAY
            <br />
            <span className="text-brand-pink">CURIOUS.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            Developer <span className="text-brand-pink">/</span> Problem Solver{" "}
            <span className="text-brand-pink">/</span> Builder
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            I'm <span className="text-foreground">Kashish</span> — final-year CS student
            crafting production-grade web products with React, Node, and TypeScript. Focused
            on performance, accessibility, and clean architecture.
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

        {/* RIGHT — Portrait (frameless, editorial) */}
        <motion.div
          variants={item}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:h-[86vh] lg:min-h-[620px] lg:max-w-none"
        >
          {/* Ambient glow + soft studio backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(45% 55% at 55% 40%, oklch(0.55 0.08 240 / 0.22), transparent 72%), radial-gradient(70% 75% at 50% 55%, oklch(0.22 0.01 260 / 0.7), transparent 78%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(28% 38% at 68% 22%, oklch(1 0 0 / 0.06), transparent 70%)",
            }}
          />

          <motion.div
            whileHover={isMinimal ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="relative h-[70vh] min-h-[480px] w-full lg:h-full"
          >
            <img
              src={profile.portraitUrl}
              alt="Portrait of Kashish — Full Stack Developer"
              loading="eager"
              className="absolute inset-0 h-full w-full select-none object-cover object-top"
              style={{
                WebkitMaskImage:
                  "radial-gradient(72% 82% at 50% 42%, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)",
                maskImage:
                  "radial-gradient(72% 82% at 50% 42%, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)",
              }}
            />
            {/* Vignette + edge fades into page background */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 55%, var(--background) 100%), linear-gradient(to right, var(--background) 0%, transparent 14%, transparent 86%, var(--background) 100%)",
              }}
            />
            {/* Frameless caption */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.35em] text-muted-foreground/70">
              @krutzia · noida
            </div>
          </motion.div>
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
