import React from 'react'
import "./Past.css"
import { useLocation } from 'react-router-dom'


function Past() {
    const { pathname } = useLocation()
    if (pathname.includes("admin")) {
        return <></>
    }
    return (

        <div className='past '>
            <div className="past__out container">
                <h1>Asaxiy kompaniyasi haqida</h1>
                <h5>Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi. Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda</h5>
                <div className="taklif">
                    <h4>Kompaniyaning ish tamoyili</h4>
                    <hr />
                    <h4>Bizning afzalliklarimiz</h4>
                </div>
                <p>
                    "Asaxiy Books" MCHJ
                    Ro'yxatdan o'tish raqami: 646439
                    INN: 305829008
                    MCHJ rahbari: Allayev Firuz Abdunasimovich
                </p>
            </div>
        </div>
    )
}

export default Past