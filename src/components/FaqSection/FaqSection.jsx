import SectionTitle from "../SectionTitle/SectionTitle";
import "./FaqSection.css";

export default function FaqSection({ faqs }) {
  return (
    <section className="content-band faq-band">
      <SectionTitle
        eyebrow="সচরাচর জিজ্ঞাসা"
        title="যোগাযোগ করার আগে যা জেনে রাখা ভালো"
        description="চিকিৎসা নেওয়ার আগে এই ছোট তথ্যগুলো আপনার অনিশ্চয়তা দূর করবে এবং সহজেই সিদ্ধান্ত নিতে সাহায্য করবে।"
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
