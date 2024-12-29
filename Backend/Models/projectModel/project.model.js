const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

})

const ProjectModel = mongoose.model('Project', projectSchema);
module.exports = ProjectModel;