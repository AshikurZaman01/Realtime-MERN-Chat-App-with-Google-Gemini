const express = require('express');
const createProject = require('../../Controllers/ProjectControllers/createProject');
const router = express.Router();

router.post('/createProject', createProject);

module.exports = router;