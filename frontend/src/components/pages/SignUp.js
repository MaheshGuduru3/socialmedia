import React, { useState } from 'react'
import { useFormik } from 'formik'
import { formValid } from '../validation/formValid'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink} from 'react-router-dom'

const SignUp = () => {
  
  const initialState = {
         email:"", 
         username:"",
         phonenumber:"",
         password:"",
         repassword:""  
  }     
 
    const { errors , values , handleChange, handleSubmit } = useFormik({
            initialValues:initialState,
            validationSchema:formValid, 
            onSubmit : (data)=>{
                console.log(data)
            }
    })


  const [passTog, setPassTog] = useState(false)
  const [repassTog, setRePassTog] = useState(false)


  return (
    <div className='w-full'>
        <div className='w-full h-screen flex justify-center items-center'>
             <div className='w-[25rem] shadow-2xl min-h-[25rem]'>
                  <div className='w-full flex flex-col items-center'>
                        <div>
                            <h1 className='text-2xl font-bold italic p-4'>Indigram</h1>
                        </div>
                        <div className='w-full p-5'>
                           <form onSubmit={handleSubmit}> 
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>EmailAddress</label>
                                  <input placeholder='Email Address' type='email' className=' form-input' name='email' value={values.email} onChange={handleChange} />
                                  { errors && errors.email  && <span className='text-red-500'>{errors.email}</span>}
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>UserName</label>
                                  <input placeholder='UserName' type='text' className=' form-input'  name='username' value={values.username} onChange={handleChange} />
                                  { errors && errors.username  && <span className='text-red-500'>{errors.username}</span>}
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                  <label className='text-md font-thin'>PhoneNumber</label>
                                  <input placeholder='Phone Number' type='tel' className=' form-input'  name='phonenumber' value={values.phonenumber} onChange={handleChange} />
                                  { errors && errors.phonenumber  && <span className='text-red-500'>{errors.phonenumber.slice(0,30)}</span>} 
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
                                <div className='flex flex-col gap-0.5 relative'>
                                  <label className='text-md font-thin'>Re-Enter Password</label>
                                  <input placeholder='ReCreate Password' type={repassTog? 'text':'password'} className=' form-input'  name='repassword' value={values.repassword} onChange={handleChange} />
                                  <div className='absolute right-5 top-8'>
                                     {
                                        repassTog ?
                                        <button onClick={()=>setRePassTog(false)}><IoEyeOutline className='text-2xl'/></button>
                                        :
                                        <button onClick={()=> setRePassTog(true)}><IoEyeOffOutline className='text-2xl'/></button>
                                     }
                                   </div>
                                  { errors && errors.repassword  && <span className='text-red-500'>{errors.repassword}</span>}
                                </div>
                                <div className='text-center p-2'>
                                  <button className='text-md bg-blue-600 p-1 text-white font-extralight px-2'>SignUp</button> 
                                </div>   
                           </form>
                           <p className='text-sm text-center font-thin'>Have an account?<NavLink to='/signin' className='text-blue-500'>SignIn</NavLink></p>
                        </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default SignUp  