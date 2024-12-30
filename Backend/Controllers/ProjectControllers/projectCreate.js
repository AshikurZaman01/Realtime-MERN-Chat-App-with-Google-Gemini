const createProjectMiddleware = require("../../MiddleWare/Projects/createProject.middleWare");
const ProjectModel = require("../../Models/projectModel/project.model");
const UserModel = require("../../Models/userModels/user.Model");

const projectCreate = async (req, res) => {
    try {

        const { name } = req.body;

        const isNameUsed = await ProjectModel.find({ name: name });

        if (isNameUsed.length > 0) {
            return res.status(400).json({ message: "Project name already used." });
        }

        const loggedInUser = await UserModel.find({ email: req.user.email });
        const userId = loggedInUser[0]._id;

        const newProjects = await createProjectMiddleware({
            name,
            userId
        })

        res.status(200).json({
            success: true,
            message: "Project created successfully",
            data: newProjects
        })

    } catch (error) {

    }
};
module.exports = projectCreate;