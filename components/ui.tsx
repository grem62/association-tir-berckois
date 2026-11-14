import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function IconBadge({
  icon: Icon,
  tone = "light",
}: {
  icon: LucideIcon;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-2xl ${
        tone === "dark"
          ? "bg-brass-soft/12 text-brass-soft"
          : "bg-pine/10 text-pine"
      }`}
    >
      <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}

export function Panel({
  className = "",
  children,
  tone = "light",
  hover = false,
}: {
  className?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  hover?: boolean;
}) {
  const base = tone === "dark" ? "panel-dark" : "panel";
  const hoverClass = hover
    ? tone === "dark"
      ? "panel-dark-hover"
      : "panel-hover"
    : "";
  return (
    <div className={`${base} ${hoverClass} ${className}`}>{children}</div>
  );
}

export function Screen({
  id,
  eyebrow,
  title,
  aside,
  children,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  aside?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={`screen relative ${dark ? "bg-pine-deep text-paper" : "bg-paper text-ink"} ${dark ? "grain" : ""}`}
    >
      {dark && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, transparent 28%, rgba(230,196,138,0.08) 28%, rgba(230,196,138,0.08) 29%, transparent 29%, transparent 44%, rgba(230,196,138,0.06) 44%, rgba(230,196,138,0.06) 45%, transparent 45%, transparent 60%, rgba(230,196,138,0.04) 60%, rgba(230,196,138,0.04) 61%, transparent 61%)",
            backgroundSize: "600px 600px",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative screen-inner">
        <Reveal>
          <header className="mb-6 flex items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className={`eyebrow ${dark ? "text-brass-soft" : ""}`}>
                {eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-[0.98] font-semibold tracking-tight text-balance md:text-5xl">
                {title}
              </h2>
            </div>
            {aside ? (
              <p
                className={`hidden max-w-xs text-right text-sm leading-relaxed md:block ${
                  dark ? "text-paper/65" : "text-ink-soft"
                }`}
              >
                {aside}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
