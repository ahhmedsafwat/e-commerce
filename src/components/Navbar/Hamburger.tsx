import { TfiAlignJustify , TfiAngleLeft } from "react-icons/tfi";
import { useState } from "react";
import Navitems from "./NvaItems";

export const HamMenu = () => {
  const [menuCklick, setMenuClick] = useState<boolean>(false);
  const handelMenu = () => {
    setMenuClick(!menuCklick);
  };
  const items = (
    <>
      <Navitems link="On Sale" />
      <Navitems link="Arrivals" />
      <Navitems link="New" />
      <Navitems link="Brands" />
    </>
  );

  return (
    <>
      <div className=" hidden absolute w-full  md:block">
        <div
          className="hidden md:block z-20 absolute bg-slate-600 w-64 left-20 top-[15px] rounded-lg ease-linear duration-500"
          style={{ padding: menuCklick ? "20px" : "0" }}
        >
          {menuCklick && items}
        </div>
      </div>

      <button onClick={handelMenu} className="hidden md:block">
        {!menuCklick ? (
          <div>
            <TfiAlignJustify className="text-2xl hidden md:block md:mr-4 cursor-pointer " />
          </div>
        ) : (
          <div>
            <TfiAngleLeft className="text-2xl hidden md:block md:mr-4 cursor-pointer" />
          </div>
        )}
      </button>
    </>
  );
};
export default HamMenu;
