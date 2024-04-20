import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  post: {
    type: String,
    require: true,
  },
  linkedIn: {
    type: String,
    require: true,
  },
  twitter: {
    type: String,
    require: true,
  },
  instagram: {
    type: String,
    require: true,
  },
});

const Member = new mongoose.model("Member", memberSchema);

export default Member;
