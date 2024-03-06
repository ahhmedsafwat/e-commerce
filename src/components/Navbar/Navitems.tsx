import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./navbar.css";

const Navitems = () => {
  return (
    <div className="flex  items-center">
      <Link to={"/"}>
        <img className="min-w-32 md:min-w-40 " src={Logo} alt="Logo"></img>
      </Link>

      <div className="ml-10 flex">
        <select className="navbar-item">
          <option value={"shope"}>Shop</option>
          <option value={"hoodie"}>Hoodie</option>
          <option value={"jeans"}>jeans</option>
        </select>
        <a className="navbar-item">On Sale</a>
        <a className="navbar-item">New Arrivals</a>
        <a className="navbar-item">Brands</a>
      </div>
    </div>
  );
};

export default Navitems;
