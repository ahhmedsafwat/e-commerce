import { Link } from "react-router-dom";
import { Product } from "../../helper/useFectchApi";
import Rating from "../utilities/Rating";
interface ProductItemsProps {
  products: Product[] | undefined;
  className?: string;
}
const ProductItem = (props: ProductItemsProps) => {
  return props.products?.map((product) => (
    <div className="grid small:place-items-end">
      <div
        key={product.id}
        className="py-5 px-4 small:px-3 border rounded-lg m-4 w-64 xLarge:w-64 medium:w-64 large:w-56 h-[420px] xLarge:h-96 "
      >
        <Link to={`/shop.co/products/${product.id}/${product.title}`}>
          <div className=" relative flex items-center justify-center mb-6  h-64 xLarge:h-56">
            {/* <div className="bg-slate-600 min-h-40 min-w-40 absolute"></div> */}
            <img
              src={product.image.front}
              alt={`${product.description}`}
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="text-xl  font-satoshiBold text-ellipsis overflow-hidden text-nowrap my-2  ">
            {product.title}
          </h3>

          <Rating rate={product.rating.rate} size={20}></Rating>

          <div className="font-bold text-2xl flex items-center space-x-2">
            <div>${product.price}</div>
            {product.amount != 0 && (
              <div className="line-through text-gray-400">
                ${product.amount}
              </div>
            )}
            {product.amount != 0 && (
              <div className="text-xs text-[#FF3333] bg-[#ff33331a] px-2 py-[6px] rounded-full">
                -{((product.amount / product.price) * 100).toFixed()}%
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  ));
};

export default ProductItem;
