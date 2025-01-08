const express = require('express');
const projectCreate = require('../../Controllers/ProjectControllers/projectCreate');
const verifiedAuthUser = require('../../Controllers/Auth/auth.Middleware');
const getAllProjects = require('../../Controllers/ProjectControllers/getAllProjects');
const addUserToProject = require('../../Controllers/ProjectControllers/addUserToProject');
const getProjectById = require('../../Controllers/ProjectControllers/getProjectById');
const router = express.Router();

router.post('/projectCreate', verifiedAuthUser, projectCreate);

router.get('/getAllProjects', verifiedAuthUser, getAllProjects);

router.put('/addUserToProject', verifiedAuthUser, addUserToProject);


router.get('/getProject/:projectId', verifiedAuthUser, getProjectById);




module.exports = router;