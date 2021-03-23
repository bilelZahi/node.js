const express = require('express');
const Blog=require('../models/todo');
const router = express.Router();


router.post('/addNewUser', async (req,res) => {

   const blog= await Blog.create(req.body);
   res.json(blog)
     
   
   
   })


// server.post('/add',(req,res) => {

//     const blog=new Blog ({
//       title: 'oussama',
//       body: 'bodyTest6'
//     })

//     blog.save()
//     .then(result =>{res.send(result)})
//     .catch(error =>console.log(error));

  
// })
router.get('/getAll',(req,res) =>{
  Blog.find()
   .then(result =>{res.send(result)})
    .catch(error =>console.log(error));

})
router.get('/findById',(req,res) =>{
  Blog.findById("6050c0e7adaa76070077ae07")
  .then(result =>{res.send(result)})
  .catch(error =>console.log(error));
   
})


router.get('/findById/:id',(req,res) =>{
  _id=req.params.id
  Blog.findById(_id)
  .then(result =>{res.send(result)})
  .catch(error => console.log(error));
})




router.delete('/findByIdAndDelete/:id',(req,res) =>{
  _id=req.params.id
  Blog.findByIdAndDelete(_id)
  .then(() => {res.send('deleted')})
  .catch(error => console.log(error));
})

router.put('/findOneAndUpdate',(req,res)=>{
 
    Blog.findByIdAndUpdate({_id:'6051d4540ed4d320e80aae0e'},{title:'letoile'},{new:true})
    .then(result => {res.send(result)})
    .catch(error => console.log(error));
  })

  
module.exports=router;