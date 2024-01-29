import React from 'react'
import { useFormik } from 'formik'

const SignUp = () => {
   
    const { } = useFormik({
    
    })

  return (
    <div className='w-full'>
        <div className='w-full h-screen flex justify-center items-center'>
             <div className='w-[25rem] shadow-lg min-h-[25rem]'>
                  <div className='w-full flex flex-col items-center'>
                        <div>
                            <h1 className='text-2xl font-bold italic p-1'>Indigram</h1>
                        </div>
                        <div className='w-full p-5'>
                           <form>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>EmailAddress</label>
                                  <input placeholder='Email Address' type='email' className=' form-input' />
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>UserName</label>
                                  <input placeholder='UserName' type='text' className=' form-input' />
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>PhoneNumber</label>
                                  <input placeholder='Phone Number' type='number' className=' form-input' />
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>Password</label>
                                  <input placeholder='Create Password' type='password' className=' form-input' />
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>Re-Enter Password</label>
                                  <input placeholder='ReCreate Password' type='password' className=' form-input' />
                                </div>
                                <div className='text-center p-2'>
                                  <button className='text-md bg-blue-600 p-1 text-white font-extralight px-2'>Submit</button> 
                                </div>   
                           </form>
                        </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default SignUp  