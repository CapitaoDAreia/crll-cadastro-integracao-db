import React from "react";

interface PropsInterface {
    children: string
    color: string
    className?: string
    onClick?: ()=>void
}

const Button = (props: PropsInterface) => {
  return (
    <div className={`
        flex justify-end mb-8
    `} >
      <button onClick={props.onClick} className={`
        bg-${props.color}-900 hover:bg-${props.color}-800 text-white
        py-2 px-4 rounded-md ${props.className}
      `} >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
