import React from 'react'

const Signout = () => {
  return (
    <>
        <div className='bg-amber-700 h-11 '>
            <h3 className='p-2 font-bold text-xl text-white font-serif'>Holi-Stay</h3>
       </div>
    <div className='my-5 p-5  text-center'>
          <h5 className='italic'>Suucessfully Signed Out</h5>
          <p className='italic text-2xl'><a href='/login'>SignIn</a> again?</p>
    </div>
    </>
  )
}

export default Signout
