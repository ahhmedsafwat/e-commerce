import { Link } from "react-router-dom";
import { Product, useFetchData } from "../../helper/useFectchApi";
import { LuStar, LuStarHalf } from "react-icons/lu";
import { useEffect } from "react";

const FilteredProductItem: React.FC = () => {
  // Fetch product data
  const { fakeData } = useFetchData<Product[]>(
    "http://localhost:8000/products",
    "FilteredProduct"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid grid-cols-4 large:grid-cols-3 medium:grid-cols-2 small:grid-cols-1 place-items-center pb-40">
      {fakeData?.map((product) => (
        <div
          key={product.id}
          className="py-5 px-4 small:px-3 border rounded-lg m-4 w-64 xLarge:w-60 large:w-56 h-[420px] xLarge:h-96"
        >
          <Link to={`/e-commerce/products/${product.id}/${product.title}`}>
            <div className=" relative flex items-center justify-center mb-6  h-64 xLarge:h-56">
              <img
                src={product.image.front}
                alt={`${product.description}`}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-xl font-satoshiBold text-ellipsis overflow-hidden text-nowrap my-2">
              {product.title}
            </h3>
            <div className="flex mb-2 items-center">
              <div className="inline-flex mr-3">
                <LuStar className="fill-[#FFC633] stroke-none size-[18px]" />
                <LuStar className="fill-[#FFC633] stroke-none size-[18px]" />
                <LuStar className="fill-[#FFC633] stroke-none size-[18px]" />
                <LuStar className="fill-[#FFC633] stroke-none size-[18px]" />
                <LuStarHalf className="fill-[#FFC633] stroke-none size-[18px]" />
              </div>
              <div className="inline-flex text-sm font-satoshireguler">
                {product.rating.rate}/<span className="text-gray-500">5</span>
              </div>
            </div>
            <div className="font-bold text-2xl flex items-center space-x-2">
              <div>${product.price}</div>
              {product.amount !== 0 && (
                <div className="line-through text-gray-400">
                  ${product.amount}
                </div>
              )}
              {product.amount !== 0 && (
                <div className="text-xs text-[#FF3333] bg-[#ff33331a] px-2 py-[6px] rounded-full">
                  -{((product.amount / product.price) * 100).toFixed()}%
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FilteredProductItem;
