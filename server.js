 let express = require ('express');
 let app = express();
 let port = 3000;
 let contactsRoute = require('./API/Route/ContactRoute')
 let  morgan=require('morgan')
 let bodyParser=require('body-parser')
 let moongoose= require('mongoose')
 moongoose.connect('mongodb://localhost/test')
 let usersRoute=require('./API/Route/userRoute')


 app.get('/contact', (req,res)=>{
     let demo= new contact({
         name:'azharul islam',
         phone:'01628121719',
         email:'contact.ajharislam@gmail.com'
     })
     demo.save()
     .then((data)=>{
         res.json({
             data
         })
     .catch((err)=>{
         console.log(err)
     })
     })
 })
 
 /*let mongoose=require('mongoose')
 mongoose.connect('mongodb://localhost/test')
let db=mongoose.connection;

db.on('error', (err)=>{
        console.log(err);
})
 db.once('open',()=>{
     console.log('database is okay');
 })
 
 let Schema=mongoose.Schema
 let demoSchema= new Schema({
     name:{
         type:String,
         required:true,
         minlength:3
     },
     phone:{
         type:String,
         required:true
     }
 });
 let Demo=mongoose.model('Demo', demoSchema)

 app.get('/demo' ,(req,res)=>{
     let demo= new Demo({
         name:'Azharul islam',
         phone:'01787223642',
     })
     demo.save()
     .then(data=>{
     res.json({
         data
     })
     .catch(err=>{
         console.log(err);
     })
 })


 });*/

  app.use(morgan('dev'))
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json())

app.use('/post', contactsRoute)
app.use('/user', usersRoute)


 app.get('/', (req,res)=>{
    res.send('hello world')
 });
 
 app.listen(port,()=>{
     console.log(`this is loclhost at https:// ${port}`);
 })
 

 