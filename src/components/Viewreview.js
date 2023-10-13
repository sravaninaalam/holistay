import React, { useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom'

// const Viewreview = () => {
//     const location=useLocation()
//     const {id}=location.state
//     const [reviews,setReviews]=useState([])
//     const[instantreviews,setInstantReviews]=useState([])
//     useEffect(()=>{
//        gerReviews()
//     },[id])
//     async function gerReviews(){
//         const res=await fetch("https://hoteldata-b0ew.onrender.com/hotels/"+id)
//        const data=await res.json()
//        setReviews(data?.reviews)
//        setInstantReviews(data?.review)
//     }
   
//   return <>
//         <div className=' mx-auto my-5 bg-slate-100 shadow-lg rounded-md p-2'>
//             <h5 className='italic font-bold text-center text-red-400'>Custom Reviews</h5>
//              {
//                 reviews &&<div>
//                     {reviews .length>1 ?<ul className='p-3 my-1 font-serif text-xl italic'>
//                      {reviews.map(r=><li key={id}>{r}❤</li>)}
//                      </ul>:<p className='p-3 my-1 font-serif text-xl  italic'>{reviews}❤</p>}
//                 </div>
//             }
//             {
//                 instantreviews &&
//                     <p className='p-3 font-serif text-xl italic'>{instantreviews}</p>      
//             }
//         </div>
//         
//   </>
// }

// export default Viewreview

const Viewreview = () => {
    const location=useLocation()
        const {id}=location.state
        const [reviews,setReviews]=useState([])
        const[instantreviews,setInstantReviews]=useState([])
        useEffect(()=>{
           gerReviews()
        },[id])
        async function gerReviews(){
            const res=await fetch("https://hoteldata-b0ew.onrender.com/hotels/"+id)
           const data=await res.json()
           setReviews(data?.reviews)
           setInstantReviews(data?.review)
        }
  return (
    <div className=' w-2/3  mx-auto my-5 p-2 bg-slate-100 shadow-lg rounded-md'>
         <h5 className='italic font-bold text-center text-red-400'>Custom Reviews</h5>
             {
                reviews &&<div>
                    {reviews .length>1 ?<ul className='p-3 my-1 font-serif text-xl italic'>
                     {reviews.map(r=><li key={id}>{r}❤</li>)}
                     </ul>:<p className='p-3 my-1 font-serif text-xl  italic'>{reviews}❤</p>}
                </div>
            }
            {
                instantreviews &&
                    <p className='p-3 font-serif text-xl italic'>{instantreviews}</p>      
            }
            <Link to='/addreview' state={{id:id}} className='no-underline text-black mx-[70%]'>
             <button className='p-2 m-2 bg-green-700 rounded-md font-bold text-white'>Add Your Review</button></Link>
    </div>
  )
}

export default Viewreview
