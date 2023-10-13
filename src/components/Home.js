import React from 'react'
import { Home_IMG } from '../utils/constants'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
  return (
   <>
      
                <div className='card mx-auto mt-5' style={{width:"40rem",height:"17rem"}}>
                   <img src= {Home_IMG}
                 alt="home"    className='img-fluid card-img-top 'style={{width:"40rem",height:"17rem"}}
                   />
                
                      <h4 className='card-img-overlay my-5 text-red-500 font-serif'>
                         Holi-Stay always provides you an amazing and
                         plesant stay with 
                         your friends and family at reasonable prices.
                         We provide well-designed space with modern amenities.
                         You can reserve a room faster with our efficient Bonstay app 🤎
                      </h4>
                   
                </div>
          
   </>
  )
}

export default Home
