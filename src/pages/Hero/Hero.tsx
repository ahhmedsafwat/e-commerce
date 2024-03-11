import hero1 from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="bg-whitedark flex 2xl:justify-between items-center pt-6 px-16 large:flex-wrap medium:justify-center small:px-4">
      <div className="">
        <h1 className="font-satoshiBold text-6xl w-[29rem] pb-7 small:text-5xl small:w-[23rem]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-satoshireguler pb-7 w-[35rem] xLarge:w-[30rem] text-gray-500 medium:w-[25rem] tiny:w-[23rem]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-secondory text-primary p-2 rounded-full w-40 hover:bg-gray-500 hover:text-secondory transition duration-500 medium:w-[100%] small:w-[90%]">
          Shop Now
        </button>

        <div className="flex text-center pt-6 font-satoshiBold text-2xl medium:block medium:ml-20 small:ml-8 tiny:ml-1.5">
          <div className="flex small:w-[90%]">
            <h1 className="">
              200+{" "}
              <span className="block font-satoshireguler text-gray-500 text-sm">
                International Brands
              </span>
            </h1>
            <hr className="bg-gray-500 w-[1px] h-14 mx-5" />
            <h1>
              2,000+{" "}
              <span className="block font-satoshireguler text-gray-500 text-sm">
                High-Quality Products
              </span>
            </h1>
          </div>
          <hr className="bg-gray-500 w-[1px] h-14 mx-5 medium:hidden" />
          <h1 className="medium:pt-3 medium:w-[77%] small:w-[80%]">
            30,000+{" "}
            <span className="block font-satoshireguler text-gray-500 text-sm">
              Happy Customers
            </span>
          </h1>
        </div>
      </div>

      <img src={hero1} alt="Slide 1" className="2xl:w-[55%] xLarge:w-[55%]" />
    </div>
  );
};
export default Hero;
