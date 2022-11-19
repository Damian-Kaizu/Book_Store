import { Box, Card, Stack, Typography, CardMedia, CardContent, CardActions, Button, Grid, Link } from '@mui/material'
import React, { Component } from 'react'
import { books } from '../assets/index';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card1 from './Card'
import CardImg from './CardImg';
export class Bookshowcase extends Component {
    render() {

        return (
            <Box className="my-5 mx-2 bg-white border rounded-xl ">
                <Box sx={{ display: 'flex', justifyContent: 'space-between ' }} className="px-12 py-4">
                    <Typography variant='h5'>All Books</Typography>
                    <Button variant='text' sx={{ borderRadius: '10px' }} endIcon={<ArrowRightAltIcon />} fontSize="small" href='#'>Browse Books</Button>
                </Box>
                <Grid container spacing={3} className="px-2 py-10 max-w-[145rem]" >
                    {books.map((book) => (
                        <Grid item className='mx-auto'>
                            <Card1 image={book.image} title={book.title} description={book.author} />
                            {/* <CardImg image={book.image} title={book.title} description={book.description} /> */}
                        </Grid>
                    ))}


                </Grid>

            </Box >
        )
    }
}

export default Bookshowcase