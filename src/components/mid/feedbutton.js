import React from 'react'

export default function FeedBTN(props) {
  return (
    <>
    
    <button className={`  py-4  bg-${props.color} hover:bg-gray-800 px-6 text-xl font-semibold text-${props.color==='white'?'black':'white'} rounded-l-2xl rounded-r-xl`}>

    {props.text}


    </button>
    </>
  )
}
