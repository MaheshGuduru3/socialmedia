const jwt = require('jsonwebtoken')

const tokenGenerate = (id) => {
      try{
            const token = jwt.sign({id} , process.env.JWT_SECERT, {
                  expiresIn:'1min',
            })
            
            return token;
      }
      catch(err){
           throw new Error(err.message);
      }
}

module.exports = {
     tokenGenerate
}