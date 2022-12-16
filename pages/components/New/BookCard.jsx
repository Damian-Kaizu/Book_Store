import { Box } from '@mui/material'
import React from 'react'

const BookCard = ({ image, title, author, genre }) => {
    return (
        <div>

            <div className=' text-cyan-700 w-[15rem] min-h-[10rem]  shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-110 transition duration-300 ease-in'>
                <div className='mx-auto  bg-white w-[12rem] h-full rounded-lg '>
                    <img src={image} className="lg:h-60 md:h-40 sm:h-60 p-10 w-full object-cover object-center" />
                </div>

                <div className="p-5 flex-col gap-3 ">

                    <div >


                        <h2 className="font-semibold text-xl overflow-ellipsis overflow-hidden  whitespace-nowrap">{title}</h2>
                        <h3 className="font-semibold text-lg overflow-ellipsis overflow-hidden  whitespace-nowrap">{author}</h3>
                        <h3 className="font-semibold text-lg overflow-ellipsis overflow-hidden  whitespace-nowrap">{genre}</h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookCard


