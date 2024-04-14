import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"./env"
})

const URI = process.env.DB_URL;
// const URI = "mongodb+srv://ashishgupta980876115:Ashi0518@cluster0.1o7771g.mongodb.net/";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful")
    } catch (error) {
        console.error("Database connection fail");
        process.exit(0);
    }
}

export default connectDb;