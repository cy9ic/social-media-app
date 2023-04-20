import React from 'react'
import Middle from './middle'
import ContactCard from './contact_card'
import Viewall from './viewallbtn'

export default function PR1(props) {
  return (
    
    <div className="tt w-[25%]  fixed flex-col h-[100%] pl-5 pt-5  border">
    <div className='flex-col '>
    <div className="upper ">
      <div className="person flex flex-col  justify-center items-center pr-10">
        <img src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=is&k=20&c=9S-ZGkvGRCMwg33JOPrqVsAxIYx_u99Wm_w-1jXzdpc=" alt=""  className='h-24 w-24'/>
        <p className="text-2xl text-center font-bold w-max">{props.Name}  </p>
        <p className="text-sm text-gray-500 font-semibold text-center w-max">{props.Place}</p>

      </div>
    <div className="mt-4">
      <div className="info w-[80%] flex justify-between items-center ">
      <p className="text-2xl font-bold">124.4k</p>
      <p className="text-2xl font-bold">15k</p>
      <p className="text-2xl font-bold">1.04M</p>
      </div>
      <div className="lower w-[80%] flex justify-between ml-1 align-middle">
      <p className="text-sm  font-semibold text-gray-500">Posts</p>
      <p className="text-sm font-semibold text-gray-500">Followers</p>
      <p className="text-sm font-semibold text-gray-500">Following</p>
      </div>
      </div>

    </div>
  <div className='line my-7'>
    <br/>
    <p className='font-semibold  text-gray-300 leading-[6px] '>. .  .  . . . . . . . . . . .  . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </p>
  </div>

    <div className="middle flex flex-col pl-7 gap-8 mt-6">

    <Middle Name='Feed' ele='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
    <Middle Name='Explore' ele='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6' />
    <Middle Name='Favourites' ele='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z' />
    <Middle Name='Direct' ele='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
    <Middle Name='Stats' ele='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
    <Middle Name='Settings' ele='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
   


    </div>
    <div className='line my-7 '>
    <br/>
    <p className='font-semibold text-gray-300 leading-[6px]'>. .  .  . . . . . . . . . . .  . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </p>
  </div>

    <div className="lower mt-10  ">


      <p className='font-bold text-xl pl-5 mb-5 '>Contacts</p>
      <div className='pl-7 mt-11'>
        <ContactCard  img='https://xsgames.co/randomusers/assets/avatars/male/74.jpg' Name="Rimshi" location="Rajpura, Punjab"/>
        <ContactCard  img='data:image/jpeg;base64,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' Name="Amkash" location="Bihar"/>
        <ContactCard img='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' Name="Yumvraj" location="Lahore, Pamkistan"/>
        
      </div>

<Viewall/>


    </div>

   

    </div>
    </div>
    
  
  )
}



