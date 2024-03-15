const emailValidation = require('../helpers/emailValidation');
const sendEmail = require('../helpers/sendEmail');
const UserList = require('../models/userSchema')
const bcrypt = require('bcrypt');

async function registration(req, res) {
   const { fristname, lastname, email, telephone, address, city, postcode, division, district, password } = req.body;
   console.log(req.body);

   if (!fristname) {
      return res.send({ error: 'Frist name is required' })
   }
   if (!lastname) {
      return res.send({ error: 'Last name is required' })
   }
   if (!email) {
      return res.send({ error: 'Email name is required' })
   }
   if(!emailValidation(email)){
      return res.json({error: 'Email is not valid'})
   }


   if (!telephone) {
      return res.send({ error: 'Telephone name is required' })
   }
   const existingEmail = await UserList.findOne({email})
   if(existingEmail){
      return res.send({error: 'Email is already used'})
   }

   bcrypt.hash(password, 10, function (err, hash) {
      const users = new UserList({
         fristname,
         lastname,
         email,
         telephone,
         address,
         city,
         postcode,
         division,
         district,
         password:hash

      })
      sendEmail(email)
      users.save();
      res.send(users);
   });



}

module.exports = registration;