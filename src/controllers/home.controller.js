const User = require("../models/users");

const homeGet =(req, res)=>{
try {

    


    res.render('index')
    
    
} catch (error) {
    // console.log(error);
}
}



module.exports = {
    homeGet
}