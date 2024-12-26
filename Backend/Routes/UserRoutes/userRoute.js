const express = require('express');
const createUsers = require('../../Controllers/UserControllers/createUsers');
const loginUser = require('../../Controllers/UserControllers/loginUser');
const router = express.Router();

router.post('/createUsers', createUsers);

router.post('/loginUser', loginUser);

module.exports = router;