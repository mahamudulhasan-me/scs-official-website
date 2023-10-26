"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import SectionHeadTitle from "../Shared/SectionHeadTitle";

const WorkingProgress = () => {
  const [animationData, setAnimationData] = useState(null);
  const [confetti, setConfetti] = useState(null);
  const [pStep1, setPStep1] = useState(false);
  const [pStep2, setPStep2] = useState(false);
  const [pStep3, setPStep3] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Fetch the animation data asynchronously
    fetch("/images/process/confetti.json")
      .then((response) => response.json())
      .then((data) => {
        setConfetti(data);
      })
      .catch((error) => {
        console.error("Error loading animation data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch the animation data asynchronously
    fetch("/images/process/delivery_man.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Error loading animation data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs once after initial render

  const handleProgressClick = (step) => {
    // Handle progress click logic
    switch (step) {
      case 1:
        setPStep1(!pStep1);
        setPStep2(false);
        setPStep3(false);
        setDelivery(false);
        break;
      case 2:
        setPStep1(true);
        setPStep2(!pStep2);
        setPStep3(false);
        setDelivery(false);
        break;
      case 3:
        setPStep1(true);
        setPStep2(true);
        setPStep3(!pStep3);
        setDelivery(false);
        break;
      case 4:
        setDelivery(true);
        setPStep1(true);
        setPStep2(true);
        setPStep3(true);
        setShowConfetti(true);
    }
  };
  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false); // Set delivery state to false after a delay (in milliseconds)
      }, 2000); // Wait for 5 seconds (5000 milliseconds) before hiding the animation

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]); // Re-run this effect whenever the delivery state changes
  return (
    <div className="px-[5%] relative">
      {showConfetti && (
        <div className="absolute  flex justify-center items-center left-0 right-0 -bottom-12 z-20">
          <Lottie animationData={confetti} className="" loop={true} />
        </div>
      )}
      <div className="flex flex-col justify-center items-center">
        <SectionHeadTitle title={"Our Process"} />
        <h1 className="text-4xl">Our Working Process</h1>
      </div>

      <div className="grid grid-cols-7 items-center my-10">
        {/* process-1  */}
        <div className=" text-center " onClick={() => handleProgressClick(1)}>
          <div
            className={`w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all ${
              pStep1 ? "ring-8" : ""
            }`}
          >
            <Image
              src="/images/process/booking.jpg"
              width={150}
              height={150}
              alt="Booking"
              className={`p-1 rounded-full ring-4  hover:ring-primary transition-all duration-500 w-full h-full ${
                pStep1 ? "ring-primary" : "ring-secondary"
              }`}
            />
          </div>
          <h3 className="text-xl  font-semibold mt-2">Booking</h3>
        </div>
        {/* process line-1  */}
        <div className="bg-secondary w-full h-2 mb-7 relative">
          <div
            className={`absolute bg-primary  left-0  top-0 bottom-0 transition-all duration-300 ${
              pStep1 ? "right-0 " : "right-full"
            }`}
          ></div>
        </div>
        {/* process-2 */}
        <div className=" text-center " onClick={() => handleProgressClick(2)}>
          <div
            className={`w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all ${
              pStep2 ? "ring-8" : "ring-secondary"
            }`}
          >
            <Image
              src="/images/process/packing.jpg"
              width={250}
              height={250}
              alt="Packing"
              className={`p-1 rounded-full ring-4  hover:ring-primary transition-all duration-500 w-full h-full ${
                pStep2 ? "ring-primary" : "ring-secondary"
              }`}
            />
          </div>
          <h3 className="text-xl  font-semibold mt-2">Packing</h3>
        </div>
        {/* process line 2  */}
        <div className="bg-secondary w-full h-2 mb-7 relative">
          <div
            className={`absolute bg-primary left-0  top-0 bottom-0 transition-all duration-300 ${
              pStep2 ? "right-0" : "right-full"
            }`}
          ></div>
        </div>
        {/* process-3  */}
        <div className=" text-center " onClick={() => handleProgressClick(3)}>
          <div
            className={`w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all ${
              pStep3 ? "ring-8" : ""
            }`}
          >
            <Image
              src="/images/process/transportation.svg"
              width={150}
              height={150}
              alt="Transportation"
              className={`p-1 rounded-full ring-4  hover:ring-primary transition-all duration-500 w-full h-full ${
                pStep3 ? "ring-primary" : "ring-secondary"
              }`}
            />
          </div>
          <h3 className="text-xl  font-semibold mt-2">Transportation</h3>
        </div>
        {/* process line 3 */}
        <div className="bg-secondary w-full h-2 mb-7 relative">
          <div
            className={`absolute bg-primary left-0  top-0 bottom-0 transition-all duration-300 ${
              pStep3 ? "right-0" : "right-full"
            }`}
          ></div>
        </div>
        {/* process 4  */}
        <div className=" text-center " onClick={() => handleProgressClick(4)}>
          <div
            className={`w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all ${
              delivery ? "ring-8" : ""
            }`}
          >
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={true}
                className={`p-1 rounded-full ring-4  hover:ring-primary transition-all duration-500 w-full h-full overflow-hidden ${
                  delivery ? "ring-primary" : "ring-secondary"
                }`}
              />
            )}
          </div>
          <h3 className="text-xl  font-semibold mt-2">Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkingProgress;
