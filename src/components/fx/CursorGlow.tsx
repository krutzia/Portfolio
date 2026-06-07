import { useEffect, useRef } from "react";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function CursorGlow() {
  const { isMinimal } = useAnimationMode();
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -300, y: -300 });
  const pos = useRef({ x: -300, y: -300 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (isMinimal) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onLeave = () => {
      target.current.x = -400;
      target.current.y = -400;
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 300}px, ${pos.current.y - 300}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isMinimal]);

  if (isMinimal) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <div
        ref={ref}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.28 320 / 0.55) 0%, oklch(0.55 0.24 285 / 0.30) 25%, oklch(0.5 0.2 270 / 0.12) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
