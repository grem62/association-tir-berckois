import { nav } from "@/lib/content";
import { MobileNav } from "@/components/mobile-nav";
import { TargetMark } from "@/components/mark";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0a1a16]/70 px-3 py-2 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:px-4">
        <a href="#accueil" className="flex items-center gap-2.5 text-paper">
          <TargetMark className="size-7 text-brass-soft" />
          <span className="font-display text-lg font-semibold tracking-tight">ATB</span>
          <span className="sr-only">Association de Tir Berckois</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[0.78rem] font-medium text-paper/70 transition-colors hover:bg-white/8 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !px-3.5 !py-2 text-[0.72rem] sm:inline-flex">
            Contact →
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
