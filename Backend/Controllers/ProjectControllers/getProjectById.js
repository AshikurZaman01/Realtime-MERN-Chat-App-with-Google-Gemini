const ProjectModel = require("../../Models/projectModel/project.model");

const getProjectById = async (req, res) => {

    try {

        const { projectId } = req.params;

        if (!projectId) {
            return res.status(400).json({ success: false, message: "Project Id is required" })
        }

        if (!mongoose.Type.ObjectId.isValid(projectId)) {
            return res.status(400).json({ success: false, message: "Invalid Project Id" })
        }

        const project = await ProjectModel.findOne({
            _id: projectId
        }).populate('Users');

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" })
        }

        return res.status(200).json({ success: true, message: "Project found", project: project })


    } catch (error) {

    }

}
module.exports = getProjectById;