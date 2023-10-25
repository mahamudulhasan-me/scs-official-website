"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeadTitle from "../Shared/SectionHeadTitle";

const WorkingProgress = () => {
  const [animationData, setAnimationData] = useState(null);
  const [pStep1, setPStep1] = useState(false);
  const [pStep2, setPStep2] = useState(false);
  const [pStep3, setPStep3] = useState(false);
  console.log(animationData);

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
        break;
      case 2:
        setPStep1(true);
        setPStep2(true);
        setPStep3(false);
        break;
      case 3:
        setPStep1(true);
        setPStep2(true);
        setPStep3(!pStep3);
        break;
    }
  };
  return (
    <div className="px-[5%]">
      <div className="flex flex-col justify-center items-center">
        <SectionHeadTitle title={"Our Process"} />
        <h1 className="text-4xl">Our Working Process</h1>
      </div>
      <div className="grid grid-cols-7 items-center my-10">
        <div className=" text-center " onClick={() => handleProgressClick(1)}>
          <div className="w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all">
            <Image
              src="/images/process/booking.jpg"
              width={150}
              height={150}
              alt="Booking"
              className="p-1 rounded-full ring-4 ring-secondary hover:ring-primary transition-all duration-500 w-full h-full"
            />
          </div>
          <h3 className="text-xl  font-semibold mt-2">Booking</h3>
        </div>

        <div className="bg-secondary w-full h-2 mb-7 relative">
          <div
            className={`absolute bg-primary left-0 right-[100%] top-0 bottom-0 transition-all duration-300 ${
              pStep1 || pStep2 || pStep3 ? "right-[0%]" : ""
            }`}
          ></div>
        </div>
        <div className=" text-center " onClick={() => handleProgressClick(2)}>
          <div className="w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all">
            <Image
              src="/images/process/booking.jpg"
              width={150}
              height={150}
              alt="Booking"
              className="p-1 rounded-full ring-4 ring-secondary hover:ring-primary transition-all duration-500 w-full h-full"
            />
          </div>
          <h3 className="text-xl  font-semibold mt-2">Booking</h3>
        </div>

        <div className="bg-secondary w-full h-2 mb-7 relative">
          <div
            className={`absolute bg-primary left-0 right-[100%] top-0 bottom-0 transition-all duration-300 ${
              (pStep1 && pStep2) || pStep3 ? "right-[0%]" : ""
            }`}
          ></div>
        </div>
        <div className=" text-center " onClick={() => handleProgressClick(3)}>
          <div className="w-full h-28 rounded-full hover:ring-8 ring-secondary duration-300 transition-all">
            <Image
              src="/images/process/booking.jpg"
              width={150}
              height={150}
              alt="Booking"
              className="p-1 rounded-full ring-4 ring-secondary hover:ring-primary transition-all duration-500 w-full h-full"
            />
          </div>
          <h3 className="text-xl  font-semibold mt-2">Booking</h3>
        </div>

        <div className="bg-secondary w-full h-2 mb-7 relative">
          <div
            className={`absolute bg-primary left-0 right-[100%] top-0 bottom-0 transition-all duration-300 ${
              pStep1 && pStep2 && pStep3 ? "right-[0%]" : ""
            }`}
          ></div>
        </div>
        <div className="text-center ">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              className="rounded-full p-1 ring-4 ring-secondary w-full h-28 overflow-hidden"
            />
          )}
          <h3 className="text-xl font-semibold mt-2">Booking</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkingProgress;
