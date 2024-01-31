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
         trim:true,
         unique:true
      },
      password:{
         type:String,
         required:true,
         trim:true
      },

      profile:{
           type:String,
      },
      bannerProfile:{
          type:String,
      },
      biography:{
          type:String,
          default:"Add Bio"
      },
      followers:{
          type:Number,
      },
      following:{
         type:Number,
      },
      posts:{
          type:Number,
      }
},{
    timestamps:true
})


module.exports = mongoose.model('user', userSchema)