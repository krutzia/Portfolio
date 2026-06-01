import { motion, useScroll, useSpring } from "framer-motion";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function ScrollProgress() {
  const { isMinimal, intensity } = useAnimationMode();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: isMinimal ? 200 : 120,
    damping: isMinimal ? 40 : 25,
    mass: 0.4,
  });

  if (isMinimal) return null;

  return (
    <motion.div
      style={{ scaleX, opacity: 0.25 + intensity * 0.35 }}
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-foreground"
    />
  );
}
