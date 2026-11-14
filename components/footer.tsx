import { Mail, MapPin, Phone } from "lucide-react";
import { club } from "@/lib/content";

export function Footer() {
  return (
    <section id="contact" className="screen hero-glow text-paper">
      <div className="screen-inner">
        <header className="mb-5 max-w-3xl">
          <p className="eyebrow text-brass-soft">Contact</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.98] font-semibold tracking-tight text-balance md:text-6xl">
            On se voit au stand.
            <br />
            <span className="accent">Ou on se parle.</span>
          </h2>
        </header>
        <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="panel-dark p-5">
            <p className="flex items-start gap-2 text-sm leading-relaxed">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass-soft" aria-hidden="true" />
              <span>
                {club.stand.street}
                <br />
                {club.stand.city}
                <span className="mt-3 block text-paper/65">
                  {club.siege.label} : {club.siege.lines[0]}
                  <br />
                  {club.mail.label} : {club.mail.lines[0]}, {club.mail.lines[1]}
                </span>
              </span>
            </p>
            <a href={`mailto:${club.emails[0].address}`} className="btn-primary mt-5">
              Écrire au club →
            </a>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {club.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="panel-dark p-4 transition-colors hover:bg-white/8"
              >
                <Phone className="size-4 text-brass-soft" aria-hidden="true" />
                <p className="mt-3 text-xs tracking-wide text-paper/55 uppercase">
                  {phone.role}
                </p>
                <p className="mt-1 font-display text-lg font-semibold tracking-tight">
                  {phone.display}
                </p>
                <p className="text-xs text-paper/55">{phone.note}</p>
              </a>
            ))}
          </div>
          <ul className="grid gap-2 sm:grid-cols-3 lg:col-span-2">
            {club.emails.map((item) => (
              <li key={item.address}>
                <a
                  href={`mailto:${item.address}`}
                  className="flex items-center gap-2 rounded-[1.35rem] border border-white/10 px-4 py-3 text-sm transition-colors hover:bg-white/8"
                >
                  <Mail className="size-4 shrink-0 text-brass-soft" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-paper/55">{item.role}</span>
                    {item.address}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
