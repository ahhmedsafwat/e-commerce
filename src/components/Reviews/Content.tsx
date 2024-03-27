// import { useState } from "react";
import { Ref, forwardRef } from "react";
import { Comment } from "../../helper/useFectchApi";
import { LuStar } from "react-icons/lu";

  interface CommentsProp {
    comments: Comment[] | undefined;
  }

const Content = forwardRef((props: CommentsProp, ref: Ref<HTMLDivElement>) => {

  return(
    <>
      <div
        className="flex pb-40 overflow-hidden w-full space-x-5 small:px-4 large:px-20 "
        ref={ref}
      >
        {props.comments?.map((comment)=>
        <div key={comment.id} className="border-solid border-[1px] border-secondory rounded-xl min-w-[400px] p-4 z-20">
          <div className="inline-flex mr-3">
          <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
          <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
        </div>
          <h1 className="text-xl font-secondary mb-2">{comment.person.firstName} {comment.person.secondName}</h1>
          <p className="font-satoshireguler">{comment.comment}</p>
          
        </div>
        )}
      </div>


</>
    
    );
})


export default Content;
