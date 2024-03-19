const Store = require('../models/marchantSchema')
const UserList = require('../models/userSchema')
async function becomMarchant(req, res) {
    const { storename,officialemail,officialphone,address,owner,products } = req.body

    console.log(storename, officialemail, officialphone, address, owner, products);
    const store = new Store({
        storename,
        officialemail,
        officialphone,
        address,
        owner,
        products
    })
    store.save();
    await UserList.findOneAndUpdate(
        {_id: owner},
        {role: "marchnat"},
        {new: true}
        )


    // res.json({success: 'You are becom a marchant. Congratulations'})
    res.json(store)
}

module.exports = becomMarchant;