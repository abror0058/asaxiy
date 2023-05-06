import React from 'react'
import "./Navbar.css"
import { FiSearch } from "react-icons/fi"
import { MdPayment } from "react-icons/md"
import { FaBars } from "react-icons/fa"
import { AiFillCar, AiOutlineShoppingCart, AiOutlineBars, AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to={"/"} className="nav__logo">
                <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
            </NavLink>

            <div className="search">
                <input type="text" placeholder='Qidirish...' />
                <p><span><FiSearch /></span>Qidirish</p>
            </div>
            <div className="katalog">
                <FaBars />
            </div>
            <div className="nav__links">
                <NavLink to={"/"} className="nav__link">
                    <AiOutlineHome />
                    <span>Bosh sahifa</span>
                </NavLink>
                <NavLink to={"payment"} className="nav__link">
                    <MdPayment />
                    <span>to'lov</span>
                </NavLink>
                <NavLink to={"carry"} className="nav__link">
                    <AiFillCar />
                    <span>Trek</span>
                </NavLink>
                <NavLink to={"cart"} className="nav__link">
                    <AiOutlineShoppingCart />
                    <span>Savatcha</span>
                </NavLink>
                <NavLink to={"wishlist"} className="nav__link">
                    <AiOutlineHeart />
                    <span>Sevimlilar</span>
                </NavLink>
                <NavLink to={"login"} className="nav__link">
                    <AiOutlineUser />
                    <span>kabinet</span>
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar