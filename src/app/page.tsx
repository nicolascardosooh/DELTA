import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AccountingSection from "@/components/HomeComponents/AccountingSection";
import Cards from "@/components/HomeComponents/Cards";
import Carousel from "@/components/HomeComponents/CubeCarousel";
import Navbar from "@/components/HomeComponents/NavBarHome";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <HeroSection />
      <Cards/>
      <Carousel />
      <AccountingSection />
      <Footer />
    </div>
  );
}
