// import { useState } from "react";
import { useRef } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const Content = () => {
  const scrollableContentRef = useRef<HTMLDivElement>(null);
  const handleScrollLeft = () => {
    if (scrollableContentRef.current) {
      scrollableContentRef.current?.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrolrIGHT = () => {
    if (scrollableContentRef.current) {
      scrollableContentRef.current?.scrollBy({
        left: +300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className=" px-24 py-6  small:px-4 large:px-20">
        <div className="flex justify-between items-center ">
          <h1 className="text-5xl font-secondary">OUR HAPPY CUSTOMERS</h1>
          <div className="flex">
            <LuArrowLeft
              className="cursor-pointer"
              size={24}
              onClick={handleScrollLeft}
            />
            <LuArrowRight
              className="cursor-pointer"
              size={24}
              onClick={handleScrolrIGHT}
            />
          </div>
        </div>
      </div>
      <div
        className="flex pb-40 overflow-hidden w-full space-x-5"
        ref={scrollableContentRef}
      >
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px] ">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>

        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border-solid border-[1px] border-secondory rounded-md min-w-[300px]">
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
    </>
  );
};
export default Content;
