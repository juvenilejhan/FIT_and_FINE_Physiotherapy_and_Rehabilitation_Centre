import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FaqSection from "./components/FaqSection/FaqSection";
import FloatingWhatsapp from "./components/FloatingWhatsapp/FloatingWhatsapp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import {
  contact,
  faqs,
  highlights,
  mapsLink,
  processSteps,
  services,
  whatsappLink,
  patientReviews,
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
        <ReviewsSection reviews={patientReviews} />
        <ProcessSection processSteps={processSteps} />
        <FaqSection faqs={faqs} />
        <ContactSection
          whatsappLink={whatsappLink}
          contact={contact}
          mapsLink={mapsLink}
        />
      </main>

      <Footer facebook={contact.facebook} />
      <FloatingWhatsapp whatsappLink={whatsappLink} />
    </div>
  );
}

export default App;
