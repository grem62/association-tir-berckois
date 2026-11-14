import { ArrowDown, Clock, Crosshair } from "lucide-react";
import { club, heroHours } from "@/lib/content";
import { Panel } from "@/components/ui";

export function Hero() {
  return (
    <section id="accueil" className="screen hero-glow text-paper">
      <div className="screen-inner">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow text-brass-soft">
              Stand de tir · {club.city}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
              Quatre pas de tir pour{" "}
              <span className="accent">viser juste</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/72">
              {club.tagline} Depuis {club.founded.slice(-4)}, l’Association de Tir
              Berckois accueille loisir et compétition.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Nous contacter →
              </a>
              <a href="#stand" className="btn-ghost">
                Découvrir le stand
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            <Panel tone="dark" className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-brass-soft uppercase">
                    Le club
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {club.shortName}
                  </p>
                  <p className="mt-1 text-sm text-paper/65">{club.name}</p>
                </div>
                <span className="grid size-12 place-items-center rounded-2xl bg-brass-soft/15 text-brass-soft">
                  <Crosshair className="size-5" aria-hidden="true" />
                </span>
              </div>
            </Panel>
            {heroHours.map((slot) => (
              <Panel key={slot.days} tone="dark" className="flex items-center gap-3 px-4 py-3.5">
                <span className="grid size-10 place-items-center rounded-2xl bg-brass-soft text-pine-deep">
                  <Clock className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-paper/55 uppercase">
                    {slot.days}
                  </p>
                  <p className="font-display text-xl font-semibold tracking-tight">
                    {slot.time}
                  </p>
                </div>
              </Panel>
            ))}
          </div>
        </div>

        <a
          href="#stand"
          className="mt-8 inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.2em] text-paper/50 uppercase"
        >
          Scroll
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
