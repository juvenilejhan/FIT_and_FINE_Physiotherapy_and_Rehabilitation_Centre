import SectionTitle from "../SectionTitle/SectionTitle";
import "./ProcessSection.css";

export default function ProcessSection({ processSteps }) {
  return (
    <section className="content-band">
      <SectionTitle
        eyebrow="How it works"
        title="A simple contact flow that reduces friction"
        description="The user sees the logo, understands the service, and can reach the clinic in one tap through WhatsApp or email."
      />
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
