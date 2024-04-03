import { useParams } from "react-router-dom";
import { Product, useFetchData } from "../../helper/useFectchApi";

const FilterdProductItem = () => {
  const { id } = useParams();
  const { fakeData } = useFetchData<Product[]>(
    "http://localhost:8000/products",
    "FilterdProduct"
  );
  return (
    <>
      {fakeData?.map((products) => {
        return products.categories.fashion === id
          ? products.categories.fashion
          : "";
      })}
    </>
  );
};

export default FilterdProductItem;
