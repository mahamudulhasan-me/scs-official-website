"use client";
import ReactiveButton from "reactive-button";

const ButtonSecondary = ({ idleText, size }) => {
  return (
    <ReactiveButton
      color={"violet"}
      idleText={idleText}
      size={size}
      style={{
        borderRadius: "5px",
        padding: "0.7rem",
        fontWeight: "bold",
        letterSpacing: "1px",
      }}
    />
  );
};

export default ButtonSecondary;
