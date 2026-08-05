import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AccountingSection from "@/components/HomeComponents/AccountingSection";
import Cards from "@/components/HomeComponents/Cards";
import SolutionsSection from "@/components/HomeComponents/CubeCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar transparentOnTop />
      <HeroSection />
      <Cards />
      <SolutionsSection />
      <AccountingSection />
      <Footer />
    </div>
  );
}
