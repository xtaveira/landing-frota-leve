
import HeroBanner from "./components/sections/HeroBanner";
import FeaturedMedia from "./components/sections/FeaturedMedia";
import Sorteio from "./components/sections/Sorteio";
import Header from "./components/sections/Header";

export default function Home() {

  return (
    <div>
      <Header />
      <HeroBanner />
      <FeaturedMedia />
      <Sorteio />
    </div>
  );
}
