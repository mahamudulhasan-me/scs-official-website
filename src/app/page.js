import AboutUs from "@/components/HomePages/AboutUs";
import Banner from "@/components/HomePages/Banner";
import Counter from "@/components/HomePages/Counter/Counter";
import FAQs from "@/components/HomePages/FAQs/FAQs";
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
      <FAQs />
    </div>
  );
};

export default HomePage;
