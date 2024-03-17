const mongoose = require('mongoose');
const { Schema } = mongoose;

const subCatagorySchema = new Schema({
    name : {
        type : String,
        required: true
    },
    description: String,

    isActive : {
        type : Boolean,
        default: false
    },
    status : {
        type : String,
        default: 'waiting',
        enum: ['waiting', 'rejected', 'approved'] 
    },
    catagory : {
        type : Schema.Types.ObjectId,
        ref : 'CatagoryList'
    },
    created: {
        type: Date,
        default : new Date()
    },
    update: {
        type : Date
    }

})

module.exports = mongoose.model('SubCatagoryList', subCatagorySchema)