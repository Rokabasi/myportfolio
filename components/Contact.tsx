"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight, Chat, Check, Copy, Mail, Phone } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const channels = [
    { Icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: Chat, label: "WhatsApp", value: "Écrire sur WhatsApp", href: profile.whatsapp, external: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card contact-card reveal">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Un projet, une mission ou un besoin de support ?</h2>
            <p className="lead">
              Parlons de vos besoins : je vous réponds rapidement avec une proposition adaptée à votre contexte.
            </p>
            <div className="hero-cta">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail width={18} height={18} /> Écrire un e-mail
              </a>
              <button type="button" className="btn btn-secondary" onClick={copyEmail} aria-live="polite">
                {copied ? <Check width={18} height={18} /> : <Copy width={18} height={18} />}
                {copied ? "Adresse copiée" : "Copier l’adresse"}
              </button>
            </div>
          </div>

          <ul className="channels">
            {channels.map(({ Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="channel"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="icon-tile">
                    <Icon />
                  </span>
                  <span>
                    <span className="channel-label">{label}</span>
                    <span className="channel-value">{value}</span>
                  </span>
                  <ArrowUpRight className="channel-arrow" width={18} height={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
