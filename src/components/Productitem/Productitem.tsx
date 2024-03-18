import { Product } from "../../helper/useFectchApi";
interface ProductItemsProps {
  products: Product[] | undefined;
}
const ProductItems = (props: ProductItemsProps) => {
  return props.products?.map((product) => (
    <div key={product.id} className="">
      <div className="size-72 items-center ">
        <img
          src={product.image.front}
          alt={`${product.description}`}
          className="max-w-72 max-h-72 object-cover"
        />
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

export default ProductItems;
