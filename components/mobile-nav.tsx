"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-9 place-items-center rounded-full text-paper"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
        <span className="sr-only">{open ? "Fermer" : "Menu"}</span>
      </button>
      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Sections"
          className="absolute inset-x-0 top-[calc(100%+0.6rem)] rounded-[1.5rem] border border-white/10 bg-[#0a1a16]/95 p-2 shadow-2xl backdrop-blur-xl"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 font-display text-xl tracking-tight text-paper"
                  onClick={() => {
                    setOpen(false);
                    const id = item.href.slice(1);
                    requestAnimationFrame(() => {
                      document.getElementById(id)?.scrollIntoView();
                    });
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
