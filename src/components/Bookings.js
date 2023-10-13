import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { addBookingDetails } from '../redux/bookingsSlice'

import { API_OPTIONS_DELETE } from '../utils/constants'
import {ToastContainer, toast} from 'react-toastify'

const Bookings = () => {

  const bookingsdata=useSelector(store=>store.bookings.bookingdetails)
  const dispatch=useDispatch()
 
  useEffect(()=>{
    getHotelBookings()
  },[])
  const getHotelBookings=async()=>{
    const data=await fetch("https://hoteldata-b0ew.onrender.com/bookings")
    const json=await data.json()
    // console.log(json)
    dispatch(addBookingDetails(json))
  }
  const cancelRoom=async(id)=>{
    try{
  const res=await fetch("https://hoteldata-b0ew.onrender.com/bookings/"+id,API_OPTIONS_DELETE)
  toast.success("Cancelation successfull")
  
    }
    catch(error){
      toast.error(error)}
  }
  return (
    <>
    <ToastContainer theme='colored'/>
    <div className='flex flex-wrap mx-5 '>
        {bookingsdata.map((i)=>
            <div className='bg-gray-200 w-72  m-2 p-2 rounded-md' key={i.id}>
                <h5 className='p-2  font-bold font-serif italic text-center text-red-500'>{i.hotelName}</h5>
                <h6 className='px-3 py-1'><span className='text-lg'>Start Date: </span>{i.startDate}</h6>
                     <h6 className='px-3 py-1'><span className='text-lg'>End Date: </span>{i.endDate}</h6>
                     <h6 className='px-3 py-1'><span className='text-lg'>No.Of.Persons: </span>{i.noOfPersons}</h6>
                     <h6 className='px-3 py-1'><span className='text-lg'>noOfRooms: </span>{i.noOfRooms}</h6>
                     <h6 className='px-3 py-1'><span className='text-lg'>typeOfRoom: </span>{i.typeOfRoom}</h6>
                   <Link to='/reschedule' className='no-underline'state={{hotelName:i.hotelName,
                       noOfRooms:i.noOfRooms,noOfPersons:i.noOfPersons,typeOfRoom:i.typeOfRoom,
                           id:i.id}}>
                    <button className='bg-teal-400 font-semibold p-2 mx-3 w-64 rounded-md no-underline text-white'>Reschedule</button>
                  </Link>
                     <button className='bg-red-400 text-white font-semibold  p-2 mx-3 my-2 w-64 rounded-md'
                     onClick={()=>{cancelRoom(i.id)}}>cancel</button>
            </div>
        )}
  </div>
    </>
  )
}

export default Bookings

