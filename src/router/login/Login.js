import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className='login'>
            <br />
            <div className="logsign">
                <div className="login1">
                    <h4>Telefon</h4>
                    <input type="text" placeholder='+998(__)___-___-__' />
                    <input type="text" placeholder='username' />
                    <button>FAOLLASHTIRISH KODINI OLING</button>
                </div>
                <div className="login2">
                    <div className="login21">
                        <div className="login21__img">
                            <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                        </div>
                        <div className="login21__info">
                            <h3>Endi bozorga borishga hojat yo'q</h3>
                            <h4>Bizda qulay narxlar va uyga yetkazib berish mavjud</h4>
                        </div>
                    </div>
                    <div className="login21">
                        <div className="login21__img">
                            <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                        </div>
                        <div className="login21__info">
                            <h3>Tez yetkazib berish</h3>
                            <h4>Bizning xizmatimiz sizni ajablantiradi</h4>
                        </div>
                    </div>
                    <div className="login21">
                        <div className="login21__img">
                            <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                        </div>
                        <div className="login21__info">
                            <h3>Siz uchun qulayliklar</h3>
                            <h4>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</h4>
                        </div>
                    </div>
                    <div className="login21">
                        <div className="login21__img">
                            <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                        </div>
                        <div className="login21__info">
                            <h3>Bo'lib to'lash</h3>
                            <h4>12 yoki 18 oy davomida oldindan to'lov yo'q</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login