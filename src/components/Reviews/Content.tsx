// import { useState } from "react";
import { Comment } from "../../helper/useFectchApi";
import { LuStar } from "react-icons/lu";

export interface CommentsProp {
  comments: Comment[] | undefined;
  className?: string
}

const Content = (props: CommentsProp) => {
  return props.comments?.map((comment) => (
    
        <div
          key={comment.id}
          className={`border-solid border rounded-xl p-4 z-20 min-w-[400px] small:min-w-[280px] ${props.className}` }
        >
          <div className="inline-flex mr-3">
            <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
            <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
            <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
            <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
            <LuStar className="fill-[#FFC633] stroke-none " size={25}></LuStar>
          </div>
          <h1 className="text-xl font-secondary mb-2">
            {comment.person.firstName} {comment.person.secondName}
          </h1>
          <p className="font-satoshireguler">{comment.comment}</p>
        </div>
  
  ));
};

export default Content;
