import React from 'react'
import { useGetCheckingQuery } from '../../features/user/userApi'



const Header = () => {

    const { data } = useGetCheckingQuery()
    console.log(data)  
  

  return (
    <div className='w-full'>
        <div className='w-full'>
              <div className='max-w-[96rem] m-auto'>
                     <div className='w-full p-3 shadow-xl'>
                          <h3 className='text-2xl font-bold  italic bg-gradient-to-r from-red-400 via-orange-500  text-transparent bg-clip-text'>Indigram</h3>
                     </div>
              </div>
        </div>
    </div>
  )
}

export default Header