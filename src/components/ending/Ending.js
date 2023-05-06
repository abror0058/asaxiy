import React from 'react'
import "./Ending.css"
import { useLocation } from 'react-router-dom'
function Ending() {
    const { pathname } = useLocation()
    if (pathname.includes("admin")) {
        return <></>
    }
    return (
        <div className="ending">
            <br />
            <div className="end container">

                <div className="ending21">
                    <div className="ending__img">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                    </div>
                    <div className="ending__info">
                        <h3>Endi bozorga borishga hojat yo'q</h3>
                        <h4>Bizda qulay narxlar va uyga yetkazib berish mavjud</h4>
                    </div>
                </div>
                <div className="ending21">
                    <div className="ending__img">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                    </div>
                    <div className="ending__info">
                        <h3>Tez yetkazib berish</h3>
                        <h4>Bizning xizmatimiz sizni ajablantiradi</h4>
                    </div>
                </div>
                <div className="ending21">
                    <div className="ending__img">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                    </div>
                    <div className="ending__info">
                        <h3>Siz uchun qulayliklar</h3>
                        <h4>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</h4>
                    </div>
                </div>
                <div className="ending21">
                    <div className="ending__img">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                    </div>
                    <div className="ending__info">
                        <h3>Bo'lib to'lash</h3>
                        <h4>12 yoki 18 oy davomida oldindan to'lov yo'q</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ending