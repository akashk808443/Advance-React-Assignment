import React from "react";
import useMerge from "../Hooks/useMerge";

export type user = {
  name: string;
  email: string;
  password: string;
};

const Merge = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
  };
  const { state, setState } = useMerge(initState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1 className="mt-5 text-3xl mb-4 text-center">User Info</h1>
      <div className="w-[50%] m-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full items-center">
            <div className="w-full mr-4">
              <label>User Name</label>
              <br />
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
                type="text"
                name="name"
                value={state.name}
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <label>Email</label>
              <br />
              <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
                type="email"
                name="email"
                value={state.email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <label>Password</label>
            <br />
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <br />
          <input
            className="mt-1 w-full bg-indigo-600 border border-transparent rounded-md py-2 cursor-pointer px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div className="text-center mt-4">
        {state.name && <p>Username: {state.name}</p>}
        {state.email && <p>Email: {state.email}</p>}
        {state.password && <p>Password: {state.password}</p>}
      </div>
    </div>
  );
};

export default Merge;