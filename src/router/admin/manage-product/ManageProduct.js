import React, { useState } from 'react'
import "../Admin.css"
import { db } from "../../../server"
import { collection, getDocs } from "firebase/firestore"
import Products from "../../../components/product/Product"

function ManageProduct() {
  const [data, setData] = React.useState([])
  const [refresh, setRefresh] = useState(false)
  const productRef = collection(db, "products")


  React.useEffect(() => {
    const fetchData = async () => {
      const getData = await getDocs(productRef)
      setData(getData.docs.map(i => ({ ...i.data(), id: i.id })))
    }
    fetchData()
  }, [refresh])

  return (
    <div>
      <h2>ManageProduct</h2>
      <Products setRefresh={setRefresh} admin={true} data={data} />
    </div>
  )
}

export default ManageProduct