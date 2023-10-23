"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ButtonPrimary from "../ButtonGroup/ButtonPrimary";
import ButtonSecondary from "../ButtonGroup/ButtonSecondary";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[calc(100vh-5rem)] bg-cover bg-center bg-no-repeat  bg-[url('/images/slider/slider_1.jpg')] px-[10%] flex  items-center">
            <div>
              <p className="flex items-center gap-2 text-primary uppercase  tracking-widest">
                <span className="w-10 h-1 bg-primary"></span> MOVING SERVICE,
                SINCE 1945.
              </p>
              <h1 className="text-8xl font-semibold my-8 text-slate-900">
                We Make Moving <br />{" "}
                <span className="text-primary">Cheap & Safe.</span>
              </h1>

              <div className=" space-x-4">
                <ButtonSecondary idleText={"Contact Us"} size={"large"} />
                <ButtonPrimary idleText={"Learn More"} size={"large"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}
