import React from 'react'
import RUPPER from './rupper'
import RCARD from './request_card'
import PERSONCARD from './personcard'
import Viewall from '../ct/viewallbtn'
import ActiveFollowers from './activefollower'

export default function PRRIGHT() {
  return (
    <>
    <div className="main fixed ml-[77%] w-max pl-5">
    <div className='mt-5 pt-2'>
    <RUPPER/>
    </div>
    <div className='flex-col '>
        <RCARD/>
        <RCARD/>

    </div>
    <div className="line">
    <p className='font-semibold  text-gray-300  '>. .  .  . .  . . . . . . .  . . . . . . . . . . . .  . . . . . . . . .  . . . . . . . . . . . . .  </p>
    </div>

    <div className='pt-5'>
        <span className='text-lg font-bold '>Suggestions for you </span>
    </div>
    <div className="personcard">
    <PERSONCARD/>
    <PERSONCARD/>
    <PERSONCARD/>
    <PERSONCARD/>
    <PERSONCARD/>
    </div>

    <div className='mt-4'></div>
    <Viewall/>

    <div className="line ">
    <p className='font-semibold  text-gray-300  '>. .  .  . .  . . . . . . .  . . . . . . . . . . . .  . . . . . . . . .  . . . . . . . . . . . . . </p>
    </div>


    <div className="follower">
        <ActiveFollowers/>
    </div>

    <div className="line ">
    <p className='font-semibold  text-gray-300  '>. .  .  . .  . . . . . . .  . . . . . . . . . . . .  . . . . . . . . .  . . . . . . . . . . . . .  </p>
    </div>


    <div className='pt-3 '>

      <ul className='flex gap-4 font-semibold text-gray-400  my-2 pl-4'>
        <button><li>About</li></button>
        <button><li>Accessibility</li></button>
        <button><li>Help Center</li></button>

      </ul>

      <ul className='flex pl-4 gap-4 my-2 font-semibold text-gray-400 '>
        
        <button><li>Privacy and Terms</li></button>
        
        <button><li>Advertising</li></button>

      </ul>

      <ul className=' pl-4 flex gap-4 my-2 font-semibold text-gray-400'>
      <button><li>Bussiness Services</li></button>
      

      </ul>


    </div>

    </div>


    
    
    
    </>
  )
}
