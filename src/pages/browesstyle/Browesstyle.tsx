import BrowesStyleItem from "../../components/browesstyleitem/Browesstyleitem";
import casual from "../../assets/images/casual-image.png";
import formal from "../../assets/images/formal-image.png";
import party from "../../assets/images/party-image.png";
import gym from "../../assets/images/gym-image.png";

const BrowesStyle = () => {
  return (
    <div className=" mx-20 medium:mx-10 small:mx-4 bg-gray-200 p-16 xLarge:p-14 medium:p-6 rounded-[40px]">
      <h1 className="text-center text-5xl medium:text-4xl small:text-3xl font-secondary">
        BROWSE BY dress STYLE
      </h1>
      <div className="grid grid-cols-3 medium:grid-cols-1 place-items-center mt-16 gap-5  ">
        <BrowesStyleItem
          title="Casual"
          img={casual}
          className="col-span-1 medium:col-span-full"
        />
        <BrowesStyleItem
          title="Fromal"
          img={formal}
          className="col-span-2 medium:col-span-full "
        />
        <BrowesStyleItem
          title="Party"
          img={party}
          className="col-span-2 medium:col-span-full"
        />
        <BrowesStyleItem
          title="Gym"
          img={gym}
          className="col-span-1 medium:col-span-full"
        />
      </div>
    </div>
  );
};

export default BrowesStyle;
