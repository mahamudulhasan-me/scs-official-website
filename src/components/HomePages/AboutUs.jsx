"use client";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { BsHeadset } from "react-icons/bs";
import {
  FiCheckCircle,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import ButtonMore from "../ButtonGroup/ButtonMore";
import SectionHeadTitle from "../Shared/SectionHeadTitle";

const AboutUs = () => {
  return (
    <div className="px-[5%] grid grid-cols-12 mt-48 mb-20 gap-20">
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
        <div className="text-lg  text-gray-700  space-y-2 border-b mt-4 pb-8">
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
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <ButtonMore>Read More</ButtonMore>
          </div>
          <div class="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
            <section class="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <BsHeadset size={24} />
            </section>

            <section class="block border-l border-gray-300 m-3">
              <div class="pl-3">
                <h3 class="text-gray-600 font-semibold text-sm">
                  For More Details
                </h3>
                <h3 class="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  09612003003
                </h3>
              </div>
              <div class="flex gap-3 pt-2 pl-3 text-xl text-gray-600">
                <Link href={"/"}>
                  <FiFacebook className="hover:scale-125 duration-200 hover:cursor-pointer " />
                </Link>
                <Link href={"/"}>
                  <FiLinkedin className="hover:scale-125 duration-200 hover:cursor-pointer " />
                </Link>
                <Link href={"/"}>
                  <FiTwitter className="hover:scale-125 duration-200 hover:cursor-pointer " />
                </Link>
                <Link href={"/"}>
                  <FiInstagram className="hover:scale-125 duration-200 hover:cursor-pointer " />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
