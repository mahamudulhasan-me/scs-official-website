"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { FiCheckCircle } from "react-icons/fi";
import ButtonSecondary from "../ButtonGroup/ButtonSecondary";
import SectionHeadTitle from "../Shared/SectionHeadTitle";

const AboutUs = () => {
  return (
    <div className="px-[5%] grid grid-cols-12 mt-48 mb-20 gap-24">
      <div className="col-span-7 relative bg-[url('/images/image5.jpg')] bg-cover bg-center w-full h-full">
        <div className="absolute animation-container bg-primary -right-12 top-8 px-4 py-3 rounded-lg text-white flex items-center gap-3">
          <h4 className="text-4xl">
            <span className="font-semibold">
              <CountUp
                end={40}
                duration={2.5}
                suffix="+"
                enableScrollSpy={true}
              />
            </span>
          </h4>
          <p className="text-lg tracking-widest ">
            Years of <br /> Experience
          </p>
        </div>

        <Image
          src="/images/shape/shape1.svg"
          width={250}
          height={250}
          alt="dotted pattern"
          className="absolute bottom-0 left-0"
        />
      </div>
      <div className="col-span-5">
        <SectionHeadTitle title={"About Us"} />
        <h1 className="text-5xl font-semibold text-slate-800">
          Safe, Reliable & Epress Moving Solutions!
        </h1>
        <p className="my-4 text-justify text-gray-600">
          We endeavor to comprehend what going through, what they need what
          their price tags are, and what means quite a bit to them and their
          clients. We interface with our clients.
        </p>
        <div className="text-lg  text-gray-700  space-y-2 border-b my-4 pb-8">
          <p className="flex items-center gap-2">
            <FiCheckCircle color="#ed502e" size={20} /> Creative Work Insight
          </p>
          <p className="flex items-center gap-2">
            <FiCheckCircle color="#ed502e" size={20} /> Always Work With
            Energetic Team
          </p>
          <p className="flex items-center gap-2">
            <FiCheckCircle color="#ed502e" size={20} /> We are Award Winning
            Company
          </p>
        </div>
        <div className="flex items-center gap-10">
          <ButtonSecondary idleText={"Read More"} size={"large"} />
          <p>
            <span>Call us for help</span> <br />
            <span className="text-xl text-slate-900 font-semibold">
              09612003003
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
