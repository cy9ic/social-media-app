import React from 'react'

export default function RCARD() {
  return (
    <>
    <div className='flex pt-4'>
        
        <div className="img">
            <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='object-cover h-14 w-14 rounded-[50%]' alt="" />
        </div>
        <div className="max-w-[220px] pl-3">
            <span className='text font-semibold'>Amkash Bimhari</span>
            <span className='text-xs pl-1 text-gray-500'>wants to add you to friends</span>
        <div className="btnarjct pt-0.5">
            <button className='text-blue-500 font-bold text-sm'>Accept</button>
            <button className=' pl-4 font-bold text-gray-400  text-sm' >Decline</button>
        </div>
        </div>

        </div></>
  )
}
