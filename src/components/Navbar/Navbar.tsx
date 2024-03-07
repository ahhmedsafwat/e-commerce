import Links from "./Links";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="px-24 py-6 lg:px-20 relative">
      <div className=" flex justify-between items-center">
        <Nav />
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
