import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";

const ServiceSlider = ({ image, title, description }) => {
  return (
    <div className="relative my-20 w-full group rounded-md shadow-2xl shadow-blue-500/20">
      <Image
        src={image}
        // objectFit="cover"
        width={500}
        height={500}
        alt="document Service"
        className="rounded-t-md"
      />
      <div className="bg-secondary pt-16 pb-2 px-5 flex justify-between items-center rounded-b-md">
        <p className="font-semibold  text-white flex items-center gap-2">
          More Details{" "}
          <HiOutlineArrowRight
            size={22}
            className="group-hover:ml-5 transition-all duration-200"
          />
        </p>
        <TbTruckDelivery size={40} color="#ed502e" />
      </div>
      <div className="absolute bg-white rounded-r-md bottom-[20%] top-[55%]  group-hover:top-[30%] w-4/5 px-5 pt-3 overflow-hidden transition-all duration-500 hover:duration-500 hover:transition-all">
        <h2 className="text-xl font-semibold py-2 hover:text-primary">
          {title}
        </h2>
        <p className="text-justify mt-2 ">
          Quality Work is Best Organization Building Make all time
        </p>
      </div>
    </div>
  );
};

export default ServiceSlider;
