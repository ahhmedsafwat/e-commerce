import { useState } from "react";
import { Product } from "../../helper/useFectchApi";
import "./productdetailsitem.css";
import Rating from "../Rating/Rating";
interface Productitem {
  product: Product;
}
const ProductDetailsItem = (Props: Productitem) => {
  const [chosedImage, setchosedImage] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const target = event.target as HTMLImageElement;
    setchosedImage(target.src);
  };

  return (
    <div className="flex gap-8">
      <div className="flex items-start flex-1  large:flex-col-reverse justify-between">
        <div className="w-40 space-y-3 large:space-x-3 large:space-y-0 large:flex large:w-fit large:h-40 large:items-center  ">
          <img
            src={Props.product?.image.front}
            alt="the front photo"
            onClick={handleClick}
            className="product-detials-img "
          />
          <img
            src={Props.product?.image.back}
            alt="the back photo"
            onClick={handleClick}
            className="product-detials-img "
          />
          <img
            src={Props.product?.image.dressed}
            alt="one more photo"
            onClick={handleClick}
            className="product-detials-img"
          />
        </div>
        <img
          src={chosedImage || Props.product?.image.front}
          alt=""
          className="w-[450px] h-[550px] object-contain ml-4 large:m-0"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-4">
        <h1 className="text-4xl font-secondary ">{Props.product?.title}</h1>
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
              {((Props.product?.amount / Props.product?.price) * 100).toFixed()}
              %
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="font-satoshireguler text-gray-600">
          {Props.product?.description}
        </div>
        <hr className="mt-6" />
        <div className="">
          <div>Choose Size</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
