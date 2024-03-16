import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

const Content = ()=>{
    return(
        <>
            <div className=" px-24 py-6  small:px-4 large:px-20">
                <div className="flex justify-between items-center ">
                    <h1 className="text-5xl font-secondary">OUR HAPPY CUSTOMERS</h1>
                        <div className="flex">
                            <LuChevronLeft className="cursor-pointer" size={24}/>
                            <LuChevronRight className="cursor-pointer" size={24}/>
                        </div> 
                </div>
            </div>
            </>
    )
}
export default Content;