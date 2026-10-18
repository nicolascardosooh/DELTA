import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ContactTeaser from "@/components/HomeComponents/ContactTeaser";
import EssenceSection from "@/components/HomeComponents/EssenceSection";
import JourneySection from "@/components/HomeComponents/JourneySection";
import ServicesPillars from "@/components/HomeComponents/ServicesPillars";
import StatsSection from "@/components/HomeComponents/StatsSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-delta-ink">
      <Navbar transparentOnTop />
      <HeroSection />
      <ServicesPillars />
      <JourneySection />
      <EssenceSection />
      <StatsSection />
      <ContactTeaser />
      <Footer />
    </div>
  );
}
