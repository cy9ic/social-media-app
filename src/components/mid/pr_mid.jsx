import React from 'react'
import SBT from './search_btn'
import BTN2 from './btn2'
import Viewall from '../ct/viewallbtn'
import Card from './card'
import FeedBTN from './feedbutton'
import MAINF from './mainfeedcard'

export default function PRMID() {
  return (
    <>
    
    <div className="main w-[50%] ml-[25%] border-r-[0.5px] pr-6 bg-gray-100">
        <div className='flex'> 
        <SBT></SBT>
    <BTN2></BTN2>
    </div>
    

    <div className='Stories  mt-10 ml-10 '>
        <div className="temp flex">
        <span className='text-3xl font-bold pt-3'>Stories</span>
        <button className='text-blue-500 font-bold ml-auto mb-5 pt-5 pr-5'>
        Watch All 
            </button>
            </div>

        <div className='flex -ml-3 mt-0'>
        <Card text='Add story'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png'  />
        <Card text='Scarlet' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
        <Card text='John' src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg' />
        <Card text='Jonny' src='https://xsgames.co/randomusers/assets/avatars/male/74.jpg' />
        <Card text='Pinky' src='https://t3.ftcdn.net/jpg/05/16/36/14/360_F_516361406_EanyWUKdEA1TaahDGuEstt23e6W1camE.jpg' />
        <Card text='BTS' src='https://www.shutterstock.com/image-photo/groups-different-people-standing-randomly-260nw-560374096.jpg' />
        <Card text='Double' src='https://xsgames.co/randomusers/assets/avatars/male/74.jpg' />
        <Card text='Dobule2' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
        </div>
        
        <div className="feedup flex mt-5">

        <span className='text-3xl pt-[10px] font-bold'>Feeds</span>

        <div className='ml-auto'>
          <FeedBTN text="Popular" color='blue-500'></FeedBTN>
             
    <button className={`p-4 bg-white px-8 text-xl font-semibold text-black rounded-r-2xl rounded`}>
  Latest
          </button>
          
        </div>

        </div>


        

    </div>

    <div className='feed-text w-[100%] h-auto'>

          <MAINF/>
          <MAINF/>
          <MAINF/>
          <MAINF/>
          <MAINF/>
          <MAINF/>
          <MAINF/>
          <MAINF/>
          
          
        </div>
    </div>


    
    

    </>
  )
}
