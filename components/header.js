import Link from 'next/link'
export default function Header(){

    return (
        <>
 

            <div className="flex flex-col">
            <div className="bg-gray-900 md:flex md:flex-row md:justify-between md:w-full md:mt-2 ">
        
          <div className="flex flex-row justify-center md:flex md:flex-row">
              <div className=" bg-gradient-to-r from-purple-500 to-red-500 md:h-10   md:w-10 rounded m-2"></div>
              <div className="text-center m-4 text-white md:text-xl font-bold">Kasi Lunch Box</div>
            </div>
          
            <div className="md:flex md:flex-row text-center">
<Link href="/">

              <a  className="  p-4 text-white  hover:text-blue-700  md:hover">Home</a>
</Link>  

          
               
<Link href="/about">            
                <a className=" p-4  text-white hover:text-blue-700">About</a> 
                </Link>
                <Link href="/contact">              
                <a  className=" hidden text-white  md:block p-4 hover:text-blue-700">Contact</a>               
                      </Link>        
              
            </div>
           </div>
            </div>
          
 
            
            
           

        </>
    )
}
