import { apiSlice } from "../api/apiSlice";


const userApi = apiSlice.injectEndpoints({
         endpoints : builders=>({
                getChecking : builders.query({
                       query : ()=>({
                            url:'/'
                       })
                })
         })
})



export const { useGetCheckingQuery } = userApi

export default userApi