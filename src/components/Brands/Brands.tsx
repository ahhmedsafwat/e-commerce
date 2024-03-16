import "./brands.css";
import versaca from "../../assets/images/versace.svg";
import zara from "../../assets/images/zara.svg";
import gucci from "../../assets/images/gucci.svg";
import prada from "../../assets/images/prada.svg";
import calvin from "../../assets/images/calvin-klein.svg";

const Brands = () => {
  return (
    <div className="flex justify-between xLarge:justify-around items-center flex-wrap px-24 min-h-32 bg-black large:px-12  small:px-4">
      <img src={versaca} alt="Versaca name" className="brand-name" />
      <img src={zara} alt="zara name" className="brand-name" />
      <img src={gucci} alt="gucci name" className="brand-name" />
      <img src={prada} alt="prada name " className="brand-name" />
      <img src={calvin} alt="calvin nama" className="brand-name" />
    </div>
  );
};

export default Brands;
