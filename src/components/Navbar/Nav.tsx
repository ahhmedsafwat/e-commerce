import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./navbar.css";
import Navitems from "./NvaItems";
import DropValue from "./dropDown";

const Nav = () => {
  return (
    <div className="flex items-center small:justify-center relative">
      <Link to={"/"}>
        <img className="medium:min-w-32 min-w-40" src={Logo} alt="Logo"></img>
      </Link>

      <div className="ml-5 flex medium:hidden items-center">
        <DropValue />
        <Navitems className="navbar-item" link="On Sale" />
        <Navitems className="navbar-item" link="Arrivals" />
        <Navitems className="navbar-item" link="New" />
        <Navitems className="navbar-item" link="Brands" />
      </div>
    </div>
  );
};

export default Nav;
