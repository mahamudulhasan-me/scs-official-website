"use client";
import ReactiveButton from "reactive-button";

const ButtonTracking = () => {
  return (
    <ReactiveButton
      color={"primary"}
      idleText={"Tracking"}
      size="normal"
      style={{
        borderRadius: "5px",
        padding: "0.7rem",
        fontWeight: "bold",
      }}
    />
  );
};

export default ButtonTracking;
