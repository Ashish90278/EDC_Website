import express from "express";
import { home, register, signup, login, user, contact, events, members } from "../controllers/auth-controllers.js"
import { validate } from "../middlewares/validate_middleware.js";
import { signupSchema } from "../validators/auth-validator.js";
import { authMiddleware } from "../middlewares/auth_middleware.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome")
// })

// ----------------- OR -------------------

router.route("/").get(home);
router.route("/register").post(register);
router.route("/contact").post(contact);
router.route("/signup").post(validate(signupSchema), signup);
router.route("/login").post(login);
router.route("/user").get(authMiddleware, user);
router.route("/event").get(events);
router.route("/member").get(members);



export default router;