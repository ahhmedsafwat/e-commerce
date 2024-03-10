import Links from "./Links";
import HamMenu from "./Hamburger";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className=" relative">
      <div className=" flex justify-between items-center small:justify-between px-24 py-6  small:px-4 ">
        <HamMenu />
        <Nav />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
