import "./footer.css";
import Links from "./Links";
import Footeritem from "./Footeritem";
import CopyRights from "./Copyrights";
const Footer = () => {
  return (
    <footer className="bg-whitedark  px-20 py-16 test:bg-black">
      <div className="grid grid-cols-5 gap-28 ">
        <Links></Links>
        <ul className="min-w-48 xl:col-span-3">
          <h3 className="pb-7 font-satoshi500 cursor-pointer">COMPANY</h3>
          <Footeritem text="About" />
          <Footeritem text="Feature" />
          <Footeritem text="Works" />
          <Footeritem text="Career" />
        </ul>
        <ul className="min-w-48">
          <h3 className="pb-7 font-satoshi500 cursor-pointer">Help</h3>
          <Footeritem text="Customer Support" />
          <Footeritem text="Privacy Policy" />
          <Footeritem text="Terms & Conditions" />
          <Footeritem text="Delivery Details" />
        </ul>
        <ul className="min-w-48 xl:col-span-3">
          <h3 className="pb-7 font-satoshi500 cursor-pointer">FAQ</h3>
          <Footeritem text="Account" />
          <Footeritem text="Manage Deliveries" />
          <Footeritem text="Orders" />
          <Footeritem text="Payments" />
        </ul>
        <ul className="min-w-48">
          <h3 className="pb-7 font-satoshi500 cursor-pointer">RESOURES</h3>
          <Footeritem text="Free eBooks" />
          <Footeritem text="Development Tutorial" />
          <Footeritem text="How to - Blog" />
          <Footeritem text="Youtube Playlist" />
        </ul>
      </div>

      <hr className="border-2 mb-7 mt-7" />
      <CopyRights />
    </footer>
  );
};

export default Footer;
