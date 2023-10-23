"use client";
import ReactiveButton from "reactive-button";

const ButtonOutline = ({ idleText, size }) => {
  return (
    <ReactiveButton
      color={"primary"}
      outline={true}
      idleText={idleText}
      size={size}
      shadow={true}
      style={{
        borderRadius: "5px",
        padding: "0.7rem",
        fontWeight: "bold",
        color: "white",
      }}
    />
  );
};

export default ButtonOutline;
