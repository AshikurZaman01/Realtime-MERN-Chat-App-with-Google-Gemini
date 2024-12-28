const { validationResult } = require("express-validator");
const UserModel = require("../../Models/userModels/user.Model");

const createUsers = async (req, res) => {
   
    // Validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;

        // Check for missing fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashPassword = await UserModel.hashPassword(password);

        // Create a new user
        const newUser = new UserModel({
            name,
            email,
            password: hashPassword,
        });

        await newUser.save();

        // Generate JWT token
        const tokenJWT = await newUser.generateJWT();

        // Set the JWT in a cookie
        res.cookie('token', tokenJWT, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", 
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10), // Expires in 10 days
        });

        // Respond with success
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                name: newUser.name,
                email: newUser.email,
            },
            token: tokenJWT,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Create User Failed.',
            error: error.message,
        });
    }
};

module.exports = createUsers;
