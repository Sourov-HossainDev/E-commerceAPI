var jwt = require('jsonwebtoken');
const userList = require('../models/userSchema');

async function emailVerificationController(req,res){
    const {authorization} = req.headers;
    console.log(authorization );
    const decoded= jwt.verify(authorization, process.env.TOKEN_SECRET);
    console.log(decoded);

    const updateUser = await userList.findOneAndUpdate(
        {email: decoded.email},
        {verified: true},
        {new: true}
    )
    res.send(updateUser);
      
}

module.exports = emailVerificationController;