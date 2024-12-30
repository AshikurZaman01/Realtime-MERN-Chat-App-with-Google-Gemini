const express = require('express');
const projectCreate = require('../../Controllers/ProjectControllers/projectCreate');
const verifiedAuthUser = require('../../Controllers/Auth/auth.Middleware');
const router = express.Router();

router.post('/projectCreate', verifiedAuthUser, projectCreate);

module.exports = router;