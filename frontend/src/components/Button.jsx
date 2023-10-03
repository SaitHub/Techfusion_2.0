import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={classes.btn}
      style={{
        color: `${props.color}`,
        backgroundColor: `${props.bgcolor}`,
        width: `${props.width}`,
        height: `${props.height}`,
      }}
      onClick={props.clickListener}
    >
      {props.text}
    </button>
  );
};

export default Button;
