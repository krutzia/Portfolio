import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X, Sparkles, Gauge, Minus } from "lucide-react";
import { useAnimationMode, type AnimationMode } from "@/context/AnimationModeContext";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Stats" },
  { id: "contact", label: "Contact" },
];

const MODES: { id: AnimationMode; label: string; Icon: typeof Sparkles }[] = [
  { id: "minimal", label: "Minimal", Icon: Minus },
  { id: "balanced", label: "Balanced", Icon: Gauge },
  { id: "cinematic", label: "Cinematic", Icon: Sparkles },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { mode, setMode } = useAnimationMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(n.id);
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <button
          onClick={() => scrollTo("home")}
          className="group flex flex-col items-start leading-tight text-foreground"
          aria-label="Kashish — home"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.14em]">KASHISH</span>
          <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            PORTFOLIO <span className="text-brand-pink">/ ©26</span>
          </span>
        </button>

        <LayoutGroup>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={
                    "relative rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors " +
                    (isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="flex items-center gap-2">
          <LayoutGroup id="motion-mode">
            <div
              role="group"
              aria-label="Animation mode"
              className="hidden items-center gap-0.5 rounded-md border border-border bg-card/60 p-0.5 lg:flex"
            >
              {MODES.map(({ id, label, Icon }) => {
                const isActive = mode === id;
                return (
                  <button
                    key={id}
                    onClick={() => setMode(id)}
                    title={`${label} animations`}
                    aria-pressed={isActive}
                    className={
                      "relative grid h-7 w-7 place-items-center rounded transition-colors " +
                      (isActive ? "text-background" : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    {isActive && (
                      <motion.span
                        layoutId="motion-mode-pill"
                        className="absolute inset-0 rounded bg-foreground"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <Icon className="relative z-10 h-3.5 w-3.5" />
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <a
            href="/resume.pdf"
            download="Kashish-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-brand-pink/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-brand-pink/10 md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pink opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-pink" />
            </span>
            Available
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-2">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full rounded-md px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download="Kashish-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
              >
                Resume ↗
              </a>
              <div className="mt-2 flex items-center gap-1 border-t border-border pt-3">
                <span className="px-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                  Motion
                </span>
                {MODES.map(({ id, label, Icon }) => {
                  const isActive = mode === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setMode(id)}
                      className={
                        "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors " +
                        (isActive
                          ? "border-foreground/40 bg-foreground text-background"
                          : "border-border text-muted-foreground hover:text-foreground")
                      }
                    >
                      <Icon className="h-3 w-3" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
