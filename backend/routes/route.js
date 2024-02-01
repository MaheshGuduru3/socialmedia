const { userSignUp, userSignIn, verifyToken, userDetails } = require('../controllers/userController')

const route = require('express').Router()

route.get('/' , (req,res)=>{
      res.status(200).json({message:"Normal health"})
})

route.post('/signup' , userSignUp)
route.post('/signin' , userSignIn)
route.get('/user' , verifyToken , userDetails)

module.exports = route