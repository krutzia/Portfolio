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
  // Start in the least expensive mode to keep the portfolio responsive on slower machines.
  // Users can still opt back into cinematic motion if they explicitly choose it.
  const [mode, setModeState] = useState<AnimationMode>("minimal");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInteractionBusy, setIsInteractionBusy] = useState(false);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.matches(
        "input, textarea, select, button, a, summary, [role='button'], [tabindex]",
      );
      if (isInteractive) setIsInteractionBusy(true);
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const next = document.activeElement as HTMLElement | null;
      const stillActive = next && next !== target && next.matches(
        "input, textarea, select, button, a, summary, [role='button'], [tabindex]",
      );
      if (!stillActive) setIsInteractionBusy(false);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (!body) return;
    body.classList.toggle("motion-reduction-active", isInteractionBusy);
    return () => body.classList.remove("motion-reduction-active");
  }, [isInteractionBusy]);

  const setMode = (m: AnimationMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      /* noop */
    }
  };

  const effectiveMode: AnimationMode = prefersReducedMotion || isInteractionBusy ? "minimal" : mode;
  const intensity = effectiveMode === "minimal" ? 0 : effectiveMode === "balanced" ? 0.6 : 1;

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
