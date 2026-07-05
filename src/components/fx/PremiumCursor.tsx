import { useEffect, useRef, useState } from "react";

/**
 * Reference-video cursor: orange-red disc, strong inertia, soft halo,
 * magnetic hover scale, and a short fading trail.
 */
export function PremiumCursor() {
  const discRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [enabled, setEnabled] = useState(false);
  const mouse = useRef({ x: -160, y: -160 });
  const pos = useRef({ x: -160, y: -160 });
  const ringPos = useRef({ x: -160, y: -160 });
  const trail = useRef(
    Array.from({ length: 5 }, () => ({ x: -160, y: -160, scale: 1 })),
  );
  const scale = useRef({ current: 1, target: 1, down: 1 });
  const magneticEl = useRef<HTMLElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    setEnabled(true);

    document.documentElement.classList.add("cursor-none-root");

    const isInteractive = (el: EventTarget | null) => {
      const node = el as HTMLElement | null;
      return !!node?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]",
      );
    };

    const getMagnetic = (el: EventTarget | null) =>
      ((el as HTMLElement | null)?.closest?.(
        "a, button, [role='button'], [data-magnetic], [data-cursor-hover]",
      ) ?? null) as HTMLElement | null;

    const resetMagnetic = () => {
      if (!magneticEl.current) return;
      magneticEl.current.style.transform = "translate3d(0, 0, 0)";
      magneticEl.current = null;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      scale.current.target = isInteractive(e.target) ? 3.15 : 1;

      const el = getMagnetic(e.target);
      if (magneticEl.current && magneticEl.current !== el) resetMagnetic();
      magneticEl.current = el;

      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = Math.max(-8, Math.min(8, (e.clientX - cx) * 0.2));
      const dy = Math.max(-8, Math.min(8, (e.clientY - cy) * 0.2));
      el.style.transition = "transform 220ms cubic-bezier(.2,.8,.2,1)";
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    const onDown = () => {
      scale.current.down = 0.82;
    };
    const onUp = () => {
      scale.current.down = 1;
    };
    const onLeave = () => {
      mouse.current.x = -160;
      mouse.current.y = -160;
      scale.current.target = 1;
      resetMagnetic();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Strong inertia — the same visible lag as the uploaded reference.
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.135);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.135);
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.105);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.105);
      scale.current.current = lerp(
        scale.current.current,
        scale.current.target * scale.current.down,
        0.14,
      );

      let leadX = pos.current.x;
      let leadY = pos.current.y;
      trail.current.forEach((item, index) => {
        item.x = lerp(item.x, leadX, 0.34 - index * 0.035);
        item.y = lerp(item.y, leadY, 0.34 - index * 0.035);
        item.scale = lerp(item.scale, scale.current.current, 0.12);
        leadX = item.x;
        leadY = item.y;
      });

      if (discRef.current) {
        discRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current.current})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current.current})`;
      }
      trailRefs.current.forEach((node, index) => {
        if (!node) return;
        const item = trail.current[index];
        node.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) translate(-50%, -50%) scale(${item.scale})`;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("cursor-none-root");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
      resetMagnetic();
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node;
          }}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full will-change-transform"
          style={{
            width: 18 - index * 2,
            height: 18 - index * 2,
            backgroundColor: "rgba(232, 78, 58, 0.2)",
            opacity: 0.22 - index * 0.035,
          }}
        />
      ))}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border will-change-transform"
        style={{
          borderColor: "rgba(232, 78, 58, 0.22)",
          boxShadow: "0 0 18px rgba(232, 78, 58, 0.18)",
        }}
      />
      <div
        ref={discRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[22px] w-[22px] rounded-full will-change-transform"
        style={{
          backgroundColor: "#E84E3A",
          boxShadow: "0 0 14px rgba(232, 78, 58, 0.28)",
        }}
      />
    </>
  );
}
