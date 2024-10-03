
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
import Header from "./components/sections/Header";

export default function Home() {

  return (
    <div>
      <Header />
      <HeroBanner />
      <FeaturedMedia />
      {/* <BenefitsList />
      <TestimonialsCarousel />
      <ProductDetails />
      <SecondaryCTA />
      <FAQAccordion />
      <TrustBadges />
      <Footer /> */}
      <Sorteio />
    </div>
  );
}
