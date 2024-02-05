import { apiSlice } from "../api/apiSlice";


const userApi = apiSlice.injectEndpoints({
         endpoints : builders=>({
                getChecking : builders.query({
                       query : ()=>({
                            url:'/'
                       })
                }),
                getUser : builders.mutation({
                     query  :(data) => ({
                          url:'/signin',
                          method:'POST',
                           body : data
                     })
                }),
                getUserVerify :builders.query({
                        query : ()=>({
                            url:'/user',
                            method : "GET"
                        })
                }),

                addUser : builders.mutation({
                       query : (data)=>({
                            url:'/signup',
                            method:'POST',
                            body:data
                       })
                })
         })
})



export const { useGetCheckingQuery , useGetUserMutation  , useGetUserVerifyQuery , useAddUserMutation} = userApi

export default userApi