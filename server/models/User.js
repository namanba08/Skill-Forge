const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    accounType: {
        type: String,
        enum: ["Admin", "User", "Instructor"],
        required: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses",
        },
    ],
    image: {
        type: String,
        required: true,
    },
    courseProgress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseProgress",
    },
});


module.exports = mongoose.model("User",userSchema);