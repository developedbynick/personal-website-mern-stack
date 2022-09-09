const mongoose = require('mongoose');
const validator = require('validator').default

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"],
    },
    email: {
        type: String,
        required: [true, "A user must have an email"],
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email"
        },
        unique: true,
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'super-admin'],
            message: "Roles must be admin or super-admin"
        }
    },
    password: {
        type: String,
        required: [true, "A user must have a password"],
        minlength: [8, "A user's password must contain at least 8 characters"],
        maxlength: [62, "A user's password must be less than 62 characters"]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);