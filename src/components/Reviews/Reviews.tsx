import Content from "./Content";
import { Comment, useFetchData } from "../../helper/useFectchApi";
import ProductSkeleton from "../loader/ProductSkeleton";

const Reviews =()=>{
    const {fakeData, isPending, error} = useFetchData<Comment[]>(
        `http://localhost:8000/comments`,
        "review"
        )
        if (error) return `There was an error : ${error.message}`;
    return(
        <>
        {isPending && (
        <div className="flex justify-between items-center py-16 xLarge:px-6 px-20 medium:px-8 medium:pt-28 small:pt-40">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        </div>
    )}
        {
            fakeData && (
                <Content comments={fakeData}/>
            )
        }
        </>
    )
}

export default Reviews;