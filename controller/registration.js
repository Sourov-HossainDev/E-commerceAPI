const UserList = require('../models/userSchema')

function registration(req,res){
    const {fristname, lastname, email, telephone, address, city, postcode, division, district, password} = req.body;
        console.log(req.body);

        if(!fristname){
           return res.send({error: 'Frist name is required'})
        }
        if(!lastname){
           return res.send({error: 'Last name is required'})
        }
        if(!email){
           return res.send({error: 'Email name is required'})
        }
        if(!telephone){
           return res.send({error: 'Telephone name is required'})
        }
        if(!password){
           return res.send({error: 'Password name is required'})
        }
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
            password
    
        })
        users.save();
        res.send(users);
}

module.exports = registration;