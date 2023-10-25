"use client";
import { useState } from "react";

const steps = ["Booking", "Packing", "Transportation", "Delivery"];

const ProgressTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="w-full h-16 bg-gray-300 rounded-full relative flex justify-between items-center px-4">
      {steps.map((step, index) => (
        <div
          key={step}
          onClick={() => handleStepClick(index)}
          className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer ${
            currentStep >= index
              ? "bg-pink-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressTimeline;
