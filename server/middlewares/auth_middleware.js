import jwt from "jsonwebtoken";
import User from "../models/users.js";

export const authMiddleware = async(req, res, next) => {
    const token = req.header("Authorization");
    
    if(!token){
        return res.status(401).send("hhhh");
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({ email: isVerified.email}, {password:0});
        console.log(isVerified);
        
        req.user = userData;
        req.token = token;
        req.userID = userData._id

        next();
    } catch (err) {
        const status = 401;
        const message = err.message;
        const error = {
            status,
            message
        };
        next(error);
    }
    
};