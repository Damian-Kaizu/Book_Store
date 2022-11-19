import { React, useRef } from 'react'
import Navbar from './components/old/Navbar'
// import regeneratorRuntime from "regenerator-runtime";
// import "babel-polyfill"
import styles from '../styles/Home.module.css'
import { EpubViewer, ReactEpubViewer } from 'react-epub-viewer';
function Reader() {
    const viewerRef = useRef(null)
    return (
        <div className="mx-auto w-[72rem] h-[34rem]">
            <Navbar />


            <div className="w-full h-full">
                < EpubViewer
                    // url={'files/ZTO.epub'}
                    url={'files/TheArtofNotGivingAFuck.epub'}
                    ref={viewerRef}
                />
            </div>

        </div>


    )
}

export default Reader