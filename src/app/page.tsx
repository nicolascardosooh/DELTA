import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ClientsTeaser from "@/components/HomeComponents/ClientsTeaser";
import ContactTeaser from "@/components/HomeComponents/ContactTeaser";
import EssenceSection from "@/components/HomeComponents/EssenceSection";
import JourneySection from "@/components/HomeComponents/JourneySection";
import ServicesPillars from "@/components/HomeComponents/ServicesPillars";
import StatsSection from "@/components/HomeComponents/StatsSection";
import TeamTeaser from "@/components/HomeComponents/TeamTeaser";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar transparentOnTop />
      <HeroSection />
      <ServicesPillars />
      <JourneySection />
      <EssenceSection />
      <StatsSection />
      <ClientsTeaser />
      <TeamTeaser />
      <ContactTeaser />
      <Footer />
    </div>
  );
}
