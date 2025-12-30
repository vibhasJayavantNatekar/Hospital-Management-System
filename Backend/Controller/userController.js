const express = require('express')
const User = require('../Models/User')

const  createUser =  async(req,res) =>{
    const {name , email ,  password , role} = req.body

    try {
         const user = await  User.createUser(name , email ,password , role)

        res.status(200).json({message :"User Created"})
    } catch (error) {
        
        res.status(500).json(error.message)
    }
  
 
}

const getAllUsers = async function (req,res) {
    
    try {
        const user = await User.getAllUsers();

        res.status(200).json({user})
    } catch (error) {
        
        res.status(500).json(error.message)
    }



}

const getUserById = async function (req,res) {
    const {email , password} = req.body

    try {
        const user = await User.getUserById({email , password})

        res.status(200).json({user})
    } catch (error) {
        
        res.status(500).json(error.message)
    }
}



module.exports = {createUser , getAllUsers , getUserById}