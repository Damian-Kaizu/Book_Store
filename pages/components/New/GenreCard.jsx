import React from 'react'

function GenreCard({ img, title }) {
    return (
        <div class="relative w-[20rem] border-4 border-bordercolor rounded-md" >
            <div className=' bg-slate-500 opacity-60'>
                <img src={img} />


            </div>
            <span class="absolute text-xl uppercase   transparent  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {title}</span>

        </div >
    )
}

export default GenreCard