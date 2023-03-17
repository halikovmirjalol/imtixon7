
const { verify } = require("../utils/jwt")

const isAuth =(req, res, next)=>{

    
   try {
    const {token} = req.params

     if( !token) return res.redirect("/register")
     if( token) return res.redirect("/")

     const isVerified = verify(token)
     if(!isVerified) return res.redirect("/register")
     req.user = isVerified.user
     

    
   
} catch (error) {
    res.redirect("/register")
    console.log(error)

   }

}
module.exports = isAuth