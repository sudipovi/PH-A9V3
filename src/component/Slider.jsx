import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation } from "swiper/modules";

import i1 from "../assets/img1.jpg";
import i2 from "../assets/img2.jpg";
import i3 from "../assets/img3.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={i1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={i2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={i3}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
