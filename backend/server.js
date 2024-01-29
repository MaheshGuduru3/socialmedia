const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectToDB = require('./database/db')



// Connecting to the database.
connectToDB()


app.get('/' , (req,res)=>{
       res.send("Hello welcome..")
})


app.listen(3005 , ()=>{
       console.log("started...")
})