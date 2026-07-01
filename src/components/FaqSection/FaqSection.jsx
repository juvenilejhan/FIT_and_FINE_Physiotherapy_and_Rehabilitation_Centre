import SectionTitle from "../SectionTitle/SectionTitle";
import "./FaqSection.css";

export default function FaqSection({ faqs }) {
  return (
    <section className="content-band faq-band">
      <SectionTitle
        eyebrow="FAQ"
        title="Helpful answers before first contact"
        description="Short answers make it easier for people to reach out with confidence and without extra back-and-forth."
      />
      <div className="faq-grid">
        {faqs.map((faq) => (
          <article className="faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
