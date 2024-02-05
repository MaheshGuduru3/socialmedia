const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectToDB = require('./database/db')
const allApis = require('./routes/route')


// Connecting to the database.
connectToDB()


app.use(cors({
      origin:'http://localhost:3000',
      credentials:true
})) 
app.use(express.json())
app.use(cookieParser())
app.use('/api' , allApis)

app.get('/' , (req,res)=>{

       res.cookie('name', 'tutorialsPoint')
       res.send("Hello welcome..")
})


app.listen(3005 , ()=>{
       console.log("started...")
})