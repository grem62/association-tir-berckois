import { CircleDot, Crosshair, Focus, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homologation, ranges } from "@/lib/content";
import { Panel, Screen } from "@/components/ui";

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
              <Panel className="group flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold tracking-[0.18em] text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-10 place-items-center rounded-2xl bg-pine/8 text-pine">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-6 font-display text-4xl font-semibold tracking-tight text-pine md:text-5xl">
                  {range.distance}
                </p>
                <p className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {range.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{range.detail}</p>
              </Panel>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm text-ink-soft xl:hidden">{homologation}</p>
    </Screen>
  );
}
