import { LuChevronRight } from "react-icons/lu";
import Price from "./Price";
import Colors from "./colors";
import Size from "./size";
import DressStyle from "./dressStyle";


const FilterItems = ()=>{
    
    return (
<>

<div className="Filter-item">
                <p className="">T-shirt</p>
                <LuChevronRight className=" cursor-pointer"/>
            </div>
            <div className="Filter-item">
                <p className="">Shorts</p>
                <LuChevronRight className="cursor-pointer"/>
            </div>
            <div className="Filter-item">
                <p className="">Shirts</p>
                <LuChevronRight className="cursor-pointer"/>
            </div>
            <div className="Filter-item">
                <p className="">Jeans</p>
                <LuChevronRight className="cursor-pointer"/>
            </div>
            
            <hr/>

            <Price max={60} min={0}/>

            <Colors/>

            <Size/>

            <DressStyle/>
            
            <button className="bg-black text-primary w-full p-2 rounded-2xl hover:bg-gray-600 hover:text-secondory"> Apply Filter </button></>
    )
}

export default FilterItems;