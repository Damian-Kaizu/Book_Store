import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards, Navigation } from "swiper";

export default function SwiperContainer() {
    return (
        <>
            <Swiper
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide><img src='img/image1.png' /></SwiperSlide>
                <SwiperSlide><img src='img/image2.png' /></SwiperSlide>
                <SwiperSlide><img src='img/image3.png' /></SwiperSlide>

            </Swiper>
        </>
    );
}
