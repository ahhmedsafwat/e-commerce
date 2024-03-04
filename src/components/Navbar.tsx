import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <header className="p-10 flex justify-between items-center">
      <Link to={"/"}>
        <img src={Logo} alt="Logo"></img>
      </Link>
      <select>
        <option>Shop</option>
        <option>Hoodie</option>
        <option>jeans</option>
      </select>
      <a>New Arrivals</a>
      <a>Brands</a>
      <input
        type="search"
        placeholder="Search For Product..."
        className="bg-whitedark w-80 p-2 rounded-lg pl-6"
      />

      <Link to={"/Cart"}>
        <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
      </Link>
    </header>
  );
};
