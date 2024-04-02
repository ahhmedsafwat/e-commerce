import { useState } from "react";

interface productDetailsImg {
  front: string;
  back: string;
  dressed: string;
}
const ProductDetailsImg = (Props: productDetailsImg) => {
  const [chosedImage, setchosedImage] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const target = event.target as HTMLImageElement;
    setchosedImage(target.src);
  };
  return (
    <div className="flex items-start flex-1 medium:flex-auto large:flex-col-reverse medium:flex-row small:flex-col-reverse">
      <div className="w-40 space-y-3 large:space-x-3 large:space-y-0 large:flex large:w-fit large:h-36 large:items-center medium:flex-col small:flex-row   ">
        <img
          src={Props?.front}
          alt="the front photo"
          onClick={handleClick}
          className="product-details-img "
        />
        <img
          src={Props?.back}
          alt="the back photo"
          onClick={handleClick}
          className="product-details-img "
        />
        <img
          src={Props?.dressed}
          alt="one more photo"
          onClick={handleClick}
          className="product-details-img"
        />
      </div>
      <img
        src={chosedImage || Props?.front}
        alt=""
        className="w-[450px] h-[550px] object-contain ml-4 large:m-0 xLarge:max-w-[420px] medium:ml-4 small:max-h-[290px] small:max-w-[310px] small:m-0 "
      />
    </div>
  );
};

export default ProductDetailsImg;
