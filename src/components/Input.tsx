import React from "react";
import { classNames } from "../utils";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <input
      {...props}
      className={classNames(
        "block w-full rounded-xl outline outline-[1px] outline-zinc-400 border-0 py-3 px-5 bg-[#FFFAFA] text-dark font-light placeholder:text-dark",
        props.className || ""
    
   
      )}
    />
  );
};

export default Input;
