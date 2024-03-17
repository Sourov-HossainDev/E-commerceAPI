const CatagoryList = require("../models/catagorySchema");

async function createCatagoryController(req, res) {
    const { name, description } = req.body;
    // res.send(name);
    const duplicateCatagory = await CatagoryList.find({name});
    if(duplicateCatagory.length > 0){
        res.json({error: 'This catagory already exist, try again'})
    }
    const category = new CatagoryList({
        name,
        description
    })
    res.json({success: 'catagorye create successfully'})
    category.save();
}

module.exports = createCatagoryController;   