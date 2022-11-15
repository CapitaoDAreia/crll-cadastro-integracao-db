import React from "react";

interface PropsInterface {
    children: string
}

const Button = (props: PropsInterface) => {
  return (
    <div className={`
        flex justify-end mb-8
    `} >
      <button className={`
        bg-blue-900 hover:bg-blue-800 text-white
        py-2 px-4 rounded-md
      `} >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
