import { ReactNode } from "react";

const Button = (props: { className?: string; text: ReactNode }) => {
  return (
    <button
      className={`${props.className} block text-center font-satoshi500 w-40  p-2 rounded-full transition-colors duration-300  hover:shadow-lg `}
    >
      {props.text}
    </button>
  );
};

export default Button;
