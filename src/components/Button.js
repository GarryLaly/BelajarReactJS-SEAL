import React from "react";

const Button = ({ text = "Button", backgroundColor = "#27ae60", ...props }) => {
  return (
    <button
      style={{
        background: backgroundColor,
        border: 0,
        color: "white",
        borderRadius: 5,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
