import HeroBanner from "./components/sections/HeroBanner";
import FeaturedMedia from "./components/sections/FeaturedMedia";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import InfoSection from "./components/sections/InfoSection";
import Footer from "./components/sections/Footer";


export default function Home() {

  return (
    <div>
      <Header />
      <HeroBanner />
      <FeaturedMedia />
      <Hero/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}
