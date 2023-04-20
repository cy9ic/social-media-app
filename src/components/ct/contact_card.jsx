import React from 'react'

export default function ContactCard(props) {
  return (
    <>
    
    <div className='flex mb-4 mr-16'>

    <img src={props.img} alt="" className='h-[70px] w-[65px] border rounded-[50%]' />
    

    <div className="right flex ml-5 m-2">
        <ul className=''>
            <li>
               <span className='font-bold text-lg'> {props.Name}</span>
            </li>
            <li>
            <span className=' text-sm'>  {props.location}</span>               
            </li>
        </ul>
    </div>

        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-auto mt-auto mb-[25px]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
    

    </div>
    </>
  )
}
