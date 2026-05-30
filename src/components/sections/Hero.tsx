import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile, roles, socials } from "@/config/portfolio";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function Hero() {
  const [idx, setIdx] = useState(0);
  const { isMinimal, isCinematic } = useAnimationMode();

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-24"
    >
      {/* Layered backdrop */}
      <div className="cosmos-bg animate-gradient pointer-events-none absolute inset-0 -z-10" />
      <div className="noise-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />

      {/* Floating orbs */}
      {!isMinimal && (
        <>
          <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[var(--cosmos-violet)] opacity-20 blur-3xl animate-float-slow" />
          <div
            className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[var(--cosmos-cyan)] opacity-20 blur-3xl animate-float-slow"
            style={{ animationDelay: "-4s" }}
          />
          {isCinematic && (
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cosmos-pink)] opacity-10 blur-3xl animate-float-slow"
              style={{ animationDelay: "-2s" }}
            />
          )}
        </>
      )}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to internships & full-time roles
        </motion.div>

        <h1 className="text-balance text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
          <AnimatedName text={profile.name} />
        </h1>

        <div className="mt-8 flex h-10 items-center justify-center text-xl text-muted-foreground sm:text-2xl">
          <span className="opacity-70">I'm a&nbsp;</span>
          <span className="relative inline-block min-w-[14ch] text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[idx]}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 gradient-text font-semibold"
              >
                {roles[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            icon={<Download className="h-4 w-4" />}
          >
            Resume
          </MagneticButton>
          <MagneticButton
            as="a"
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            icon={<Github className="h-4 w-4" />}
          >
            GitHub
          </MagneticButton>
          <MagneticButton
            as="a"
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            icon={<Linkedin className="h-4 w-4" />}
          >
            LinkedIn
          </MagneticButton>
          <MagneticButton
            variant="outline"
            onClick={() => scrollTo("contact")}
            icon={<Mail className="h-4 w-4" />}
          >
            Contact
          </MagneticButton>
        </motion.div>

        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto mt-16 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
        >
          Scroll to explore <ArrowRight className="h-3 w-3 rotate-90" />
        </motion.button>
      </div>
    </section>
  );
}

function AnimatedName({ text }: { text: string }) {
  const { isMinimal } = useAnimationMode();
  if (isMinimal) {
    return <span className="gradient-text">{text}</span>;
  }
  return (
    <span className="inline-block">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block gradient-text"
          initial={{ y: 60, opacity: 0, rotateX: -45 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
