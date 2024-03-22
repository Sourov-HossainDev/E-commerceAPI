const UserList = require("../models/userSchema")

async function seceureProduct(req, res, next) {

    console.log(req.headers.authorization.split('@'));
    const userid = req.headers.authorization.split('@')[1];
    const password = req.headers.authorization.split('@')[2];
    if (!req.headers.authorization) {
        return res.json({ error: "UNAUTHORIZATION" })
    } else {
        const user = await UserList.find({ _id: userid })
        console.log(user);
        console.log(user.length);

        if (user.length > 0) {
            if (password == "creative44") {
                console.log(user[0].role);
                if (user[0].role) {
                   next()
                }

            }
            // console.log(user[0].role);
            // if(user[0].role){
            //     console.log('tui upload korte parbi ');
            // }
        } else {
            res.json({ error: 'u r not able upload' })
        }
    }
    console.log(userid, password);
}
function createProduct(req,res){
    res.json("product created")
}

module.exports = {seceureProduct, createProduct};