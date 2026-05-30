import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useAnimationMode } from "@/context/AnimationModeContext";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 24, className, once = true }: Props) {
  const { isMinimal, intensity } = useAnimationMode();

  const variants: Variants = {
    hidden: { opacity: 0, y: isMinimal ? 0 : y * intensity },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMinimal ? 0.25 : 0.7,
        delay: isMinimal ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
