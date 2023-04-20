import React from 'react'

export default function ActiveFollowers() {
  return (
    <>
    
    <div className='main mt-5 p-5 mb-5 rounded-3xl h-[150px] w-[300px] bg-gray-200 '>

    <button className='  h-10 '>

    <div className="images  flex">
        <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-12 w-12  rounded-[50%] object-cover' alt="" />
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" className='h-12 w-12  rounded-[50%] -ml-4 object-cover' alt="" />
        <img src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg" className='h-12 w-12  rounded-[50%] -ml-4 object-cover' alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKCiHP7EZhEv9kQ7Z7wOrUz1uYSzQsGn4ZtfUxxl8RPg&s" className='h-12 w-12  rounded-[50%] -ml-4 object-cover' alt="" />
        <img src="data:image/jpeg;base64,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" className='h-12 w-12  rounded-[50%] -ml-4 object-cover' alt="" />
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-12 w-12  rounded-[50%] -ml-4 object-cover' alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_rqLv2P0vM2LkM0ugbx_O64jOdPM-YF7NA5uYeMl&s" className='h-12 w-12  rounded-[50%] -ml-4 object-cover' alt="" />
        
    </div>
    <div className="text -ml-10">

        <span className='text-3xl font-bold'>183.4k</span>
        <span className='pl-3 font-semibold text-gray-400'>Followers</span>

    </div>
    <div className="txt2 pl-3">
        <span className='text-lg font-bold'>Active now on your profile</span>
    </div>


    </button>

    </div>

    </>
  )
}
