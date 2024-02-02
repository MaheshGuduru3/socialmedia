import { apiSlice } from "../api/apiSlice";




const userApi = apiSlice.injectEndpoints({
        endpoints : builders=>({
              getAllUsers : builders.query({
                     query:()=>'/',
                 }),
        })  
   
})     
    

export const {     }  = userApi
 

export default userApi