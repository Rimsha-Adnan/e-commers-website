import Catagories from "./components/Catagories";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main>
      <div className=" ">
        <HeroSection/>
        <Products/>
        <ProductCard/>
        <Catagories/>
        <Reviews/>
      </div>
    </main>
  );
}
