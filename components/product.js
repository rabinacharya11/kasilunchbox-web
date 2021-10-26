import { useRouter } from "next/router"
import Link from 'next/link'
export default function Product(props){
    const router = useRouter()
    
  
    
    return (

        <>
          <Link href={`/product/${props.id}`}>
      
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-xl hover:bg-yellow-100">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover rounded-xl object-center w-full h-full block" src={props.image}/>
        </a>
        <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{props.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{props.name}</h2>
          <div className='flex m-4 justify-between'>
          <p className="p-2 m-2">{props.price}</p>
          <Link href={`/placeorder/${props.id}`}>
          <button className='m-2 p-2 text-white bg-yellow-600  hover:bg-red-600 rounded-lg '>Order Now</button>
        </Link>
         </div>
        </div>
      </div>
      </Link>
     
          
      
        
   
        </>
    )
}
