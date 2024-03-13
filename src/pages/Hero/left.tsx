import hero from "../../assets/images/hero-image.png";
import "./hero.css";

const Left = () => {
  return (
    <div className="w-[45%]  large:w-full relative">
      <img src={hero} alt="a photo for a guy and a girl" className="" />
      <div className="after-star before-star"></div>
    </div>
  );
};

export default Left;
