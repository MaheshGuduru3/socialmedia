const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
      username:{
         type:String,
         trim:true,
         required:true
      },
      email:{
          type:String,
          trim:true,
          required:true,
          unique:true
      },
      phonenumber:{
         type:Number,
         required:true,
         unique:true
      },
      password:{
         type:String,
         required:true,
         trim:true
      }
})