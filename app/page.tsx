import Catagories from "./components/Catagories";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
import FooterLast from "./components/FooterLast";

export default function Home() {
  return (
    <main>
      <div className="h-[470vh]">
        <HeroSection/>
        <Products/>
        <ProductCard/>
        <Catagories/>
        <FooterLast/>
      </div>
    </main>
  );
}
