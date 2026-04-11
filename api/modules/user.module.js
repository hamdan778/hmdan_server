const { Schema, model } = require("mongoose");

const USER_SCHEMA = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        required: [true, "Username is required"],
        unique: true, // Prevents duplicate usernames
        lowercase: true, // Consistency for login
        trim: true,
        minLength: [3, "Username must be at least 3 characters"]
    },
    pass: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"]
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const USER_MODEL = model("user", USER_SCHEMA);
module.exports = USER_MODEL;