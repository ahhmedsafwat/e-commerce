import { useState, useEffect, useRef } from "react";
import { LuChevronUp} from "react-icons/lu";
import { Link } from "react-router-dom";

const DropValue = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative" ref={dropdownRef} onClick={handleOpen}>
      <div className="flex items-center cursor-pointer">
        Shop{" "}
        <LuChevronUp size={24}
          className={`${open ? "rotate-180" : "rotate-0"} transition ml-1 mt-0.5`}
        />
      </div>

      <ul
        className={`mt-2 border border-gray-300 overflow-hidden rounded-md shadow-md bg-white absolute w-40 left-[-10px] z-20 ${
          open ? "h-auto translate-y-2" : " invisible opacity-0"
        } transition duration-300`}
      >
        <Link to={"/Categories/casual"}><li className="dropdown-item">Casual</li></Link>
        <Link to={"/Categories/jeans"}><li className="dropdown-item">Jeans</li></Link>
        <Link to={"/Categories/shoes"}><li className="dropdown-item">Shoes</li></Link>
        <Link to={"/Categories/gym"}><li className="dropdown-item">Gym</li></Link>
      </ul>
    </div>
  );
};

export default DropValue;
