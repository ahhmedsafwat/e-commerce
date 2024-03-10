import visa from "../../assets/images/visa.png";
import google from "../../assets/images/google-pay.png";
import paypal from "../../assets/images/paybal.png";
import apple from "../../assets/images/apple-pay.png";
import masterCard from "../../assets/images/Badge.png";
const CopyRights = () => {
  return (
    <div className="flex justify-between items-center mad:flex-wrap mad:justify-center small:flex-col   xLarge:px-6 px-20 medium:px-8 small:px-2 ">
      <h3 className="text-gray-500 font-satoshireguler small:text-sm">
        Shop.co © 2000-2023, All Rights Reserved
      </h3>
      <div className="flex flex-wrap justify-center">
        <img src={visa} alt="" className="cursor-pointer"></img>
        <img src={masterCard} alt="" className="cursor-pointer"></img>
        <img src={paypal} alt="" className="cursor-pointer"></img>
        <img src={apple} alt="" className="cursor-pointer"></img>
        <img src={google} alt="" className="cursor-pointer"></img>
        <img src={"../../assets/images/apple-pay.png"} alt=""></img>
      </div>
    </div>
  );
};

export default CopyRights;
