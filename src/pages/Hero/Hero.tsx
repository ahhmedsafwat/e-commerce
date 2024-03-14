import Left from "./left";
import Right from "./right";
const Hero = () => {
  return (
    <div className="bg-whitedark flex gap-[10%] text-balance items-end pt-7 px-[8%] xLarge:px-[4%] large:flex-col large:px-[15%] small:px-[5%] ">
      <Right></Right>
      <Left></Left>
    </div>
  );
};
export default Hero;
