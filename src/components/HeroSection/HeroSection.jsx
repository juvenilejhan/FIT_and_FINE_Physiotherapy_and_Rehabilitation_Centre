import BrandMark from "../BrandMark/BrandMark";
import "./HeroSection.css";

export default function HeroSection({ contact, whatsappLink, highlights }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">A New Concept in Physiotherapy</p>
        <h1>উত্তরায় আপনার বিশ্বস্ত ফিজিওথেরাপি ও পুনর্বাসন কেন্দ্র।</h1>
        <p className="lead">
          <strong>
            ফিট অ্যান্ড ফাইন ফিজিওথেরাপি অ্যান্ড রিহ্যাবিলিটেশন সেন্টার
          </strong>{" "}
          প্রায় দুই দশকেরও বেশি সময় ধরে রোগীদের আস্থা অর্জন করে আসছে। ব্যথা
          নিরাময়, স্ট্রোক পুনর্বাসন, ক্রীড়াবিদদের ইনজুরি চিকিৎসা এবং রোগীর
          প্রয়োজন অনুযায়ী ফিজিওথেরাপি — সবকিছুই আমরা যত্নসহকারে করি।
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
