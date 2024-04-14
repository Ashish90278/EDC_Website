import express from "express";
import {
  getAllUsers,
  getRegisterStudents,
} from "../controllers/admin-controllers.js";

const router = express.Router();

router.route("/users")e.get(getAllUsers);
router.route("/registrations").get(getRegisterStudents);

export default router;
