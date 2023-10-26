import CounterCard from "./CounterCard";

const Counter = () => {
  return (
    <div className="grid grid-cols-4">
      <CounterCard
        bg="bg-[#1C0C5B]"
        image={"/images/icons/branch.png"}
        number={900}
        title={"Branches"}
      />
      <CounterCard
        bg="bg-[#3D2C8D]"
        image={"/images/icons/staff.png"}
        number={10000}
        title={"Employees"}
      />
      <CounterCard
        bg="bg-[#916BBF]"
        image={"/images/icons/trucks.png"}
        number={700}
        title={"Covered Vans"}
      />
      <CounterCard
        bg="bg-[#C996CC]"
        image={"/images/icons/branch.png"}
        number={900}
        title={"Branches"}
      />
    </div>
  );
};

export default Counter;
