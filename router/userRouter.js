const express = require('express')
const User = require('../model/user');
const { createUser, getUser, getUserByWork, deleteUser, login, updateUser } = require('../controller/user');
const router = express.Router()

router.post('/user', createUser)
router.get("/user", getUser)
router.get("/user/:workType", getUserByWork)
router.put('/user/:id',updateUser)
router.delete("/user/:id", deleteUser)
router.post('/login', login)

module.exports = router