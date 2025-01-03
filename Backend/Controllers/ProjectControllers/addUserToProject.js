const ProjectModel = require("../../Models/projectModel/project.model");
const UserModel = require("../../Models/userModels/user.Model");

const addUserToProject = async (req, res) => {
    try {
        const { projectId, users } = req.body;

        // Validate request data
        if (!projectId || !Array.isArray(users) || users.length === 0) {
            return res.status(400).json({ success: false, message: "Invalid data. Provide a projectId and an array of user IDs." });
        }

        const loggedInUser = await UserModel.findOne({ email: req.user.email });
        if (!loggedInUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const project = await ProjectModel.findById(projectId);
        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found." });
        }

        

        const existingUsers = project.users || [];
        const alreadyAddedUsers = users.filter(user => existingUsers.includes(user));
        

        // Fetch the names of the already added users
        const alreadyAddedUserNames = await UserModel.find({
            _id: { $in: alreadyAddedUsers }
        }).select('name');

        // Create an array of user names
        const addedUserNames = alreadyAddedUserNames.map(user => user.name);

        if (addedUserNames.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Users with names [${addedUserNames.join(", ")}] are already added to the project.`,
            });
        }

        // Update the project by adding users to the `users` array, avoiding duplicates
        const updatedProject = await ProjectModel.findOneAndUpdate(
            { _id: projectId },
            {
                $addToSet: {
                    users: { $each: users },
                },
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Users successfully added to the project.",
            data: updatedProject,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while adding users to the project." , Error:error.message });
    }
}

module.exports = addUserToProject;
