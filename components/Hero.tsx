import { profile, stats } from "@/data/profile";
import { ArrowRight, Location, Mail } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden />
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.available && (
            <p className="status-pill reveal">
              <span className="status-dot" /> Disponible pour des missions freelance
            </p>
          )}
          <h1 className="reveal">
            {profile.name.split(" ").slice(0, 1)}{" "}
            <span className="accent-text">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="hero-title reveal">{profile.title}</p>
          <p className="hero-summary reveal">{profile.summary}</p>

          <div className="hero-cta reveal">
            <a href="#projects" className="btn btn-primary">
              Voir mes projets <ArrowRight width={18} height={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-secondary">
              <Mail width={18} height={18} /> {profile.email}
            </a>
          </div>

          <p className="hero-meta reveal">
            <Location width={16} height={16} /> {profile.location} · {profile.subtitle}
          </p>
        </div>

        <div className="window reveal" aria-hidden>
          <div className="window-bar">
            <span className="window-title">romain.config.ts</span>
            <span className="window-controls">
              <i /> <i /> <i />
            </span>
          </div>
          <pre className="code">
            <code>
              <span className="tk-k">export const</span> <span className="tk-v">engineer</span> = {"{"}
              {"\n"}  name: <span className="tk-s">&quot;Romain Kabasi&quot;</span>,
              {"\n"}  role: <span className="tk-s">&quot;Software Engineer&quot;</span>,
              {"\n"}  stack: [<span className="tk-s">&quot;TypeScript&quot;</span>, <span className="tk-s">&quot;NestJS&quot;</span>,
              {"\n"}          <span className="tk-s">&quot;Next.js&quot;</span>, <span className="tk-s">&quot;MySQL&quot;</span>],
              {"\n"}  focus: [<span className="tk-s">&quot;web apps&quot;</span>, <span className="tk-s">&quot;workflows&quot;</span>,
              {"\n"}          <span className="tk-s">&quot;support applicatif&quot;</span>],
              {"\n"}  security: [<span className="tk-s">&quot;2FA&quot;</span>, <span className="tk-s">&quot;OTP&quot;</span>, <span className="tk-s">&quot;e-signature&quot;</span>],
              {"\n"}  network: <span className="tk-s">&quot;Cisco certified&quot;</span>,
              {"\n"}  available: <span className="tk-k">true</span>,
              {"\n"}{"}"};<span className="caret" />
            </code>
          </pre>
        </div>
      </div>

      <div className="container">
        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
