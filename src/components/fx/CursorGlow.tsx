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
        ref.current.style.transform = `translate3d(${pos.current.x - 250}px, ${pos.current.y - 250}px, 0)`;
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
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden mix-blend-screen"
    >
      <div
        ref={ref}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.22 320 / 0.35) 0%, oklch(0.55 0.2 280 / 0.18) 30%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
