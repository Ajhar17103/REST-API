let mongoose=require('mongoose')
let Schema=mongoose.Schema
let contact=new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    email:String,

})
let contactmodel= mongoose.model('demo', contact );
module.exports=contactmodel;
