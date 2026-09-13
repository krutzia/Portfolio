import { motion, useScroll, useSpring } from "framer-motion";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function ScrollProgress() {
  const { isMinimal, intensity } = useAnimationMode();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: isMinimal ? 1000 : 140,
    damping: isMinimal ? 80 : 28,
    mass: isMinimal ? 0.1 : 0.35,
    restDelta: 0.0005,
  });

  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ scaleX, opacity: isMinimal ? 0.5 : 0.25 + intensity * 0.35 }}
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-foreground"
    />
  );
}
