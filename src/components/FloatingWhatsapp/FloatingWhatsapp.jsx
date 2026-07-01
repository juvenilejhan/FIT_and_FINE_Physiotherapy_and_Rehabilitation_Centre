import "./FloatingWhatsapp.css";

export default function FloatingWhatsapp({ whatsappLink }) {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
