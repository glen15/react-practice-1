import React, { useState } from 'react'
import './BigImg.css';


const bigImg = ({big}) => {
    return (
        <>
            <section className="gallery__big">
                <img className="gallery__bigImg" src={big}/>
            </section>
        </>
    )
}

export default bigImg;