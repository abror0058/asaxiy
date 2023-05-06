import React from 'react'
import "./Lastone.css"
import { useLocation } from 'react-router-dom'

function Lastone() {
    const { pathname } = useLocation()
    if (pathname.includes("admin")) {
        return <></>
    }
    return (
        <div className='lastone'>
            <div className="lastone1 container">
                <div className="lastore">
                    <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
                    <h4>Sizning internet do'koningiz</h4>
                    <button className='lastone_btun'><img width={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU1IikYI4pADqY9I0Too5NSDVDdjDnIza1g&usqp=CAU" alt="" /></button>
                    <button className='lastone_btn'><img width={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGctvNjXNWCykjwFwv7h0disX4tYHa2WMFmw&usqp=CAU" alt="" /></button>
                </div>
                <div className="lastoneko">
                    <img src="https://asaxiy.uz/custom-assets/images/asaxiy-apps.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Lastone