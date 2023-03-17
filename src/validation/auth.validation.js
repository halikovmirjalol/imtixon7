const Joi = require('joi')

const authDTO=({username, password}) =>{
    return Joi.object({
        username: Joi.string().alphanum().min(5).max(15).required(),
        password:Joi.string().required()
    }).validate({username, password})
}


module.exports = {authDTO}