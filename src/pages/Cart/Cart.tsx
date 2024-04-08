import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartComponents/Cartitem";
import OrderSummary from "../../components/CartComponents/Cartorder";

const Cart = () => {
  return (
    <section className="px-20 xLarge:px-5 medium:px-2 mb-44 ">
      <hr className=" mb-6" />
      <div className="text-gray-600 font-satoshireguler flex items-center capitalize gap-1">
        <span className="cursor-pointer">
          <Link to={"/e-commerce"}>Home</Link>
        </span>
        <LuChevronRight />
        <span className="cursor-pointer text-black">Cart</span>
      </div>
      <div>
        <h1 className="text-5xl small:text-3xl font-secondary my-6 ">
          Your Cart
        </h1>
        <div className="flex gap-4 medium:flex-col items-start">
          <div className="border rounded-3xl w-full ">
            <CartItem />
          </div>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

export default Cart;
