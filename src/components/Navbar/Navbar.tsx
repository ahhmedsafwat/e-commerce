import Links from "./Links";
import HamMenu from "./Hamburger";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className=" relative">
      <div className=" flex justify-between items-center sm:justify-center px-24 py-6 sm:px-0 ">
        <HamMenu />
        <Nav />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
