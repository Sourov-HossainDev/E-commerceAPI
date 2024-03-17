const mongoose = require('mongoose');
const { Schema } = mongoose;

const catagorySchema = new Schema({
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
    subCatagory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SubCatagoryList'
        }
    ],
    created: {
        type: Date,
        default : new Date()
    },
    update: {
        type : Date
    }

})

module.exports = mongoose.model('CatagoryList', catagorySchema)