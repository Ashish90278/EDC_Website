import express from "express";
import { home, register, signup, login, user } from "../controllers/auth-controllers.js"
import { validate } from "../middlewares/validate_middleware.js";
import { signupSchema } from "../validators/auth-validator.js";
const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome")
// })

// ----------------- OR -------------------

router.route("/").get(home);
router.route("/register").post(register);
router.route("/signup").post(validate(signupSchema), signup);
router.route("/login").post(login);
router.route("/user").get(user);



export default router;