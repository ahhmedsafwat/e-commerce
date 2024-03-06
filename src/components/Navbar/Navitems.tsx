import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./navbar.css";

const Navitems = () => {
  return (
    <div className="flex  items-center w-[45%]">
      <Link to={"/"}>
        <img src={Logo} alt="Logo"></img>
      </Link>
      <div className="ml-10 flex">
        <select className="navbar-item mx-3">
          <option value={"shope"}>Shop</option>
          <option value={"hoodie"}>Hoodie</option>
          <option value={"jeans"}>jeans</option>
        </select>
        <a className="navbar-item mx-3">On Sale</a>
        <a className="navbar-item mx-3">New Arrivals</a>
        <a className="navbar-item mx-3">Brands</a>
      </div>
    </div>
  );
};

export default Navitems;
