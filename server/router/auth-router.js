import express from "express";
import { home, register, signup, login, user, contact, events, members } from "../controllers/auth-controllers.js"
import { validate } from "../middlewares/validate_middleware.js";
import { signupSchema, loginSchema, registerSchema, contactSchema } from "../validators/auth-validator.js";
import { authMiddleware } from "../middlewares/auth_middleware.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome")
// })

// ----------------- OR -------------------

router.route("/").get(home);
router.route("/signup").post(validate(signupSchema), signup);
router.route("/login").post(validate(loginSchema), login);
router.route("/register").post(validate(registerSchema), register);
router.route("/contact").post(validate(contactSchema), contact);
router.route("/user").get(authMiddleware, user);
router.route("/event").get(events);
router.route("/member").get(members);



export default router;