import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";


const Size = ()=> {
    const [click, setClick] = useState<boolean>(false)
    const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

    const handleIcon = (index: number) => {
        setSelectedDiv(index === selectedDiv ? null : index);
    };

    const handleClick = ()=>{
        setClick(!click)
    }
    return(
        <>
            <div className="Filter-item" onClick={handleClick}>
                <h3 className="font-satoshiBold text-lg">Size</h3>
                <LuChevronRight 
                className={`${click ? "-rotate-90" : "rotate-0"} transition`}/>
            </div>
            {
                click && 
            <div className="flex-wrap">
                <button className={`Size ${selectedDiv === 0 && "bg-secondory text-primary"}`} onClick={() => handleIcon(0)}>
                XX-Small
                </button>
                <button className={`Size ${selectedDiv === 1 && "bg-secondory text-primary"}`} onClick={() => handleIcon(1)}>
                X-Small
                </button>
                <button className={`Size ${selectedDiv === 2 && "bg-secondory text-primary"}`} onClick={() => handleIcon(2)}>
                Large 
                </button>
                <button className={`Size ${selectedDiv === 3 && "bg-secondory text-primary"}`} onClick={() => handleIcon(3)}>
                XX-Large
                </button>
                <button className={`Size ${selectedDiv === 4 && "bg-secondory text-primary"}`} onClick={() => handleIcon(4)}>
                Small
                </button>
            </div>
            }
        </>
    )
}
export default Size;