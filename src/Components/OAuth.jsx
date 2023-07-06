import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const OAuth = () => {
  return (
    <button className=' relative flex items-center justify-center  bg-red-600 text-white w-full px-7 py-3 rounded-md mt-3 text-sm font-medium uppercase shadow-md
    hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800'>
        <FcGoogle className='hidden lg:block absolute text-3xl left-[20%] bg-white rounded-2xl ' />
        Continue with google</button>
  )
}

export default OAuth