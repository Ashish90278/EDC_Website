import express from "express";
import {
  getAllUsers,
  getRegisterStudents,
  getAllMembers,
  getAllEvents,
  getAllContacts,
  deleteUser,
  deleteRegistration,
  addMember,
  deleteMember,
  addEvent,
  deleteEvent,
  updateUser,
  updateRegistration,
  updateMember,
  updateEvent,
  addContact,
  deleteContact,
  updateContact
} from "../controllers/admin-controllers.js";

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/users/delete/:id").delete(deleteUser);
router.route("/users/update/:id").patch(updateUser);
router.route("/registrations").get(getRegisterStudents);
router.route("/registrations/delete/:id").delete(deleteRegistration);
router.route("/registrations/update/:id").patch(updateRegistration);
router.route("/members").get(getAllMembers);
router.route("/members/add").post(addMember);
router.route("/members/delete/:id").delete(deleteMember);
router.route("/members/update/:id").patch(updateMember);
router.route("/events").get(getAllEvents);
router.route("/events/add").post(addEvent);
router.route("/events/delete/:id").delete(deleteEvent);
router.route("/events/update/:id").patch(updateEvent);
router.route("/contacts").get(getAllContacts);
router.route("/contacts/add").post(addContact);
router.route("/contacts/delete/:id").delete(deleteContact);
router.route("/contacts/update/:id").patch(updateContact);

export default router;
