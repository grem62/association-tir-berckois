"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/content";

const dayMap: Record<string, number> = {
  Dim: 0,
  Lun: 1,
  Mar: 2,
  Mer: 3,
  Jeu: 4,
  Ven: 5,
  Sam: 6,
};

function isOpenNow(): { open: boolean; label: string } {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentMinutes = hour * 60 + minutes;

  const slot = hours.find((s) => dayMap[s.day] === day);

  if (!slot || !slot.open) {
    const nextOpen = hours.find(
      (s, i) => {
        const offset = (dayMap[s.day] - day + 7) % 7;
        return s.open && (offset > 0 || (offset === 0 && dayMap[s.day] !== day));
      }
    );
    if (nextOpen) {
      return { open: false, label: `Reprend ${nextOpen.day.toLowerCase()}.` };
    }
    return { open: false, label: "Fermé aujourd'hui." };
  }

  if (slot.day === "Dim") {
    const start = 9 * 60 + 30;
    const end = 12 * 60 + 30;
    if (currentMinutes >= start && currentMinutes < end) {
      return { open: true, label: "Ouvert jusqu'à 12 h 30." };
    }
    if (currentMinutes < start) {
      return { open: false, label: "Ouvre à 9 h 30." };
    }
  } else {
    const start = 14 * 60;
    const end = 17 * 60;
    if (currentMinutes >= start && currentMinutes < end) {
      return { open: true, label: "Ouvert jusqu'à 17 h." };
    }
    if (currentMinutes < start) {
      return { open: false, label: "Ouvre à 14 h." };
    }
  }

  return { open: false, label: "Fermé pour aujourd'hui." };
}

export function OpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string }>({
    open: false,
    label: "",
  });

  useEffect(() => {
    setStatus(isOpenNow());
  }, []);

  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-paper/70">
      <span
        className={`status-dot ${status.open ? "is-open" : ""}`}
        style={{
          backgroundColor: status.open ? "#6ec896" : "#c2644a",
          color: status.open ? "#6ec896" : "#c2644a",
        }}
        aria-hidden="true"
      />
      {status.label}
    </span>
  );
}
