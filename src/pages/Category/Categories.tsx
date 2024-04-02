
import Pages from "../../components/category/CategoryPages";
import CategoryNav from "../../components/category/categoryNav";
// import CategoriesProduct from "../../components/category/categorProduct";
import Filter from "../../components/category/filter";

const Categories = ()=>{

        return(
            <>
            
                <div className="grid grid-cols-4 medium:grid-cols-1 small:px-0 gap-[1%] mt-14 mb-32 px-24 xlarge:px-20 large:pl-10 medium:px-8">
                <CategoryNav />
                <div className="medium:hidden "><Filter/></div>
                {/* <CategoriesProduct products={fakeData.slice(0, 9)}/> */}
                {/* <PageOne products={fakeData.slice(7, 15)} /> */}
                <div className="col-span-3 large:w-[70%] large:px-20 small:px-2"><Pages /></div>
                </div>
                </>
    )
}

export default Categories;