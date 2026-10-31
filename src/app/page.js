import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import IntroSection from "./components/IntroSection";
import CoreTechnologies from "./components/CoreTechnologies";
import IndustrySolutions from "./components/IndustrySolutions";
import ProjectsSection from "./components/ProjectsSection";
import WhySection from "./components/WhySection";
import StatsSection from "./components/StatsSection";
import FocusSlider from "./components/FocusSlider";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <IntroSection />
        <CoreTechnologies />
        <IndustrySolutions />
        <ProjectsSection />
        <WhySection />
        <StatsSection />
        <FocusSlider />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <ContactButton />
    </>
  );
}
