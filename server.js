const express = require('express');
const connect=require('./dataBase/connect');
const server = express();
const bodyParser = require('body-parser');
const todoApi=require('./routes/todoApi');
const userApi=require('./routes/userApi');
const sendEmailApi=require('./routes/sendEmailApi');
const uploadApi = require('./routes/upload')
// 




server.use(bodyParser.json())
server.use('/upload' ,uploadApi)
// server.use('/api/v1/uploads', express.static(path.join(__dirname, '/uploads')));
 
server.use('/email',sendEmailApi)
 server.use('/user',userApi);
server.use('/todo',todoApi);
// var jsonParser=bodyParser.json()
server.listen(3000,()=>{
  console.log('connected');
})



 



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
//     console.log('server is http://localhost/3000');
// })