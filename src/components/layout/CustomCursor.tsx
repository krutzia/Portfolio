import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function CustomCursor() {
  const { isMinimal } = useAnimationMode();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isMinimal) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHovering(
        !!el?.closest?.("a, button, [data-cursor-hover], input, textarea, [role='button']"),
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMinimal, x, y]);

  if (!enabled || isMinimal) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.25 : 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="h-8 w-8 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </>
  );
}
