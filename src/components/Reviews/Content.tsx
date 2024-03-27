// import { useState } from "react";
import { useRef } from "react";
import { LuArrowLeft, LuStar } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { Comment } from "../../helper/useFectchApi";

interface CommentsProp {
  comments: Comment[] | undefined;
}

const Content = (props: CommentsProp) => {
  const scrollableContentRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollableContentRef.current) {
      scrollableContentRef.current?.scrollBy({
        left: -230,
        behavior: "smooth",
      });
    }
  };

  const handleScrolrIGHT = () => {
    if (scrollableContentRef.current) {
      scrollableContentRef.current?.scrollBy({
        left: +230,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative pb-10">
      <div className=" px-24 py-6 small:px-4 large:px-20 relative">
        <div className="flex justify-between items-center small:block">
          <h1 className="text-5xl font-secondary small:mb-6">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex">
            <LuArrowLeft
              className="cursor-pointer transform hover:scale-75 transition duration-300"
              size={29}
              onClick={handleScrollLeft}
            />
            <LuArrowRight
              className="cursor-pointer transform hover:scale-75 transition duration-300"
              size={29}
              onClick={handleScrolrIGHT}
            />
          </div>
        </div>
      </div>

      <div
        className="flex pb-40 px-24 overflow-hidden w-full space-x-5 small:px-4 large:px-20 "
        ref={scrollableContentRef}
      >
        {props.comments?.map((comment) => (
          <div
            key={comment.id}
            className="border-solid border-[1px]  rounded-md min-w-[400px] p-4 z-20"
          >
            <div className="inline-flex mr-3">
              <LuStar
                className="fill-[#FFC633] stroke-none "
                size={25}
              ></LuStar>
              <LuStar
                className="fill-[#FFC633] stroke-none "
                size={25}
              ></LuStar>
              <LuStar
                className="fill-[#FFC633] stroke-none "
                size={25}
              ></LuStar>
              <LuStar
                className="fill-[#FFC633] stroke-none "
                size={25}
              ></LuStar>
              <LuStar
                className="fill-[#FFC633] stroke-none "
                size={25}
              ></LuStar>
            </div>
            <h1 className="text-xl font-secondary mb-2">
              {comment.person.firstName} {comment.person.secondName}
            </h1>
            <p className="font-satoshireguler">{comment.comment}</p>
          </div>
        ))}
      </div>

      <div className="absolute top-[75px] left-0 w-[5%] h-[15rem] backdrop-blur-[2px] z-50 medium:top-[135px] small:hidden"></div>
      <div className="absolute top-[75px] right-0 w-[5%] h-[15rem] backdrop-blur-[2px] z-50 medium:top-[135px] small:hidden"></div>
    </div>
  );
};

export default Content;
