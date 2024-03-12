interface statistics {
  number: string;
  string: string;
}
const Statistics = (props: statistics) => {
  return (
    <h1 className="font-satoshiBold text-4xl mt-6 ">
      {props.number}
      <span className="block font-satoshireguler text-gray-500 text-sm mt-2 w-36">
        {props.string}
      </span>
    </h1>
  );
};

export default Statistics;
