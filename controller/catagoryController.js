const CatagoryList = require("../models/catagorySchema");
const subCatagoryList = require("../models/subCatagorySchema");


async function createCatagoryController(req, res) {
    const { name, description } = req.body;
    // res.send(name);
    const duplicateCatagory = await CatagoryList.find({name});
    if(duplicateCatagory.length > 0){
        res.json({error: 'This catagory already exist, try again'})
    }
    const catagory = new CatagoryList({
        name,
        description
    })
    res.json({success: 'catagorye create successfully'})
    catagory.save();
}

async function catagoryStatusController(req, res){
    const {name, status} = req.body;
   
    if(status == 'rejected' || status == 'waiting'){
        const updatecatagory = await CatagoryList.findOneAndUpdate(
            {name},
            {$set:{isActive: false, status: status}},
            {new: true}
             
        )
    }else if(status == 'approved'){
        const updatecatagory = await CatagoryList.findOneAndUpdate(
            {name},
            {$set:{isActive: true, status: status}},
            {new: true}
             
        )
    }
    res.json({success: "Status updated"})
}

// sub catagory

async function createSubCatagoryController(req, res) {
    const { name, description, catagory } = req.body;
    // res.send(name);
    const duplicateCatagory = await  subCatagoryList.find({name});
    if(duplicateCatagory.length > 0){
        res.json({error: 'This catagory already exist, try again'})
    }
    const subcatagory = new subCatagoryList({
        name,
        description,
        catagory
    })
    console.log(subcatagory._id);
    const updatecatagory = await CatagoryList.findOneAndUpdate(
        {_id: subcatagory.catagory},
        {$push:{subCatagory: subcatagory._id}},
        {new: true}
         
    )
    res.json({success: 'Sub catagorye create successfully'})
    subcatagory.save();
}
// sub ctagory status controller
async function subCatagoryStatusController(req, res){
    const {name, status} = req.body;
   
    if(status == 'rejected' || status == 'waiting'){
        const updatecatagory = await subCatagoryList.findOneAndUpdate(
            {name},
            {$set:{isActive: false, status: status}},
            {new: true}
             
        )
    }else if(status == 'approved'){
        const updatecatagory = await subCatagoryList.findOneAndUpdate(
            {name},
            {$set:{isActive: true, status: status}},
            {new: true}
             
        )
    }
    res.json({success: "Status updated"})
}


module.exports = {createCatagoryController, catagoryStatusController, createSubCatagoryController, subCatagoryStatusController};

// The name has been changed. First there was category then next category.
// If there is a problem then it will be for it