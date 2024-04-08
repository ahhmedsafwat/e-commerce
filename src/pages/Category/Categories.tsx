import { LuChevronRight } from "react-icons/lu";
import Pages from "../../components/category/CategoryPages";
import CategoryNav from "../../components/category/categoryNav";
import Filter from "../../components/category/filter";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="text-gray-500 font-satoshireguler flex items-center capitalize gap-1 px-24 large:px-10 medium:px-8">
        <Link to={"/e-commerce"}>
          <span className="cursor-pointer">Home</span>
        </Link>
        <LuChevronRight />
        <span className="cursor-pointer">Category</span>
        <LuChevronRight />
      </div>
      <div className="grid grid-cols-4 medium:grid-cols-1 small:px-0 gap-[1%] mt-14 mb-32 px-24 xlarge:px-20 large:pl-10 pb-32">
        <CategoryNav />
        <div className="medium:hidden ">
          <Filter />
        </div>
        {/* <CategoriesProduct products={fakeData.slice(0, 9)}/> */}
        {/* <PageOne products={fakeData.slice(7, 15)} /> */}
        <div className="col-span-3 large:w-[70%] large:px-20 medium:px-2 small:px-2 pb-10">
          <Pages />
        </div>
      </div>
    </>
  );
};

export default Categories;
