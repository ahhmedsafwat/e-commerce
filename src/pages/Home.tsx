import Hero from "./Hero/Hero";
import Brands from "../components/Brands/Brands";
import Reviews from "../components/Reviews/Reviews";
import NewArrivals from "./Newarrivals/Newarrivals";
import Topselling from "./Topselling/Topselling";

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <NewArrivals />
      <hr className="max-w-[85%] mx-auto" />
      <Topselling />
      <Reviews />
    </main>
  );
};

export default Home;
