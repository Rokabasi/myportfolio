import { profile } from "@/data/profile";
import { Code, Headset, Server, Shield } from "./Icons";

const pillars = [
  {
    Icon: Code,
    title: "Développement sur mesure",
    text: "Applications web et mobiles, API REST et back-offices pensés pour les processus métiers réels.",
  },
  {
    Icon: Shield,
    title: "Sécurité by design",
    text: "Double authentification, OTP, signature électronique, gestion des accès et contrôles de conformité.",
  },
  {
    Icon: Server,
    title: "Systèmes & réseaux",
    text: "Supervision de serveurs Linux, bases de données, automatisation et scripting shell & batch.",
  },
  {
    Icon: Headset,
    title: "Support & accompagnement",
    text: "Tests avant mise en production, analyse d’incidents, reporting et formation des utilisateurs.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow reveal">Profil</p>
          <h2 className="reveal">De l’analyse des besoins à la mise en production.</h2>
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)} className="lead reveal">
              {p}
            </p>
          ))}
        </div>
        <div className="pillars">
          {pillars.map(({ Icon, title, text }) => (
            <article key={title} className="card pillar reveal">
              <span className="icon-tile">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
