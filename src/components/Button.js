import React from "react";
import { globalStyles } from "../theme/globalStyles";

const Button = ({ text = "Button", backgroundColor = "#27ae60", ...props }) => {
  return (
    <button style={globalStyles.container(backgroundColor)} {...props}>
      {text}
    </button>
  );
};

export default Button;
