import { useDebouncedCallback } from "@react-hookz/web";
import { useState } from "react";
import useFetch from "../Hooks/useFetch";

type Data = {
  country: string;
  city: string;
};

const Country = () => {
  const url = "http://localhost:8080/Country?_page=1&_limit=6";
  const [search, setSearch] = useState("");
  const [capital, setCapital] = useState(false);
  const { data, loading, error } = useFetch<Data>(url, {
    q: search || "?",
  });
  const handleChange = useDebouncedCallback(
    (e) => setSearch(e.target.value),
    [],
    1000,
    0
  );
  return (
    <>
      <div className="w-[60%] m-auto text-center">
        <h1 className="text-2xl mt-6 mb-2">Seach for any Country</h1>
        <input
          className="border border-gray-900 w-full  px-2 py-2 text-[16px]"
          type="text"
          onChange={handleChange}
          placeholder="Search for country"
        />
        <div className="w-full bg-slate-100 h-auto py-2 overflow-y-auto">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Oops! Something went wrong</div>
          ) : (
            data.map((c) => (
              <div key={c.country}>
                <ul className="relative">
                  <li
                    className="list-none hover:bg-gray-200 cursor-pointer"
                    onMouseOver={() => setCapital(true)}
                    onMouseLeave={() => setCapital(false)}
                  >
                    {c.country}
                  </li>
                  {capital && (
                    <p className="absolute right-10 top-0">{c.city}</p>
                  )}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Country;