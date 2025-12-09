const express = require('express')
const router = express.Router()
const DoctorController = require('../Controller/DoctorController')



router.get('/', DoctorController.getDoctors );
router.get('/:id' , DoctorController.getdoctorbyId);
router.post('/' , DoctorController.createDoctors);

router.put('/:id' ,DoctorController.updateDoctor)
router.delete('/:id', DoctorController.deleteDoctor)



module.exports = router
