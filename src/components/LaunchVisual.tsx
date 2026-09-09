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
  kind: "ember" | "smoke";
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
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      if (!running) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        for (let i = 0; i < 4; i++) {
          particles.push({
            x: w * (0.42 + Math.random() * 0.16),
            y: h * (0.62 + Math.random() * 0.2),
            vx: (Math.random() - 0.5) * 1.8,
            vy: -0.4 - Math.random() * 1.6,
            life: 0,
            max: 40 + Math.random() * 50,
            size: 2 + Math.random() * 8,
            kind: Math.random() > 0.35 ? "smoke" : "ember",
          });
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        if (p.kind === "smoke") p.size *= 1.015;
        const a = 1 - p.life / p.max;
        if (a <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        if (p.kind === "ember") {
          ctx.fillStyle = `rgba(255, 200, 80, ${a * 0.7})`;
          ctx.arc(p.x, p.y, p.size * 0.35, 0, Math.PI * 2);
        } else {
          ctx.fillStyle = `rgba(220, 230, 245, ${a * 0.12})`;
          ctx.ellipse(p.x, p.y, p.size * 1.4, p.size, 0, 0, Math.PI * 2);
        }
        ctx.fill();
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
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="launch-photo-stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/launch-cinematic.png"
          alt=""
          className="launch-photo"
          decoding="async"
        />
        <div className="launch-photo-vignette" />
        <div className="launch-photo-heat" />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
