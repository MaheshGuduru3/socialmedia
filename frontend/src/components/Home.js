import React from 'react'
import LeftSide from './LeftSide'
import Feed from './Feed'
import RightSide from './RightSide'

const Home = () => {
  return (
    <div className='w-full relative z-0 top-16'>
        <div className='max-w-[96rem] m-auto'>
             <div className='w-[65rem] mt-1 flex gap-2  m-auto'>
                 <div className='w-[15rem] h-[20rem]'>
                      <LeftSide />
                 </div>
                 <div className='w-[35rem] min-h-[70rem]'>
                       <Feed />
                 </div>
                 <div className='w-[20rem]  h-[20rem]'>
                     <RightSide />
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Home