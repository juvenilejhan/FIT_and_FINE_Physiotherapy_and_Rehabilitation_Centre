import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutSection.css";

export default function AboutSection({ contact, mapsLink }) {
  return (
    <section className="content-band about-band" id="about">
      <SectionTitle
        eyebrow="About the center"
        title="Calm, clinical, and approachable care"
        description="Expert physiotherapy care tailored to your unique needs. Our team of licensed specialists provides comprehensive treatment to help you regain mobility, reduce pain, and improve your quality of life."
      />
      <div className="about-grid">
        <div className="about-panel">
          <h3>Why this works</h3>
          <p>
            Fit and Fine Physiotherapy & Rehabilitation Centre is a trusted
            physiotherapy clinic with 18+ years of experience. We provide pain
            management, stroke rehabilitation, sports injury treatment and
            personalized physiotherapy care.
          </p>
        </div>
        <div className="about-panel accent">
          <h3>Contact details</h3>
          <p>{contact.address}</p>
          <a href={mapsLink} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
