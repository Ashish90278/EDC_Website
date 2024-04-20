import User from "../models/users.js";
import registerStudents from "../models/registration.js";
import Member from "../models/members.js";
import Event from "../models/events.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getRegisterStudents = async (req, res) => {
  try {
    const students = await registerStudents.find();
    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json("Internal error");
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();

    if (!members || members.length === 0) {
        return res.status(404).json({ message: "No members Found" });
      }
      return res.status(200).json(members);
  } catch (error) {
    console.log(error);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events || events.length === 0) {
        return res.status(404).json({ message: "No events Found" });
      }
    return res.status(200).json(events);

  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, getRegisterStudents, getAllMembers, getAllEvents };
