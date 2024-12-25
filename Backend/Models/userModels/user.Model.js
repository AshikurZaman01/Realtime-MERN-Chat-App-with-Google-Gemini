const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: [3, 'Name must be at least 3 characters long'],
        maxLength: [50, 'Name must be at most 50 characters long']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [5, 'Email must be at least 5 characters long'],
        maxLength: [100, 'Email must be at most 100 characters long'],
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    }

})

userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

userSchema.statics.isValidPassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = async () => {
    return await jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '10d' });
}

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;