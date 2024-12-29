const ProjectModel = require("../../Models/projectModel/project.model");

const createProjectMiddleware = async ({ name, userId }) => {

    if (!name) {
        throw new Error('Project name is required');
    }

    if (!userId) {
        throw new Error('User Id is required');
    }

    const project = await ProjectModel.create({
        name,
        users: [userId]
    })

    return project;
}

module.exports = createProjectMiddleware;