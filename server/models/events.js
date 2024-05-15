import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    imageLink: {
        type: String,
        require: true
    },
    redirectLink: {
        type: String,
        require: true
    },
    redirectButtonName: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    venue:  {
        type: String,
        require: true
    }
})

const Event = new mongoose.model("Event", eventSchema)

export default Event;