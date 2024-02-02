import {   createApi, fetchBaseQuery  }  from '@reduxjs/toolkit/query'

export const apiSlice = createApi({
        reducerPath:'api',
        baseQuery:fetchBaseQuery({
             baseUrl : 'http://localhost:3005/api',
        }),
        endpoints : (builders)=>({})     
})