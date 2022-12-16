import { Box, Typography } from '@mui/material'
import { textTransform } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <Box className="grid grid-flow-col mt-10">
            <Box className="mx-10 ">
                <span className='font-montserrat'>Genre</span>
                <Typography variant="h3" sx={{ textTransform: 'uppercase', fontFamily: 'bebas' }} className="font-montserrat">Book Title</Typography>
                <Typography variant='h4' sx={{ paddingTop: 1 }}>Author</Typography>
                <Typography variant="body1" sx={{ paddingTop: 4, fontFamily: 'montserrat' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem, cupiditate optio ducimus libero reiciendis consequuntur! Ipsum voluptatibus, aut dolores, expedita deserunt, sequi nesciunt provident ipsa cumque odit voluptas quo.</Typography>

            </Box>
            <Box className='mx-auto sm:w-[20rem] md:w-[20rem] lg:w-[28rem]'>
                <img src="img/image4.png" alt="" />
            </Box>
        </Box>
    )
}

export default Footer