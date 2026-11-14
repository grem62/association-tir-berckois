import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { club, hours } from "@/lib/content";
import { IconBadge, Panel, Screen } from "@/components/ui";

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
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {hours.map((slot) => (
              <li key={slot.day}>
                <Panel
                  tone="dark"
                  className={`px-2 py-3 text-center ${slot.open ? "" : "opacity-45"}`}
                >
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brass-soft uppercase">
                    {slot.day}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold tracking-tight">
                    {slot.time}
                  </p>
                </Panel>
              </li>
            ))}
          </ol>
          <div className="grid gap-2 sm:grid-cols-3">
            <Panel tone="dark" className="flex gap-3 p-3.5">
              <IconBadge icon={MapPin} tone="dark" />
              <div>
                <p className="text-xs text-paper/55">{club.stand.label}</p>
                <p className="text-sm leading-snug font-medium">
                  {club.stand.street}
                  <br />
                  {club.stand.city}
                </p>
              </div>
            </Panel>
            <Panel tone="dark" className="flex gap-3 p-3.5">
              <IconBadge icon={Building2} tone="dark" />
              <div>
                <p className="text-xs text-paper/55">{club.siege.label}</p>
                <p className="text-sm leading-snug font-medium">
                  {club.siege.lines[0]}
                  <br />
                  {club.siege.lines[1]}
                </p>
              </div>
            </Panel>
            <Panel tone="dark" className="flex gap-3 p-3.5">
              <IconBadge icon={Mail} tone="dark" />
              <div>
                <p className="text-xs text-paper/55">{club.mail.label}</p>
                <p className="text-sm leading-snug font-medium">
                  {club.mail.lines[0]}
                  <br />
                  {club.mail.lines[1]}
                </p>
              </div>
            </Panel>
          </div>
          <ul className="grid gap-2 sm:grid-cols-3">
            {club.phones.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="panel-dark flex items-center gap-3 p-3.5 transition-colors hover:bg-white/8"
                >
                  <Phone className="size-4 text-brass-soft" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-paper/55">{phone.role}</span>
                    <span className="font-display text-base font-semibold tracking-tight">
                      {phone.display}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
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
              className="flex-1 px-3 py-2.5 text-paper/70 hover:bg-white/5 hover:text-paper"
            >
              OpenStreetMap
            </a>
            <a
              href={club.map.street}
              target="_blank"
              rel="noreferrer"
              className="flex-1 border-l border-white/10 px-3 py-2.5 text-paper/70 hover:bg-white/5 hover:text-paper"
            >
              Google Maps
            </a>
          </div>
        </Panel>
      </div>
    </Screen>
  );
}
