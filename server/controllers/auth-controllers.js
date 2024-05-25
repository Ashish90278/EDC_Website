import express from "express";
import User from "../models/users.js";
import Registration from "../models/registration.js";
import Member from "../models/members.js";
import Event from "../models/events.js";
import Contact from "../models/contacts.js";
import bcrypt from "bcryptjs";

const home = async (req, res) => {
  try {
    res.status(200).send("home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, branch, year, admissionNo } = req.body;
    const duplicateRegistration = await Registration.findOne({
      admissionNo,
    });

    if (duplicateRegistration) {
      return res.status(400).json({ message: "You already register" });
    }

    await Registration.create({ username, email, branch, year, admissionNo });

    res.status(200).json(req.body);
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
const contact = async (req, res, next) => {
  try {
    const { username, email, subject, message } = req.body;
    await Contact.create({ username, email, subject, message });

    res.status(200).json(req.body);
  } catch (err) {
    const status = 400;
    const message = err.message;
    const error = {
      status,
      message
    };
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
    // Getting userData from POST request
    const { username, email, phone, password } = req.body;

    // Check user Exist or Not
    const usernameExist = await User.findOne({ username });
    const emailExist = await User.findOne({ email });

    if (usernameExist || emailExist) {
      return res.status(400).json({
        message: "User Already Exist",
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Store New user in DB
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });
    res.status(201).json({
      message: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
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

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const userExist = await User.findOne({ username });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Username or password" });
    }
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

const user = async (req, res, next) => {
  try {
    const userData = req.user;
    return res.status(200).json(userData);
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

const events = async (req, res, next) => {
  try {
    const response = await Event.find();
    if(!response){
        res.status(404).json({ message: "No Event Found" });
    }
    res.status(200).json(response);
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

const members = async (req, res, next) => {
  try {
    const response = await Member.find();
    if(!response){
      res.status(404).json({ message: "No Member Found" });
    }
    res.status(200).json({response});
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




export { home, register, contact, login, signup, user, events, members };
