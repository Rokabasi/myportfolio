"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import ThemeSwitcher from "./ThemeSwitcher";
import { Close, Menu } from "./Icons";

const links = [
  { href: "#about", label: "Profil" },
  { href: "#experience", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Accueil">
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav className={`nav ${menu ? "open" : ""}`} aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? "active" : ""}
              onClick={() => setMenu(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeSwitcher />
          <a href="#contact" className="btn btn-primary btn-sm hide-sm">
            Me contacter
          </a>
          <button
            className="icon-btn show-sm"
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
