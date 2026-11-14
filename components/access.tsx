import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { club, hours } from "@/lib/content";
import { IconBadge, Panel, Screen } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Access() {
  return (
    <Screen
      id="horaires"
      tone="dark"
      eyebrow="Horaires et accès"
      title={
        <>
          Ouvert cinq jours.
          <br />
          <span className="accent">Fermé mardi et jeudi.</span>
        </>
      }
      aside="Le stand est au 55 chemin des Vérotières."
    >
      <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid content-start gap-3">
          <Reveal>
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {hours.map((slot) => (
                <li key={slot.day}>
                  <div
                    className={`panel-dark px-2 py-3 text-center ${slot.open ? "" : "opacity-40"}`}
                  >
                    <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brass-soft uppercase">
                      {slot.day}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold tracking-tight">
                      {slot.time}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              { icon: MapPin, label: club.stand.label, lines: [club.stand.street, club.stand.city] },
              { icon: Building2, label: club.siege.label, lines: club.siege.lines },
              { icon: Mail, label: club.mail.label, lines: club.mail.lines },
            ].map((card, i) => (
              <Reveal key={card.label} delay={i * 60}>
                <Panel tone="dark" className="flex h-full gap-3 p-3.5">
                  <IconBadge icon={card.icon} tone="dark" />
                  <div>
                    <p className="text-xs text-paper/55">{card.label}</p>
                    <p className="text-sm leading-snug font-medium">
                      {card.lines[0]}
                      <br />
                      {card.lines[1]}
                    </p>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
          <ul className="grid gap-2 sm:grid-cols-3">
            {club.phones.map((phone, i) => (
              <li key={phone.href}>
                <Reveal delay={i * 60}>
                  <a
                    href={phone.href}
                    className="panel-dark panel-dark-hover flex items-center gap-3 p-3.5"
                  >
                    <Phone className="size-4 text-brass-soft" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-paper/55">{phone.role}</span>
                      <span className="font-display text-base font-semibold tracking-tight">
                        {phone.display}
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal delay={120}>
          <Panel tone="dark" className="flex min-h-48 flex-col overflow-hidden">
            <iframe
              title="Carte du stand, 55 Chemin des Vérotières à Berck-sur-Mer"
              src={club.map.embed}
              className="min-h-40 w-full flex-1 grayscale invert-[0.88] contrast-125"
              loading="lazy"
            />
            <div className="flex border-t border-white/10 text-xs font-medium">
              <a
                href={club.map.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-3 py-2.5 text-paper/70 transition-colors hover:bg-white/5 hover:text-paper"
              >
                OpenStreetMap
              </a>
              <a
                href={club.map.street}
                target="_blank"
                rel="noreferrer"
                className="flex-1 border-l border-white/10 px-3 py-2.5 text-paper/70 transition-colors hover:bg-white/5 hover:text-paper"
              >
                Google Maps
              </a>
            </div>
          </Panel>
        </Reveal>
      </div>
    </Screen>
  );
}
