const  mongoose  = require("mongoose");

const patientSchema = mongoose.Schema({
    name :{
        type:String,
        requied:true
    },
    age :{
        type:Number,
        required:true
    },
    gender :{
        type:String,
        required:true
    },
    phone :{
        type:String,
        required:true
    },
    experience :{
        type:Number
    },
    availability:[
        {day:String , from:String , to :String}
    ]
})

module.exports = mongoose.model("patient" ,patientSchema)

