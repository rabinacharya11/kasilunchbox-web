import Link from "next/link"
export default  function HeroSection(){
    
   
return (
    <>
   
   <div className='flex flex-col  h-1/2 z-0'>
   <div className='h-80 w-full z-10 text-center bg-red-100 '>
     <div >
       <h1 className='mt-24 md:mt-30 md:text-6xl text-3xl' >Kasi Lunch Box</h1>
       <p> We function on your taste</p>

       </div>
       <div className='text-center  w-40 mt-4 mx-auto hover:bg-blue-600 rounded-lg bg-yellow-600 p-2'>   
           <Link href='/contact'>
            <a className='text-center text-white '>Contact Us</a>
            </Link>
       </div>
     </div>
   </div>
 
    </>
)
}