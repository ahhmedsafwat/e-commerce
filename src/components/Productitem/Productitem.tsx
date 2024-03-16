import { useFetchData } from "../../helper/useFectchApi";
import ProductSkeleton from "../loader/ProductSkeleton";

const ProductItem = () => {
  const { fakeData, isPending, error } = useFetchData(
    `http://localhost:8000/products/?_start=0&_end=4`
  );

  if (error) return `There was an error : ${error.message}`;
  if (isPending)
    return (
      <div className="flex justify-between items-center">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    );
  return fakeData?.map((product) => (
    <div key={product.id}>
      <div>
        <img src={product.image.dressed} alt={`${product.image.dressed}`} />
      </div>
      <h3 className="text-3xl">{product.title}</h3>
      <div>
        <div>
          {product.rating.rate}/<span>5</span>
        </div>
      </div>
      <div>
        <div>${product.price}</div>
        {product.discount.amout != 0 ? <div>{product.discount.amout}</div> : ""}
        {product.discount.percentage != 0 ? (
          <div>{product.discount.percentage}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  ));
};

export default ProductItem;
