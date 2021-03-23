const express = require('express');
const router = express.Router();
const user =require('../models/user')




router.post('/addNewUser',(req,res) => {

    user.create(req.body)
     .then(result =>{res.send(result)})
     .catch(error =>console.log(error));
   
   
   })
  
  
   router.get('/findAllUser',(req,res)=>{
   
    user.find()
    .then(result => {res.send(result)})
    .catch(error => console.log(error));
  })

router.get('/user/:id',(req,res)=>{
    user.findById(req.params.id)
    .then(result => {res.send(result)})
    .catch(error => console.log(error));

})
  
   
   router.delete('/deleteUser/:id', (req,res)=>{
     _id=req.params.id
   user.findByIdAndDelete(_id)
   .then(() => {res.send('deleted')})
   .catch(error => console.log(error));
   })
  
   router.put('/findOneAndUpdateUser',(req,res)=>{
   
    user.findByIdAndUpdate({_id:'6053604b4ec4252034cae6bb'},{email:'test1@test1.com'},{new:true})
    .then(result => {res.send(result)})
    .catch(error => console.log(error));
  })

 router.post('/affect/:idUser/:idTodo',(req,res)=>{
     user.findByIdAndUpdate(req.params.idUser, { $push: {todos:req.params.idTodo}}, {new:true})
     .then(result => {res.send(result)})
     .catch(error => console.log(error));
     
 })
  module.exports=router;