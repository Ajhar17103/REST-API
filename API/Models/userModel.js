let mongoose=require('mongoose')
let Schema=mongoose.Schema

let userSchema= new Schema({
    email:String,
    pass:String
})

let user =mongoose.model('user', userSchema)
module.exports=user