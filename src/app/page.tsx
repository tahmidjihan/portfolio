import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LatestProjectsSection from "@/components/LatestProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BeyondTheCodeSection from "@/components/BeyondTheCodeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LatestProjectsSection />
        <ExperienceSection />
        <BeyondTheCodeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
