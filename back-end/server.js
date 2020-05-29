require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");

const app = express();
/* Server Port */
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure express-session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
 }));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session()); 

// Configure passport-local to use account model for authentication
const User = require('./models/user.model');
passport.use(User.createStrategy());
 
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


 /*connecting mongoDb */
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
