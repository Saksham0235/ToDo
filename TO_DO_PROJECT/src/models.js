const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
// In this type we will enter the data and it will show us in the same format
const todoSchema = new mongoose.Schema({     
    taskName : String,
    description : String,
    isCompleted : Boolean
})

const todo = mongoose.model("todo",todoSchema);
module.exports = {todo}