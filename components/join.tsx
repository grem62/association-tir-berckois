import {
  Camera,
  FileText,
  House,
  IdCard,
  Mail,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { categoryB, documents, medicalForm, siaNote } from "@/lib/content";
import { IconBadge, Panel, Screen } from "@/components/ui";

const icons: LucideIcon[] = [
  Camera,
  IdCard,
  House,
  Mail,
  FileText,
  Stethoscope,
  Users,
  ShieldCheck,
];

export function Join() {
  return (
    <Screen
      id="inscription"
      tone="dark"
      eyebrow="Inscription"
      title={
        <>
          Le dossier au club.
          <br />
          <span className="accent">Rien de compliqué.</span>
        </>
      }
      aside="Les fiches se retirent au stand."
    >
      <div className="grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
        <ul className="grid gap-2 sm:grid-cols-2">
          {documents.map((item, index) => (
            <li key={item.title}>
              <Panel tone="dark" className="flex h-full items-center gap-3 p-3.5">
                <IconBadge icon={icons[index]} tone="dark" />
                <span>
                  <span className="block text-sm font-medium">{item.title}</span>
                  <span className="block text-xs leading-snug text-paper/60">
                    {item.detail}
                  </span>
                </span>
              </Panel>
            </li>
          ))}
        </ul>
        <div className="grid content-start gap-3">
          <Panel tone="dark" className="p-5">
            <h3 className="font-display text-xl font-semibold">Catégorie B</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-paper/70">
              {categoryB.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Panel>
          <Panel tone="dark" className="p-5 text-sm leading-relaxed text-paper/70">
            {siaNote}
            <a
              href={medicalForm}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-brass-soft underline decoration-brass-soft/30 underline-offset-4"
            >
              Modèle de certificat médical FFTir →
            </a>
          </Panel>
        </div>
      </div>
    </Screen>
  );
}
