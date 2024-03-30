import { LuStar } from "react-icons/lu";

interface rating {
  rate: number;
}
const Rating = (props: rating) => {
  return (
    <div className="flex items-center mb-2">
      <div className="inline-flex mr-3">
        {Array.from({ length: Math.floor(props.rate) }).map((_, index) => {
          return (
            <LuStar
              key={index}
              className="stroke-none fill-[#FFC633] size-[18px]"
            ></LuStar>
          );
        })}
      </div>
      <div className="font-satoshireguler inline-flex text-sm">
        {props.rate}/<span className="text-gray-500">5</span>
      </div>
    </div>
  );
};

export default Rating;
