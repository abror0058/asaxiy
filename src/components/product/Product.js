import React from 'react'
import "./Product.css"
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart, AiOutlineDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToHeart, addToCard, removeFromHeart } from "../../context/action/action"
import { db } from "../../server/index"
import { deleteDoc, doc } from "firebase/firestore"
import { BsCartFill } from 'react-icons/bs'


function Product({ data, admin, setRefresh, like }) {

    const dispatch = useDispatch();
    const heart = useSelector((s) => s.heart);

    const handleDelete = async (id) => {
        if (window.confirm("are you sure")) {
            await deleteDoc(doc(db, "products", id))
                .then()
                .catch()
                .finally(() => setRefresh(p => !p))
        }
    }
    return (
        <div className=' products'>
            {
                data?.map((item) => <div key={item.id} className="pro__card">
                    <div className="pro__image">
                        <Link to={`/product/${item.id}`} state={item}>
                            <img src={item.url} alt="" />
                        </Link>
                        {
                            heart
                                ?
                                heart?.some(i => i.id === item.id) ?
                                    <AiFillHeart className='like__btn' onClick={() => dispatch(removeFromHeart(item))} />
                                    :
                                    <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
                                :
                                <></>
                        }
                    </div>
                    <div className="pro__body">
                        <p className="pro__card-title">{item.title.length > 55 ? item.title.slice(0, 55) + "..." : item.title}</p>
                        <div className="pro__card-price">
                            <div>

                                <del>{item.delprice}so'm</del>
                                <p>{item.price}so'm</p>
                                <span className='pro__card-monthly'>{Math.round(item.price * 1.5 / 12)} so`m oyiga</span>
                            </div>
                            {
                                admin
                                    ?
                                    <AiOutlineDelete className='pro__card-shopping' onClick={() => handleDelete(item.id)} />
                                    :
                                    <button className='pro__card-shopping' onClick={() => dispatch(addToCard())} >
                                        <BsCartFill />
                                    </button>
                            }
                        </div>
                        <div className="pro__btn">

                            <button className='btn11'>Rassrochka</button>
                            <button className='btn12'>Bir klikda olish</button>
                        </div>
                    </div>

                </div>)
            }
        </div>

    )
}

export default Product
