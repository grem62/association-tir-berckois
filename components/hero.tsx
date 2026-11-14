import { ArrowDown, Clock, Crosshair, MapPin } from "lucide-react";
import { club, heroHours } from "@/lib/content";
import { OpenStatus } from "@/components/open-status";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="accueil" className="screen hero-glow grain relative text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, transparent 28%, rgba(230,196,138,0.1) 28%, rgba(230,196,138,0.1) 29%, transparent 29%, transparent 44%, rgba(230,196,138,0.08) 44%, rgba(230,196,138,0.08) 45%, transparent 45%, transparent 60%, rgba(230,196,138,0.05) 60%, rgba(230,196,138,0.05) 61%, transparent 61%)",
          backgroundSize: "800px 800px",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.06] lg:opacity-[0.08]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="size-[600px]">
          <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(230,196,138,0.6)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="145" fill="none" stroke="rgba(230,196,138,0.5)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(230,196,138,0.4)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="55" fill="none" stroke="rgba(230,196,138,0.3)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="10" fill="none" stroke="rgba(230,196,138,0.2)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="2" fill="rgba(230,196,138,0.15)" />
        </svg>
      </div>

      <div className="relative screen-inner">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div>
              <p className="eyebrow text-brass-soft">
                Stand de tir · {club.city}
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.92] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
                Quatre pas de tir pour{" "}
                <span className="accent">viser juste</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/72">
                {club.tagline} Depuis {club.founded.slice(-4)}, l&rsquo;Association
                de Tir Berckois accueille loisir et compétition.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn-primary">
                  Nous contacter →
                </a>
                <a href="#stand" className="btn-ghost">
                  Découvrir le stand
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <OpenStatus />
                <span className="inline-flex items-center gap-1.5 text-xs text-paper/45">
                  <MapPin className="size-3" aria-hidden="true" />
                  55 Chemin des Vérotières
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid gap-3">
              <div className="panel-dark flex items-center justify-between gap-4 p-5">
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
              {heroHours.map((slot, i) => (
                <div
                  key={slot.days}
                  className="panel-dark flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-white/8"
                >
                  <span
                    className={`grid size-10 place-items-center rounded-2xl ${
                      i === 0
                        ? "bg-brass-soft text-pine-deep"
                        : "bg-brass-soft/12 text-brass-soft"
                    }`}
                  >
                    <Clock className="size-4" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-paper/55 uppercase">
                      {slot.days}
                    </p>
                    <p className="font-display text-xl font-semibold tracking-tight">
                      {slot.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <a
          href="#stand"
          className="mt-8 inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.2em] text-paper/50 uppercase transition-colors hover:text-paper/80"
        >
          Scroll
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
