import React from 'react'

export default function PERSONCARD() {
  return (
    <>
    <div className="main flex pt-5">
      
        <div className="img">
            <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-14 w-14 rounded-[50%] object-cover' alt="" />

        </div>
        <div className='pl-3 p-2'>
        <button>
            <ul >
                <li className='font-bold'>Amkash Bimhari</li>
                <li className='text-sm text-gray-400 -ml-12 '>Bihar, India</li>
                
               
            </ul>
            
            
        </button>
        </div>
        
        <button className='ml-auto mt-2 text-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            </button>
            
    </div>
    </>
  )
}
