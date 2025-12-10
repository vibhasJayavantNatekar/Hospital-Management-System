const mongoose = require('mongoose')

const medicineSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    brand:{
        type:String
    },
    stock :{
        type :Number,
        default : 0
    },
    expiryDate :{
        type:Date
    },
    price :{
        type:Number
    },
    description :{
        type :String
    }
})

module.exports = mongoose.model('medicine' , medicineSchema)
