// const { Router } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// let router =express.Router()

// router.route("/user/todo")
// .get((req,res) =>{})
// .post((req,res) =>{});



const userSchema = new Schema({
  
    email: String,
    password: String,
   
  todos:[{ type: Schema.Types.ObjectId, ref:'Blog'}],
    
  },{timestamps:true});

  const user = mongoose.model('user',userSchema);
  module.exports = user;
//   module.exports=router;