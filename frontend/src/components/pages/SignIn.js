import React, { useState } from 'react'
import { useFormik } from 'formik'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const SignIn = () => {
  
  const initialState = {
         email:"",
         password:"",    
  }     
 
    const { errors , values , handleChange, handleSubmit } = useFormik({
            initialValues:initialState,
            onSubmit : (data)=>{
                console.log(data)
            }
    })


  const [passTog, setPassTog] = useState(false)

  return (
    <div className='w-full'>
        <div className='w-full h-screen flex justify-center items-center'>
             <div className='w-[25rem] shadow-2xl min-h-[20rem]'>
                  <div className='w-full flex flex-col items-center'>
                        <div>
                            <h1 className='text-2xl font-bold italic p-4'>Indigram</h1>
                        </div>
                        <div className='w-full p-5'>
                           <form onSubmit={handleSubmit}> 
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>EmailAddress/phonenumber</label>
                                  <input placeholder='Email Address / phonenumber' type='text' className=' form-input' name='email' value={values.email} onChange={handleChange} />
                                  { errors && errors.email  && <span className='text-red-500'>{errors.email}</span>}
                                </div>
                                <div className='flex flex-col gap-0.5 relative'>
                                  <label className='text-md font-thin'>Password</label>
                                  <input placeholder='Create Password' type={passTog ? 'text' :'password'} className=' form-input'  name='password' value={values.password} onChange={handleChange}/>
                                   <div className='absolute right-5 top-8'>
                                     {
                                        passTog ?
                                        <button onClick={()=>setPassTog(false)}><IoEyeOutline className='text-2xl'/></button>
                                        :
                                        <button onClick={()=> setPassTog(true)}><IoEyeOffOutline className='text-2xl'/></button>
                                     }
                                   </div>
                                  { errors && errors.password  && <span className='text-red-500'>{errors.password}</span>}
                                </div>
                                <div className='text-center p-2'>
                                  <button className='text-md bg-blue-600 p-1 text-white font-extralight px-2'>SignIn</button> 
                                </div>   
                           </form>

                           <p className='text-sm text-center font-thin'>Don't have an account?<NavLink to='/signup' className='text-blue-500'>SignUp</NavLink></p>
                        </div>
                  </div>
             </div>  
        </div>
    </div>
  )
}

export default SignIn