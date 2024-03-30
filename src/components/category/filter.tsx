import { LuListFilter } from "react-icons/lu";

const Filter = ()=>{
    return(
        <div className="border rounded-lg">
            <div className="flex justify-between max-w-[300px] min-h-[1200px]">
                <h3>Filter</h3>
                <LuListFilter />
            </div>
        </div>
    )
}
export default Filter;