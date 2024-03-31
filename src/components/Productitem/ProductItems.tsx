import { Link } from "react-router-dom";
import Rating from "../utilities/Rating";
import { ProductItemsProps } from "./Productitem";

export const ProductItems = (props: ProductItemsProps) => {
  return props.products?.map((product) => (
    <div
      key={product.id}
      className="py-5 px-4 small:px-3 border rounded-lg m-4 w-72 xLarge:w-64 large:w-80 h-[420px] xLarge:h-96 small:w-64"
    >
      <Link to={`products/${product.id}/${product.title}`}>
        <div className=" flex items-center justify-center mb-6 h-64 xLarge:h-56">
          <img
            src={product.image.front}
            alt={`${product.description}`}
            className="object-contain w-full h-full"
          />
        </div>
        <h3 className="text-xl font-satoshiBold text-ellipsis overflow-hidden text-nowrap my-2  ">
          {product.title}
        </h3>
        <Rating rate={product.rating.rate} size={20}></Rating>
        <div className="font-bold text-2xl flex items-center space-x-2">
          <div>${product.price}</div>
          {product.amount != 0 ? (
            <div className="line-through text-gray-400">${product.amount}</div>
          ) : (
            ""
          )}
          {product.amount != 0 ? (
            <div className="text-xs text-[#FF3333] bg-[#ff33331a] px-4 py-[6px] rounded-full">
              -{((product.amount / product.price) * 100).toFixed()}%
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  ));
};
