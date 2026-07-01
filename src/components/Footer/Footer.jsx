import "./Footer.css";

export default function Footer({ facebook }) {
  return (
    <footer className="footer">
      <p>Copyright ©️ FIT & FINE Physiotherapy & Rehabilitation Centre</p>
      <a href={facebook} target="_blank" rel="noreferrer">
        Facebook Page
      </a>
    </footer>
  );
}
