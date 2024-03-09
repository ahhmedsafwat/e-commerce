import "./footer.css";
import Links from "./Links";
import CopyRights from "./Copyrights";
import FooterItems from "./Footeritems";

const Footer = () => {
  return (
    <footer className="bg-whitedark test:bg-black ">
      <div className="grid  grid-cols-5 lg:grid-cols-2  gap-28 sm:gap-5 xl:gap-6 py-16 xl:px-6 px-20 md:px-8 sm:px-2">
        <Links></Links>
        <FooterItems></FooterItems>
      </div>
      <hr className="border-2 mb-7 mt-7" />
      <CopyRights />
    </footer>
  );
};

export default Footer;
