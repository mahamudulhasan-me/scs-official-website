import AboutUs from "@/components/HomePages/AboutUs";
import Banner from "@/components/HomePages/Banner";
import Services from "@/components/HomePages/Services";
import WorkingProgress from "@/components/HomePages/WorkingProgress";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <WorkingProgress />
    </div>
  );
};

export default HomePage;
