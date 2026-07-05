import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutSection.css";

export default function AboutSection({ contact, mapsLink }) {
  return (
    <section className="content-band about-band" id="about">
      <SectionTitle
        eyebrow="আমাদের সম্পর্কে"
        title=" শান্ত পরিবেশে বিশেষজ্ঞ ও নির্ভরযোগ্য চিকিৎসা"
        description="প্রতিটি রোগীর শারীরিক অবস্থা ভিন্ন, তাই আমাদের চিকিৎসাও হয় সম্পূর্ণ ব্যক্তিগত। অভিজ্ঞ ও সনদপ্রাপ্ত ফিজিওথেরাপিস্টদের নিয়ে গঠিত আমাদের দল আপনার শারীরিক গতিশীলতা ফিরিয়ে আনতে, ব্যথা দূর করতে এবং স্বাভাবিক জীবনযাত্রায় ফিরতে নিরলস কাজ করে।"
      />
      <div className="about-grid">
        <div className="about-panel">
          <h3>কেন আমাদের বেছে নেবেন?</h3>
          <p>
            ফিট অ্যান্ড ফাইন ফিজিওথেরাপি অ্যান্ড রিহ্যাবিলিটেশন সেন্টার ১৮+
            বছরের অভিজ্ঞতা সহ একটি বিশ্বস্ত ফিজিওথেরাপি ক্লিনিক। আমরা ব্যথা
            ব্যবস্থাপনা, স্ট্রোক পুনর্বাসন, স্পোর্টস ইনজুরি চিকিৎসা এবং
            ব্যক্তিগত ফিজিওথেরাপি সেবা প্রদান করি।
          </p>
        </div>
        <div className="about-panel accent">
          <h3>যোগাযোগের তথ্য</h3>
          <p>{contact.address}</p>
          <a href={mapsLink} target="_blank" rel="noreferrer">
            গুগল ম্যাপে দেখুন
          </a>
        </div>
      </div>
    </section>
  );
}
