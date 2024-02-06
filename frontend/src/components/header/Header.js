import React from 'react'
import { useGetCheckingQuery, useGetUserVerifyQuery } from '../../features/user/userApi'
import { Outlet } from 'react-router-dom'



const Header = () => {

    const { data } = useGetCheckingQuery()
    console.log(data)  

    const { data:data1 , error} = useGetUserVerifyQuery()
    console.log(data1 , error)     
  

  return (
    <div className='w-full'>
        <div className='w-full'>
              <div className='w-full z-10 fixed top-0 bg-white'>
                <div className='max-w-[96rem] m-auto'>
                      <div className='w-full p-3 shadow-xl bg-white'>
                            <h3 className='text-2xl font-bold  italic bg-gradient-to-r from-red-400 via-orange-500  text-transparent bg-clip-text'>Indigram</h3>
                            {data1?.message}
                      </div>
                </div>
              </div>
            <Outlet />
        </div>
    </div>
  )
}

export default Header