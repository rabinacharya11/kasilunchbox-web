

export default function Search
({data}){
const handleSubmit = (event)=>{
    event.preventDefault()

   
}

    return (
        <>
        <div>
           <h1>{data.length}</h1>
            
<form onSubmit={handleSubmit}>

            <input type="text" className='bg-gray-600 text-white' name="query"/>     
</form>
               </div>
            
        </>
    )
}
export async function getServerSideProps(context){
    const {query} = context
    const token = '1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc'
    const res = await fetch(`http://localhost:8000/api/search-products/${query.query}`, {

  headers:{    
    'Content-Type' :'application/json',
    'Authorization' :`Bearer ${token}`
  }   

}


)
const data = await res.json()

return {
    props:{
        data
    }
}

}