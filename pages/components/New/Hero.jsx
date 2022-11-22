import React from 'react'
import { Box, Button, Container, createTheme, Typography } from '@mui/material'
import styles from '../../assets/contants/style';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SwiperContainer from './Swiper';

function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingX}  ${styles.paddingY}`}>
      <div className={`Hero-text flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-10 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-montserrat font-bold ss:text-[72px] text-[52px] text-black ss:leading-[80px] leading-[75px]">
            "
            <span className='text-orange-600 text-7xl'>
              Reading

            </span>
            <br className="sm:block hidden" /> {" "}

            <span className="text-black">a</span> {" "}
            <span className='text-orange-600'>good</span>{" "}
            <span className='text-black'>book</span>
          </h1>

        </div>
        <h1 className="font-montserrat font-semibold ss:text-[64px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full">
          is like taking
        </h1>
        <h1 className="font-montserrat font-semibold ss:text-[64px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full">
          a journey."
        </h1>

        <Button variant="contained" startIcon={<ArrowOutwardIcon />} ClassName="ml-6 mt-2" sx={{ color: 'black', fontWeight: 'bold', border: 1, }}>
          Expore Now
        </Button>
      </div>
      <div className={` Hero-img flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <SwiperContainer />
      </div>

    </section >
  )
}

export default Hero