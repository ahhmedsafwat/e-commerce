import { Product } from "../../helper/useFectchApi";
import "./productdetailsitem.css";
import Rating from "../utilities/Rating";
import Button from "../utilities/button";
import ProductDetailsImg from "./ProductDetailsimg";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import ProductComment from "./ProductComments";
import { useDispatch } from "react-redux";
import { cartProduct } from "../../store/store";
import { addToCart } from "../../store/cartSlice";
interface Productitem {
  product: Product;
}
const ProductDetailsItem = (Props: Productitem) => {
  const [selectedDiv, setSelectedDiv] = useState<number>(1);

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  // const cartItem = useSelector((state: RootState) => state.cart.cartItems);

  const handleAddCart = (item: cartProduct) => {
    dispatch(addToCart(item));
  };
  const item = {
    prodcut: Props.product,
    size: sizes[selectedDiv],
    ammount: count,
  };
  return (
    <>
      <div className="flex gap-8 items-center large:items-start medium:flex-col medium:items-center">
        <ProductDetailsImg
          front={Props.product?.image.front}
          back={Props.product?.image.back}
          dressed={Props.product?.image.dressed}
        />
        <div className="flex flex-1 flex-col ">
          <h1 className="text-4xl font-secondary large:text-3xl medium:text-2xl small:text-[20px]">
            {Props.product?.title}
          </h1>
          <Rating rate={Props.product?.rating.rate} size={25}></Rating>
          <div className="font-bold text-2xl flex items-center space-x-2 ">
            <div>${Props.product?.price}</div>
            {Props.product?.amount != 0 ? (
              <div className="line-through text-gray-400">
                ${Props.product?.amount}
              </div>
            ) : (
              ""
            )}
            {Props.product?.amount != 0 ? (
              <div className="text-xs text-[#FF3333] bg-[#ff33331a] px-4 py-[6px] rounded-full">
                -
                {(
                  (Props.product?.amount / Props.product?.price) *
                  100
                ).toFixed()}
                %
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="font-satoshireguler text-gray-600 small:text-sm">
            {Props.product?.description}
          </div>
          <hr className="mt-8" />
          <div>
            <div className="font-satoshireguler text-gray-600 mb-4">
              Choose Size
            </div>
            <div className="flex space-x-4">
              {sizes.map((size, index) => {
                return (
                  <Button
                    key={index}
                    text={size}
                    className={`py-3 px-6 bg-[#f0f0f0] text-gray-500 w-fit text-nowrap hover:bg-black hover:text-white large:px-4 small:py-2 small:px-3 small:text-sm ${
                      selectedDiv === index && "bg-secondory text-primary"
                    }`}
                    onclick={() => setSelectedDiv(index)}
                  />
                );
              })}
            </div>
          </div>
          <hr className="mt-8" />
          <div className="flex mt-8 ">
            <div className="flex py-4 w-44 bg-[#F0F0F0] items-center justify-around rounded-full">
              <LuPlus
                onClick={() => {
                  setCount((prev) => ++prev);
                }}
                className="size-6 small:size-4"
              />
              <span>{count}</span>
              <LuMinus
                onClick={() => {
                  setCount((prev) => (prev > 1 ? --prev : 1));
                }}
                className="size-6 small:size-4"
              />
            </div>
            <button
              className="w-full ml-5 bg-black text-white small:text-sm hover:bg-white hover:text-black"
              onClick={() => handleAddCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ProductComment />
    </>
  );
};

export default ProductDetailsItem;
