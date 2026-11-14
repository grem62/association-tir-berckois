import { ExternalLink } from "lucide-react";
import { facts, links, news } from "@/lib/content";
import { Panel, Screen } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Club() {
  return (
    <Screen
      id="club"
      eyebrow="Le club"
      title={
        <>
          Depuis 1973 à Berck.
          <br />
          <span className="text-pine">Toujours sur le terrain.</span>
        </>
      }
      aside="Identité officielle, vie du stand et liens utiles."
    >
      <div className="grid gap-3 lg:grid-cols-3">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:col-span-2">
          {facts.map((fact, i) => (
            <li key={fact.label}>
              <Reveal delay={(i % 3) * 60}>
                <Panel hover className="h-full p-4">
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brass uppercase">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold tracking-tight">
                    {fact.value}
                  </p>
                </Panel>
              </Reveal>
            </li>
          ))}
        </ul>
        <ul className="grid content-start gap-2">
          {news.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 60}>
                <Panel className="p-4">
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brass uppercase">
                    {item.date}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{item.title}</p>
                  <p className="text-xs leading-snug text-ink-soft">{item.text}</p>
                </Panel>
              </Reveal>
            </li>
          ))}
        </ul>
        <ul className="grid gap-2 sm:grid-cols-3 lg:col-span-3">
          {links.map((link, i) => (
            <li key={link.href}>
              <Reveal delay={i * 60}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="panel panel-hover flex items-center justify-between gap-3 px-4 py-3.5 text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    {link.label.startsWith("Facebook") ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-4 text-pine"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3v-9.8h2.3l.4-2.7h-2.7z" />
                      </svg>
                    ) : (
                      <ExternalLink className="size-4 text-pine" aria-hidden="true" />
                    )}
                    {link.label}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  );
}
