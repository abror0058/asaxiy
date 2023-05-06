import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import Product from '../../components/product/Product'


function Wishlist() {
    const data = useSelector(s => s.heart)

    return (
        <div className='wishlist'>
            {
                data.length ?
                    <Product data={data} />
                    :
                    <Empty
                        title="Sevimlilar ro'yhati bo'sh"
                    />
            }
        </div>
    )
}

export default Wishlist