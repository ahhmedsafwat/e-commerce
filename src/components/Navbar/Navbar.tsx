import Links from "./Links";
import Navitems from "./Navitems";

const Navbar = () => {
  return (
    <header className="px-24 py-6  ">
      <div className="container flex justify-between items-center">
        <Navitems />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
