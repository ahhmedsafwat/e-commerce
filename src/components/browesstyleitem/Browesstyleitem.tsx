interface Props {
  title: string;
  img: string;
  className: string;
}
const BrowesStyleItem = (props: Props) => {
  return (
    <div
      className={`${props.className} relative flex w-full min-h-72 bg-white rounded-3xl overflow-hidden p-8 xLarge:p-5`}
    >
      <h2 className="text-3xl z-[1] font-satoshiBold">{props.title}</h2>
      <img
        src={props.img}
        alt=""
        className="absolute right-0 top-0 h-96 w-96 xLarge:h-80 xLarge:w-80 object-cover"
      />
    </div>
  );
};

export default BrowesStyleItem;
