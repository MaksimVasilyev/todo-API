const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

// const { Schema } = require('mongoose');
//const { Types: { Email } } = Schema;  
// const Email = require('mongoose').Schema.Types.Email;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    //  required: true
  },
  googleId: {
    type: String,
  },
  items: {
   type: [String],
    default: []
  }
});
UserSchema.plugin(passportLocalMongoose);

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);

module.exports = User;