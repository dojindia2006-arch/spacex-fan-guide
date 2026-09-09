"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
  kind: "fire" | "smoke" | "ember";
};

export default function LaunchVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const particles: Particle[] = [];
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = wrap;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (cx: number, cy: number, boost: number) => {
      for (let i = 0; i < 10 + boost * 8; i++) {
        particles.push({
          x: cx + (Math.random() - 0.5) * 28,
          y: cy + Math.random() * 10,
          vx: (Math.random() - 0.5) * (2.2 + boost),
          vy: 2 + Math.random() * (5 + boost * 3),
          life: 0,
          max: 28 + Math.random() * 40,
          size: 3 + Math.random() * 10,
          kind: Math.random() > 0.55 ? "smoke" : Math.random() > 0.25 ? "fire" : "ember",
        });
      }
    };

    const cycleMs = 9000;
    const start = performance.now();

    const tick = (now: number) => {
      if (!running) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const t = ((now - start) % cycleMs) / cycleMs;
      // rocket vertical progress 0..1
      const ascent = t < 0.08 ? t / 0.08 * 0.05 : Math.min(1, (t - 0.08) / 0.85);
      const rocketY = h * (0.72 - ascent * 1.15);
      const rocketX = w * (0.5 + ascent * 0.04);
      const scale = Math.max(0.55, 1 - ascent * 0.28);

      // ground glow
      const glow = ctx.createRadialGradient(w * 0.5, h * 0.95, 10, w * 0.5, h, w * 0.55);
      glow.addColorStop(0, `rgba(255, 170, 60, ${0.55 * (1 - ascent)})`);
      glow.addColorStop(0.35, `rgba(239, 68, 68, ${0.22 * (1 - ascent)})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, h * 0.45, w, h * 0.55);

      if (!reduced) {
        spawn(rocketX, rocketY + 160 * scale, 1 - ascent * 0.4);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.99;
        p.vx *= 0.98;
        if (p.kind === "smoke") {
          p.size *= 1.02;
          p.vy -= 0.02;
        }
        const a = 1 - p.life / p.max;
        if (a <= 0) {
          particles.splice(i, 1);
          continue;
        }
        if (p.kind === "fire") {
          ctx.fillStyle = `rgba(255, ${140 + a * 80}, 40, ${a * 0.85})`;
        } else if (p.kind === "ember") {
          ctx.fillStyle = `rgba(255, 230, 150, ${a})`;
        } else {
          ctx.fillStyle = `rgba(200, 210, 230, ${a * 0.28})`;
        }
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size * (p.kind === "smoke" ? 1.6 : 0.7), p.size, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // draw rocket body (procedural, metallic)
      ctx.save();
      ctx.translate(rocketX, rocketY);
      ctx.scale(scale, scale);
      ctx.rotate((-4 * ascent * Math.PI) / 180);

      const rw = 54;
      const rh = 280;

      // shadow under body
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.ellipse(0, rh / 2 + 8, 40, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // fuselage
      const body = ctx.createLinearGradient(-rw / 2, 0, rw / 2, 0);
      body.addColorStop(0, "#64748b");
      body.addColorStop(0.2, "#f8fafc");
      body.addColorStop(0.45, "#e2e8f0");
      body.addColorStop(0.7, "#cbd5e1");
      body.addColorStop(1, "#475569");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.moveTo(0, -rh / 2);
      ctx.bezierCurveTo(rw * 0.35, -rh / 2 + 30, rw / 2, -rh / 2 + 80, rw / 2, -20);
      ctx.lineTo(rw / 2, rh / 2 - 30);
      ctx.quadraticCurveTo(0, rh / 2 - 8, -rw / 2, rh / 2 - 30);
      ctx.lineTo(-rw / 2, -20);
      ctx.bezierCurveTo(-rw / 2, -rh / 2 + 80, -rw * 0.35, -rh / 2 + 30, 0, -rh / 2);
      ctx.closePath();
      ctx.fill();

      // panel lines
      ctx.strokeStyle = "rgba(15,23,42,0.25)";
      ctx.lineWidth = 1;
      for (let y = -rh / 2 + 50; y < rh / 2 - 40; y += 28) {
        ctx.beginPath();
        ctx.moveTo(-rw / 2 + 4, y);
        ctx.lineTo(rw / 2 - 4, y);
        ctx.stroke();
      }

      // interstage ring
      ctx.fillStyle = "#0ea5e9";
      ctx.fillRect(-rw / 2 + 2, 10, rw - 4, 7);
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.fillRect(-rw / 2 + 2, 10, rw - 4, 2);

      // grid fins
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(-rw / 2 - 14, -20, 14, 32);
      ctx.fillRect(rw / 2, -20, 14, 32);
      ctx.strokeStyle = "#0f172a";
      ctx.strokeRect(-rw / 2 - 14, -20, 14, 32);
      ctx.strokeRect(rw / 2, -20, 14, 32);

      // legs / fins
      ctx.fillStyle = "#0369a1";
      ctx.beginPath();
      ctx.moveTo(-rw / 2, rh / 2 - 70);
      ctx.lineTo(-rw / 2 - 28, rh / 2 - 10);
      ctx.lineTo(-rw / 2, rh / 2 - 20);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(rw / 2, rh / 2 - 70);
      ctx.lineTo(rw / 2 + 28, rh / 2 - 10);
      ctx.lineTo(rw / 2, rh / 2 - 20);
      ctx.closePath();
      ctx.fill();

      // nose cone shine
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-6, -rh / 2 + 20);
      ctx.quadraticCurveTo(-10, -rh / 2 + 60, -12, -rh / 2 + 100);
      ctx.stroke();

      // engines
      const eg = ctx.createRadialGradient(0, rh / 2 - 12, 2, 0, rh / 2 - 8, 26);
      eg.addColorStop(0, "#fff7ed");
      eg.addColorStop(0.4, "#fb923c");
      eg.addColorStop(1, "rgba(127,29,29,0)");
      ctx.fillStyle = eg;
      ctx.beginPath();
      ctx.ellipse(0, rh / 2 - 6, 30, 18, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#0f172a";
      [-16, 0, 16].forEach((ox) => {
        ctx.beginPath();
        ctx.ellipse(ox, rh / 2 - 18, 9, 6, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // heat shimmer lines near plume
      if (!reduced && ascent < 0.85) {
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        for (let i = 0; i < 6; i++) {
          const sx = rocketX - 40 + i * 16 + Math.sin(now / 80 + i) * 4;
          ctx.beginPath();
          ctx.moveTo(sx, rocketY + 90 * scale);
          ctx.bezierCurveTo(
            sx + 8,
            rocketY + 140 * scale,
            sx - 8,
            rocketY + 190 * scale,
            sx,
            rocketY + 240 * scale,
          );
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="launch-canvas-wrap pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="launch-sky" />
      <div className="launch-stars launch-stars--a" />
      <div className="launch-stars launch-stars--b" />
      <div className="launch-horizon" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
