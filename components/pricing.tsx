import {
  accessCard,
  ammunition,
  ammunitionNote,
  club,
  familyNote,
  feeDeadline,
  memberships,
  rentals,
} from "@/lib/content";
import { Panel, Screen } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Pricing() {
  return (
    <Screen
      id="tarifs"
      eyebrow="Tarifs"
      title={
        <>
          Saison 2026-2027.
          <br />
          <span className="text-pine">Tout est clair.</span>
        </>
      }
      aside={`Du ${club.season}.`}
    >
      <div className="grid gap-3 lg:grid-cols-5">
        <Reveal>
          <Panel className="h-full p-5 lg:col-span-2">
            <h3 className="font-display text-xl font-semibold">Location</h3>
            <ul className="mt-4 space-y-2">
              {rentals.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-pine/5 px-3.5 py-3 transition-colors hover:bg-pine/8"
                >
                  <span>
                    <span className="block text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-ink-soft">{item.note}</span>
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-tight text-pine tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-snug text-ink-soft">{familyNote}</p>
            <p className="mt-1 text-sm leading-snug text-ink-soft">{accessCard}</p>
          </Panel>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
          {memberships.map((tier, i) => (
            <Reveal key={tier.label} delay={i * 80}>
              <Panel
                hover
                className={`relative overflow-hidden p-5 ${i === 0 ? "ring-1 ring-brass-soft/40" : ""}`}
              >
                <div className="absolute -top-10 -right-10 size-28 rounded-full bg-brass-soft/20 blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">
                    {tier.label}
                  </p>
                  {i === 0 && (
                    <span className="rounded-full bg-brass-soft/20 px-2.5 py-0.5 text-[0.6rem] font-bold tracking-wide text-brass uppercase">
                      Adulte
                    </span>
                  )}
                </div>
                <div className="relative mt-2 flex items-baseline gap-1.5">
                  <p className="font-display text-5xl font-semibold tracking-tight text-pine tabular-nums">
                    {tier.total}
                  </p>
                  <span className="text-sm text-ink-soft">/ saison</span>
                </div>
                <div className="relative mt-4 h-px bg-line" />
                <ul className="relative mt-3 space-y-1.5 text-sm">
                  {tier.lines.map((line) => (
                    <li key={line.label} className="flex justify-between gap-3">
                      <span className="text-ink-soft">{line.label}</span>
                      <span className="font-medium tabular-nums">{line.price}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:col-span-5">
          <Panel className="p-5 lg:col-span-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">Munitions</h3>
              <p className="text-xs text-ink-soft">{ammunitionNote}</p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {ammunition.map((item) => (
                <li
                  key={`${item.name}-${item.pack}`}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-white/50 px-3 py-2.5 transition-colors hover:border-pine/20 hover:bg-white/80"
                >
                  <span>
                    <span className="block text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-ink-soft">× {item.pack}</span>
                  </span>
                  <span className="font-display text-lg font-semibold tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink-soft">{feeDeadline}</p>
          </Panel>
        </Reveal>
      </div>
    </Screen>
  );
}
