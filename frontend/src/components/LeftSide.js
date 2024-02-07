import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const LeftSide = () => {

    const arr = [
        {
            id : 0,
            icon : <AiOutlineHome />,
            text : "Home",
            link : "/"
        },
        {
            id : 1,
            icon : <IoAddCircleOutline /> ,
            text : "Post",
            link : "/post"
        },
        {
            id : 2,
            icon :  <IoIosNotificationsOutline />,
            text : "Notifications",
            link : "/notifications"
        },
        {
            id : 3,
            icon :  <IoIosSearch />,
            text : "Search",
            link : "/search"
        },
        {
            id : 4,
            icon :  <CgProfile />,
            text : "MyProfile",
            link : "/profile"
        },
        {
            id : 5,
            icon :  <IoSettingsOutline />,
            text : "Settings",
            link : "/settings"
        },
    ]
  return (
    <div className='w-[15rem] fixed'>  
        <div className='p-5 flex flex-col gap-3'> 
             {
                arr.map((res)=>(
                    <NavLink  to={res.link} className={res.text === "Home" ?'flex gap-2 bg-slate-100 hover:bg-slate-100 px-2 py-2' :'flex gap-2 hover:bg-slate-100 px-2 py-2'}> 
                        <button className='text-2xl'>{res.icon}</button>
                        <h2 className='text-xl'>{res.text}</h2>
                    </NavLink>
                ))
             }
        </div>
    </div>
  )
}

export default LeftSide