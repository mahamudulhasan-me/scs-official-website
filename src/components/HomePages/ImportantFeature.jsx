import Image from "next/image";

const ImportantFeature = () => {
  return (
    <div className="flex justify-center items-center shadow-[0_10px_20px_rgba(237,_80,_46,_0.7)] w-fit mx-auto p-5 -mt-7 z-50 absolute -bottom-24 bg-slate-100 left-[10%] right-[10%] rounded-3xl divide-x-2 divide-primary ">
      <div className="flex justify-center items-center gap-2 p-5">
        <Image
          src="/images/icons/delivery-man.png"
          alt="fast and fastest courier service"
          width={70}
          height={70}
        />
        <div>
          <h3 className="font-semibold text-2xl">30 Million+</h3>
          <p className="text-lg">Deliveries</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 p-5">
        <Image
          src="/images/icons/fast-delivery.png"
          alt="fast and fastest courier service"
          width={70}
          height={70}
        />

        <div>
          <h3 className="font-semibold text-2xl">Fast and Fastest</h3>
          <p className="text-lg">Courier Service in Bangladesh</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 p-5">
        <Image
          src="/images/icons/location.png"
          alt="fast and fastest courier service"
          width={70}
          height={70}
        />
        <div>
          <h3 className="font-semibold text-2xl">64 Districts</h3>
          <p className="text-lg">Home Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantFeature;
