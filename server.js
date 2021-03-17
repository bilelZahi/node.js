const express = require('express')
const server = express()
// const{id,name}=require('./test.js')
const mongoose = require('mongoose');
// const { title } = require('node:process');
const Blog=require('./models/todo')
// const { Router } = require('express');
const mongoUrl="mongodb+srv://bilel:bilelzahi@cluster0.s9tdp.mongodb.net/testDB?retryWrites=true&w=majority";


 mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(result =>server.listen(3000,()=>{
    console.log('server is http://localhost/3000');
})).catch(error =>console.log(error));


// server.get('/', function (req, res) {
//   res.send('Hello World')
// })

server.post('/add',(req,res) => {

    const blog=new Blog ({
      title: 'oussama',
      body: 'bodyTest6'
    })

    blog.save()
    .then(result =>{res.send(result)})
    .catch(error =>console.log(error));

  
})
// server.get('/getAll',(req,res) =>{
//   Blog.find()
//    .then(result =>{res.send(result)})
//     .catch(error =>console.log(error));

// })
// server.get('/findById',(req,res) =>{
//   Blog.findById("6050c0e7adaa76070077ae07")
//   .then(result =>{res.send(result)})
//   .catch(error =>console.log(error));
   
// })


server.get('/findById/:id',(req,res) =>{
  _id=req.params.id
  Blog.findById(_id)
  .then(result =>{res.send(result)})
  .catch(error => console.log(error));
})
console.log(bille);
// server.get('/deleteOne',(req,res) =>{
//   Blog.deleteOne({title:{titleTest2}})
//   .then(result =>{res.send(result)})
//   .catch(error => console.log(error));
// })
   



// })




    // const ages=age.forEach((x)=>{
    //     console.log(x);
    // });
    // console.log(ages);    

    // setTimeout(() => {
    //     console.log("bilel");

    // }, 3000);


    
//     const url = "mongodb://localhost:3000/myDb"

// mongoose.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });




    
// app.get('/', function (req, res) {
  // res.send('Hello World')
// })
 
// app.listen(3000,()=>{
    // console.log('server is http://localhost/3000');
// })