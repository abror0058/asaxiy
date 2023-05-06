import "./Cart.css"
import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from "react-redux"
import CartWrapper from "../../components/cart-wrapperr/CartWrapper"

function Cart() {
    const cart = useSelector(s => s.cart)
    console.log(cart);
    return (

        <div>
            {
                cart.length ? <CartWrapper cart={cart} /> :


                    <Empty
                        url="https://uzum.uz/static/img/shopocat.8cee444.png"
                        title="Savatda hozircha mahsulot yoq"
                        desc="Bosh sahifadagi toplamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping" />
            }
        </div>
    )
}

export default Cart