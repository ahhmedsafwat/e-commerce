import MessageIcon from "../assets/images/Vector.svg";

const CTA = () => {
  return (
    <div className="absolute bg-red-500 w-[90%] 2xl:flex xLarge:flex p-5 justify-between rounded-xl top-[-115px]">
      <h1 className=" text-primary text-5xl w-[69%]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="w-2/4">
        <input
          type="text"
          placeholder="Enter your email address"
          className="block p-2 rounded-full w-full mb-3 pl-10 outline-none border-none relative"
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
    </div>
  );
};

export default CTA;
