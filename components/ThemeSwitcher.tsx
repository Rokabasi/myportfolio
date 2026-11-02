"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Desktop, Moon, Palette, Sun } from "./Icons";

type Mode = "light" | "dark" | "system";

const modes: { id: Mode; label: string; Icon: typeof Sun }[] = [
  { id: "light", label: "Clair", Icon: Sun },
  { id: "dark", label: "Sombre", Icon: Moon },
  { id: "system", label: "Système", Icon: Desktop },
];

export const accents = [
  { id: "blue", label: "Bleu" },
  { id: "teal", label: "Sarcelle" },
  { id: "purple", label: "Violet" },
  { id: "copper", label: "Cuivre" },
  { id: "green", label: "Vert" },
] as const;

function read(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function apply(mode: Mode) {
  const dark = mode === "dark" || (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.dataset.theme = dark ? "dark" : "light";
  window.setTimeout(() => root.classList.remove("theme-transition"), 300);
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("system");
  const [accent, setAccent] = useState("blue");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMode(read("theme", "system") as Mode);
    setAccent(read("accent", "blue"));
  }, []);

  // Suit les changements du thème système quand le mode « Système » est actif.
  useEffect(() => {
    if (mode !== "system") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const chooseMode = (m: Mode) => {
    setMode(m);
    write("theme", m);
    apply(m);
  };

  const chooseAccent = (a: string) => {
    setAccent(a);
    write("accent", a);
    document.documentElement.dataset.accent = a;
  };

  const Current = modes.find((m) => m.id === mode)?.Icon ?? Desktop;

  return (
    <div className="theme" ref={ref}>
      <button
        className="icon-btn"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Personnaliser l’apparence"
        title="Apparence"
        onClick={() => setOpen((o) => !o)}
      >
        <Current />
      </button>

      {open && (
        <div className="theme-flyout" role="dialog" aria-label="Apparence">
          <p className="flyout-label">Mode</p>
          <div className="segmented" role="radiogroup" aria-label="Mode de couleur">
            {modes.map(({ id, label, Icon }) => (
              <button
                key={id}
                role="radio"
                aria-checked={mode === id}
                className={mode === id ? "active" : ""}
                onClick={() => chooseMode(id)}
              >
                <Icon width={16} height={16} />
                {label}
              </button>
            ))}
          </div>

          <p className="flyout-label">
            <Palette width={14} height={14} /> Couleur d’accentuation
          </p>
          <div className="swatches" role="radiogroup" aria-label="Couleur d’accentuation">
            {accents.map((a) => (
              <button
                key={a.id}
                role="radio"
                aria-checked={accent === a.id}
                aria-label={a.label}
                title={a.label}
                className={`swatch swatch-${a.id}`}
                onClick={() => chooseAccent(a.id)}
              >
                {accent === a.id && <Check width={14} height={14} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
