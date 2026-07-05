import SectionTitle from "../SectionTitle/SectionTitle";
import "./ProcessSection.css";

export default function ProcessSection({ processSteps }) {
  return (
    <section className="content-band">
      <SectionTitle
        eyebrow="কীভাবে শুরু করবেন"
        title="মাত্র তিনটি ধাপে চিকিৎসা শুরু"
        description="আমরা চাই আপনি যেন কোনো ঝামেলা ছাড়াই সহজেই আমাদের সাথে যোগাযোগ করতে পারেন। মাত্র একটি ক্লিকেই আপনার সুস্থতার যাত্রা শুরু হোক।"
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
