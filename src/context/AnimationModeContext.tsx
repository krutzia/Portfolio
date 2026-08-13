import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type AnimationMode = "minimal" | "balanced" | "cinematic";

type Ctx = {
  mode: AnimationMode;
  setMode: (m: AnimationMode) => void;
  // helpers
  isMinimal: boolean;
  isCinematic: boolean;
  prefersReducedMotion: boolean;
  // scaled intensity (0..1)
  intensity: number;
};

const AnimationModeContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "portfolio:animation-mode";

export function AnimationModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<AnimationMode>("cinematic");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as AnimationMode | null;
      if (saved === "minimal" || saved === "balanced" || saved === "cinematic") {
        setModeState(saved);
      }
    } catch {
      /* noop */
    }
  }, []);

  // Live prefers-reduced-motion tracking — cinematic motion becomes subtle, not broken.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPrefersReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const setMode = (m: AnimationMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      /* noop */
    }
  };

  const effectiveMode: AnimationMode = prefersReducedMotion ? "minimal" : mode;
  const intensity =
    effectiveMode === "minimal" ? 0 : effectiveMode === "balanced" ? 0.6 : 1;

  return (
    <AnimationModeContext.Provider
      value={{
        mode: effectiveMode,
        setMode,
        isMinimal: effectiveMode === "minimal",
        isCinematic: effectiveMode === "cinematic",
        prefersReducedMotion,
        intensity,
      }}
    >
      {children}
    </AnimationModeContext.Provider>
  );
}

export function useAnimationMode() {
  const ctx = useContext(AnimationModeContext);
  if (!ctx) throw new Error("useAnimationMode must be used within AnimationModeProvider");
  return ctx;
}
