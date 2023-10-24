import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";

const ServiceSlider = ({ image, title, description }) => {
  return (
    <div className="relative  h-[25rem] my-16 w-full group rounded-md shadow-2xl shadow-blue-500/20">
      <figure className="h-[70%]">
        <Image
          src={image}
          // objectFit="cover"
          width={300}
          height={300}
          alt="document Service"
          className="rounded-t-md "
        />
      </figure>
      <div className="bg-secondary h-[30%] pt-16 pb-2 px-5 flex justify-between items-center rounded-b-md">
        <Link
          href="/"
          className="font-semibold  text-white flex items-center gap-2"
        >
          More Details
          <HiOutlineArrowRight
            size={22}
            className="group-hover:ml-5 transition-all duration-200"
          />
        </Link>
        <TbTruckDelivery size={40} color="#ed502e" />
      </div>
      <div className="absolute bg-white  bottom-[20%] top-[60%]  group-hover:top-[30%] w-4/5 px-4 pt-3 overflow-hidden transition-all duration-500 hover:duration-500 hover:transition-all">
        <h2 className="text-xl font-semibold py-4 hover:text-primary">
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
