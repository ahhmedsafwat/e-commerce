import Links from "./Links";
import HamMenu from "./Hamburger";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className=" relative">
      <div className=" flex justify-between items-center small:justify-between px-20 xLarge:px-5 medium:px-8 small:px-1 py-6">
        <HamMenu />
        <Nav />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
