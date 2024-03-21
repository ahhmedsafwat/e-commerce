import { Product } from "../../helper/useFectchApi";
import { LuStar, LuStarHalf } from "react-icons/lu";
interface ProductItemsProps {
  products: Product[] | undefined;
}
const ProductItems = (props: ProductItemsProps) => {
  return props.products?.map((product) => (
    <div key={product.id} className="py-5 px-4 max-w-80 border rounded-lg">
      <div className="h-64 small:h-52 flex items-center justify-center mb-6 text-center">
        <img
          src={product.image.front}
          alt={`${product.description}`}
          className="max-w-64 max-h-64 xLarge:max-w-52 xLarge:max-h-52 object-cover "
        />
      </div>
      <h3 className="text-xl font-satoshiBold text-ellipsis overflow-hidden text-nowrap my-2">
        {product.title}
      </h3>
      <div className="flex items-center mb-2">
        <div className="inline-flex mr-3">
          <LuStar className="fill-[#FFC633] stroke-none size-[18px]"></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none size-[18px]"></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none size-[18px]"></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none size-[18px]"></LuStar>
          <LuStarHalf className="fill-[#FFC633] stroke-none size-[18px]"></LuStarHalf>
        </div>
        <div className="font-satoshireguler inline-flex text-sm">
          {product.rating.rate}/<span className="text-gray-500">5</span>
        </div>
      </div>
      <div className="font-bold text-2xl flex items-center  space-x-2">
        <div>${product.price}</div>
        {product.discount.amount != 0 ? (
          <div className="line-through text-gray-400">
            ${product.discount.amount}
          </div>
        ) : (
          ""
        )}
        {product.discount.amount != 0 ? (
          <div className="text-xs text-[#FF3333] bg-[#ff33331a] px-4 py-[6px] rounded-full">
            -{((product.discount.amount / product.price) * 100).toFixed()}%
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ));
};

export default ProductItems;
