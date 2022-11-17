import React from "react";
import * as CSS from "csstype";

interface PropsInterface {
  children: string;
  color: string;
  className?: string;
  onClick?: () => void;
}

const Button = (props: PropsInterface) => {
  const ButtonStyleColors: CSS.Properties = {
    backgroundColor: props.color,
  };

  return (
    <div
      className={`
        flex justify-end mb-8
    `}
    >
      <button
        style={ButtonStyleColors}
        onClick={props.onClick}
        className={`
        text-white hover:opacity-90
        py-2 px-4 rounded-md ${props.className}
      `}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
