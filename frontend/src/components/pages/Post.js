import React, { useState } from 'react'

const Post = () => {
  const [choose , setChoose] = useState(1)
  return (
    <div className='w-full relative top-16'>
         <div className='max-w-[96rem] m-auto'>
                <div className='w-[40rem] min-h-[30rem] m-auto shadow-xl'>
                     <h4 className='text-center p-4 text-2xl font-light'>Share a Post.</h4>
                     <div className='flex justify-evenly border-b-2' id="1" onClick={(e)=>setChoose(e.target.id)}>
                         <button className={ choose == 1 && 'text-lg font-serif border-b-2 border-b-red-500'} id="1">Post Images/Videos</button>
                         <button className={ choose == 2 && 'text-lg font-serif border-b-2 border-b-red-500'} id="2">Post Text</button>
                     </div>

                     { choose == 1 && <div className='w-[30rem] m-auto flex flex-col gap-2 min-h-[20rem] p-4'>
                           <div className='border b-2 h-[20rem] flex justify-center items-center'>
                               <input type='file'  className='hidden' />
                               <button className='border b-2 p-2 px-4 text-lg  font-semibold'>Upload</button>
                           </div>
                           <div>
                             <textarea className='w-full h-10 overflow-hidden' placeholder='Write a caption....'></textarea>
                           </div>
                           <div>
                             <button className='border b-2 bg-blue-400 p-1 px-4 text-lg text-white font-mono'>Post</button>
                           </div>
                     </div> } { choose == 2 && <div className='w-[30rem] m-auto flex flex-col gap-2 min-h-[20rem] p-4'>
                           <div>
                             <textarea className='w-full h-20 overflow-hidden' placeholder='Write a Article....'></textarea>
                           </div>
                           <div className='border b-2 h-[10rem] flex justify-center items-center'>
                               <input type='file'  className='hidden' />
                               <button className='border b-2 p-2 px-4 text-lg  font-semibold'>Upload</button>
                           </div>
                           <div>
                             <button className='border b-2 bg-blue-400 p-1 px-4 text-lg text-white font-mono'>Post text</button>
                           </div>
                     </div> }                    
                </div>
         </div>
    </div>
  )
}

export default Post