const UserModel = require("../../Models/userModels/user.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        // Find user with email
        const user = await UserModel.findOne({ email: email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect Password. Try Again." });
        }

        // Generate JWT token
        const tokenJWT = await user.generateJWT();

        // Set cookie
        res.cookie('token', tokenJWT, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),  // 10 days
        });

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token: tokenJWT,
            user: {
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Login Failed", error: error.message });
    }
};

module.exports = loginUser;
