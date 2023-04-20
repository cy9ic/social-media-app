import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className='flex flex-col items-center p-4 '>

       <img src={props.src} alt="" className='rounded-[50%] object-cover  w-16 h-16 border-[3px] border-blue-700  '/> 
       <span className='text-center w-max' >{props.text}</span>
    </div>
    </>
  )
}
