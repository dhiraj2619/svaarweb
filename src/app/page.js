import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import IntroSection from "./components/IntroSection";
import CoreTechnologies from "./components/CoreTechnologies";
import IndustrySolutions from "./components/IndustrySolutions";
import HighlightsSection from "./components/HighlightsSection";
import ProjectsSection from "./components/ProjectsSection";
import ClientsSection from "./components/ClientsSection";
import FeatureStory from "./components/FeatureStory";
import Footer from "./components/Footer";
import ContactButton from "./components/ContactButton";
import AosInit from "./components/AosInit";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <IntroSection />
        <CoreTechnologies />
        <IndustrySolutions />
        <HighlightsSection />
        <ProjectsSection />
        <ClientsSection />
        <FeatureStory />
      </main>
      <Footer />
      <ContactButton />
      <AosInit />
    </>
  );
}
