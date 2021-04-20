const { json } = require('express');
let express = require('express');
let route=express.Router();
let allConatactModule= require('../controllers/contact')

//get
route.get('/', allConatactModule.getAllContactControllers)
 /*
route.post('/', (req, res,next)=>{
    res.status(201).json({
        message: 'hello, post'
    })
   })
   */

route.get('/:id',allConatactModule.getsingleContact)
 
route.post('/', allConatactModule.postAllContactControllers)

route.put('/:id', allConatactModule.editContact)
route.delete('/:id',allConatactModule.deleteContact)


module.exports=route;