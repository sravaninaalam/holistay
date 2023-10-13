import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Shimmer from './Shimmer'
const Hotels = () => {
  const[hoteldata,setHotelData]=useState([])
  useEffect(()=>{
     getHotelData()
  },[])
  async function getHotelData(){
    const data=await fetch("https://hoteldata-b0ew.onrender.com/hotels")
    const json=await data.json()
    setHotelData(json)
  
  }
  
  return (hoteldata.length===0)?<Shimmer/>:(
   <>
      <div>
      
          {hoteldata.map((i)=>
             <div key={i.id} className='w-3/4 mx-auto bg-white flex my-2 p-2 shadow-lg'>
                 <img src={i.imageUrl} className='w-52 '/>
                 <div>
                    <h5 className='text-center italic text-red-400 text-xl'>{i.hotelName}</h5>
                    <p className='px-10 font-medium'><span className='font-medium'>City: </span>{i.city}</p>
                    <p className='px-10'><span className='font-medium'>Amenities:</span>{i.amenities}</p>
                    <p className='px-10'><span className='font-medium'>Address: </span>{i.address}</p>
                    <p className='px-10'><span className='font-medium'>Phone No: </span>{i.phoneNo}</p>
                  </div>
                  <div className='card-body d-flex flex-column'>
                <Link to='/bookroom' state={{name:i.hotelName}}><button className='bg-teal-400 font-semibold text-white p-2 m-2 float-right'>Book Room</button></Link>
                  <Link to='/addreview' state={{id:i.id}}><button className='bg-teal-400 font-semibold text-white float-right p-2 m-2'>Add Review</button></Link>
                 <Link to='/viewreview' state={{id:i.id}}><button className='bg-teal-400 font-semibold text-white  float-right p-2 m-2'>View Review</button></Link>
                  </div>
             </div>
          )}
      </div>
   </>
  )
}

export default Hotels
