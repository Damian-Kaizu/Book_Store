import React from 'react'

function GenreCard({ img, title }) {
    return (
        <div class="relative w-[10rem]" >
            <div className=' bg-gray-800 opacity-70'>
                <img src={img} />


            </div>
            <h1 class="absolute text-md uppercase  transparent  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {title}</h1>

        </div >
    )
}

export default GenreCard