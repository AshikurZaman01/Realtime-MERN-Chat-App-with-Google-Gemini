const { validationResult } = require("express-validator");
const UserModel = require("../../Models/userModels/user.Model");


const createUsers = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashPassword = await UserModel.hashPassword(password);

        const newUser = new UserModel({
            name,
            email,
            password: hashPassword
        })

        await newUser.save();

        const tokenJWT = await newUser.generateJWT();

        res.status(201).json({
            success: true, message: 'User created successfully',
            user: {
                name: newUser.name,
                email: newUser.email
            },
            Token: tokenJWT
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Create User Failed.', error: error.message });
    }
}

module.exports = createUsers;