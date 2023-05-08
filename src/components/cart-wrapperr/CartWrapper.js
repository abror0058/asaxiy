import React, { useState, useRef } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BsCheckSquareFill } from 'react-icons/bs'
import { useDispatch } from "react-redux"
import { addToCard, decFromCard, removeFromCard, deleteAllCart } from "../../context/action/action"
import "./Cartwrapper.css"

const TOKEN = "6188963205:AAHJYqHaqaNNp_CzqOjb_dhL-4a3_LOzMIM"
const CHAT_ID = "997501693"

// https://api.telegram.org/bot[bot_token]/getUpdates
// https://api.telegram.org/bot[bot_token]/sendMessage?chat_id=[chat_id]

function CartWrapper({ cart }) {
  const dispatch = useDispatch()

  // controlled form | component
  const [name, setName] = useState("")
  const tel = useRef()
  const address = useRef()

  const handleSend = (e) => {
    e.preventDefault()
    let text = "Buyurtma %0A%0A"
    text += `Ism: <b>${name}</b> %0A`
    text += `Tel: ${tel.current.value} %0A`
    text += `Manzil: ${address.current.value} %0A%0A`

    cart.forEach((i) => {
      text += `Nomi: ${i.title}%0A`
      text += `Soni: ${i.soni}%0A`
      text += `Narxi: ${i.price}%0A%0A`
    })

    text += `<b>Jami summa: ${cart?.reduce((a, b) => a + (b.soni * b.price), 0)} so'm</b>`

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
    const api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()


    setTimeout(() => {
      setName("")
      tel.current.value = ""
      address.current.value = ""
      dispatch(deleteAllCart())
    }, 3000)
  }
  console.log(cart[0])
  return (
    <div className="cart">
      {
        <div className="bull">

          <h2>Savatingiz, 3 ta mahsulot</h2>
          <br />
          <div className="box">
            <div className="main__cart">

              {
                cart?.map((item) => <div key={item.id} className="class">
                  <img width={90} src={item.url} alt="" />
                  <div className="betwen">
                    <p>{item.title}</p>
                    <button>powergym</button>
                  </div>
                  <div className="muth">
                    <p disabled={item.soni <= 1} onClick={() => dispatch(decFromCard(item))} className="muth__btn">-</p>
                    <h6>{item.soni}</h6>
                    <h5 onClick={() => dispatch(addToCard(item))} className="muth__btn">+</h5>
                  </div>
                  <div className="calcus">
                    <h3>{item.price} so'm</h3>
                    <p>{item.price - item.price / 1 / 4} so'm</p>
                    <button onClick={() => dispatch(removeFromCard(item))} className="delete"><RiDeleteBin5Fill />O'chirish  </button>
                  </div>
                </div>
                )}
              <br /> <br />

            </div>
            <form onSubmit={handleSend} className="right__cart">
              <b>Siz uchun eshikkacha bepul yetkazib berish.</b>
              <input type="text" placeholder='Manzil' />
              <input type="text" placeholder='Ism' />
              <button className="shop"> BUYURTMA</button>
            </form>
          </div>
        </div>


      }

    </div>
  )
}

export default CartWrapper