import { MouseEventHandler, ReactNode } from "react";

const Button = (props: {
  className?: string;
  text: ReactNode;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
}) => {
  return (
    <button
      onClick={props.onclick}
      className={`${props.className} block text-center font-satoshi500 w-40  p-2 rounded-full transition-colors duration-300  hover:shadow-lg `}
    >
      {props.text}
      {props.icon ? props.icon : ""}
    </button>
  );
};

export default Button;
