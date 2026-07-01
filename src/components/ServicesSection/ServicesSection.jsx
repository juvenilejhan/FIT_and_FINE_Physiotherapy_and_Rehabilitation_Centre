import SectionTitle from "../SectionTitle/SectionTitle";
import "./ServicesSection.css";

export default function ServicesSection({ services }) {
  return (
    <section className="content-band" id="services">
      <SectionTitle
        eyebrow="What we do"
        title="Treatment and recovery support"
        description="A simple, trust-first site that makes it easy for patients to ask about care through WhatsApp."
      />
      <div className="service-grid">
        {services.map((service) => (
          <article
            className="service-card"
            key={service.title}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(10, 18, 16, 0.18), rgba(10, 18, 16, 0.58)), url(${service.image})`,
            }}
          >
            <span className="service-dot" aria-hidden="true" />
            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
