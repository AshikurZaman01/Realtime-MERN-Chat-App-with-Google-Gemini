const express = require('express');
const createUsers = require('../../Controllers/UserControllers/createUsers');
const loginUser = require('../../Controllers/UserControllers/loginUser');
const userProfile = require('../../Controllers/UserControllers/userProfile');
const verifiedAuthUser = require('../../Controllers/Auth/auth.Middleware');
const userLogout = require('../../Controllers/UserControllers/userLogout');
const allUsers = require('../../Controllers/UserControllers/allUsers');
const router = express.Router();


router.post('/createUsers', createUsers);

router.post('/loginUser', loginUser);

router.get('/userProfile', verifiedAuthUser, userProfile);

router.get('/logout', verifiedAuthUser, userLogout);


router.get('/allUsers', verifiedAuthUser, allUsers);

module.exports = router;