import Hero from "./Hero/Hero";
import Brands from "../components/Brands/Brands";
import Reviews from "../components/Reviews/Reviews";
import NewArrivals from "./Newarrivals/Newarrivals";

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <NewArrivals />
      <Reviews />
    </main>
  );
};

export default Home;
