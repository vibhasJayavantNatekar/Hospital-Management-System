const mongoose = require('mongoose')
const { type } = require('os')

const appoinmentSchema = mongoose.Schema({
    patient :{
        type : mongoose.Schema.Types.ObjectId,
        ref:"patient" ,
        required :true
    },
    doctor :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "doctor",
        required:true
    },
    date : {
        type:Date,
        required:true
    },
    status :{
        type:String,
        enum : ['schedule' ,'completed' ,'cancelled'],
        default:'schedule'
    },
    symptoms:{
        type:String
    }
})

module.exports = mongoose.model('appoinment' , appoinmentSchema)
