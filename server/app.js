const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/UserSchema');



const app = express();
app.use(express.json());
app.use(cors());

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const UserRouter = require('./routes/UserRouter');
const authRouter = require('./routes/authRouter');
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));cd

app.use(passport.initialize());
app.use(passport.session());


dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(process.env.DB_CONNECT);
  console.log('DB connected');
}





passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.CALL_BACK_URL
},
function(accessToken, refreshToken, profile, cb) {
  User.findOne({ googleId: profile.id }).then((foundUser) => {
      if (foundUser) {
        return foundUser;
      } else {
        const newUser = new User({
          googleId: profile.id
        });
        return newUser.save();
      }
    }).then((user) => {
      return cb(null, user);
    }).catch((err) => {
      return cb(err);
    });
}
));


app.use('/', authRouter, UserRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find${req.originalUrl} on this server!`, 404));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server started");
  });
