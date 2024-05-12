import User from "../models/users.js";
import registerStudents from "../models/registration.js";
import Member from "../models/members.js";
import Event from "../models/events.js";
import Contact from "../models/contacts.js";

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

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
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

const deleteRegistration = async (req, res) => {
  try {
    const id = req.params.id;
    await registerStudents.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Registration Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await registerStudents.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
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

const addMember = async (req, res) => {
  try {
    const { name, year, post, department, image, linkedIn, instagram, x } =
      req.body;
    await Member.create({
      name,
      year,
      post,
      department,
      image,
      linkedIn,
      instagram,
      x,
    });
    return res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};

const deleteMember = async (req, res) => {
  try {
    const id = req.params.id;
    await Member.deleteOne({ _id: id });
    return res.status(200).json({ message: "Member Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};


const updateMember = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await Member.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
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

const addEvent = async (req, res) => {
  try {
    const { eventName, description, date, time, venue } = req.body;
    await Event.create({ eventName, description, date, time, venue });
    return res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    await Event.deleteOne({ _id: id });
    return res.status(200).json({ message: "Event Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await Event.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (req, res) => {
  try {
    const { username, email, subject, message } = req.body;
    await Contact.create({ username, email, subject, message });
    return res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await Contact.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

export {
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
  updateContact,
  addContact,
  deleteContact
};
