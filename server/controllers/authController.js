const passport = require('passport');
const User = require('../models/UserSchema');

exports.authRegister = (req, res, next) => {
  console.log("req.body: ", req.body);
  User.register({username: req.body.username}, req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        res.status(400).json({ message: 'Failed to register user.' });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.status(200).json({ message: 'User registered successfully.', userId: req.user._id });
        });
      }
    });
  };

exports.authLogin = (req,res) =>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err){
        if (err) {
            res.status(400).json({ message: 'Failed to login user.' });
        } else {
            passport.authenticate("local") (req, res, function(){
                
                res.status(200).json({ message: 'User login successfully.',userId: req.user._id });
            });
        }
    });
};