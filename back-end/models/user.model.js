const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Note = require("./note.model");
// const noteSchema = new Schema({
//     username: String,
//     title: String,
//     content: String
// });

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: String,
    notes: [Note.schema]
},
 {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;