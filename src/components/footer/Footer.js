import React from 'react'
import "./Footer.css"
import { BsFacebook, BsTelegram, BsInstagram, BsYoutube } from "react-icons/bs"
import { useLocation } from 'react-router-dom'

function Footer() {
    const { pathname } = useLocation()
    if (pathname.includes("admin")) {
        return <></>
    }
    return (
        <div className='footer'>
            <div className="foot1">
                <h3>Ma'lumotlar</h3>
                <p>Ko'p so'raladigan savollar</p>
                <p>Olib ketish punktlari</p>
                <p>Blog</p>
                <p>Biz haqimizda</p>
                <p>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</p>
                <p>Ommaviy oferta (Foydalanuvchi bitimi)</p>
            </div>
            <div className="foot2">
                <h3>Biz bilan aloqa</h3>
                <p>Tel: +998 71 200 01 05</p>
                <p>Gmail: info@asaxiy.uz</p>
                <p>address:​Islom Karimov, 49, Toshkent</p>
            </div>
            <div className="foot3">
                <h3>Erishgan yutuqlarimiz</h3>
                <p>Tahsin" mukofoti</p>
                <p> "Kelajak bunyodkori" medali</p>
                <p>"Shuhrat" medali</p>
                <h3>Biz ijtimoiy tarmoqlarda</h3>
                <div className="foot__icons">
                    <BsFacebook />
                    <BsTelegram />
                    <BsInstagram />
                    <BsYoutube />
                </div>
            </div>
        </div>
    )
}

export default Footer