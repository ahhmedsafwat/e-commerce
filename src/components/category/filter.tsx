import { LuListFilter,  } from "react-icons/lu";
import "./Category.css"
import FilterItems from "./filterItems";
const Filter = ()=>{
    return(
        <>
        <div className="border rounded-lg p-5 min-w-[240px] ">
            <div className="flex justify-between mb-4">
                <h3 className="font-satoshiBold text-lg">Filter</h3>
                <LuListFilter className="cursor-pointer" size={25}/>
            </div>

            <hr/>

            <FilterItems />
            
        </div>
        </>
    )
}
export default Filter;