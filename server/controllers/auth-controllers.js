import express from "express";
import User from "../models/users.js";
import Registration from "../models/registration.js";
import bcrypt from "bcryptjs";

const home = async (req, res) => {
  try {
    res.status(200).send("home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, branch, year, admissionNo } = req.body;
    const duplicateRegistration = await Registration.findOne({
      admissionNo,
    });
    if (duplicateRegistration) {
      return res.status(400).json({ msg: "You already register" });
    }
    await Registration.create({ username, email, branch, year, admissionNo });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const signup = async (req, res) => {
  try {
    // Getting userData from POST request
    const { username, email, phone, password } = req.body;

    // Check user Exist or Not
    const usernameExist = await User.findOne({ username });
    const emailExist = await User.findOne({ email });

    if (usernameExist || emailExist) {
      return res.status(400).json({
        msg: "User Already Exist",
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Store New user in DB
    const userCreated = await User.create({ username, email, phone, password: hashPassword });
    res.status(201).json({ 
        message: "Registration Successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString()
    });

  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const login = async (req, res) => {
  try {
    const {username, password} = req.body;

    const userExist = await User.findOne({username});

    if(!userExist){
        return res.status(400).json({"msg": "Invalid Credentials"})
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if(isPasswordValid){
        res.status(200).json({ 
            message: "Login Successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString()
        });
    }else{
        res.status(401).json({msg: "Invalid Username or password"})
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const user = async(req, res) => {
  try {
    // const userData = req.user;
    // console.log(userData);
    res.status(200).json({message: "Hi User"});
    
  } catch (error) {
    console.log("Error from user route");
  }
}
export { home, register, login, signup, user };
