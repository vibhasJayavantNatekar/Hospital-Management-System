const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    speclization: {
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('doctor' , doctorSchema)