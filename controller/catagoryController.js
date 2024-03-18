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

async function catagoryStatusController(req, res){
    const {name, status} = req.body;
   
    if(status == 'rejected' || status == 'waiting'){
        const updatecategory = await CatagoryList.findOneAndUpdate(
            {name},
            {$set:{isActive: false, status: status}},
            {new: true}
             
        )
    }else if(status == 'approved'){
        const updatecategory = await CatagoryList.findOneAndUpdate(
            {name},
            {$set:{isActive: true, status: status}},
            {new: true}
             
        )
    }
    res.json({success: "Status updated"})
}

// sub catagory

async function createSubCatagoryController(req, res) {
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

module.exports = {createCatagoryController, catagoryStatusController, createSubCatagoryController};

