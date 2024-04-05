import { LuTag, LuArrowRight } from "react-icons/lu";
import Button from "../utilities/button";
const OrderSummary = () => {
  return (
    <div className="border p-5 rounded-3xl flex flex-col  w-fit medium:w-full">
      <h1 className="font-satoshiBold text-xl mb-4">order Summary</h1>
      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="text-gray-500 font-satoshireguler">Subtotal</span>
          <span className="font-satoshiBold">$334</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-satoshireguler">
            Discount (-20%)
          </span>
          <span className="font-satoshiBold text-red-600">-$113</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-satoshireguler">
            Delivery Fee
          </span>
          <span className="font-satoshiBold">$15</span>
        </div>
      </div>
      <hr className="my-6" />
      <div>
        <div className="flex justify-between">
          <span className=" font-satoshireguler">Total</span>
          <span className="font-satoshiBold text-xl">$343</span>
        </div>
        <div className="flex my-6">
          <label className="relative w-full">
            <LuTag className="absolute stroke-gray-500 top-[12px] left-4  size-5" />
            <input
              type="text"
              placeholder="Add promo code"
              className="py-2 pl-11 pr-4 bg-[#f0f0f0] rounded-full outline-none w-full"
            />
          </label>
          <Button text="Apply" className="w-32 bg-black text-white ml-3" />
        </div>
        <Button
          text="Go to Checkout"
          className="flex items-center text-white bg-black w-full justify-center gap-2 group"
          icon={
            <LuArrowRight className="size-5 group-hover:translate-x-3 transition-transform " />
          }
        />
      </div>
    </div>
  );
};

export default OrderSummary;
