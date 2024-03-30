
import Pages from "../../components/category/CategoryPages";
import CategoriesProduct from "../../components/category/categorProduct";
// import PageOne from "../../components/category/categoriesPage1";
// import PageOne from "../../components/category/categoriesPage1";
import Filter from "../../components/category/filter";
import ProductSkeleton from "../../components/loader/ProductSkeleton";
import { Product, useFetchData } from "../../helper/useFectchApi";


const Categories = ()=>{

    const { fakeData, isPending, error } = useFetchData<Product[]>(
        `http://localhost:8000/products`,
        "categories"
      );
      if (error) return `There was an error : ${error.message}`;
    
    return (
        <div>
            {isPending && (
        <div className="flex justify-between items-center py-16 xLarge:px-6 px-20 medium:px-8 medium:pt-28 small:pt-40">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
        )}
        
        {fakeData && (
            <>
                <div className="grid grid-cols-4 gap-[1%] small:flex mt-14 mb-32 px-24">
                <div className="row-span-4"><Filter/></div>
                <CategoriesProduct products={fakeData.slice(0, 9)}/>
                {/* <PageOne products={fakeData.slice(7, 15)} /> */}
                <div className="col-span-3"><Pages /></div>
                </div>
                
                </>
                
        )}
        
            
        </div>
    )
}

export default Categories;