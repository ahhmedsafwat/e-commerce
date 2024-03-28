// import { useState } from "react";
import { Comment } from "../../helper/useFectchApi";
import { LuStar } from "react-icons/lu";

interface CommentsProp {
  comments: Comment[] | undefined;
}

const Content = (props: CommentsProp) => {
  return (
    <>
      {props.comments?.map((comment) => (
        <div
          key={comment.id}
          className="border-solid border rounded-xl min-w-[400px] p-4 z-20"
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
      ))}
    </>
  );
};

export default Content;
