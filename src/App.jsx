import React, { useState } from "react";
import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import "./app.css";
// import Eye from "./eye.svg";

function App() {
  const [type, setType] = useState("text");
  const [value, setValue] = useState("");
  const rightLogoOnClick = () => {
    setType(type === "text" ? "password" : "text");
  };

  const onChange = (e) => {
    setValue(e.target.value);
    // console.log(value);
  };
  return (
    <div className="container">
      <Input
        type={type}
        size={"xl"}
        variant="flushed"
        rightLogo={
          "https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915455_1280.png"
        }
        rightLogoOnClick={rightLogoOnClick}
        onChange={onChange}
      />

      <Image
        src={
          "https://www.whatspaper.com/wp-content/uploads/2021/12/whatspaper-37.jpg"
        }
        alt={"luffy"}
        borderRadius={"100px"}
        width={"50px"}
        height={"80px"}
        fit={"cover"}
      />

      <Pagination total={10}/>

    </div>
  );
}

export default App;