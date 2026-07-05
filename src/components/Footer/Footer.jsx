import "./Footer.css";

export default function Footer({ facebook }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Copyright {currentYear} ©️ FIT & FINE Physiotherapy & Rehabilitation
        Centre
      </p>
      <a href={facebook} target="_blank" rel="noreferrer">
        Facebook Page
      </a>
    </footer>
  );
}
