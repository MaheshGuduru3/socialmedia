import React from 'react'
import log from '../assests/wallper.jpg'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div className='w-full'>
       <div className='p-3'>
           <div className='w-full  h-32'>
               <img   src={log} className=' w-20 h-20 rounded-full'/>
               <h4>Mystory</h4>
           </div>
           <div className='w-full'>
               <div className='w-full shadow-2xl'>
                     <div className='flex  justify-between'>
                        <div className='flex gap-2 p-2'>
                            <img  src={log} className='w-12 h-12 rounded-full'/>
                            <div className='h-12'>
                                <h4 className='text-md  h-5 font-semibold'>Mahesh</h4>
                                <h6 className='text-sm  h-5 font-light'>Biotext display</h6>
                                <h6 className='text-xs  h-5  font-light'>1hr</h6>
                            </div>
                         </div>
                         <button className='text-2xl'>
                            <BiDotsVerticalRounded />
                         </button>
                     </div>
                     <div className='h-[20rem]'>
                         <img src={log} className='w-full h-[20rem]'  />
                     </div>
                     <div className='h-14 flex gap-3 items-center'>
                          <div  className='text-3xl'>
                             <IoIosHeartEmpty />
                          </div>
                          <div className='text-3xl'>
                              <FaRegComment />
                          </div>
                          <div className='text-3xl'>
                          <IoShareSocialOutline />
                          </div>
                     </div>
                     <div className='flex p-1'>
                         <h4>Mahesh: </h4>
                         <p>Captions</p>
                     </div>

                </div>
           </div>
       </div>
    </div>
  )
}

export default Feed