import Statistics from "./statistics";
const Right = () => {
  return (
    <div className="w-[45%] large:w-full large:text-center medium:text-left">
      <h1 className="font-secondary text-6xl leading-[64px] xLarge:text-5xl pb-7 small:text-4xl">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="font-satoshireguler mb-7  text-gray-500 ">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <button className="font-satoshi500 bg-secondory text-primary p-2 rounded-full w-40 transition-colors duration-300 large:w-[45%] small:w-full hover:bg-primary hover:text-secondory hover:shadow-lg ">
        Shop Now
      </button>

      <div className="flex  pt-6 font-satoshiBold text-2xl justify-between large:flex-wrap medium:justify-center ">
        <Statistics number="200+" string="International Brands" />
        <Statistics number="2,000+" string="High-Quality Products" />
        <Statistics number="30,000+" string="Happy Customers" />
      </div>
    </div>
  );
};

export default Right;
