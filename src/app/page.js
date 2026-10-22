import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import WhySection from "./components/WhySection";
import StatsSection from "./components/StatsSection";
import IndustriesSection from "./components/IndustriesSection";
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
      </main>
      <Footer />
    </>
  );
}
