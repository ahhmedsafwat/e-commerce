import { useEffect, useRef, useState } from "react";
import { LuX, LuListFilter } from "react-icons/lu";
import FilterItems from "./filterItems";
// import FilterItems from "./filterItems";

const CategoryNav = ()=>{
    const [items, setItems] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
            setItems(false);
        }
      };
  
      window.addEventListener("click", handleOutsideClick);
  
      return () => {
        window.removeEventListener("click", handleOutsideClick);
      };
    }, []);
    
    const handelFilter = ()=>{
        setItems(!items)
    }

    return(
        <div ref={dropdownRef} className="hidden medium:flex px-20 flex-col items-end relative">
        <div onClick={handelFilter} className="p-1 rounded-lg bg-gray-400">
            <LuListFilter size={25}/>
            </div>
        <div 
        className={items ? `fixed z-50 bg-gray-600 top-0 left-0 w-full small:left-0 px-4 rounded-lg p-5` : "hidden"}>
            {items &&
                    <>
                        <div className="Filter-item text-lg font-satoshiBold">
                        <h1>Filter</h1>
                        <LuX className="cursor-pointer" size={25} onClick={handelFilter}/>
                        </div>
                        <hr/>
                        <FilterItems />
                        </>
            }</div>
        </div>
    )
    
}

export default CategoryNav;