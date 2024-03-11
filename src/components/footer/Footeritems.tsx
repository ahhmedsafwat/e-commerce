import Footeritem from "./Footeritem";
const FooterItems = () => {
  return (
    <>
      <ul className="xl:ml-12">
        <h3 className="mb-7 font-satoshi500 cursor-pointer xLarge:ml-9">COMPANY</h3>
        <Footeritem text="About" />
        <Footeritem text="Feature" />
        <Footeritem text="Works" />
        <Footeritem text="Career" />
      </ul>
      <ul>
        <h3 className="mb-7 font-satoshi500 cursor-pointer">Help</h3>
        <Footeritem text="Customer Support" />
        <Footeritem text="Privacy Policy" />
        <Footeritem text="Terms & Conditions" />
        <Footeritem text="Delivery Details" />
      </ul>
      <ul>
        <h3 className="mb-7 font-satoshi500 cursor-pointer">FAQ</h3>
        <Footeritem text="Account" />
        <Footeritem text="Manage Deliveries" />
        <Footeritem text="Orders" />
        <Footeritem text="Payments" />
      </ul>
      <ul>
        <h3 className="mb-7 font-satoshi500 cursor-pointer">RESOURES</h3>
        <Footeritem text="Free eBooks" />
        <Footeritem text="Development Tutorial" />
        <Footeritem text="How to - Blog" />
        <Footeritem text="Youtube Playlist" />
      </ul>
    </>
  );
};

export default FooterItems;
