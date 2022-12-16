import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import styles from '../../assets/contants/style'
function Trending() {
  return (
    <Box className="mt-2">

      <Stack className='text-center '>
        <span className='transparent-text uppercase font-bold  text-[4rem] mt-10'>

          Top Trending
        </span>
      </Stack>
      <Box className="sm:mx-10 sm:mt-2 md:mx-2 md:mt-10 ">


        <Grid container>
          <Grid item lg={6} className='mx-2'>

            <Box className='w-[20rem] flex  sm:my-10 md:my-10 lg:my-14 mx-10 md:mx-20 lg:mx-52 rounded-lg'>
              <img className='w-[400px] h-[200px]' src='/img/book1.png' />
              <Box sx={{ borderRight: 1, borderBottom: 1, borderTop: 1 }} className='mx-2'>
                <h2 className='text-2xl font-bold'>Book Title</h2>
                <p>Consectetur deserunt veniam proident minim do incididunt in sit officia anim cillum exercitation.</p>
                <Box className='flex mx-2 text-sky-600'>
                  <Button>Read More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} className='mx-2'>

            <Box className='w-[20rem] flex flex-row  sm:my-10 md:my-10 lg:my-14 mx-10 md:mx-20 lg:mx-52 rounded-lg'>
              <img className='w-[400px] h-[200px]' src='/img/book1.png' />
              <Box sx={{ borderRight: 1, borderBottom: 1, borderTop: 1 }} className='mx-2'>
                <h2 className='text-2xl font-bold'>Book Title</h2>
                <p>Consectetur deserunt veniam proident minim do incididunt in sit officia anim cillum exercitation.</p>
                <Box className='flex mx-2 text-sky-600'>
                  <Button>Read More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} className='mx-2'>
            <Box className='w-[20rem] flex  sm:my-10  md:my-10 lg:my-14 mx-10 md:mx-20 lg:mx-52 rounded-lg'>
              <img className='w-[400px] h-[200px]' src='/img/book1.png' />
              <Box sx={{ borderRight: 1, borderBottom: 1, borderTop: 1 }} className='mx-2'>
                <h2 className='text-2xl font-bold'>Book Title</h2>
                <p>Consectetur deserunt veniam proident minim do incididunt in sit officia anim cillum exercitation.</p>
                <Box className='flex mx-2 text-sky-600'>
                  <Button>Read More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} className='mx-2'>
            <Box className='w-[20rem] flex  sm:my-10  md:my-10 lg:my-14 mx-10 md:mx-20 lg:mx-52 rounded-lg'>
              <img className='w-[400px] h-[200px]' src='/img/book1.png' />
              <Box sx={{ borderRight: 1, borderBottom: 1, borderTop: 1 }} className='mx-2'>
                <h2 className='text-2xl font-bold'>Book Title</h2>
                <p>Consectetur deserunt veniam proident minim do incididunt in sit officia anim cillum exercitation.</p>
                <Box className='flex mx-2 text-sky-600'>
                  <Button>Read More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid >
      </Box>
    </Box>
  )
}

export default Trending