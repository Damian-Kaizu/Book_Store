import React from 'react'
import { books } from '../assets/index'
function Card1({ title, image, description }) {
    return (
        <div>

            <div className='bg-white text-cyan-700 w-[15rem] min-h-[10rem] shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-110 transition duration-300 ease-in'>

                <img src={image} className="lg:h-60 md:h-40 sm:h-30  w-full object-cover object-center" />

                <div className="p-5 flex-col gap-3 ">
                    <div className="flex items-center gap-2 ">
                        <span className=' px-2 py-1 text-xs text=cyan-50 bg-cyan-50 rounded-full'>#top1 grossing</span>
                        <span className='px-2 py-1 text-xs text=cyan-50 bg-cyan-50 rounded-full'>#most search</span>

                    </div>
                    <div >


                        <h2 className="font-semibold text-xl overflow-ellipsis overflow-hidden text-center whitespace-nowrap">{title}</h2>
                        <h3 className="font-semibold text-lg overflow-ellipsis overflow-hidden text-center whitespace-nowrap">{description}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card1
