import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAnimationMode } from "@/context/AnimationModeContext";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  icon?: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-[var(--cosmos-violet)] via-primary to-[var(--cosmos-cyan)] text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.72_0.2_295/0.6)]",
  ghost: "glass text-foreground hover:bg-white/10",
  outline:
    "border border-white/15 bg-white/[0.02] text-foreground hover:border-white/30 hover:bg-white/[0.06]",
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  as = "button",
  href,
  target,
  rel,
  icon,
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const { intensity, isMinimal } = useAnimationMode();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    if (isMinimal || !ref.current) return;
    const r = (ref.current as HTMLElement).getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * 0.25 * intensity);
    y.set((e.clientY - cy) * 0.25 * intensity);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors select-none cursor-pointer";

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className={cn(base, variantClass[variant], className)}>
      {icon}
      <span>{children}</span>
    </motion.span>
  );

  if (as === "a") {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onBlur={reset}
        className="inline-block rounded-full focus-visible:outline-2"
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      onClick={onClick}
      className="inline-block rounded-full border-0 bg-transparent p-0 focus-visible:outline-2"
      {...rest}
    >
      {inner}
    </button>
  );
}
