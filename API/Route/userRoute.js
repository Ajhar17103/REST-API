let express=require('express')
let router=express.Router()
let usersController=require('../controllers/userControllers')

router.post('/login', usersController.loginControllers)
router.post('/register', usersController.registerController)
router.get('/',usersController.gelAllUsers)

module.exports=router