import { CircleDot, Crosshair, Focus, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homologation, ranges } from "@/lib/content";
import { Panel, Screen } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const icons: LucideIcon[] = [Wind, Crosshair, CircleDot, Focus];

export function Ranges() {
  return (
    <Screen
      id="stand"
      eyebrow="Le stand"
      title={
        <>
          Quatre distances.
          <br />
          <span className="text-pine">Une logique claire.</span>
        </>
      }
      aside={homologation}
    >
      <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {ranges.map((range, index) => {
          const Icon = icons[index];
          return (
            <li key={range.distance}>
              <Reveal delay={index * 80}>
                <Panel hover className="group relative flex h-full flex-col overflow-hidden p-5">
                  <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-brass-soft/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <span className="font-display text-sm font-semibold tracking-[0.18em] text-brass num-tag">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-10 place-items-center rounded-2xl bg-pine/8 text-pine transition-colors group-hover:bg-pine/12">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative mt-6 flex items-baseline gap-2">
                    <p className="font-display text-4xl font-semibold tracking-tight text-pine md:text-5xl">
                      {range.distance}
                    </p>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <p className="relative mt-3 font-display text-lg font-semibold tracking-tight">
                    {range.title}
                  </p>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                    {range.detail}
                  </p>
                </Panel>
              </Reveal>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm text-ink-soft xl:hidden">{homologation}</p>
    </Screen>
  );
}
