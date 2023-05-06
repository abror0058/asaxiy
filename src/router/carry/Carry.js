import React from 'react'
import "./Carry.css"


function Carry() {
    return (
        <div className='carry'>
            <br />
            <div className="trek ">
                <div className="trek__info">
                    <h1>Buyurtma holati</h1>
                    <h4>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</h4>
                    <h5>Buyurtma raqami*</h5>
                    <input type="text" />
                    <h5>Buyurtma berilgandagi telefon raqami *</h5>
                    <input type="text" />
                    <div className="chekk">
                        <input type="checkbox" />
                        <h4>I am not a robot</h4>
                    </div>
                    <button>Ko'rinish</button>
                </div>
                <div className="trek__img">
                    <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Carry