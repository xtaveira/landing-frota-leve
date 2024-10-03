
import SiteLogo from "./components/sections/SiteLogo";
import HeroBanner from "./components/sections/HeroBanner";
import FeaturedMedia from "./components/sections/FeaturedMedia";
import BenefitsList from "./components/sections/BenefitsList";
import TestimonialsCarousel from "./components/sections/TestimonialsCarousel";
import ProductDetails from "./components/sections/ProductDetails";
import SecondaryCTA from "./components/sections/SecondaryCTA";
import FAQAccordion from "./components/sections/FAQAccordion";
import TrustBadges from "./components/sections/TrustBadges";
import Sorteio from "./components/sections/Sorteio";
import Footer from "./components/sections/Footer";
import LandingPage from "./components/sections/LandingPage";

export default function Home() {

  return (
    <div 
    // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
    //  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
     >

<LandingPage/>
      <SiteLogo />
      <HeroBanner />
      <FeaturedMedia />
      <BenefitsList />
      <TestimonialsCarousel />
      <ProductDetails />
      <SecondaryCTA />
      <FAQAccordion />
      <TrustBadges />
      <Sorteio />
      <Footer />
      
    </div>
  );
}
