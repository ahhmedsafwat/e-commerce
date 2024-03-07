import { AlignJustify, ChevronLeft  } from 'lucide-react';
import { useState } from 'react';
import Navitems from './NvaItems';

export const HamMenu= ()=>{
    const [menuCklick, setMenuClick] = useState<boolean>(false)
    const handelMenu = ()=>{
        setMenuClick(!menuCklick)
    }
    const items = 
        <>
        <Navitems link="On Sale"/>
        <Navitems link="Arrivals"/>
        <Navitems link="New"/>
        <Navitems link="Brands"/>
        </>
        
    return(
        
        <>
        <div className='relative w-full hidden md:block'>
            <div className='hidden md:block z-20 absolute bg-slate-600 w-64 left-[-80px] top-[15px] rounded-lg' style={{padding: menuCklick ? '20px' : '0' }}>
            {menuCklick && items}
            </div>
        </div>
        
        <button onClick={handelMenu}>
            {!menuCklick ? <div><AlignJustify className="text-2xl hidden md:block md:mr-4 cursor-pointer"/></div> : <div><ChevronLeft className="text-2xl hidden md:block md:mr-4 cursor-pointer"/></div>}
        </button>
        
        </> 
    )
}
export default HamMenu;
{/* <div><AlignJustify className="text-2xl hidden md:block md:mr-4 cursor-pointer"/></div> */}