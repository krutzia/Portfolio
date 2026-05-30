import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Zap, Film } from "lucide-react";
import { useAnimationMode, type AnimationMode } from "@/context/AnimationModeContext";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Stats" },
  { id: "contact", label: "Contact" },
];

const MODES: { id: AnimationMode; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "minimal", label: "Minimal", Icon: Sparkles },
  { id: "balanced", label: "Balanced", Icon: Zap },
  { id: "cinematic", label: "Cinematic", Icon: Film },
];

export function Navbar() {
  const { mode, setMode } = useAnimationMode();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass-strong px-4 py-2.5 sm:px-6">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[var(--cosmos-violet)] to-[var(--cosmos-cyan)] text-[10px] font-bold text-background">
            K
          </span>
          <span className="hidden sm:inline">Kashish</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle mode={mode} onChange={setMode} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl glass-strong p-2 md:hidden"
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ModeToggle({
  mode,
  onChange,
}: {
  mode: AnimationMode;
  onChange: (m: AnimationMode) => void;
}) {
  return (
    <div className="relative flex items-center rounded-full border border-white/10 bg-black/30 p-0.5">
      {MODES.map(({ id, label, Icon }) => {
        const active = mode === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            title={`${label} animations`}
            className={cn(
              "relative z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors",
              active ? "text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--cosmos-violet)] to-[var(--cosmos-cyan)]"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <Icon className="h-3 w-3" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
