// import { useState } from "react";
import { useRef } from 'react';
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const Content = ()=>{
    const scrollableContentRef = useRef<HTMLElement>(null);
    const handleScrollLeft = () => {
        if (scrollableContentRef.current) {
          scrollableContentRef.current?.scrollBy({
            left: -350,
            behavior: 'smooth',
          });
        }
    };
    return(
        <>
            <div className=" px-24 py-6  small:px-4 large:px-20">
                <div className="flex justify-between items-center ">
                    <h1 className="text-5xl font-secondary">OUR HAPPY CUSTOMERS</h1>
                        <div className="flex">
                            <LuArrowLeft className="cursor-pointer" size={24} onClick={handleScrollLeft}/>
                            <LuArrowRight className="cursor-pointer" size={24}/>
                        </div> 
                </div>
            </div>
            <div className="flex gap-5 pl-24 pb-40 min-w-[300%]">
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                
                <div className="border-solid border-red-500 ">
                    <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they 
                    offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>
                <div className="border-solid border-red-500 ">
                    <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they 
                    offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="border-solid border-[1px] border-secondory rounded-md">
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>
                </div>

                
            </div>
            </>
    )
}
export default Content;