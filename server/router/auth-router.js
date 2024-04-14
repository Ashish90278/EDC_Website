import express from "express";
import { home, register, signup, login } from "../controllers/auth-controllers.js"

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome")
// })

// ----------------- OR -------------------

router.route("/").get(home);
router.route("/register").post(register);
router.route("/signup").post(signup);
router.route("/login").post(login);



export default router;