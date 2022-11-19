import React from 'react'

function CardImg({ id, image, title, description }) {
    return (


        <>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                        src={image} alt="blog" />
                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h1 class="text-2xl font-semibold mb-3">{title}</h1>
                        <p class="leading-relaxed mb-3">{description}</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CardImg