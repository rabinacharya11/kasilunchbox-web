import Link from "next/link"
export default function  PlaceOrder({data}) {
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
    const createOrder = async event=>{
        event.preventDefault()
        const res = await fetch(
            'http://localhost:8000/api/create-order',
            {
              body: JSON.stringify({
                  product_name: `${data.product_name}`,
               
                  product_category: `${data.product_category} `,
                  product_id: `${data.product_id}`,
               
                  product_image: `${data.product_image}`,
                 
                  product_image_url: `${data.product_image_url}`,
                 
                  product_price: `${data.product_price}`,
                  
                  product_price_currency_type: `${data.product_price_currency_type}`,
                
                  product_minimum_order_quantity: `${data.minimum_order_quantity}`,
             
                  product_minimum_order_quantity_type: `${data.minimum_order_quantity_type}`,
               
                  product_delivery_charge: `${data.delivery_charge}`,
                
                  product_delivery_charge_currency_type: `${data.product_price_currency_type}`,
                
                  order_amount: `${event.target.quantity.value * data.product_price}`,
                  order_amount: 1,  order_quantity: `${event.target.quantity.value}`,                
                  is_delivered: 0,
                 
                  receiver_name: `${event.target.name.value}`,
              
                  receiver_address:`${event.target.address.value}`,
                 
                  receiver_phone:`${event.target.phone.value}`,
                
                  ordered_by: `${event.target.name.value}`
               

              }),
              headers: {
                'Content-Type': 'application/json',
                'Authorization' :`Bearer ${token}`             
                
              },
              method: 'POST'
            }
          )
      
          const result = await res.json()
          if(result.message ==='success'){
            alert(`Your Order Amount ${data.product_price_currency_type}${data.product_price * event.target.quantity.value} for ${data.product_name} is placed successfully! You have to pay ${data.product_price_currency_type}${data.delivery_charge * event.target.quantity.value} as a delivery charge` )
            event.target.name.value =''
            event.target.address.value =''
            event.target.quantity.value =''
            event.target.phone.value =''


          }

    }
    return (
    <>
   <form onSubmit={createOrder}>
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{data.product_name}</h1>
    <div>
      <p>
        Product Name:<strong> {data.product_name} </strong> 
        <br/> Product Price: <strong>{data.delivery_charge_currency_type}{data.product_price} perUnit </strong>
        <br/> Delivery Charge: <strong>{data.delivery_charge_currency_type}{data.delivery_charge} perUnit</strong>
             </p>
    </div>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Fill in the details to complete the order</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="md:relative">
            <label htmlFor="name"  class="leading-7 text-sm text-gray-600">Receiver Name</label>
            <input required type="text"  id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label htmlFor="address" class="leading-7 text-sm text-gray-600">Receiver Address</label>
            <input  required type="text"  id="address" name="address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label htmlFor="phone" class="leading-7 text-sm text-gray-600">Phone Number</label>
            <input required type="number"  id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label htmlFor="quantity" class="leading-7 text-sm text-gray-600">Enter Number of {data.product_name}s</label>
            <input type="number"  id="quantity" name="quantity" min={data.minimum_order_quantity} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
     
          </div>
        </div>
        
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Order Now</button>
        </div>
       
      </div>
    </div>
  </div>
  </form>
    </>)
}



export async function getServerSideProps(context) {
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
    const {query} = context
    const res = await fetch(`http://localhost:8000/api/products/${query.productId}`, {

        headers:{    
          'Content-Type' :'application/json',
          'Authorization' :`Bearer ${token}`
        }
      })
const data = await res.json() 
console.log(data);      
    return {
        props:{
            data
        }
    }
    
}