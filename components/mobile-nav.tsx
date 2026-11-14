"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-9 place-items-center rounded-full text-paper transition-colors hover:bg-white/8"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
        <span className="sr-only">{open ? "Fermer" : "Menu"}</span>
      </button>
      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-0 z-[-1] bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <nav
            id="menu-mobile"
            aria-label="Sections"
            className="absolute inset-x-0 top-[calc(100%+0.6rem)] rounded-[1.5rem] border border-white/10 bg-[#0a1a16]/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg tracking-tight text-paper transition-colors hover:bg-white/8"
                    onClick={() => {
                      setOpen(false);
                      const id = item.href.slice(1);
                      requestAnimationFrame(() => {
                        document.getElementById(id)?.scrollIntoView();
                      });
                    }}
                  >
                    {item.label}
                    <span className="text-brass-soft/40 text-sm">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
