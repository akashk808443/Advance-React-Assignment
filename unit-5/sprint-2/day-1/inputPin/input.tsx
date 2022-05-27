import React, { useRef, useState } from "react";

type otpinptuTypes = {
  totalInputs: number;
  onChange: (otp: string) => void;
};

const Input = ({ totalInputs, onChange }: otpinptuTypes) => {
  const inputRef = useRef<HTMLInputElement[]>([]); // {current :[]}
  const [otp, setOtp] = useState<string>("");
  return (
    <>
      {new Array(totalInputs).fill(0).map((el, index) => {
        return (
          <input
            onChange={(e) => {
              setOtp(otp + e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.code === "Backspace") {
                setOtp(otp.slice(0, -1));
                if (index !== 0) {
                  inputRef.current[index - 1].focus();
                  inputRef.current[index - 1].select();
                }
              } else {
                if (index !== totalInputs - 1) {
                  inputRef.current[index + 1].focus();
                } else if (index === totalInputs - 1) {
                  onChange(otp);
                }
              }
            }}
            ref={(element) => {
              if (inputRef.current && element) {
                inputRef.current[index] = element;
              }
            }}
            key={index}
            type={"text"}
            maxLength={1}
            className="otp"
          />
        );
      })}
    </>
  );
};

export default Input;