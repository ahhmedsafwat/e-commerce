import { useState } from "react";
import { Product } from "../../helper/useFectchApi";
import "./productdetailsitem.css";
interface Productitem {
  product: Product | undefined;
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
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-secondary">{Props.product?.title}</h1>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
