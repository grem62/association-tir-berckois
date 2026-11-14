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
        <Panel className="p-5 lg:col-span-2">
          <h3 className="font-display text-xl font-semibold">Location</h3>
          <ul className="mt-4 space-y-2">
            {rentals.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-2xl bg-pine/5 px-3.5 py-3"
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

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
          {memberships.map((tier) => (
            <Panel key={tier.label} className="relative overflow-hidden p-5">
              <div className="absolute -top-10 -right-10 size-28 rounded-full bg-brass-soft/20 blur-2xl" />
              <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">
                {tier.label}
              </p>
              <p className="mt-2 font-display text-5xl font-semibold tracking-tight text-pine tabular-nums">
                {tier.total}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {tier.lines.map((line) => (
                  <li key={line.label} className="flex justify-between gap-3">
                    <span className="text-ink-soft">{line.label}</span>
                    <span className="tabular-nums">{line.price}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>

        <Panel className="p-5 lg:col-span-5">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-semibold">Munitions</h3>
            <p className="text-xs text-ink-soft">{ammunitionNote}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {ammunition.map((item) => (
              <li
                key={`${item.name}-${item.pack}`}
                className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-white/50 px-3 py-2.5"
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
      </div>
    </Screen>
  );
}
