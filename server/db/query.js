import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import Member from "../models/members.js"
// const mongoose = require('mongoose');
// const fs = require('fs');
// const path = require('path');

// Replace with your MongoDB Atlas connection string
const mongoURI = "mongodb+srv://ashishgupta980876115:Ashi0518@cluster0.1o7771g.mongodb.net/test";

async function main() {
    await mongoose.connect(mongoURI);

    // const filePath = path.join(__dirname, 'members.json');
    const membersData = JSON.parse(fs.readFileSync("./Members.json", 'utf8'));

    for (const memberData of membersData) {
        const member = new Member(memberData);
        await member.save();
        console.log(`Saved member: ${member.name}`);
    }

    console.log('All members have been saved.');
    mongoose.connection.close();
}

main().catch(err => {
    console.error('Error connecting to MongoDB', err);
    mongoose.connection.close();
});
