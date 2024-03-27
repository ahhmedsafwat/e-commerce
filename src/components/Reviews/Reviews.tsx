import Content from "./Content";
import { Comment, useFetchData } from "../../helper/useFectchApi";
import { useRef } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
const Reviews =()=> {
    const scrollableContentRef = useRef<HTMLDivElement>(null);

    const {fakeData, isPending, error} = useFetchData<Comment[]>(
        `http://localhost:8000/comments`,
        "review"
        )
        if (error) return `There was an error : ${error.message}`;
        if(isPending) return `Loading...`;
        

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
        
        return(
            <div className=" px-24 py-6 small:px-4 large:px-20 relative">
        <div className="flex justify-between items-center small:block">
        <h1 className="text-5xl font-secondary small:mb-6">OUR HAPPY CUSTOMERS</h1>
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

        {
            fakeData && (
            <Content comments={fakeData} ref={scrollableContentRef}/>
            )
        }
            <div className="absolute top-[75px] left-0 w-[5%] h-[15rem] backdrop-blur-[2px] z-50 medium:top-[135px] small:hidden"></div>
            <div className="absolute top-[75px] right-0 w-[5%] h-[15rem] backdrop-blur-[2px] z-50 medium:top-[135px]"></div>
        </div>
        )     
};

export default Reviews;

{/* // return(
//     <>
    
//     {
//         fakeData && (
//             <Content comments={fakeData}/>
//         )
//     }
//     </>
// ) */}