import React from 'react'
import "./Slide.css"
import { useLocation } from 'react-router-dom'
function Slide() {
    const { pathname } = useLocation()
    if (pathname.includes("admin")) {
        return <></>
    }
    return (
        <div className='slide'>
            <div className="slide__blue ">
                <br />
                <div className="slide__white container">
                    <img src="https://assets.asaxiy.uz/brand//63b65df2b0896.png" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//6067393b94990.webp" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp" alt="" />
                    <img src="https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slide