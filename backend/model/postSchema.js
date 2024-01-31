const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
       user_id : {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
       },
       content : {
         type:String,
         required:true,
         trim:true
       },
       caption:{
         type: String,
          trim:true
       }
},{
     timestamps:true
})


module.exports = mongoose.model('posts' , postSchema)