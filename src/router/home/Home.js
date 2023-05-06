import React, { useState, useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import Product from '../../components/product/Product'
import { DATA } from "../../static"
import { db } from '../../server'
import { collection, getDocs } from 'firebase/firestore'


function Home() {
    const [data, setData] = useState([])
    const productRef = collection(db, 'products')

    useEffect(() => {
        const fetchData = async () => {
            const getData = await getDocs(productRef)
            setData(getData.docs.map(i => ({ ...i.data(), id: i.id })))
        }
        fetchData()
    }, [])
    return (
        <div>
            <Banner />
            <Product data={DATA} />
            <Product data={data} admin={false} like={true} />

        </div>
    )
}

export default Home