import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

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
}: {
  className?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`${tone === "dark" ? "panel-dark" : "panel"} ${className}`}>
      {children}
    </div>
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
      className={`screen ${dark ? "bg-pine-deep text-paper" : "bg-paper text-ink"}`}
    >
      <div className="screen-inner">
        <header className="mb-5 flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className={`eyebrow ${dark ? "text-brass-soft" : ""}`}>{eyebrow}</p>
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
        {children}
      </div>
    </section>
  );
}
