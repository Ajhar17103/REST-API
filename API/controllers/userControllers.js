let userModel=require('../Models/userModel')
let bcrypt=require('bcrypt')

let registerController=(req,res,next)=>{
bcrypt.hash(req.body.pass,10, (err,hash)=>{
    if(err){
        res.json({
            err
        })
    }
   
    let user= new userModel({
        email: req.body.email,
        pass:req.body.pass
    })
    user.save()
    .then(result=>{
        res.status(201).json({
            message:'user created successfully',
            user:result
        })
    })
    .catch(err=>{
        res.json({
            err
        })
    })
})
}
let loginControllers=(req,res,next)=>{
    let email=req.body.email
    let pass=req.body.pass

    userModel.findOne(email)
    .then(users=>{
        if(users){
            bcrypt.compare(pass,users.pass, (err,result)=>{
                if(err){
                    res.json({
                        message:'Error Occured',
                        err
                    })
                }
                if(result){
                    res.json({
                        message:'login Successful'
                    })
                } else{
                    res.json({
                        message:'login dont\'t match'
                    })
                }
            })
        } else{
            res.json({
                message:'user not found'
            })
        }
    })
    .catch()
}

let gelAllUsers=(req,res,next)=>{
userModel.find()
.then(result=>{
    res.status(201).json({
        message:'get all users',
        result
    })
})
}


module.exports={
    registerController,
    gelAllUsers,
    loginControllers
}