import React from 'react'
import "./Payment.css"

function Payment() {
    return (
        <div className='payment'>
            <br />
            <div className="tolov ">
                <h1>To'lov</h1>
                <h3>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</h3>
                <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333' />
                <button>Tasdiqlash</button>
                <br /> <br />
                <p>B - buyurtma uchun</p>
                <p>A - akkount uchun</p>
                <p> M - rassrochkani so'ndirish uchun</p>
            </div>
        </div>
    )
}

export default Payment