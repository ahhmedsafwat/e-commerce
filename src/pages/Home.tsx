import Hero from "./Hero/Hero";
import Brands from "../components/Brands/Brands";
import Reviews from "../components/Reviews/Reviews";
// import ProductItem from "../components/Productitem/Productitem";

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <ProductItem /> */}
      <Reviews />
    </main>
  );
};

export default Home;
