import express from "express";
import {
  getAllUsers,
  getRegisterStudents,
  getAllMembers,
  getAllEvents
} from "../controllers/admin-controllers.js";

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/registrations").get(getRegisterStudents);
router.route("/members").get(getAllMembers);
router.route("/events").get(getAllEvents);

export default router;
