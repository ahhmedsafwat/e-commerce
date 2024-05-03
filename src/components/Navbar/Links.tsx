import { LuShoppingCart, LuUserCircle2, LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="flex 2xl:w-1/2 items-center justify-between xLarge:w-auto ">
      <div className="w-full mr-10 relative large:mr-8">
        <LuSearch
          className="absolute z-10 opacity-[.4] top-2 left-3 large:relative large:top-0 large:opacity-[1]"
          size={24}
        />
        <input
          type="search"
          placeholder="Search For Product..."
          className="bg-whitedark w-full p-2 rounded-3xl pl-10 outline-none border-none large:hidden "
        />
      </div>
      <Link to={"/shop.co/Cart"} className="mr-4">
        <LuShoppingCart size={24} />
      </Link>
      <Link to={"/shop.co/signup"}>
        <LuUserCircle2 size={24} />
      </Link>
    </div>
  );
};

export default Links;
