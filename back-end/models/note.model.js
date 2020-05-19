const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    username: String,
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;