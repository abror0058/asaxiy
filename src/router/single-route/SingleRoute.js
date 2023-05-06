import React from 'react'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import { FaTelegramPlane, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { useLocation } from 'react-router-dom'
import { GrFacebookOption } from 'react-icons/gr'
import "./SingleRoute.css"

function SingleRoute() {
    const { state } = useLocation()
    return (
        <div className=' single'>
            <br />
            <div className="rasm">


                <img src={state?.url} alt="" />


            </div>
            <div className="info">
                <h1>{state?.title}</h1>
                <del>{state?.delprice}so'm</del>
                <h3>{state?.price} so'm</h3>
                <h3>Brend:PowerGymModel:A175</h3>
                <h3>Holati:● Sotuvda bor</h3>
                <p>ULASHISH</p>
                <div className="iioo">

                    <h1><FaTelegramPlane /></h1>
                    <h1><GrFacebookOption /></h1>
                    <h1><FaTwitter /></h1>
                    <h1><FaWhatsapp /></h1>
                </div>
                <div className="buttons">
                    <button className="mud">Muddatli To`lov</button>
                    <button className="savat">Savatchaga qo`shish</button>
                </div>
            </div>
        </div >
    )
}

export default SingleRoute

