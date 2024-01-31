const { userSignUp, userSignIn } = require('../controllers/userController')

const route = require('express').Router()

route.get('/' , (req,res)=>{
      res.status(200).json({message:"Normal health"})
})

route.post('/signup' , userSignUp)
route.get('/signin' , userSignIn)


module.exports = route