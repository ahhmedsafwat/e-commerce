import hero1 from "../../assets/images/hero-image.jpg"

const Hero = () => {

  return (

    <div className='bg-whitedark flex items-center py-6 px-16'>
      <div className="relative">
        <h1 className="font-satoshiBold text-6xl w-[30rem] pb-7">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="font-satoshireguler pb-7 w-[35rem] text-gray-500">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="bg-secondory text-primary p-2 rounded-full w-40">Shop Now</button>
      
        <div className="flex text-center pt-6 font-satoshiBold text-2xl items-start w-[72%]">
          <h1 className="">200+ <span className="block font-satoshireguler text-gray-500 text-sm">International Brands</span></h1>
          <hr className="bg-gray-500 w-[1px] h-12 mx-2"/>
          <h1>2,000+ <span className="block font-satoshireguler text-gray-500 text-sm">High-Quality Products</span></h1>
          <hr className="bg-gray-500 w-[1px] h-12 mx-2"/>
          <h1 >30,000+ <span className="block font-satoshireguler text-gray-500 text-sm">Happy Customers</span></h1>
        </div>
    </div>

      <img src={hero1} alt="Slide 1" className=''/>
    </div>
  );
};
export default Hero;
