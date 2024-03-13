import { LuAlignJustify, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useRef, useState, useEffect } from "react";
import Navitems from "./NvaItems";

export const HamMenu = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [shopClick, setShopClick] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleShop = () => {
    console.log("Shop clicked");
    setShopClick(!shopClick);
  };
  
  const items = (
    <>
      <Navitems
        className="hamburger-item group relative"
        link="Shop"
        icon={<LuChevronRight className="inline absolute top-2.5 left-[90%]" size={24} 
        />}
      >
        <div onClick={handleShop} className={`p-2 ${shopClick ? 'block' : 'hidden'}`}>
          
          <li className="mb-1 bg-slate-800 p-2 cursor-pointer">Casual</li>
          <li className="mb-1 bg-slate-800 p-2 cursor-pointer">Hoodie</li>
          <li className="mb-1 bg-slate-800 p-2 cursor-pointer">Jeans</li>
          <li className="mb-1 bg-slate-800 p-2 cursor-pointer">Shoes</li>
        </div>
      </Navitems>
      <Navitems className="hamburger-item group" link="On Sale" />
      <Navitems className="hamburger-item" link="Arrivals" />
      <Navitems className="hamburger-item" link="New" />
      <Navitems className="hamburger-item" link="Brands" />
    </>
  );

  return (
    <>
      <button onClick={handleMenu} ref={burgerRef} className="hidden medium:block">
        <LuAlignJustify className={`${menuOpen ? "hidden" : "block"} cursor-pointer size-7`} />
        {menuOpen && <LuChevronLeft className="cursor-pointer size-7" />}
      </button>

      <div
        ref={menuRef}
        className={`hidden medium:block z-20 absolute medium:w-[79%] medium:left-[12%] small:w-[90%] small:left-[25px] rounded-lg 
        ${menuOpen ? "h-max top-24 opacity-100 visibl" : "h-0 top-0 opacity-0 invisible "} 
        bg-white transition-all`}
      >
        {items}
      </div>
    </>
  );
};
export default HamMenu;
