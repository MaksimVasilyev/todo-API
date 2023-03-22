require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require('../models/UserSchema');

router.post('/api/register', (req, res, next) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        res.status(400).json({ message: 'Failed to register user.' });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.status(200).json({ message: 'User registered successfully.' });
        });
      }
    });
  });

  app.post('/api/login', function(req,res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err){
        if (err) {
            res.status(400).json({ message: 'Failed to login user.' });
        } else {
            passport.authenticate("local") (req, res, function(){
                // res.redirect("/secrets");
                res.status(200).json({ message: 'User registered successfully.' });
            });
        }
    });
})
    module.exports = router;