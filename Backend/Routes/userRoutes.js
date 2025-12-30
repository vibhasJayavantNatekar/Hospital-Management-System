const userController = require('../Controller/userController')
const express = require('express')
const router = express.Router()

router.post('/' , userController.createUser);
router.get('/',userController.getAllUsers)
router.get('/' , userController.getUserById)


module.exports = router