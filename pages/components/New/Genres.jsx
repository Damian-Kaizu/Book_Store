import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import GenreCard from './GenreCard'
function Genres() {
    return (
        <Box className="bg-orange p-10">
            <Stack direction='row' className='my-4 mx-10' sx={{ justifyContent: 'space-between' }}>
                <Typography >
                    <h1 className='uppercase font-bold'>Browse Genres</h1>
                </Typography>
                <Button variant='text'>
                    <Link href='#' className='text-orange-600'>See All</Link>
                </Button>
            </Stack>
            <Box className="mx-10">

                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                    <Grid item lg={4} md={4} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                    <Grid item lg={4} md={4} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                    <Grid item lg={4} md={4} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                    <Grid item lg={4} md={4} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                    <Grid item lg={4} md={4} className="mx-1">

                        <GenreCard img='/img/image1.png ' title="Romance" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Genres