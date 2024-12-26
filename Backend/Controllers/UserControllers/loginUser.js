const UserModel = require("../../Models/userModels/user.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Please provide email and password" });
        }

        const user = await UserModel.findOne({ email: email }).select("+password");
        if (!user) {
            res.status(400).json({ message: "User not found" })
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(400).json({ message: "Incorrect Password. Try Again." })
        }

        const tokenJWT = await user.generateJWT();

        res.status(200).json({
            success: true, message: "Login Successful", token: tokenJWT,
            user: {
                name: user.name,
                email: user.email,
            }
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Login Failer", error: error.message })
    }
}
module.exports = loginUser;