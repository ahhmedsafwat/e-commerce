import { Comment, useFetchData } from "../../helper/useFectchApi";
import Content from "../Reviews/Content";

const ProductComment = () => {
    const { fakeData, isPending, error } = useFetchData<Comment[]>(
        `http://localhost:8000/comments`,
        "productComment"
      );

      if (error) return `There was an error : ${error.message}`;
      if (isPending) return `Loading...`;
    
    return ( 
        <>
        {fakeData && 
        <div className="grid grid-cols-2 py-20 gap-7 large:grid-cols-1">
            <h1 className="text-xl col-span-2 large:col-span-1">All Reviews (<span>{fakeData?.length}</span>)</h1>
            <Content comments={fakeData} className=""/>
        </div>
        }
        </>
     );
}
 
export default ProductComment;