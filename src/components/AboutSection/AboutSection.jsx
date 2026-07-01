import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutSection.css";

export default function AboutSection({ contact, mapsLink }) {
  return (
    <section className="content-band about-band" id="about">
      <SectionTitle
        eyebrow="About the center"
        title="Calm, clinical, and approachable care"
        description="The design direction follows the uploaded logo, using green, orange, and blue tones to reflect movement, recovery, and confidence."
      />
      <div className="about-grid">
        <div className="about-panel">
          <h3>Why this works</h3>
          <p>
            The homepage is structured to build trust quickly, then push users
            toward a single action: start a conversation on WhatsApp.
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
