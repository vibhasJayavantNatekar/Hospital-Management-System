const mongoose = require("mongoose");
const validator = require('validator')
const express = require('express')

const userSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role :{
        type:String,
        enum :["admin","staff","doctor","nurse"],
        default:"staff"
    }
})


userSchema.statics.createUser = async function (name , email ,password , role) {

    //Validator
   if(!name || !email || !password)
{
        throw Error ("All fields are required !")

    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid !")
    }

      
    const user = await this.create({name,email,password ,role});

    return user

    
}


userSchema.statics.getUserById = async function (email,password) {

    //Validator
    if(!email | !password){
        throw Error ("All fields are required !")

    }

    const user = await this.find({email})

    if(!user){
        throw Error("Incorrect Email")
    }

    const match = password == user.password

    if(!match){
        throw Error("Incorrect Password")
    }

    return user


    
}

userSchema.statics.getAllUsers = async function () {

    const user = await this.find({});

return user

}

module.exports = mongoose.model("user",userSchema)


