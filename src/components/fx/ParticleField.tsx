import { useEffect, useRef } from "react";
import { useAnimationMode } from "@/context/AnimationModeContext";

type Particle = {
  x: number;
  y: number;
  z: number; // depth 0..1
  vx: number;
  vy: number;
  r: number;
  hue: number;
};

export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isMinimal, isCinematic, intensity } = useAnimationMode();
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (isMinimal) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor(((w * h) / 18000) * (isCinematic ? 1.4 : 0.9));
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.6 + 0.4,
        hue: [270, 220, 320, 200][Math.floor(Math.random() * 4)],
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => (mouseRef.current.active = false);

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // gentle drift
        p.x += p.vx * (0.4 + p.z);
        p.y += p.vy * (0.4 + p.z);

        if (mouseRef.current.active && isCinematic) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            const force = (1 - d2 / 22000) * 0.6 * p.z;
            p.x += (dx / Math.sqrt(d2 + 0.001)) * force;
            p.y += (dy / Math.sqrt(d2 + 0.001)) * force;
          }
        }

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const alpha = 0.15 + p.z * 0.55;
        const radius = p.r * (0.6 + p.z) * (isCinematic ? 1.2 : 1);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 6);
        grad.addColorStop(0, `oklch(0.85 0.16 ${p.hue} / ${alpha})`);
        grad.addColorStop(1, `oklch(0.85 0.16 ${p.hue} / 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [isMinimal, isCinematic, intensity]);

  if (isMinimal) return null;

  return (
    <canvas
      ref={canvasRef}
      className={
        "pointer-events-none fixed inset-0 -z-10 opacity-80 " + (className ?? "")
      }
      aria-hidden
    />
  );
}
