import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { skillCategories } from "@/config/portfolio";
import { useAnimationMode } from "@/context/AnimationModeContext";

type Node = {
  id: string;
  name: string;
  category: string;
  color: string;
  bx: number; // base normalized 0..1
  by: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function SkillConstellation() {
  const { isMinimal } = useAnimationMode();

  return (
    <section id="skills" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Skill Constellation</SectionLabel>
          <div className="mt-3 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              A galaxy of tools I use to{" "}
              <span className="gradient-text">turn ideas into products</span>.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              {isMinimal
                ? "Browse by category below."
                : "Move your cursor to disturb the field. Click any star to highlight its cluster."}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">{isMinimal ? <StaticGrid /> : <CanvasField />}</div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            {skillCategories.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: c.accent, boxShadow: `0 0 10px ${c.accent}` }}
                />
                <span className="text-muted-foreground">{c.name}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StaticGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((c) => (
        <div key={c.name} className="rounded-2xl glass p-5">
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: c.accent, boxShadow: `0 0 10px ${c.accent}` }}
            />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {c.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm transition-colors hover:border-white/30"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CanvasField() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hover, setHover] = useState<{ name: string; cat: string; x: number; y: number } | null>(
    null,
  );
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const { isCinematic } = useAnimationMode();

  // Build nodes with stable positions per category cluster
  const baseNodes = useMemo(() => {
    const arr: Node[] = [];
    skillCategories.forEach((cat, ci) => {
      const cx = 0.18 + (ci % 3) * 0.32; // 3 columns
      const cy = ci < 3 ? 0.32 : 0.72;
      cat.skills.forEach((s, si) => {
        const angle = (si / cat.skills.length) * Math.PI * 2 + ci;
        const radius = 0.1 + (si % 2) * 0.04;
        arr.push({
          id: `${cat.name}-${s}`,
          name: s,
          category: cat.name,
          color: cat.accent,
          bx: cx + Math.cos(angle) * radius,
          by: cy + Math.sin(angle) * radius * 0.7,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          r: 5 + Math.random() * 3,
        });
      });
    });
    return arr;
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -1000, y: -1000, active: false };
    const nodes = baseNodes.map((n) => ({ ...n }));

    const resize = () => {
      const w = wrap.clientWidth;
      const h = Math.max(520, Math.min(700, w * 0.6));
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const n of nodes) {
        n.x = n.bx * w;
        n.y = n.by * h;
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
      // tooltip detection
      let hit: Node | null = null;
      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        if (dx * dx + dy * dy < 18 * 18) {
          hit = n;
          break;
        }
      }
      if (hit) {
        setHover({ name: hit.name, cat: hit.category, x: mouse.x, y: mouse.y });
        canvas.style.cursor = "pointer";
      } else {
        setHover(null);
        canvas.style.cursor = "default";
      }
    };
    const onLeave = () => {
      mouse.active = false;
      setHover(null);
    };
    const onClick = () => {
      if (hover) {
        setActiveCat((c) => (c === hover.cat ? null : hover.cat));
      } else {
        setActiveCat(null);
      }
    };

    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Drift toward base + mouse force
      for (const n of nodes) {
        const tx = n.bx * w;
        const ty = n.by * h;
        n.vx += (tx - n.x) * 0.02;
        n.vy += (ty - n.y) * 0.02;

        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 18000) {
            const f = (1 - d2 / 18000) * (isCinematic ? 0.8 : 0.4);
            n.vx -= (dx / Math.sqrt(d2 + 1)) * f;
            n.vy -= (dy / Math.sqrt(d2 + 1)) * f;
          }
        }
        n.vx *= 0.82;
        n.vy *= 0.82;
        n.x += n.vx;
        n.y += n.vy;
      }

      // Lines within category
      const byCat = new Map<string, Node[]>();
      for (const n of nodes) {
        const arr = byCat.get(n.category) ?? [];
        arr.push(n);
        byCat.set(n.category, arr);
      }
      for (const [cat, arr] of byCat) {
        const dim = activeCat && activeCat !== cat ? 0.08 : 0.4;
        ctx.strokeStyle = `oklch(0.9 0.05 280 / ${dim})`;
        ctx.lineWidth = 1;
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            const a = arr[i];
            const b = arr[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 160) {
              const alpha = (1 - d / 160) * dim;
              ctx.strokeStyle = `oklch(0.85 0.12 280 / ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        const dim = activeCat && activeCat !== n.category ? 0.25 : 1;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grad.addColorStop(0, withAlpha(n.color, 0.9 * dim));
        grad.addColorStop(0.4, withAlpha(n.color, 0.35 * dim));
        grad.addColorStop(1, withAlpha(n.color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = withAlpha("white", 0.95 * dim);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.55, 0, Math.PI * 2);
        ctx.fill();

        // label
        ctx.fillStyle = `oklch(0.85 0.02 270 / ${0.7 * dim})`;
        ctx.font = "500 11px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(n.name, n.x, n.y + n.r + 14);
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, [baseNodes, isCinematic, activeCat, hover]);

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
    >
      <canvas ref={canvasRef} className="block w-full" />
      {hover && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[140%] rounded-lg glass-strong px-3 py-1.5 text-xs shadow-lg"
          style={{ left: hover.x, top: hover.y }}
        >
          <div className="font-medium">{hover.name}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {hover.cat}
          </div>
        </div>
      )}
    </div>
  );
}

// Canvas can't parse var() or color-mix(). Resolve CSS variables to their
// computed value (an oklch(...) string) and splice in an alpha channel.
const _resolvedCache = new Map<string, string>();
function resolveVar(input: string): string {
  if (typeof window === "undefined") return "#ffffff";
  const m = input.match(/var\((--[^)]+)\)/);
  if (!m) return input;
  const name = m[1];
  const cached = _resolvedCache.get(name);
  if (cached) return cached;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const out = v || "#ffffff";
  _resolvedCache.set(name, out);
  return out;
}
function withAlpha(colorVar: string, a: number) {
  if (colorVar === "white") return `rgba(255,255,255,${a})`;
  const resolved = resolveVar(colorVar);
  // oklch(L C H) → oklch(L C H / a)
  const ok = resolved.match(/^oklch\(([^)]+)\)$/i);
  if (ok) {
    const parts = ok[1].split("/")[0].trim();
    return `oklch(${parts} / ${a})`;
  }
  // hsl(...) or rgb(...) — wrap with alpha via color-mix? Canvas can't. Fallback:
  const hsl = resolved.match(/^hsl\(([^)]+)\)$/i);
  if (hsl) return `hsla(${hsl[1]}, ${a})`;
  const rgb = resolved.match(/^rgb\(([^)]+)\)$/i);
  if (rgb) return `rgba(${rgb[1]}, ${a})`;
  return resolved;
}
