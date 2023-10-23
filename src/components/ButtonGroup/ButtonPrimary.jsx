"use client";
import ReactiveButton from "reactive-button";

const ButtonPrimary = ({ idleText, size }) => {
  return (
    <ReactiveButton
      color={"primary"}
      idleText={idleText}
      size={size}
      style={{
        borderRadius: "5px",
        padding: "0.7rem",
        fontWeight: "bold",
      }}
    />
  );
};

export default ButtonPrimary;
