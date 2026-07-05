import { useEffect, useRef } from "react";
import { useAnimationMode } from "@/context/AnimationModeContext";

/**
 * Premium custom cursor — solid dot + soft ring + glow, with lerp inertia,
 * hover scaling, click compression, and a lightweight fading trail.
 * Desktop only; disables itself on touch devices and in minimal motion mode.
 */
export function PremiumCursor() {
  const { isMinimal } = useAnimationMode();

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);

  const mouse = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const trail = useRef(
    Array.from({ length: 6 }, () => ({ x: -100, y: -100 })),
  );
  const scale = useRef({ ring: 1, dot: 1, target: 1, down: 1 });
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
      scale.current.target = isInteractive(e.target) ? 1.9 : 1;
    };
    const onDown = () => {
      scale.current.down = 0.75;
    };
    const onUp = () => {
      scale.current.down = 1;
    };
    const onLeave = () => {
      mouse.current.x = -200;
      mouse.current.y = -200;
    };

    // Magnetic pull for buttons / links
    const magneticEls = new WeakMap<HTMLElement, { x: number; y: number }>();
    const onMagMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], [data-magnetic]",
      ) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      const clamp = (v: number) => Math.max(-10, Math.min(10, v));
      const tx = clamp(dx);
      const ty = clamp(dy);
      magneticEls.set(el, { x: tx, y: ty });
      el.style.transition = "transform 200ms cubic-bezier(.2,.8,.2,1)";
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };
    const onMagLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (magneticEls.has(el)) {
        el.style.transform = "translate3d(0,0,0)";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseout", onMagLeave, { passive: true });
    window.addEventListener("mousemove", onMagMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Dot follows tightly
      dot.current.x = lerp(dot.current.x, mouse.current.x, 0.55);
      dot.current.y = lerp(dot.current.y, mouse.current.y, 0.55);
      // Ring follows with inertia
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.18);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.18);
      // Scale interpolation
      scale.current.ring = lerp(
        scale.current.ring,
        scale.current.target * scale.current.down,
        0.18,
      );
      scale.current.dot = lerp(scale.current.dot, scale.current.down, 0.25);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%) scale(${scale.current.dot})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${scale.current.ring})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${0.9 + scale.current.ring * 0.4})`;
        glowRef.current.style.opacity = String(
          0.35 + (scale.current.ring - 1) * 0.25,
        );
      }

      // Trail — each node lags progressively
      for (let i = 0; i < trail.current.length; i++) {
        const prev = i === 0 ? ring.current : trail.current[i - 1];
        const t = trail.current[i];
        const f = 0.28 - i * 0.03;
        t.x = lerp(t.x, prev.x, Math.max(0.08, f));
        t.y = lerp(t.y, prev.y, Math.max(0.08, f));
        const node = trailRefs.current[i];
        if (node) {
          const s = 1 - i * 0.12;
          node.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${s})`;
          node.style.opacity = String(0.22 - i * 0.03);
        }
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
      window.removeEventListener("mouseout", onMagLeave);
      window.removeEventListener("mousemove", onMagMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isMinimal]);

  if (isMinimal) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9998]">
      {/* Soft glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 h-24 w-24 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />
      {/* Trail dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="pointer-events-none fixed left-0 top-0 h-2 w-2 rounded-full bg-white will-change-transform"
          style={{ mixBlendMode: "difference" }}
        />
      ))}
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 h-9 w-9 rounded-full border border-white/70 will-change-transform"
        style={{ mixBlendMode: "difference" }}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white will-change-transform"
        style={{ mixBlendMode: "difference" }}
      />
    </div>
  );
}
