import { useParams } from "react-router-dom";
import { useFetchData, Product } from "../../helper/useFectchApi";
import { LuChevronRight } from "react-icons/lu";
import ProductDetailsItem from "../../components/Productdetailsitem/Productdetailsitem";

const ProductDetails = () => {
  const { id } = useParams();
  const { fakeData: product } = useFetchData<Product>(
    `http://localhost:8000/products/${id}`,
    "product"
  );

  return (
    <section className="px-20 xLarge:px-5 medium:px-8 relative">
      <hr className=" mb-6" />
      <div className="text-gray-600 font-satoshireguler flex items-center capitalize gap-1">
        <span className="cursor-pointer">Home</span>
        <LuChevronRight />
        <span className="cursor-pointer">Shop</span>
        <LuChevronRight />
        <span className="cursor-pointer">{product?.categories.gender}</span>
        <LuChevronRight />
        <span className="text-black">{product?.categories.type}</span>
      </div>
      <div className="py-16">
        <ProductDetailsItem product={product!} />
      </div>
    </section>
  );
};

export default ProductDetails;
