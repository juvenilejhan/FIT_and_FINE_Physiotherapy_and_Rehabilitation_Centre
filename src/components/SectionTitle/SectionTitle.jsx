import "./SectionTitle.css";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
}
