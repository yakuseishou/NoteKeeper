require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB Database connection established Successfully");
});

const userRouter = require('./routes/user');
const noteRouter = require('./routes/note');

app.use('/user', userRouter);
app.use('/note', noteRouter);


app.listen(port, () => {
    console.log("Server started at port");
});
