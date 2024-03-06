import { LuShoppingCart, LuUserCircle2, LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="flex w-1/2 items-center justify-between">
      <div className="w-full mr-10 relative">
        <LuSearch
          className="absolute z-10 opacity-[.4] top-2 left-3 "
          size={24}
        />
        <input
          type="search"
          placeholder="Search For Product..."
          className="bg-whitedark w-full p-2 rounded-3xl pl-10  outline-none border-none "
        />
      </div>
      <Link to={"/Cart"} className="mr-4">
        <LuShoppingCart size={24} />
      </Link>
      <Link to={"/signup"}>
        <LuUserCircle2 size={24} />
      </Link>
    </div>
  );
};

export default Links;
