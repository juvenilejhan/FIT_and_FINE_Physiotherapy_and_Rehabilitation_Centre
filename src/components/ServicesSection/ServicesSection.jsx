import SectionTitle from "../SectionTitle/SectionTitle";
import "./ServicesSection.css";

export default function ServicesSection({ services }) {
  return (
    <section className="content-band" id="services">
      <SectionTitle
        eyebrow="আমাদের সেবাসমূহ"
        title="চিকিৎসা এবং পুনর্বাসন সেবা"
        description="সঠিক সেবা, সঠিক সময়—আমাদের এই পরিসরে আপনি পাবেন আপনার সুস্থতার সঠিক পথ। ব্যথামুক্ত ও সচল জীবনের প্রতিশ্রুতি দিচ্ছে ফিট অ্যান্ড ফাইন।"
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
