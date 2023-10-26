"use client";
import Image from "next/image";
import CountUp from "react-countup";

const CounterCard = ({ bg, image, number, title }) => {
  return (
    <div
      className={`${bg} flex flex-col items-center justify-center py-8 space-y-4`}
    >
      <Image
        src={image}
        width={256}
        height={256}
        alt="branches"
        className="w-28 h-28"
      />
      <h1 className="text-4xl font-semibold text-white">
        <CountUp end={number} duration={8} suffix="+" enableScrollSpy={true} />
      </h1>
      <div className="w-1/2 h-0.5 bg-white"></div>
      <h3 className="text-2xl text-white  uppercase">{title}</h3>
    </div>
  );
};

export default CounterCard;
