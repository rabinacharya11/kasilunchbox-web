import Link from "next/link"
function ProductDetail({data}){

    return (<> <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={data.product_image_url}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.product_name}</h1>
       
        <div className=" p-2"><p>{data.product_description}  </p></div>
        <div className="flex flex-row justify-between mt-6 it pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex flex-row justify-between">
            <span className="mr-3"><strong>Price:</strong> {data.product_price_currency_type}{data.product_price} {data.minimum_order_quantity_type}</span>

<div className="md:ml-4">
           <strong>Delivery Charge:</strong> {data.product_price_currency_type}{data.delivery_charge} {data.minimum_order_quantity_type}
        </div>
          </div>
         
        </div>
        
        <div className="flex justify-center">
          <span className="title-font font-medium text-2xl text-gray-900">Total Price: {data.product_price_currency_type}{data.product_price + data.delivery_charge} {data.minimum_order_quantity_type}</span>
 </div>
 <div className='flex justify-center mt-2'>
 <span className='text-center'>You can order by calling us in the given number</span>
 </div>
<div className=' flex justify-center  m-2'>
  <Link href={`/placeorder/${data.product_id}`}>
    <a className=' bg-yellow-600 mt-2 p-4 rounded-xl  text-white '> Order Now</a>
</Link>
</div>


      </div>
    </div>
  </div>
  </>
    )
}
export default ProductDetail

export async function getServerSideProps(context){
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
  const {query} =context
  const response  =await fetch(`http://localhost:8000/api/products/${query.productId}`, {

    headers:{    
      'Content-Type' :'application/json',
      'Authorization' :`Bearer ${token}`
    }
  })
  const data = await response.json()
  console.log(data)
    return {
        props:{
            data:data
        }
    }

}