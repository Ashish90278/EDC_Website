import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password:  {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            usedId: this._id.toString(),
            username: this.username,
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"1d",
        })        
    } catch (error) {
        console.error(error);
    }
};

const User = new mongoose.model("User", userSchema)

export default User;