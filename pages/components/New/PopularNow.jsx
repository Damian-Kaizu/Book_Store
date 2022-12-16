import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import BookCard from './BookCard'
import { books } from "../../assets/index"

const PopularNow = () => {
    return (
        <Box className=" bg-yellow-400 mb-20">
            <Box className="mx-6 my-2 p-10">

                <Stack direction="row " sx={{ justifyContent: 'space-between' }}>
                    <span className='uppercase text-2xl'>
                        Popular Now
                    </span>
                    <Button variant='text'>
                        <Link href='#' className='text-orange-600'>See All</Link>
                    </Button>
                </Stack>
            </Box>
            <Box className="mx-auto">

                <Box className='book-content-container' >
                    {books.map((book) => (
                        <div className='book-content'>
                            <BookCard image={book.image} title={book.title} author={book.author} genre={book.genre} />

                        </div>
                    ))}
                    {/* {books.map((book) => (
                        <Grid item sm={6} md={4} lg={3} className='mx-auto sm:p-4 md:p-8 lg:p-10'>
                            <BookCard image={book.image} title={book.title} author={book.author} genre={book.genre} />

                        </Grid>
                    ))}
                    {books.map((book) => (
                        <Grid item sm={6} md={4} lg={3} className='mx-auto sm:p-4 md:p-8 lg:p-10'>
                            <BookCard image={book.image} title={book.title} author={book.author} genre={book.genre} />

                        </Grid>
                    ))} */}


                </Box>
            </Box>



        </Box >
    )
}

export default PopularNow