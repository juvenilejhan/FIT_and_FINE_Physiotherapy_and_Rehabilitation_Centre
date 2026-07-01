import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContactSection.css";

export default function ContactSection({ contact, whatsappLink, mapsLink }) {
  return (
    <section className="content-band contact-band" id="contact">
      <SectionTitle
        eyebrow="Get in touch"
        title="WhatsApp-first contact system"
        description="People can tap once to ask about services, pricing, or appointments without navigating a booking form."
      />
      <div className="contact-grid">
        <a
          className="contact-card primary"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>WhatsApp / Mobile</span>
          <strong>{contact.displayPhone}</strong>
        </a>
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <span>Email</span>
          <strong>{contact.email}</strong>
        </a>
        <a
          className="contact-card"
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>Address</span>
          <strong>{contact.address}</strong>
        </a>
        <div className="contact-card info-card">
          <span>How to start</span>
          <strong>
            Send your name, concern, and preferred time on WhatsApp.
          </strong>
        </div>
      </div>
    </section>
  );
}
