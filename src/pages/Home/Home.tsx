import Hero from "../Hero/Hero";
import Brands from "../../components/Brands/Brands";
import Reviews from "../../components/Reviews/Reviews";
import NewArrivals from "../Newarrivals/Newarrivals";
import Topselling from "../Topselling/Topselling";
import BrowesStyle from "../browesstyle/Browesstyle";

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <NewArrivals />
      <hr className="max-w-[85%] mx-auto" />
      <Topselling />
      <BrowesStyle></BrowesStyle>
      <Reviews />
    </main>
  );
};

export default Home;
