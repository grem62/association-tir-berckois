import { Mail, MapPin, Phone } from "lucide-react";
import { club } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Footer() {
  return (
    <section id="contact" className="screen hero-glow grain relative text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, transparent 28%, rgba(230,196,138,0.08) 28%, rgba(230,196,138,0.08) 29%, transparent 29%, transparent 44%, rgba(230,196,138,0.06) 44%, rgba(230,196,138,0.06) 45%, transparent 45%, transparent 60%, rgba(230,196,138,0.04) 60%, rgba(230,196,138,0.04) 61%, transparent 61%)",
          backgroundSize: "600px 600px",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="relative screen-inner">
        <Reveal>
          <header className="mb-5 max-w-3xl">
            <p className="eyebrow text-brass-soft">Contact</p>
            <h2 className="mt-3 font-display text-4xl leading-[0.98] font-semibold tracking-tight text-balance md:text-6xl">
              On se voit au stand.
              <br />
              <span className="accent">Ou on se parle.</span>
            </h2>
          </header>
        </Reveal>
        <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="panel-dark h-full p-5">
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
          </Reveal>
          <div className="grid gap-2 sm:grid-cols-3">
            {club.phones.map((phone, i) => (
              <Reveal key={phone.href} delay={i * 60}>
                <a
                  href={phone.href}
                  className="panel-dark panel-dark-hover block h-full p-4"
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
              </Reveal>
            ))}
          </div>
          <ul className="grid gap-2 sm:grid-cols-3 lg:col-span-2">
            {club.emails.map((item, i) => (
              <li key={item.address}>
                <Reveal delay={i * 60}>
                  <a
                    href={`mailto:${item.address}`}
                    className="panel-dark panel-dark-hover flex items-center gap-2 px-4 py-3.5 text-sm"
                  >
                    <Mail className="size-4 shrink-0 text-brass-soft" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-paper/55">{item.role}</span>
                      <span className="font-medium">{item.address}</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
