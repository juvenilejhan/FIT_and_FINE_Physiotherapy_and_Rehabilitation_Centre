import BrandMark from "../BrandMark/BrandMark";
import "./Header.css";

export default function Header({ whatsappLink }) {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <BrandMark />
        <div>
          <strong>FIT & FINE</strong>
          <span>Physiotherapy & Rehabilitation Centre</span>
        </div>
      </div>
      <nav className="topbar-nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        className="topbar-cta"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Now
      </a>
    </header>
  );
}
