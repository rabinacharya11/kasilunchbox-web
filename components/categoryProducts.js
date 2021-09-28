
import {useEffect , useState} from 'react'
import Product from './product'
function CategoryProducts({id}){
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
    const [products, setProducts] = useState([])
    const[categories, setCategories] = useState([])
    useEffect(async()=>{
        const res = await fetch(`http://localhost:8000/api/categories/${id}`, {
        
          headers:{    
            'Content-Type' :'application/json',
            'Authorization' :`Bearer ${token}`
          }
        })
        const cat_response = await fetch('http://localhost:8000/api/categories', {
  headers:{    
    'Content-Type' :'application/json',
    'Authorization' :`Bearer ${token}`
  }
})
const categories = await cat_response.json()

setCategories(categories)
        
        const data = await res.json()
        setProducts(data)
        },[])
 products.map(product=>{
       console.log(products);
       return (
           <>
       <Product/>
       </>)
   })
 

}
export default CategoryProducts