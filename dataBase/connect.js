const mongoose = require('mongoose');
const mongoUrl="mongodb+srv://bilel:bilelzahi@cluster0.s9tdp.mongodb.net/testDB?retryWrites=true&w=majority";


const connect =mongoose.connect(mongoUrl,{

    useNewUrlParser: true,
      useFindAndModify: false,
    // useCreateIndex: true,
    useFindAndModify:false
  }).then(result =>()=>{
      console.log('server is http://localhost/3000');
  }).catch(error =>console.log(error)); 
  module.exports=connect;