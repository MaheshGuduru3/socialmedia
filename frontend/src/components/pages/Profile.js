import React from 'react'
import log1 from '../../assests/wallper.jpg'

const Profile = () => {
  return (
    <div className='w-full relative top-16'>
         <div className='max-w-[96rem] m-auto'>
                <div className='w-[40rem] m-auto  min-h-[20rem] shadow-xl'>
                      <div className='relative h-[12rem]'>
                          <img src={log1} className='w-full h-32' />
                          <div className='w-full absolute top-[6rem] left-5 flex'>
                             <img src={log1}  className='w-24 h-24 rounded-full border b-2' />
                             <div className='flex justify-evenly items-center mt-7 w-full'>
                                 <div>
                                    <h4 className='text-center'>6</h4>
                                    <h6>Post</h6>
                                 </div>
                                 <div>
                                    <h4 className='text-center'>6</h4>
                                    <h6>Following</h6>
                                 </div>
                                 <div>
                                    <h4 className='text-center'>6</h4>
                                    <h6>Followers</h6>
                                 </div>
                             </div>
                          </div>
                      </div>
                      <div className='min-h-[5.5rem]  p-1 px-5 flex justify-between'>
                           <div>
                            <h1>Mahesh Mh</h1> 
                            <p>About your bio-section whatever you wrote it.</p>
                           </div>
                          <div>
                            <button className='border b-2 p-1 px-2'>Edit Profile</button>
                          </div> 
                      </div>
                      <div className='w-full min-h-[20rem]'>
                          <div className='flex justify-evenly  border-b-2'>
                          <div className='w-[5rem] text-center'>
                            <p className='border-b-4 p-1 border-b-red-400'>Posts</p>
                          </div>
                          <div>
                            <p>Articles</p>
                          </div>
                          </div>
                      </div>
                     
                </div>
         </div>
    </div>
  )
}

export default Profile