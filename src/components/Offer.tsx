import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <div className="bg-black text-white text-center leading-6 p-2 font-satoshireguler">
      Sign up and get 20% off to your First order.
      <Link to={"/signup"} className="underline ml-1 font-satoshi500 ">
        Sign Up Now
      </Link>
    </div>
  );
};

export default Offer;
