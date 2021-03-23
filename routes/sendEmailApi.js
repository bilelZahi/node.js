// nodemailer:
const express = require('express');
const router = express.Router();
const nodemailer=require('nodemailer');

router.post('/sendEmail', async (req,res) => {
const transporter= nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'bilelzahi91@gmail.com',
    pass:'bilel//zahi//benna'
  }
});
let info = await transporter.sendMail({
from:'bilelzahi91@gmail.com',
to:'bileltrabelsi445@gmail.com',
subject:'test',
text:'ena sidek'
});
res.json({message:"E-mail sent "})
})
module.exports=router;