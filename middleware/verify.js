const User = require('../models/User')
const ROLES = User.ROLES

checkDuplicateUserNameOrEmail = (req,res,next)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if(user)
        res.status(400).send({
            message:"Failed, username already in use"
        })
        return
    })
    next()
}

const verySignUp={
    checkDuplicateUserNameOrEmail:checkDuplicateUserNameOrEmail
}