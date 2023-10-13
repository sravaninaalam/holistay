import React from 'react'

const Shimmer = () => {
  return (
    <div >
       {Array(7).fill("").map((e,index)=><div key={index} className='w-2/3 h-48 mx-auto bg-gray-200 flex my-2 p-2'></div>)}
    </div>
  )
}

export default Shimmer
