const ProjectModel = require("../../Models/projectModel/project.model");
const UserModel = require("../../Models/userModels/user.Model");

const getAllProjects = async (req, res) => {
    try {

        const loggedInuser = await UserModel.findOne({ email: req.user.email });
        if (!loggedInuser) {
            return res.status(404).json({ success: false, message: "User not found. Please Login First." });
        }

        const userId = loggedInuser._id;
        if (!userId) {
            return res.status(404).json({ success: false, message: "User not found. Please Login First." });
        }

        const allProjects = await ProjectModel.find({
            users: { $in: [userId] }
        }).sort({ createdAt: -1 });

        res.status(200).json({ success: true, message: "All Projects", data: allProjects });

    } catch (error) {
        console.error("Error retrieving projects:", error);

        res.status(500).json({
            success: false,
            message: "An error occurred while fetching projects.",
            Error: error.message
        });
    }
}
module.exports = getAllProjects;