import AboutUs from "@/components/HomePages/AboutUs";
import Banner from "@/components/HomePages/Banner";
import Counter from "@/components/HomePages/Counter/Counter";
import Services from "@/components/HomePages/Services";
import WorkingProgress from "@/components/HomePages/WorkingProgress";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <WorkingProgress />
      <Counter />
    </div>
  );
};

export default HomePage;
