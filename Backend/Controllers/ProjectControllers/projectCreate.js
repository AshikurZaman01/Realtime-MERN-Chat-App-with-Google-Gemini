const createProjectMiddleware = require("../../MiddleWare/Projects/createProject.middleWare");
const ProjectModel = require("../../Models/projectModel/project.model");
const UserModel = require("../../Models/userModels/user.Model");

const projectCreate = async (req, res) => {
    try {

        const { name } = req.body;
        if (!name || typeof name !== 'string' || name.trim() === "") {
            return res.status(400).json({ success: false, message: "Invalid project name." });
        }

        const isNameUsed = await ProjectModel.find({ name: name });
        if (isNameUsed.length > 0) {
            return res.status(400).json({ succes: false, message: "Project name already used." });
        }

        const loggedInUser = await UserModel.find({ email: req.user.email });
        if (!loggedInUser) {
            return res.status(404).json({ success: false, message: "Logged-in user not found." });
        }
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
        console.error("Error creating project:", error.message);
        res.status(500).json({ success: false, message: "Project Create Failed.", Error: error.message });
    }
};
module.exports = projectCreate;