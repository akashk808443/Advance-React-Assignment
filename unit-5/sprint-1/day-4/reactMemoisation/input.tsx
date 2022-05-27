import React, { useCallback, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Post from "./Post";

export type post = {
  id: string;
  title: string;
  body: string;
  verify: boolean;
};

const Input = () => {
  const [post, setPost] = useState<post>({
    id: "",
    title: "",
    body: "",
    verify: false,
  });
  const [list, setList] = useState<post[]>([]);
  const [randomColor, setRandomColor] = useState("");
  const ref = useRef("");

  const delay = useMemo(() => {
    setInterval(() => {
      ref.current = Math.floor(Math.random() * 16777215).toString(16);
    }, 3000);
    return ref.current;
  }, [list]);

  const color = delay;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      id: uuid(),
      title: post.title,
      body: post.body,
      verify: false,
    };
    setList([...list, payload]);
    setRandomColor(delay);
  };

  const handleToggle = useCallback(
    (id: string) => {
      setList(
        list.map((item) =>
          item.id === id ? { ...item, verify: !item.verify } : item
        )
      );
    },
    [list]
  );

  console.log("Render input component");

  return (
    <div>
      <h1 className="mt-5 text-3xl mb-4 text-center">
        Enter post Title and Body
      </h1>
      <div className="w-[50%] m-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mr-4">
            <label>Title</label>
            <br />
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
              type="text"
              name="title"
              placeholder="Enter title of the post"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full">
            <label>Body</label>
            <br />
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
              type="text"
              name="body"
              placeholder="Enter body of the post"
              onChange={handleChange}
            />
          </div>
          <br />
          <input
            className="mt-1 w-full bg-indigo-600 border border-transparent rounded-md py-2 cursor-pointer px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
            value="Add"
          />
        </form>
      </div>
      {list.map((el) => (
        <Post
          key={el.id}
          {...el}
          color={randomColor}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(Input);