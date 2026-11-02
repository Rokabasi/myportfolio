import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <p>
          {profile.location} · <a href="#top">Retour en haut ↑</a>
        </p>
      </div>
    </footer>
  );
}
