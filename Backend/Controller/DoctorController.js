const express = require('express')
const Doctor = require('../Models/DoctorModel')

const getDoctors = async (req, res) => {

    try {
        const doctors = await Doctor.find();
        res.status(200).json({ doctors })
    } catch (error) {

        res.status(500).json({ error })
    }

}

const createDoctors = async (req, res) => {

    const { name, speclization, age } = req.body

    try {

        const doctor = await Doctor.create({ name, speclization, age })
        res.status(200).json({ message: "Doctor was created", doctor: doctor })

    } catch (error) {
        res.status(500).json(error.message)
    }

}

const getdoctorbyId = async (req, res) => {
    const { id } = req.params

    try {
        const doctor = await Doctor.findById(id)
        res.status(200).json({ doctor })
    } catch (error) {
        res.status(500).json(error)
    }


}

const updateDoctor = async (req, res) => {
    const { id } = req.params
    const { name, speclization, age } = req.body

    try {
        const newDoctor = await Doctor.findByIdAndUpdate(id, { name, speclization, age })
        res.status(200).json({message : "Doctor was updated" , newDoctor })
    } catch (error) {
        res.status(500).json(error)

    }
}



const deleteDoctor = async (req, res) => {
    const { id } = req.params

    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({ message: "delete successfull" })
    } catch (error) {

        res.status(500).json(error.message)
    }
}


module.exports = { getDoctors, createDoctors, getdoctorbyId, updateDoctor, deleteDoctor }