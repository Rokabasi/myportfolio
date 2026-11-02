import { experiences } from "@/data/profile";
import { Briefcase } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Parcours</p>
          <h2 className="reveal">Expériences professionnelles</h2>
          <p className="section-sub reveal">
            Télécoms, santé publique, services financiers et institutions : des environnements exigeants où la
            fiabilité n’est pas négociable.
          </p>
        </div>

        <ol className="timeline">
          {experiences.map((e) => (
            <li key={e.company + e.role} className={`timeline-item reveal ${e.current ? "is-current" : ""}`}>
              <span className="timeline-node" aria-hidden>
                <Briefcase width={16} height={16} />
              </span>
              <article className="card exp-card">
                <header className="exp-head">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="exp-company">
                      {e.company} <span className="dot-sep">·</span> {e.type}
                    </p>
                  </div>
                  <div className="exp-meta">
                    {e.current && <span className="badge badge-live">En poste</span>}
                    <span className="exp-period">{e.period}</span>
                  </div>
                </header>
                <ul className="check-list">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
