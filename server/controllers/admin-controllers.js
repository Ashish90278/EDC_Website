import User from "../models/users.js"
import registerStudents from "../models/registration.js"

const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({}, {password : 0});
        if(!users || users.length === 0){
            return res.status(404).json({message: "No users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
}
const getRegisterStudents = async(req, res) => {
    try {
        const students = await registerStudents.find();
        if(!students || students.length === 0){
            return res.status(404).json({message: "No users Found"});
        }
        return res.status(200).json(students);
    } catch (error) {
        return res.status(500).json("Internal error");
    }
};



export {getAllUsers, getRegisterStudents};