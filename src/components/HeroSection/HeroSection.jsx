import BrandMark from "../BrandMark/BrandMark";
import "./HeroSection.css";

export default function HeroSection({ contact, whatsappLink, highlights }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">A New Concept in Physiotherapy</p>
        <h1>
          Focused physiotherapy and rehabilitation care in{" "}
          <strong>Uttara.</strong>
        </h1>
        <p className="lead">
          <strong>FIT & FINE Physiotherapy & Rehabilitation Centre</strong> is a
          trusted physiotherapy clinic with 18+ years of experience. We provide
          pain management, stroke rehabilitation, sports injury treatment and
          personalized physiotherapy care.
        </p>

        <div className="hero-actions">
          <a
            className="button primary"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
          <a className="button secondary" href={`mailto:${contact.email}`}>
            Send Email
          </a>
        </div>

        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hero-card">
        <BrandMark />
        <div className="hero-tag">
          <span>Contact</span>
          <strong>WhatsApp first, Instant Reply</strong>
        </div>
        <div className="hero-card-copy">
          <p>Quick contact</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            {contact.displayPhone}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.address}</span>
        </div>
      </div>
    </section>
  );
}
