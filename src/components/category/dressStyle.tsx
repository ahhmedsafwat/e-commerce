import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";

const DressStyle = ()=>{

    const [click, setClick] = useState<boolean>(false)

    const handleClick = ()=>{
        setClick(!click)
    }
    
    return(
        <>
        <div className="Filter-item" onClick={handleClick}>
        <h3 className="font-satoshiBold text-lg">DressStyle</h3>
        <LuChevronRight 
        className={`${click ? "-rotate-90" : "rotate-0"} transition`}/>
    </div>
    {
        click && 
        <>
        <div className="Filter-item">
        <h3 className="font-satoshi500">Casual</h3>
        <LuChevronRight />
    </div><div className="Filter-item">
        <h3 className="font-satoshi500">Formal</h3>
        <LuChevronRight />
    </div><div className="Filter-item">
        <h3 className="font-satoshi500">Party</h3>
        <LuChevronRight />
    </div><div className="Filter-item">
        <h3 className="font-satoshi500">Gym</h3>
        <LuChevronRight />
    </div>
        </>
    }
    </>
    )
}

export default DressStyle;