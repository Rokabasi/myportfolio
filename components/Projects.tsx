import { projects } from "@/data/profile";
import { Check } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Réalisations</p>
          <h2 className="reveal">Projets sélectionnés</h2>
          <p className="section-sub reveal">
            Des plateformes métiers conçues de bout en bout : workflows d’approbation, sécurité des accès, reporting et
            interopérabilité.
          </p>
        </div>

        <div className="projects">
          {projects.map((p) => (
            <article
              key={p.name}
              className="card project reveal"
              style={{ "--hue": p.accent } as React.CSSProperties}
            >
              <div className="project-thumb" aria-hidden>
                <span className="project-initial">{p.name.charAt(0)}</span>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-domain">{p.domain}</span>
                  <span className={`badge ${p.status === "Livré" ? "badge-done" : "badge-live"}`}>{p.status}</span>
                </div>
                <h3>{p.name}</h3>
                {p.client && <p className="project-client">Client : {p.client}</p>}
                <p className="project-tagline">{p.tagline}</p>
                <ul className="feature-list">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check width={16} height={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Mots-clés">
                  {p.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
