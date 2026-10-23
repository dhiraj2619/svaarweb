import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import WhySection from "./components/WhySection";
import StatsSection from "./components/StatsSection";
import IndustriesSection from "./components/IndustriesSection";
import FocusSlider from "./components/FocusSlider";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <AboutSection />
        <ProjectsSection />
        <WhySection />
        <StatsSection />
        <IndustriesSection />
        <FocusSlider />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
