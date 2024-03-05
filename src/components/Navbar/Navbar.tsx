import Links from "./Links";
import Navitems from "./Navitems";

const Navbar = () => {
  return (
    <header className="px-24 py-6 flex justify-between items-center ">
      <div className="container">
        <Navitems />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
