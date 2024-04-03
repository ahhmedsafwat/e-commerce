import { useState } from "react";
import { LuChevronRight, LuCheck  } from "react-icons/lu";

const Colors = ()=> {
    const [clickcolor, setClick] = useState(false)
    const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

    const handleIcon = (index: number) => {
        setSelectedDiv(index === selectedDiv ? null : index);
    };

    const handleClick = ()=>{
        setClick(!clickcolor)
    }
    return(
        <>
            <div className="Filter-item" onClick={handleClick}>
                <h3 className="font-satoshiBold text-lg">Colors</h3>
                <LuChevronRight className="crusor-pointer"/>
            </div>
            {
                clickcolor && 
                <div className="flex">
                <div className={`bg-red-600 Colors Colors`} onClick={() => handleIcon(0)}>
                    {selectedDiv === 0 ? <LuCheck className="text-primary"/> : ""}
                </div>
                <div className={`bg-yellow-400 Colors`} onClick={() => handleIcon(1)}>
                {selectedDiv === 1 ? <LuCheck className="text-primary"/> : ""}
                </div>
                <div className={`bg-green-700 Colors`} onClick={() => handleIcon(2)}>
                    {selectedDiv === 2 && <LuCheck className="text-primary"/>}
                </div>
                <div className={`bg-secondory Colors`} onClick={() => handleIcon(3)}>
                    {selectedDiv === 3 && <LuCheck className="text-primary"/>}
                </div>
                <div className={`bg-blue-700 Colors`} onClick={() => handleIcon(4)}>
                    {selectedDiv === 4 && <LuCheck className="text-primary"/>}
                </div>
            </div>
            }
        </>
    )
}
export default Colors;