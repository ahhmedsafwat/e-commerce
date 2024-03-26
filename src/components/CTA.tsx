import MessageIcon from "../assets/images/Vector.svg";

const Cta = () => {
  return (
    <form
      className="absolute bg-secondory w-[90%] flex p-4 justify-between rounded-xl top-[-115px] left-12 small:left-6 items-center 
    xLarge:top-[-125px] medium:flex-wrap small:w-[85%] small:mt-[-35px]"
    >
      <h1 className=" text-primary font-secondary text-4xl w-[69%] large:text-3xl medium:w-full mb-2">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>

      <div className="w-2/4 medium:w-full mb-[-1px]">
        <input
          type="text"
          placeholder="Enter your email address"
          className="block p-2 rounded-full w-full mb-3 pl-10 outline-none border-none relative small:text-sm"
        />
        <button className="bg-primary p-2 rounded-full w-full font-satoshiBold">
          Subscribe to Newsletter
        </button>
        <img
          src={MessageIcon}
          alt=""
          className="relative top-[-80px] left-[10px]"
        />
      </div>
    </form>
  );
};

export default Cta;
