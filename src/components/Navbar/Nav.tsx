import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./navbar.css";

import Navitems from "./NvaItems";

const Nav = () => {
  return (
    <div className="flex items-center sm:justify-center relative">
      <Link to={"/"}>
        <img className="md:min-w-32 min-w-40" src={Logo} alt="Logo"></img>
      </Link>

      <div className="ml-5 flex md:hidden">
        <select className="navbar-item">
          <option value={"shope"}>Shop</option>
          <option value={"hoodie"}>Hoodie</option>
          <option value={"jeans"}>jeans</option>
        </select>

        <Navitems link="OnSale" />
        <Navitems link="Arrivals" />
        <Navitems link="New" />
        <Navitems link="Brands" />
      </div>
    </div>
  );
};

export default Nav;
