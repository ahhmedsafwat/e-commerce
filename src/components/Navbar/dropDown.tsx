import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const DropValue = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer" onClick={handleOpen}>
        Shop {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      <ul
        className={`mt-2 border border-gray-300 rounded-md shadow-md bg-white absolute w-40 left-[-10px] ${
          open ? "scale-0" : "scale-1"
        } transition  origin-top`}
      >
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-300 transition-colors">
          Casual
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-300 transition-colors">
          Hoodie
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-300 transition-colors">
          Jeans
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-300 transition-colors">
          Shoes
        </li>
      </ul>
    </div>
  );
};

export default DropValue;
