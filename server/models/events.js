import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        require: true
    },
    description: {
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