import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='bg-amber-700 flex justify-between'>
                <h1 className=' p-2 font-semibold text-2xl text-white font-serif italic'>Holistay</h1>
                <ul className='flex items-center'>
                  <Link to='/home' className='no-underline text-white '><li className= 'px-4 font-medium  hover:text-pink-500 '>
                     Home
                  </li></Link>
                  <Link to='/hotels' className='no-underline  text-white '> <li className= 'px-4 font-medium  hover:text-pink-500'>Hotels</li></Link>
                  <Link to='/bookings' className='no-underline text-white '> <li className= 'px-4 font-medium  hover:text-pink-500'>Bookings</li></Link>
                  <Link to='/logout' className='no-underline text-white '><li className= 'px-4 font-medium  hover:text-pink-500'>Logout</li></Link>
                  
                </ul>
        </div>
    </>
  )
}

export default Header
