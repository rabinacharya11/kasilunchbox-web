
import {useEffect, useState} from 'react'
import Product from './product'

function AllProducts({foryous}){
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
    const [products, setProducts] = useState([])
    
useEffect(async()=>{
const res = await fetch('http://localhost:8000/api/products', {

  headers:{    
    'Content-Type' :'application/json',
    'Authorization' :`Bearer ${token}`
  }
})

const data = await res.json()
setProducts(data)
},[])
    return (<>
    
    {
        products.map(single=>{
            return <Product key={single.product_id} price={`${single.product_price_currency_type}${single.product_price}`} image={single.product_image_url} name={single.product_name} id ={single.product_id} currency_type={single.product_price_currency_type} />
        })
    }
    </>)
}
export default AllProducts
