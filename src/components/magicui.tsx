"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/* Magic UI-style Marquee */
export function Marquee({
  children,
  reverse,
  duration = "40s",
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: string;
  className?: string;
}) {
  return (
    <div
      style={{ ["--duration" as string]: duration, ["--gap" as string]: "1.5rem" }}
      className={cn(
        "group flex overflow-hidden [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]",
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

/* Magic UI-style Number Ticker */
export function NumberTicker({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 60, stiffness: 100 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current) ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(v));
      }),
    [spring]
  );

  return <span ref={ref} className={cn("tabular-nums", className)}>0</span>;
}

/* Magic UI-style Blur Fade */
export function BlurFade({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Magic UI-style Shimmer Button */
export function ShimmerButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-deep px-7 py-3.5 font-medium text-cream shadow-lg shadow-emerald-deep/25 transition-transform hover:scale-[1.03] active:scale-95",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_35%,rgba(230,207,143,0.45)_50%,transparent_65%)] bg-[length:200%_100%]" />
      <span className="relative flex items-center gap-2">{children}</span>
    </a>
  );
}

/* Magic UI-style Magic Card (spotlight follows cursor) */
export function MagicCard({ children, className }: { children: ReactNode; className?: string }) {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos({ x: -300, y: -300 })}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-emerald-deep/10 bg-white p-7 transition-shadow hover:shadow-xl hover:shadow-emerald-deep/10",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(201,165,76,0.18), transparent 70%)`,
        }}
      />
      <div className="relative h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}

/* Magic UI-style Dot Pattern */
export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(11,61,46,0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
        className
      )}
    />
  );
}
