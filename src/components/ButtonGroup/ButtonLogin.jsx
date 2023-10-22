"use client";
import ReactiveButton from "reactive-button";

const ButtonLogin = () => {
  return (
    <ReactiveButton
      color={"primary"}
      outline={true}
      idleText={"Login"}
      size="normal"
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

export default ButtonLogin;
