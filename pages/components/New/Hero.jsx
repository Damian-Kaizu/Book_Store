import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
function Hero() {
    return (
        <Box className='mb-32'>
            <Stack className="mt-2" >

                <span className='text-center font-bold text-2xl'>Change Your Experience</span>
            </Stack>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
                className="mx-14"
            >
                <span className='text-[5rem] font-bold'>READ BOOKS</span>
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={4}
                className="mx-10 absolute left-[15rem] z-10 justify-evenly"
            >
                <span className='text-[6rem] text-orge font-bold '>ANYTIME</span>
                <span className='text-[6rem] ml-2 font-bold transparent-text'>ANYWHERE</span>

            </Stack>
            <Stack direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
                className="mx-20">

                <Image src="/img/image2.png" width="500" height="500" className='border-black relative top-24 left-16 ' />
                <Box>

                    <span className='text-sm relative left-14 top-20 '>Blandit turpis tristique orci cras pharetra imperdiet. At nulla eu ipsum egestas. Adipiscing eros ornare quis fringilla sed fringilla tristique. Turpis mauris ac aliquet adipiscing convallis. Amet et ipsum nisi nunc tincidunt augue leo quam.Turpis mauris ac aliquet adipiscing convallis. Amet et ipsum nisi nunc tincidunt augue leo quam.</span>
                </Box>
            </Stack>

        </Box>
    )
}

export default Hero