const mongoose = require('mongoose')
const { type } = require('os')

const labTestSchema = mongoose.Schema({
    patient :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"patient",
        required:true

    },
    testName :{
        type:String,
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor",
        required:true
    },
    result :{
        type:String
    },
    status :{
        type:stringify,
        enum:['pending','completed'],
        default:'pending'
    },
    testDate:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('labTest' , labTestSchema)