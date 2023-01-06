import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
function Hero() {
    return (
        <Box className='px-20 pb-20 bg-white'>
            <Stack className="py-10" >

                <span className='text-center font-bold text-2xl'>Change Your Experience</span>
            </Stack>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
                className="mx-2"
            >
                <span className='md:text-[4.5rem] sm:text-[3rem] font-bold'>READ BOOKS</span>
            </Stack>

            <Box className="absolute md:left-[18rem] sm:left-[14rem] z-10 justify-evenly">
                <span className='md:text-[6rem] sm:text-[2rem] text-orge font-bold '>ANYTIME</span>
                <span className='md:text-[6rem] sm:text-[2rem] ml-2 font-bold transparent-text'>ANYWHERE</span>

            </Box>

            <Stack direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
                className="px-10">

                <Image src="/img/image2.png" width="600" height="500" className='border-black relative top-[6rem] left-16 ' />
                <Box className="px-10 ">

                    <span className='text-sm relative left-[2rem] top-20 '>Blandit turpis tristique orci cras pharetra imperdiet. At nulla eu ipsum egestas. Adipiscing eros ornare quis fringilla sed fringilla tristique. Turpis mauris ac aliquet adipiscing convallis. Amet et ipsum nisi nunc tincidunt augue leo quam.Turpis mauris ac aliquet adipiscing convallis. Amet et ipsum nisi nunc tincidunt augue leo quam.</span>
                </Box>
            </Stack>

        </Box>
    )
}

export default Hero