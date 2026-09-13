import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMinimal) {
      setIsVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: once ? "0px" : "-80px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isMinimal, once]);

  const duration = isMinimal ? 0.25 : 0.7;
  const actualY = isMinimal ? 0 : y * intensity;
  const actualDelay = isMinimal ? 0 : delay;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${actualY}px, 0)`,
        transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${actualDelay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${actualDelay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
