import Links from "./Links";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="px-24 py-6 mad:px-10 md:px-16 relative">
      <div className=" flex justify-between items-center">
        <Nav />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
