import React from 'react'

export default function Middle(props) {
  return (
    <>
    <ul>
    <li className='flex  hover:font-semibold hover:text-blue-500 hover:cursor-pointer text-lg'>
      
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[32px] text-gray-300   font-semibold h-[28px]">
  <path strokeLinecap="round" strokeLinejoin="round" d={props.ele} />
</svg>

 <p className='pl-5 '>{props.Name}</p>
</li>
    </ul>
    </>
  )
}
