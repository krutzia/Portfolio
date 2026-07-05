import { useEffect, useRef } from "react";
import { useAnimationMode } from "@/context/AnimationModeContext";

/**
 * Cuberto-style single-disc cursor: bold solid dot with strong inertia,
 * dramatic scale on interactive hover, subtle compress on click.
 * No border ring, no glow, no trail — matches the reference video.
 */
export function PremiumCursor() {
  const { isMinimal } = useAnimationMode();

  const discRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const scale = useRef({ current: 1, target: 1, down: 1 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (isMinimal) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("cursor-none-root");

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const isInteractive = (el: EventTarget | null) => {
      const node = el as HTMLElement | null;
      return !!node?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]",
      );
    };

    const onOver = (e: MouseEvent) => {
      scale.current.target = isInteractive(e.target) ? 3.4 : 1;
    };
    const onDown = () => {
      scale.current.down = 0.85;
    };
    const onUp = () => {
      scale.current.down = 1;
    };
    const onLeave = () => {
      mouse.current.x = -200;
      mouse.current.y = -200;
    };

    // Magnetic pull
    const onMagMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], [data-magnetic]",
      ) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = Math.max(-8, Math.min(8, (e.clientX - cx) * 0.22));
      const dy = Math.max(-8, Math.min(8, (e.clientY - cy) * 0.22));
      el.style.transition = "transform 220ms cubic-bezier(.2,.8,.2,1)";
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const onMagLeave = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], [data-magnetic]",
      ) as HTMLElement | null;
      if (!el) return;
      el.style.transform = "translate3d(0,0,0)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mousemove", onMagMove, { passive: true });
    window.addEventListener("mouseout", onMagLeave, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Strong inertia — noticeable lag like Cuberto
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.14);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.14);
      scale.current.current = lerp(
        scale.current.current,
        scale.current.target * scale.current.down,
        0.16,
      );
      if (discRef.current) {
        discRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current.current})`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("cursor-none-root");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMagMove);
      window.removeEventListener("mouseout", onMagLeave);
      document.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isMinimal]);

  if (isMinimal) return null;

  return (
    <div
      ref={discRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9998] h-6 w-6 rounded-full will-change-transform"
      style={{ backgroundColor: "#FF5A3C" }}
    />
  );
}
