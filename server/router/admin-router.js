import express from "express";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getRegisterStudents,
  updateRegistration,
  deleteRegistration,
  getAllMembers,
  addMember,
  updateMember,
  deleteMember,
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getAllContacts,
  updateContact,
  deleteContact
} from "../controllers/admin-controllers.js";
import { validate } from "../middlewares/validate_middleware.js";
import { membersSchema } from "../validators/admin-validator.js";
import { authMiddleware } from "../middlewares/auth_middleware.js";
import { adminMiddleware } from "../middlewares/admin_middleware.js";


const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUser);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUser);
router.route("/registrations").get(authMiddleware, adminMiddleware, getRegisterStudents);
router.route("/registrations/delete/:id").delete(authMiddleware, adminMiddleware, deleteRegistration);
router.route("/registrations/update/:id").patch(authMiddleware, adminMiddleware, updateRegistration);
router.route("/members").get(authMiddleware, adminMiddleware, getAllMembers);
router.route("/members/add").post(validate(membersSchema), authMiddleware, adminMiddleware, addMember);
router.route("/members/delete/:id").delete(authMiddleware, adminMiddleware, deleteMember);
router.route("/members/update/:id").patch(authMiddleware, adminMiddleware, updateMember);
router.route("/events").get(authMiddleware, adminMiddleware, getAllEvents);
router.route("/events/add").post(authMiddleware, adminMiddleware, addEvent);
router.route("/events/delete/:id").delete(authMiddleware, adminMiddleware, deleteEvent);
router.route("/events/update/:id").patch(authMiddleware, adminMiddleware, updateEvent);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContact);
router.route("/contacts/update/:id").patch(authMiddleware, adminMiddleware, updateContact);

export default router;
