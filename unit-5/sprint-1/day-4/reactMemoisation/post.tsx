import React from "react";
import { post } from "./Input";

type postProps = {
  color: string;
  handleToggle: (s: string) => void;
};

const Post = (props: post & postProps) => {
  console.log("Render post component");
  return (
    <div className="w-[50%] m-auto mt-9 border-2 py-2 px-2">
      {props.verify && (
        <h2 className="text-blue-600 text-right">Verified Post</h2>
      )}
      <div className="flex">
        <div
          className="h-[50px] w-[50px]"
          style={{ backgroundColor: `#${props.color}` }}
        ></div>
        <div className="ml-8">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>
      </div>
      <button
        onClick={() => props.handleToggle(props.id)}
        className="border-2 border-black px-4 mt-8"
      >
        Verify
      </button>
    </div>
  );
};

export default React.memo(Post);