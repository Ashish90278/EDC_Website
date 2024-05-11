import express from "express";
import dotenv from "dotenv";
import authRoute from "./router/auth-router.js"
import adminRoute from "./router/admin-router.js"
import connectDb from "./db/db.js";
import cors from "cors";



dotenv.config({
    path:"./env"
})

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);


connectDb()
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server is running ${PORT}`)
    })
})
.catch((err) => {
    console.log("server connection error");
})
 