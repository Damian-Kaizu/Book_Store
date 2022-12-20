import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import GenreCard from './GenreCard'
function Genres() {
    return (
        <Box className="bg-milky p-10">
            <Stack direction='row' className='my-4 mx-10' sx={{ justifyContent: 'space-between' }}>
                <Typography >
                    <h1 className='uppercase font-bold'>Browse Genres</h1>
                </Typography>
                <Button variant='text'>
                    <Link href='#' className='text-orange-600'>See All</Link>
                </Button>
            </Stack>
            <Box className="mx-10">

                <Grid container spacing={2} className="px-4">
                    <Grid item lg={4} md={6} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance " />
                    </Grid>
                    <Grid item lg={4} md={6} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Action & Adventure" />
                    </Grid>
                    <Grid item lg={4} md={6} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Mystery" />
                    </Grid>
                    <Grid item lg={4} md={6} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                    <Grid item lg={4} md={6} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Action & Adventure" />
                    </Grid>
                    <Grid item lg={4} md={6} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Mystery" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Genres