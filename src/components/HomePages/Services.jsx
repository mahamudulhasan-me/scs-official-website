"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import SectionHeadTitle from "../Shared/SectionHeadTitle";
import ServiceSlider from "../Shared/ServiceSlider";

export default function Services() {
  return (
    <div className="px-[10%] mt-28 mb-20">
      <div className="flex flex-col justify-center items-center">
        <SectionHeadTitle title={"Our Services"} />
        <h1 className="text-4xl">Our Main Services</h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ServiceSlider
            image="/images/service/service_1.jpg"
            title="Document Service"
          />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceSlider
              image="/images/service/service_2.jpg"
              title="Mobile & IT Equipment"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceSlider
              image="/images/service/service_3.jpg"
              title="Value Decleard Service"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceSlider
              image="/images/service/service_4.gif"
              title="E-commerce"
            />
          </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
