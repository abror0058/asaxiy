import React from 'react'
import "./Empty.css"

function Empty({ title, url, desc }) {
    return (
        <div className='empty '>
            <h2>{title}</h2>
            <button>Akkauntga kirish</button>
        </div>
    )
}

export default Empty