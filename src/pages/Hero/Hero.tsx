import hero1 from "../../assets/images/hero-image.jpg"

const Hero = () => {

  return (

    <div className='bg-whitedark flex 2xl:justify-between items-center py-6 px-16 lg:flex-wrap md:justify-center sm:px-4'>

      <div className="overflow-hidden">
        <h1 className="font-satoshiBold text-6xl w-[29rem] pb-7">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="font-satoshireguler pb-7 w-[35rem] xl:w-[30rem] text-gray-500 md:w-[25rem]">Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of style.</p>
        <button className="bg-secondory text-primary p-2 rounded-full w-40 hover:bg-gray-500 hover:text-secondory transition duration-500 md:w-[100%]">Shop Now</button>
      
        <div className="flex text-center pt-6 font-satoshiBold text-2xl items-start w-[63%] md:block md:ml-20 ove">
            <div className="flex">
          <h1 className="">200+ <span className="block font-satoshireguler text-gray-500 text-sm">International Brands</span></h1>
        <hr className="bg-gray-500 w-[1px] h-14 mx-5"/>
          <h1>2,000+ <span className="block font-satoshireguler text-gray-500 text-sm">High-Quality Products</span></h1>
            </div>
        <hr className="bg-gray-500 w-[1px] h-14 mx-5 md:hidden"/>
          <h1 className="md:pr-28 md:pt-3 md:w-[135%]">30,000+ <span className="block font-satoshireguler text-gray-500 text-sm ">Happy Customers</span></h1>
        </div>
    </div>

      <img src={hero1} alt="Slide 1" className='xl:w-[55%]'/>
    </div>
  );
};
export default Hero;
