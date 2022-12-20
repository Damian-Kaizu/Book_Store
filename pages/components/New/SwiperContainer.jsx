import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards, Navigation } from "swiper";
import { Box } from "@mui/system";
import { Button, IconButton, Stack } from "@mui/material";
const buttonStyles = {

}
export default function SwiperContainer() {
    return (
        <>
            <Box className="pr-6">

                <IconButton className="previous"><ArrowBackIosIcon className="text-black" /> </IconButton>
            </Box>


            <Box className="px-4">

                <Swiper
                    navigation={{ nextEl: '.next', prevEl: ".previous" }}
                    effect={"cards"}
                    grabCursor={true}
                    autoplay
                    modules={[EffectCards, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide ><img src='img/image1.png' /></SwiperSlide>
                    <SwiperSlide ><img src='img/image2.png' /></SwiperSlide>
                    <SwiperSlide ><img src='img/image3.png' /></SwiperSlide>

                </Swiper>
            </Box >
            <Box className="pl-6">

                <IconButton className="next "><ArrowForwardIosIcon className="text-black" /> </IconButton>
            </Box>



        </>
    );
}
