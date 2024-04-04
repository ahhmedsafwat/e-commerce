import { Link } from "react-router-dom";
import Button from "../../components/utilities/button";
import Statistics from "./statistics";
const Right = () => {
  return (
    <div className="w-[45%] large:w-full large:text-center medium:text-left pb-20 pt-10 large:pb-0 large:pt-0">
      <h1 className="font-secondary text-[55px] leading-[64px] xLarge:text-5xl large:text-6xl medium:text-5xl pb-7 small:text-[34px] bg-clip-text text-transparent bg-gradient-to-r from-[#29323C] to-blue-600">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="font-satoshireguler mb-7 text-gray-500">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Link to="Categories">
        <Button
          className="large:w-[45%] small:w-full bg-secondory text-primary hover:bg-primary hover:text-secondory large:mx-auto medium:mx-0"
          text="Shop Now"
        />
      </Link>
      <div className="flex  pt-6 font-satoshiBold text-2xl justify-between large:flex-wrap medium:justify-left small:justify-center ">
        <Statistics number="200+" string="International Brands" />
        <Statistics number="2,000+" string="High-Quality Products" />
        <Statistics number="30,000+" string="Happy Customers" />
      </div>
    </div>
  );
};

export default Right;
