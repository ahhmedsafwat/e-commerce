import { LuAlignJustify, LuChevronLeft } from "react-icons/lu";
import { useRef, useState, useEffect } from "react";
import Navitems from "./NvaItems";

export const HamMenu = () => {
  const [menuOpen, setmenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setmenuOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handelMenu = () => {
    setmenuOpen(!menuOpen);
  };

  const items = (
    <>
      <Navitems className="hamburger-item group" link="On Sale" />
      <Navitems className="hamburger-item" link="Arrivals" />
      <Navitems className="hamburger-item" link="New" />
      <Navitems className="hamburger-item" link="Brands" />
    </>
  );

  return (
    <>
      <button
        onClick={handelMenu}
        ref={menuRef}
        className="hidden p medium:block"
      >
        <LuAlignJustify
          className={`${menuOpen ? "hidden" : "block"} cursor-pointer size-7`}
        />
        {menuOpen && <LuChevronLeft className="cursor-pointer size-7" />}
      </button>
      <div
        className={`hidden medium:block z-20 absolute medium:w-[79%] medium:left-[12%] small:w-[90%] small:left-[25px] rounded-lg ${
          menuOpen
            ? "h-max top-24 opacity-100 visible"
            : "h-0 top-0 opacity-0 invisible "
        } bg-white transition-all`}
      >
        {items}
      </div>
    </>
  );
};
export default HamMenu;
