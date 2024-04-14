import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    branch: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    admissionNo:  {
        type: String,
        require: true
    }
})

const Registration = new mongoose.model("Registration", registrationSchema)

export default Registration;