let Contact= require('../Models/contact');

let getAllContactControllers=(req,res,next)=>{
    Contact.find()
    .then(contacts=>{
        res.status(200).json({
            message:'find all contacts',
            contacts
        })
    })
}
let postAllContactControllers=(req,res,next)=>{
    let contact= new Contact({
        name: req.body.name,
        phone:req.body.phone,
        email:req.body.email
    })
    contact.save()
    .then(data=>{
        res.status(201).json({
            message:'contact Added',
            contact:data
        })
      
    })
    .catch(err=>{
        console.log(err);
    })
}
let getsingleContact=(req,res,next)=>{
    let id =req.params.id
   Contact.findById(id)
   .then( contact=>{res.status(201).json({
       contact
   })
})
   .catch(err=>console.log(err))
}
let deleteContact=(req,res,next)=>{
   let id=req.params.id
    Contact.findByIdAndRemove(id)
    .then(contact=>{
        res.json({
            message:'contact deleted',
            contact
    })
})
    .catch(err=>{
        console.log(err);
    })
}
let editContact=(req,res,next)=>{
    let id=req.params.id
    let updateContact={
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    }
    Contact.findByIdAndUpdate(id, {$set:updateContact})
    .then(data=>{
        res.json({
            message:"updated",
            data
        })
    })
    .catch(err=>{
        console.log(err);
    })
}
module.exports={
    getAllContactControllers,
    postAllContactControllers,
    getsingleContact,
    deleteContact,
    editContact
}