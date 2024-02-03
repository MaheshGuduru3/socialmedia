const { tokenGenerate } = require('../middleware/tokenGenerate');
const user = require('../model/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSignUp = async (req,res)=>{

      const {username , password , email , phonenumber}  = req.body;

      if(!email || !password || !phonenumber || !username){
          return res.status(499).json({message : "Required Fields"})
      }
    
      const checking = await user.findOne({$or :[ { email } , { phonenumber }]})
    
      if(checking){
         return res.status(403).json({message:"Already Exists"})
      }

      const hashPassword = await bcrypt.hash(password , 10)

      const data = {
            username,
            password : hashPassword,
            email,
            phonenumber
      }

      try{
          const result = await user.create(data)
          if(result){
            return res.status(201).json({message:"Successfully created"})
          }
      }
      catch(err){
        return res.status(500).json({message:err.message})
      }
}


const userSignIn = async (req,res)=>{

      const { email , phonenumber, password} = req.body

      if((!email && !password) || (!phonenumber && !password)){
          return res.status(499).json({message:"Required Fields"})
      }

      try{
          
          const result = await user.findOne({ $or : [{email} , {phonenumber}]})
          if(result){
              if(bcrypt.compare(password , result.password)){
                 
                  const receviedToken = tokenGenerate(result.id)

                  res.cookie('jwtsocial' , receviedToken , {
                       domain : "localhost"
                  })

                   return res.status(201).json({message:'success'})
                
              
              }
              else{
                return res.status(401).json({message:"Invalid email/phonenumber or password"})
              }
          }
          else{
            return res.status(404).json({message:'Not Found'})
          }
      }
      catch(err){
        return res.status(500).json({message:err.message})
      }
}

const verifyToken =  (req,res,next)=>{  
      // const token = req.headers.authorization.split(" ")[1]
      const token = req.cookies.jwtsocial

      console.log(token) 
      try{
            const verifed  = jwt.verify(token , process.env.JWT_SECERT)
            req.id = verifed.id,
            next()
      }
      catch(err){
          console.log(err)
          return res.status(500).json({message:err}) 
      }
}

const userDetails = async(req,res)=>{
        const id = req.id;    
   
        try{
              const result = await user.findById(id)
              if(result){
                   return res.status(201).json({message:"Logged"})
              }
              else{
                  return res.status(404).json({message:"Not Found"})
              }
        }
        catch(err){
            return res.status(500).json({message:err.message})
        }
}


module.exports = {
      userSignUp,
      userSignIn,
      verifyToken,
      userDetails
}