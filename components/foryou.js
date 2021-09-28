import { data } from 'autoprefixer'
import {useEffect, useState} from 'react'
import Product from './product'

function ForYou({}){
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
    const [foryou, getForYous] = useState([])
    
useEffect(async()=>{
const res = await fetch('http://localhost:8000/api/for-yous', {

  headers:{    
    'Content-Type' :'application/json',
    'Authorization' :`Bearer ${token}`
  }
})

const data = await res.json()
getForYous(data)
},[])
    return (<>
    
    {
        foryou.map(single=>{
            return <Product key={single.product_id} foryou={1}  image={single.product_image_url} name={single.product_name} id ={single.product_id}  price={`${single.product_price_currency_type}${single.product_price}` }/>
        })
    }
    </>)
}
export default ForYou
