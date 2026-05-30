import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type AnimationMode = "minimal" | "balanced" | "cinematic";

type Ctx = {
  mode: AnimationMode;
  setMode: (m: AnimationMode) => void;
  // helpers
  isMinimal: boolean;
  isCinematic: boolean;
  // scaled intensity (0..1)
  intensity: number;
};

const AnimationModeContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "portfolio:animation-mode";

export function AnimationModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<AnimationMode>("balanced");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as AnimationMode | null;
      if (saved === "minimal" || saved === "balanced" || saved === "cinematic") {
        setModeState(saved);
      } else if (
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      ) {
        setModeState("minimal");
      }
    } catch {
      /* noop */
    }
  }, []);

  const setMode = (m: AnimationMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      /* noop */
    }
  };

  const intensity = mode === "minimal" ? 0 : mode === "balanced" ? 0.6 : 1;

  return (
    <AnimationModeContext.Provider
      value={{
        mode,
        setMode,
        isMinimal: mode === "minimal",
        isCinematic: mode === "cinematic",
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
