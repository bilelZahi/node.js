const express = require('express')
const server = express()
// const{id,name}=require('./test.js')
const mongoose = require('mongoose');

const Blog=require('./models/todo')
const user=require('./models/user')
const bodyParser = require('body-parser')
// const user =require('./routes/user')
// const Blog=require('./routes/todo')
const mongoUrl="mongodb+srv://bilel:bilelzahi@cluster0.s9tdp.mongodb.net/testDB?retryWrites=true&w=majority";

// server.use(bodyParser.json())
var jsonParser=bodyParser.json()



 mongoose.connect(mongoUrl,{
  useNewUrlParser: true,
    useFindAndModify: false,
  useCreateIndex: true
}).then(result =>server.listen(3000,async()=>{
    console.log('server is http://localhost/3000');
})).catch(error =>console.log(error));





server.get('/', function (req, res) {
  res.send('Hello World')
})

server.post('/add',(req,res) => {

    const blog=new Blog ({
      title: 'oussama',
      body: 'bodyTest6'
    })

    blog.save()
    .then(result =>{res.send(result)})
    .catch(error =>console.log(error));

  
})
server.get('/getAll',(req,res) =>{
  Blog.find()
   .then(result =>{res.send(result)})
    .catch(error =>console.log(error));

})
server.get('/findById',(req,res) =>{
  Blog.findById("6050c0e7adaa76070077ae07")
  .then(result =>{res.send(result)})
  .catch(error =>console.log(error));
   
})


server.get('/findById/:id',(req,res) =>{
  _id=req.params.id
  Blog.findById(_id)
  .then(result =>{res.send(result)})
  .catch(error => console.log(error));
})



server.delete('/findByIdAndDelete/:id',(req,res) =>{
  _id=req.params.id
  Blog.findByIdAndDelete(_id)
  .then(() => {res.send('deleted')})
  .catch(error => console.log(error));
})

server.put('/findOneAndUpdate',(req,res)=>{
 
    Blog.findByIdAndUpdate({_id:'6051d4540ed4d320e80aae0e'},{title:'letoile'},{new:true})
    .then(result => {res.send(result)})
    .catch(error => console.log(error));
  })

   
// server.use('./user',user)
// use js

// server.route("/user/todo")
// .get((req,res) =>{})
// .post((req,res) =>{});

// })
// kdidmet l user :
server.post('/addNewUser',jsonParser,(req,res) => {

  user.create(req.body)
   .then(result =>{res.send(result)})
   .catch(error =>console.log(error));
 
 
 })


 server.put('/findAllUser',(req,res)=>{
 
  user.find()
  .then(result => {res.send(result)})
  .catch(error => console.log(error));
})

 
 server.delete('/deleteUser/:id', (req,res)=>{
   _id=req.params.id
 user.findByIdAndDelete(_id)
 .then(() => {res.send('deleted')})
 .catch(error => console.log(error));
 })

 server.put('/findOneAndUpdateUser',(req,res)=>{
 
  user.findByIdAndUpdate({_id:'6053604b4ec4252034cae6bb'},{email:'test1@test1.com'},{new:true})
  .then(result => {res.send(result)})
  .catch(error => console.log(error));
})


    // const ages=age.forEach((x)=>{
    //     console.log(x);
    // });
    // console.log(ages);    

    // setTimeout(() => {
    //     console.log("bilel");

    // }, 3000);


    
    const url = "mongodb://localhost:3000/myDb"

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});





    
// app.get('/', function (req, res) {
  // res.send('Hello World')
// })
 
// app.listen(3000,()=>{
//     console.log('server is http://localhost/3000');
// })