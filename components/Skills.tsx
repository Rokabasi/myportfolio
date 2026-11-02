import { education, languages, skillGroups, softSkills } from "@/data/profile";
import { Globe, Graduation } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Expertise</p>
          <h2 className="reveal">Compétences & formation</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((g) => (
            <article key={g.title} className="card skill-card reveal">
              <h3>{g.title}</h3>
              <ul className="tags">
                {g.items.map((i) => (
                  <li key={i} className="tag">
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills-extra">
          <article className="card reveal">
            <h3 className="card-title">
              <span className="icon-tile">
                <Graduation />
              </span>
              Formation & certifications
            </h3>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.title}>
                  <div>
                    <p className="edu-title">{e.title}</p>
                    <p className="edu-org">{e.org}</p>
                  </div>
                  <span className="exp-period">{e.period}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card reveal">
            <h3 className="card-title">
              <span className="icon-tile">
                <Globe />
              </span>
              Savoir-être & langues
            </h3>
            <ul className="check-list">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <ul className="tags langs">
              {languages.map((l) => (
                <li key={l} className="tag">
                  {l}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
