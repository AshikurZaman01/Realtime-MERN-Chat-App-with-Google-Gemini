const UserModel = require("../../Models/userModels/user.Model");

const allUsers = async (req, res) => {

    try {

        const loggedInuser = await UserModel.findOne({
            email: req.user.email
        })

        const allUsers = await UserModel.find({ _id: { $ne: loggedInuser._id } })
        return res.status(200).json({ success: true, message: "All Users Fetched Successfully.", data: allUsers })

    } catch (error) {
        return res.status(500).json({ success: false, message: "All Users Fetching Failed.", error: error.message })
    }

}
module.exports = allUsers;