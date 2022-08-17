import React from "react";
import MainEvents from "../components/MainEvents";
import WhoAdd from "../components/WhoAdd";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import Event from "./Event";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Home = () => {
  return (
    <>
      <aside className="col-3 d-none d-lg-block">
        <MainEvents />
        <WhoAdd />
        <Footer />
      </aside>

      <main className="col-12 col-lg-9">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <Calendar />
          </SwiperSlide>
          <SwiperSlide>
            <Event />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Home;
