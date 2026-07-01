import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FaqSection from "./components/FaqSection/FaqSection";
import FloatingWhatsapp from "./components/FloatingWhatsapp/FloatingWhatsapp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import {
  contact,
  faqs,
  highlights,
  mapsLink,
  processSteps,
  services,
  whatsappLink,
} from "./content/siteData";

function App() {
  return (
    <div className="page-shell">
      <Header whatsappLink={whatsappLink} />

      <main>
        <HeroSection
          contact={contact}
          whatsappLink={whatsappLink}
          highlights={highlights}
        />
        <ServicesSection services={services} />
        <AboutSection contact={contact} mapsLink={mapsLink} />
        <ProcessSection processSteps={processSteps} />
        <ContactSection
          contact={contact}
          whatsappLink={whatsappLink}
          mapsLink={mapsLink}
        />
        <FaqSection faqs={faqs} />
      </main>

      <Footer facebook={contact.facebook} />
      <FloatingWhatsapp whatsappLink={whatsappLink} />
    </div>
  );
}

export default App;
