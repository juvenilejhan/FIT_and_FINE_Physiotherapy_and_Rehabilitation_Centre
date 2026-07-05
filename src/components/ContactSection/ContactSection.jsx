import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContactSection.css";

export default function ContactSection({ contact, whatsappLink, mapsLink }) {
  return (
    <section className="content-band contact-band" id="contact">
      <SectionTitle
        eyebrow="যোগাযোগ করুন"
        title="হোয়াটসঅ্যাপেই সহজ যোগাযোগ"
        description="সেবার ধরন, খরচ বা অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে কোনো ঝামেলাপূর্ণ ফর্ম পূরণ করতে হবে না—মাত্র একটি ট্যাপেই আমাদের জানাতে পারবেন।"
      />
      <div className="contact-grid">
        <a
          className="contact-card primary"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>হোয়াটসঅ্যাপ / মোবাইল</span>
          <strong>{contact.displayPhone}</strong>
        </a>
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <span>ইমেইল</span>
          <strong>{contact.email}</strong>
        </a>
        <a
          className="contact-card"
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>ঠিকানা</span>
          <strong>{contact.address}</strong>
        </a>
        <div className="contact-card info-card">
          <span>কীভাবে শুরু করবেন?</span>
          <strong>
            হোয়াটসঅ্যাপে আপনার নাম, সমস্যা এবং পছন্দের সময় জানিয়ে পাঠিয়ে
            দিন। আমরা দ্রুত জবাব দেবো।
          </strong>
        </div>
      </div>
    </section>
  );
}
