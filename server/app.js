const dotenv = require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const User = require('./models/UserSchema');

const app = express();
app.use(express.json());
app.use(cors());
const toDoRouter = require('./routes/toDoRouter');
const UserRouter = require('./routes/UserRouter');

app.use(session({
  secret: "aezakmi",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(process.env.DB_CONNECT);
  console.log('DB connected');
}





passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', toDoRouter, UserRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server started");
  });
