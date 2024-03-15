import { LuAlignJustify, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useRef, useState, useEffect } from "react";
import Navitems from "./NvaItems";

export const HamMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [shopClick, setShopClick] = useState<boolean>(false);
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
    setShopClick(!shopClick);
    console.log("Shop clicked");
  };

  const items = (
    <>
      <Navitems
        onClick={handleShop}
        className="hamburger-item "
        link="Shop"
        icon={
          <LuChevronRight
            className={`inline absolute top-2.5 left-[90%]  ${
              shopClick && "rotate-90"
            } `}
            size={24}
          />
        }
      >
        <ul className={`p-2 ${shopClick ? "block w-[95%]" : "hidden"}`}>
          <li className="shop-item">Casual</li>
          <li className="shop-item">Hoodie</li>
          <li className="shop-item">Jeans</li>
          <li className="shop-item">Shoes</li>
        </ul>
      </Navitems>
      <Navitems className="hamburger-item" link="On Sale" />
      <Navitems className="hamburger-item" link="Arrivals" />
      <Navitems className="hamburger-item" link="New" />
      <Navitems className="hamburger-item" link="Brands" />
    </>
  );

  return (
    <>
      <button
        onClick={handleMenu}
        ref={burgerRef}
        className="hidden medium:block"
      >
        <LuAlignJustify
          className={`${menuOpen ? "hidden" : "block"} cursor-pointer size-7`}
        />
        {menuOpen && <LuChevronLeft className="cursor-pointer size-7" />}
      </button>

      <div
        ref={menuRef}
        className={`hidden medium:block z-20 absolute medium:w-[79%] medium:left-[12%] small:w-[90%] small:left-[25px] rounded-lg 
        ${
          menuOpen
            ? "h-max top-24 opacity-1 visible z-40"
            : "h-0 top-0 opacity-0 invisible "
        } 
        bg-gradient-to-tr from-black to-gray-700  transition duration-300`}
      >
        {items}
      </div>
    </>
  );
};
export default HamMenu;
