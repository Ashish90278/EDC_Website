import User from "../models/users.js";
import registerStudents from "../models/registration.js";
import Member from "../models/members.js";
import Event from "../models/events.js";
import Contact from "../models/contacts.js";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }
    return res.status(200).json(users);
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message,
    };
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message,
    };
    next(error);
  }
};

const updateUser = async (req, res, next) => {
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
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const getRegisterStudents = async (req, res, next) => {
  try {
    const students = await registerStudents.find();
    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }
    return res.status(200).json(students);
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const deleteRegistration = async (req, res, next) => {
  try {
    const id = req.params.id;
    await registerStudents.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Registration Deleted Successfully" });
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const updateRegistration = async (req, res, next) => {
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
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const getAllMembers = async (req, res, next) => {
  try {
    const members = await Member.find();

    if (!members || members.length === 0) {
      return res.status(404).json({ message: "No members Found" });
    }
    return res.status(200).json(members);
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const addMember = async (req, res, next) => {
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
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const deleteMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Member.deleteOne({ _id: id });
    return res.status(200).json({ message: "Member Deleted Successfully" });
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const updateMember = async (req, res, next) => {
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
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find();

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events Found" });
    }
    return res.status(200).json(events);
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const addEvent = async (req, res, next) => {
  try {
    const {
      description,
      imageLink,
      redirectLink,
      redirectButtonName,
      date,
      time,
      venue,
    } = req.body;

    await Event.create({
      description,
      imageLink,
      redirectLink,
      redirectButtonName,
      date,
      time,
      venue,
    });
    return res.status(200).json(req.body);
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Event.deleteOne({ _id: id });
    return res.status(200).json({ message: "Event Deleted Successfully" });
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const updateEvent = async (req, res, next) => {
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
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const updateContact = async (req, res, next) => {
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
  } catch (err) {
    const status = 500;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
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
  deleteContact,
};
