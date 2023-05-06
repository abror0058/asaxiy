import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

function Banner() {
    return (
        <div className='container banner'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}

                loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6411577c955a4.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/644b6c0c0d5d3.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64477ac5a70d9.jpg.webp" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner