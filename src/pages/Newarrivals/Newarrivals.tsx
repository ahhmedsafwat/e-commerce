import ProductItems from "../../components/Productitem/Productitem";
import ProductSkeleton from "../../components/loader/ProductSkeleton";
import { Product, useFetchData } from "../../helper/useFectchApi";
const NewArrivals = () => {
  const { fakeData, isPending, error } = useFetchData<Product[]>(
    `http://localhost:8000/products/`
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
  return <ProductItems products={fakeData} />;
};

export default NewArrivals;
